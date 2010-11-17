// $Id: ckeditor.utils.js,v 1.1.2.11 2010/03/06 11:04:38 mephir Exp $
Drupal.ckeditor = (typeof(CKEDITOR) != 'undefined');

// this object will store teaser information
Drupal.ckeditorTeaser = {
  lookup: {},
  lookupSetup: false,
  cache: {}
};

Drupal.ckeditorToggle = function(textarea_id, TextTextarea, TextRTE, xss_check){
  if (!CKEDITOR.env.isCompatible) {
    return;
  }
  if (typeof(CKEDITOR.instances) != 'undefined' && typeof(CKEDITOR.instances[textarea_id]) != 'undefined') {
    Drupal.ckeditorOff(textarea_id);
    $('#switch_' + textarea_id).text(TextRTE);
  }
  else {
    Drupal.ckeditorOn(textarea_id);
    $('#switch_' + textarea_id).text(TextTextarea);
  }
};

/**
 * CKEditor starting function
 *
 * @param string textarea_id
 */
Drupal.ckeditorOn = function(textarea_id) {
  if ((typeof(Drupal.settings.ckeditor.load_timeout) == 'undefined') && (typeof(CKEDITOR.instances[textarea_id]) != 'undefined')) {
    return;
  }
  if (typeof(Drupal.settings.ckeditor.settings[textarea_id]) == 'undefined') {
    return;
  }
  if (!CKEDITOR.env.isCompatible) {
    return;
  }

  if (teaser = Drupal.ckeditorTeaserInfo(textarea_id)) {
    var ch_checked = teaser.checkbox.attr('checked');
    var tv = teaser.textarea.val();
    if (tv && tv.length > 0) {
      $("#" + textarea_id).val(tv + '\n<!--break-->\n' + $("#" + textarea_id).val());
      teaser.textarea.val('');
    }

    // [#653498]
    if (teaser.button.attr('value') != Drupal.t('Split summary at cursor')) {
      try {
        teaser.button.click();
      } 
      catch (e) {
        teaser.button.val(Drupal.t('Split summary at cursor'));
      }
    }

    teaser.buttonContainer.hide();
    teaser.textareaContainer.hide();
    teaser.checkboxContainer.show();
    teaser.checkbox.attr('checked', ch_checked);
  }

  if (($("#" + textarea_id).val().length > 0) && ($("#" + textarea_id).attr('class').indexOf("filterxss1") != -1 || $("#" + textarea_id).attr('class').indexOf("filterxss2") != -1)) {
    $.post(Drupal.settings.basePath + 'index.php?q=ckeditor/xss', {
      text: $('#' + textarea_id).val(),
      'filters[]': Drupal.settings.ckeditor.settings[textarea_id].filters
    }, function(text){
      $("#" + textarea_id).val(text);
    });
  }

  $("#" + textarea_id).next(".grippie").css("display", "none");
  $("#" + textarea_id).addClass("ckeditor-processed");

  Drupal.settings.ckeditor.settings[textarea_id]['on'] = 
  {
    configLoaded  : function(ev)
    {
      ev.editor.addCss(ev.editor.config.extraCss);
    },
    instanceReady : function(ev)
    {
      var body = $(ev.editor.document.$.body);
      if (typeof(Drupal.settings.ckeditor.settings[textarea_id].custom_formatting) != 'undefined') {
        var dtd = CKEDITOR.dtd;
        for ( var e in CKEDITOR.tools.extend( {}, dtd.$block, dtd.$listItem, dtd.$tableContent ) ) {
          ev.editor.dataProcessor.writer.setRules( e, Drupal.settings.ckeditor.settings[textarea_id].custom_formatting);
		}
        ev.editor.dataProcessor.writer.setRules( 'pre',
        {
          indent: Drupal.settings.ckeditor.settings[textarea_id].output_pre_indent
        });
      }

      if (ev.editor.config.bodyClass)
        body.addClass(ev.editor.config.bodyClass);
      if (ev.editor.config.bodyId)
        body.attr('id', ev.editor.config.bodyId);
      if (typeof(Drupal.smileysAttach) != 'undefined')
        ev.editor.dataProcessor.writer.indentationChars = '    ';
    },
    focus : function(ev)
    {
      Drupal.ckeditorInstance = ev.editor;
    }
  };

  Drupal.ckeditorInstance = CKEDITOR.replace(textarea_id, Drupal.settings.ckeditor.settings[textarea_id]);
};

/**
 * CKEditor destroy function
 *
 * @param string textarea_id
 */
Drupal.ckeditorOff = function(textarea_id) {
  if (typeof(CKEDITOR.instances[textarea_id]) == 'undefined') {
    return;
  }
  if (!CKEDITOR.env.isCompatible) {
    return;
  }
  if (Drupal.ckeditorInstance && Drupal.ckeditorInstance.name == textarea_id)
    delete Drupal.ckeditorInstance;

  var data = CKEDITOR.instances[textarea_id].getData();
  CKEDITOR.instances[textarea_id].destroy();
  if (teaser = Drupal.ckeditorTeaserInfo(textarea_id)) {
    var brcode = /<!--break-->/;
    data = data.split(brcode);
    if (data.length > 1) {
      teaser.textareaContainer.show();
      teaser.textarea.attr('disabled', '');
      if (teaser.button.attr('value') != Drupal.t('Join summary')) {
        try {
          teaser.button.click();
        } 
        catch (e) {
          teaser.button.val(Drupal.t('Join summary'));
        }
      }
      teaser.textarea.val(data[0]);
      $("#" + textarea_id).val(data[1]);
    }
    else {
      $("#" + textarea_id).val(data[0]);
      teaser.textarea.attr('disabled', 'disabled');
      teaser.checkboxContainer.hide();
      if (teaser.button.attr('value') != Drupal.t('Split summary at cursor')) {
        try {
          teaser.button.click();
        } 
        catch (e) {
          teaser.button.val(Drupal.t('Split summary at cursor'));
        }
      }
    }
    teaser.buttonContainer.show();
  }

  $("#" + textarea_id).next(".grippie").css("display", "block");
  $("#" + textarea_id).removeClass("ckeditor-processed");
};

/**
 * CKEditor popup mode function
 */
function ckeditorOpenPopup(jsID, textareaID, width){
  popupUrl = Drupal.settings.ckeditor.module_path + '/includes/ckeditor.popup.html?var=' + jsID + '&el=' + textareaID;
  
  var percentPos = width.indexOf('%');
  if (percentPos != -1) {
    width = width.substr(0, percentPos);
    width = width / 100 * screen.width;
  }
  window.open(popupUrl, null, 'width=' + width + ',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=1,dependent=yes');
  return false;
};

/**
 * Returns true if CKEDITOR.version >= version
 */
Drupal.ckeditorCompareVersion = function (version){
  var ckver = CKEDITOR.version;
  ckver = ckver.match(/(([\d]\.)+[\d]+)/i);
  version = version.match(/((\d+\.)+[\d]+)/i);
  ckver = ckver[0].split('.');
  version = version[0].split('.');
  for (var x in ckver) {
    if (ckver[x]<version[x]) {
      return false;
    }
  }
  return true;
};

/**
 * This function retrieves information about a possible teaser field associated
 * with the mentioned field.
 *
 * @param taid
 *            string HTML id of the main text area
 */
Drupal.ckeditorTeaserInfo = function(taid) {
  // if the result is cached, return it
  if (Drupal.ckeditorTeaser.cache[taid]) {
    return Drupal.ckeditorTeaser.cache[taid];
  }
  
  // build a lookup table
  if (!Drupal.ckeditorTeaser.lookupSetup) {
    Drupal.ckeditorTeaser.lookupSetup = true;
    for (var x in Drupal.settings.teaser) {
      Drupal.ckeditorTeaser.lookup[Drupal.settings.teaser[x]] = x;
    }
  }
  
  // find the elements
  if (Drupal.ckeditorTeaser.lookup[taid]) {
    var obj;
    if (window.opener) {
      obj = {
        textarea: window.opener.$('#' + Drupal.ckeditorTeaser.lookup[taid]),
        checkbox: window.opener.$('#' + Drupal.settings.teaserCheckbox[Drupal.ckeditorTeaser.lookup[taid]])
      };
    } else {
      obj = {
        textarea: $('#' + Drupal.ckeditorTeaser.lookup[taid]),
        checkbox: $('#' + Drupal.settings.teaserCheckbox[Drupal.ckeditorTeaser.lookup[taid]])
      };
    }
    
    obj.textareaContainer = obj.textarea.parent();
    obj.checkboxContainer = obj.checkbox.parent();
    
    obj.button = $('input.teaser-button', obj.checkbox.parents('div.teaser-checkbox').get(0));
    obj.buttonContainer = obj.button.parent();
    
    Drupal.ckeditorTeaser.cache[taid] = obj;
  }
  else {
    Drupal.ckeditorTeaser.cache[taid] = null;
  }
  
  return Drupal.ckeditorTeaser.cache[taid];
};

Drupal.ckeditorInsertHtml = function(html) {
  if (!Drupal.ckeditorInstance)
    return false;

  if (Drupal.ckeditorInstance.mode == 'wysiwyg') {
    Drupal.ckeditorInstance.insertHtml(html);
    return true;
  }
  else {
    alert(Drupal.t('Content can be only inserted into CKEditor in WYSIWYG mode.'));
    return false;
  }
}

/**
 * IMCE support
 */
function ckeditor_fileUrl(file, win){
  var cfunc = win.location.href.split('&');

  for (var x in cfunc) {
    if (cfunc[x].match(/^CKEditorFuncNum=\d+$/)) {
      cfunc = cfunc[x].split('=');
      break;
    }
  }

  CKEDITOR.tools.callFunction(cfunc[1], file.url);
  win.close();
}

Drupal.ckeditorSubmitAjaxForm = function () {
  if (typeof(CKEDITOR.instances) != 'undefined' && typeof(CKEDITOR.instances['edit-body']) != 'undefined') {
    Drupal.ckeditorOff('edit-body');
  }
}

/**
 * Drupal behaviors
 */
Drupal.behaviors.ckeditor = function (context) {
  if ((typeof(CKEDITOR) == 'undefined') || !CKEDITOR.env.isCompatible) {
    return;
  }
  $('.ckeditor_links').show();
  // make sure the textarea behavior is run first, to get a correctly sized grippie
  // the textarea behavior requires the teaser behavior, so load that one as well
  if (Drupal.behaviors.teaser) {
    Drupal.behaviors.teaser(context);
  }
  if (Drupal.behaviors.textarea) {
    Drupal.behaviors.textarea(context);
  }

  if ($(context).attr('id') == 'modal-content') {
    if (CKEDITOR.instances['edit-body'] != 'undefined') {
      Drupal.ckeditorOff('edit-body');
    }
    $('input#edit-return', context).bind('mouseup', Drupal.ckeditorSubmitAjaxForm);
    $('.close').bind('mouseup', Drupal.ckeditorSubmitAjaxForm);
    CKEDITOR.on('dialogDefinition', function (ev) {
      var dialogDefinition = ev.data.definition;
      var _onShow = dialogDefinition.onShow;
      dialogDefinition.onShow = function () {
      	if ( _onShow ) {
      	  _onShow.apply( this );
      	}
      	$('body').unbind('keypress');
      }
    });
  }  

  $("textarea.ckeditor-mod:not(.ckeditor-processed)").each(function () {
    var ta_id=$(this).attr("id");
    if ((typeof(Drupal.settings.ckeditor.autostart) != 'undefined') && (typeof(Drupal.settings.ckeditor.autostart[ta_id]) != 'undefined')) {
      Drupal.ckeditorOn(ta_id);
    }
  });
};;
/* jQuery Carousel 0.9.5
Copyright 2008-2009 Thomas Lanciaux and Pierre Bertet.
This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/
(function(c){c.fn.carousel=function(j){var j=c.extend({direction:"horizontal",loop:false,dispItems:1,pagination:false,paginationPosition:"inside",nextBtn:'<a role="button">Next</a>',prevBtn:'<a role="button">Previous</a>',btnsPosition:"inside",nextBtnInsert:"appendTo",prevBtnInsert:"prependTo",nextBtnInsertFn:false,prevBtnInsertFn:false,autoSlide:false,autoSlideInterval:3000,delayAutoSlide:false,combinedClasses:false,effect:"slide",slideEasing:"swing",animSpeed:"normal",equalWidths:"true",verticalMargin:0,callback:function(){},useAddress:false,adressIdentifier:"carousel",tabLabel:function(k){return k},showEmptyItems:true},j);if(j.btnsPosition=="outside"){j.prevBtnInsert="insertBefore";j.nextBtnInsert="insertAfter"}j.delayAutoSlide=j.delayAutoSlide||j.autoSlideInterval;return this.each(function(){var k={$elts:{},params:j,launchOnLoad:[]};k.$elts.carousel=c(this).addClass("js");k.$elts.content=c(this).children().css({position:"absolute",top:0});k.$elts.wrap=k.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow:"hidden",position:"relative"});k.steps={first:0,count:k.$elts.content.children().length};k.steps.last=k.steps.count-1;if(c.isFunction(k.params.prevBtnInsertFn)){k.$elts.prevBtn=k.params.prevBtnInsertFn(k.$elts)}else{k.$elts.prevBtn=c(j.prevBtn)[j.prevBtnInsert](k.$elts.carousel)}if(c.isFunction(k.params.nextBtnInsertFn)){k.$elts.nextBtn=k.params.nextBtnInsertFn(k.$elts)}else{k.$elts.nextBtn=c(j.nextBtn)[j.nextBtnInsert](k.$elts.carousel)}k.$elts.nextBtn.addClass("carousel-control next carousel-next");k.$elts.prevBtn.addClass("carousel-control previous carousel-previous");a(k);if(k.params.pagination){i(k)}h(k);c(function(){var n=k.$elts.content.children();var m=0;n.each(function(){$item=c(this);$itemHeight=$item.outerHeight();if($itemHeight>m){m=$itemHeight}});if(k.params.verticalMargin>0){m=m+k.params.verticalMargin}n.height(m);var l=k.$elts.content.children(":first");k.itemWidth=l.outerWidth();if(j.direction=="vertical"){k.contentWidth=k.itemWidth}else{if(j.equalWidths){k.contentWidth=k.itemWidth*k.steps.count}else{k.contentWidth=(function(){var o=0;k.$elts.content.children().each(function(){o+=c(this).outerWidth()});return o})()}}k.$elts.content.width(k.contentWidth);k.itemHeight=m;if(j.direction=="vertical"){k.$elts.content.css({height:k.itemHeight*k.steps.count+"px"});k.$elts.content.parent().css({height:k.itemHeight*k.params.dispItems+"px"})}else{k.$elts.content.parent().css({height:k.itemHeight+"px"})}d(k);c.each(k.launchOnLoad,function(o,p){p()});if(k.params.autoSlide){window.setTimeout(function(){k.autoSlideInterval=window.setInterval(function(){b(k,e(k,"next"))},k.params.autoSlideInterval)},k.params.delayAutoSlide)}})})};function a(j){j.$elts.nextBtn.add(j.$elts.prevBtn).bind("enable",function(){var k=c(this).unbind("click").bind("click",function(){b(j,e(j,(k.is(".next")?"next":"prev")));g(j)}).removeClass("disabled");if(j.params.combinedClasses){k.removeClass("next-disabled previous-disabled")}}).bind("disable",function(){var k=c(this).unbind("click").addClass("disabled");if(j.params.combinedClasses){if(k.is(".next")){k.addClass("next-disabled")}else{if(k.is(".previous")){k.addClass("previous-disabled")}}}}).hover(function(){c(this).toggleClass("hover")})}function i(j){j.$elts.pagination=c('<div class="center-wrap"><div class="carousel-pagination"><p></p></div></div>')[((j.params.paginationPosition=="outside")?"insertAfter":"appendTo")](j.$elts.carousel).find("p");j.$elts.paginationBtns=c([]);j.$elts.content.find("li").each(function(k){if(k%j.params.dispItems==0){j.$elts.paginationBtns=j.$elts.paginationBtns.add(c('<a role="button"><span>'+j.params.tabLabel(j.$elts.paginationBtns.length+1)+"</span></a>").data("firstStep",k))}});j.$elts.paginationBtns.each(function(){c(this).appendTo(j.$elts.pagination)});j.$elts.paginationBtns.slice(0,1).addClass("active");j.launchOnLoad.push(function(){j.$elts.paginationBtns.click(function(k){b(j,c(this).data("firstStep"));g(j)})})}function h(j){if(j.params.useAddress&&c.isFunction(c.fn.address)){c.address.init(function(l){var k=c.address.pathNames();if(k[0]===j.params.adressIdentifier&&!!k[1]){b(j,k[1]-1)}else{c.address.value("/"+j.params.adressIdentifier+"/1")}}).change(function(l){var k=c.address.pathNames();if(k[0]===j.params.adressIdentifier&&!!k[1]){b(j,k[1]-1)}})}else{j.params.useAddress=false}}function b(j,k){j.params.callback(k);f(j,k);j.steps.first=k;d(j);if(j.params.useAddress){c.address.value("/"+j.params.adressIdentifier+"/"+(k+1))}}function e(k,j){if(j=="prev"){if(!k.params.showEmptyItems){if(k.steps.first==0){return((k.params.loop)?(k.steps.count-k.params.dispItems):false)}else{return Math.max(0,k.steps.first-k.params.dispItems)}}else{if((k.steps.first-k.params.dispItems)>=0){return k.steps.first-k.params.dispItems}else{return((k.params.loop)?(k.steps.count-k.params.dispItems):false)}}}else{if(j=="next"){if((k.steps.first+k.params.dispItems)<k.steps.count){if(!k.params.showEmptyItems){return Math.min(k.steps.first+k.params.dispItems,k.steps.count-k.params.dispItems)}else{return k.steps.first+k.params.dispItems}}else{return((k.params.loop)?0:false)}}}}function f(j,k){switch(j.params.effect){case"no":if(j.params.direction=="vertical"){j.$elts.content.css("top",-(j.itemHeight*k)+"px")}else{j.$elts.content.css("left",-(j.itemWidth*k)+"px")}break;case"fade":if(j.params.direction=="vertical"){j.$elts.content.hide().css("top",-(j.itemHeight*k)+"px").fadeIn(j.params.animSpeed)}else{j.$elts.content.hide().css("left",-(j.itemWidth*k)+"px").fadeIn(j.params.animSpeed)}break;default:if(j.params.direction=="vertical"){j.$elts.content.stop().animate({top:-(j.itemHeight*k)+"px"},j.params.animSpeed,j.params.slideEasing)}else{j.$elts.content.stop().animate({left:-(j.itemWidth*k)+"px"},j.params.animSpeed,j.params.slideEasing)}break}}function d(j){if(e(j,"prev")!==false){j.$elts.prevBtn.trigger("enable")}else{j.$elts.prevBtn.trigger("disable")}if(e(j,"next")!==false){j.$elts.nextBtn.trigger("enable")}else{j.$elts.nextBtn.trigger("disable")}if(j.params.pagination){j.$elts.paginationBtns.removeClass("active").filter(function(){return(c(this).data("firstStep")==j.steps.first)}).addClass("active")}}function g(j){if(!!j.autoSlideInterval){window.clearInterval(j.autoSlideInterval)}}})(jQuery);;
