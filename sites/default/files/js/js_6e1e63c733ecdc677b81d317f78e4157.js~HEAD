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
/*
 * 	loopedSlider 0.5.4 - jQuery plugin
 *	written by Nathan Searles	
 *	http://nathansearles.com/loopedslider/
 *
 *	Copyright (c) 2009 Nathan Searles (http://nathansearles.com/)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

/*
 *	markup example for $("#loopedSlider").loopedSlider();
 *
 *	<div id="loopedSlider">	
 *		<div class="container">
 *			<div class="slides">
 *				<div><img src="01.jpg" alt="" /></div>
 *				<div><img src="02.jpg" alt="" /></div>
 *				<div><img src="03.jpg" alt="" /></div>
 *				<div><img src="04.jpg" alt="" /></div>
 *			</div>
 *		</div>
 *		<a href="#" class="previous">previous</a>
 *		<a href="#" class="next">next</a>
 *		<ul class="pagination">
 *			<li><a href="#">1</a></li>
 *			<li><a href="#">2</a></li>
 *			<li><a href="#">3</a></li>
 *			<li><a href="#">4</a></li>
 *		</ul>	
 *	</div>
 *
*/

(function($) {
	$.fn.loopedSlider = function(options) {
		
	var defaults = {			
		container: '.container',
		slides: '.slides',
		pagination: '.pagination',
		containerClick: true, // Click container for next slide
		autoStart: 0, // Set to positive number for auto start and interval time
		restart: 0, // Set to positive number for restart and restart time
		slidespeed: 300, // Speed of slide animation
		fadespeed: 300, // Speed of fade animation
		autoHeight: false // Set to positive number for auto height and animation speed
	};
		
	this.each(function() {
		
		var obj = $(this);
		var o = $.extend(defaults, options);
		var pagination = $(o.pagination+' li a',obj);
		var m = 0;
		var t = 1;
		var s = $(o.slides,obj).children().size();
		var w = $(o.slides,obj).children().outerWidth();
		var p = 0;
		var u = false;
		var n = 0;
		var interval=0;
		var restart=0;
		
		$(o.slides,obj).css({width:(s*w)});
		
		$(o.slides,obj).children().each(function(){
			$(this).css({position:'absolute',left:p,display:'block'});
			p=p+w;
		});
		
		$(pagination,obj).each(function(){
			n=n+1;
			$(this).attr('rel',n);
			$(pagination.eq(0),obj).parent().addClass('active');
		});
		
		$(o.slides,obj).children(':eq('+(s-1)+')').css({position:'absolute',left:-w});
		
		if (s>3) {
			$(o.slides,obj).children(':eq('+(s-1)+')').css({position:'absolute',left:-w});
		}
		
		if(o.autoHeight){autoHeight(t);}
		
		$('.next',obj).click(function(){
			if(u===false) {
				animate('next',true);
				if(o.autoStart){
					if (o.restart) {autoStart();}
					else {clearInterval(sliderIntervalID);}
				}
			} return false;
		});
		
		$('.previous',obj).click(function(){
			if(u===false) {	
				animate('prev',true);
				if(o.autoStart){
					if (o.restart) {autoStart();}
					else {clearInterval(sliderIntervalID);}
				}
			} return false;
		});
		
		if (o.containerClick) {
			$(o.container ,obj).click(function(){
				if(u===false) {
					animate('next',true);
					if(o.autoStart){
						if (o.restart) {autoStart();}
						else {clearInterval(sliderIntervalID);}
					}
				} return false;
			});
		}
		
		$(pagination,obj).click(function(){
			if ($(this).parent().hasClass('active')) {return false;}
			else {
				t = $(this).attr('rel');
				$(pagination,obj).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
				animate('fade',t);
				if(o.autoStart){
					if (o.restart) {autoStart();}
					else {clearInterval(sliderIntervalID);}
				}
			} return false;
		});
	
		if (o.autoStart) {
			sliderIntervalID = setInterval(function(){
				if(u===false) {animate('next',true);}
			}, o.autoStart);
			function autoStart() {
				if (o.restart) {
				clearInterval(sliderIntervalID);
				clearInterval(interval);
				clearTimeout(restart);
					restart = setTimeout(function() {
						interval = setInterval(	function(){
							animate('next',true);
						},o.autoStart);
					},o.restart);
				} else {
					sliderIntervalID = setInterval(function(){
						if(u===false) {animate('next',true);}
					},o.autoStart);
				}
			};
		}
		
		function current(t) {
			if(t===s+1){t=1;}
			if(t===0){t=s;}
			$(pagination,obj).parent().siblings().removeClass('active');
			$(pagination+'[rel="' + (t) + '"]',obj).parent().addClass('active');
		};
		
		function autoHeight(t) {
			if(t===s+1){t=1;}
			if(t===0){t=s;}	
			var getHeight = $(o.slides,obj).children(':eq('+(t-1)+')',obj).outerHeight();
			$(o.container,obj).animate({height: getHeight},o.autoHeight);					
		};		
		
		function animate(dir,clicked){	
			u = true;	
			switch(dir){
				case 'next':
					t = t+1;
					m = (-(t*w-w));
					current(t);
					if(o.autoHeight){autoHeight(t);}
					if(s<3){
						if (t===3){$(o.slides,obj).children(':eq(0)').css({left:(s*w)});}
						if (t===2){$(o.slides,obj).children(':eq('+(s-1)+')').css({position:'absolute',left:(w)});}
					}
					$(o.slides,obj).animate({left: m}, o.slidespeed,function(){
						if (t===s+1) {
							t = 1;
							$(o.slides,obj).css({left:0},function(){$(o.slides,obj).animate({left:m})});							
							$(o.slides,obj).children(':eq(0)').css({left: 0});
							$(o.slides,obj).children(':eq('+(s-1)+')').css({ position:'absolute',left:-w});				
						}
						if (t===s) $(o.slides,obj).children(':eq(0)').css({left:(s*w)});
						if (t===s-1) $(o.slides,obj).children(':eq('+(s-1)+')').css({left:s*w-w});
						u = false;
					});					
					break; 
				case 'prev':
					t = t-1;
					m = (-(t*w-w));
					current(t);
					if(o.autoHeight){autoHeight(t);}
					if (s<3){
						if(t===0){$(o.slides,obj).children(':eq('+(s-1)+')').css({position:'absolute',left:(-w)});}
						if(t===1){$(o.slides,obj).children(':eq(0)').css({position:'absolute',left:0});}
					}
					$(o.slides,obj).animate({left: m}, o.slidespeed,function(){
						if (t===0) {
							t = s;
							$(o.slides,obj).children(':eq('+(s-1)+')').css({position:'absolute',left:(s*w-w)});
							$(o.slides,obj).css({left: -(s*w-w)});
							$(o.slides,obj).children(':eq(0)').css({left:(s*w)});
						}
						if (t===2 ) $(o.slides,obj).children(':eq(0)').css({position:'absolute',left:0});
						if (t===1) $(o.slides,obj).children(':eq('+ (s-1) +')').css({position:'absolute',left:-w});
						u = false;
					});
					break;
				case 'fade':
					t = [t]*1;
					m = (-(t*w-w));
					current(t);
					if(o.autoHeight){autoHeight(t);}
					$(o.slides,obj).children().fadeOut(o.fadespeed, function(){
						$(o.slides,obj).css({left: m});
						$(o.slides,obj).children(':eq('+(s-1)+')').css({left:s*w-w});
						$(o.slides,obj).children(':eq(0)').css({left:0});
						if(t===s){$(o.slides,obj).children(':eq(0)').css({left:(s*w)});}
						if(t===1){$(o.slides,obj).children(':eq('+(s-1)+')').css({ position:'absolute',left:-w});}
						$(o.slides,obj).children().fadeIn(o.fadespeed);
						u = false;
					});
					break; 
				default:
					break;
				}					
			};
		});
	};
})(jQuery);;
