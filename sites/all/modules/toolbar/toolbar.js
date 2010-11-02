/* $Id$ */

Drupal.behaviors.toolbar = function (context) {

  // integration with admin_menu module
  if ( Drupal.behaviors.adminMenu ) {
    var adminMenuHeight = 21;
    if ( Drupal.settings.admin_menu.toolbar ) {
      adminMenuHeight += 9;
    }
    $('div#toolbar-toolbar').css('top', adminMenuHeight + 'px');

    // check if admin_menu position fixed is true
    if ( !Drupal.settings.admin_menu.position_fixed ) {
      // admin_menu is not fixed
      $(window).scroll(function() {

        // get window scroll position
        var top = $(window).scrollTop();

        // if window scroll position is less then adminMenuHeight then add adminMenuHeight to toolbars top position
        // otherwize set toolbar at top (admin_menu is not visible)
        if ( top <= adminMenuHeight) {
          $('div#toolbar-toolbar').css('top', adminMenuHeight + 'px');
        } else {
          $('div#toolbar-toolbar').css('top', '0px');
        }
      });
    }
  }

  $("div#toolbar-help").hide();

  $("span.trigger").toggle(function(){
    $(this).addClass("active");
    $(this).removeClass("hidden");
  }, function () {
    $(this).removeClass("active");
  });

  $('span.trigger').click(function(){
      $('div#toolbar-help').slideToggle('fast');
  });

  $("span.help-close").click(function() {
    $("div#toolbar-help").slideToggle("fast");
  });
}

Drupal.behaviors.toolbarMarginTop = function (context) {
  $('body:not(.toolbar)', context).addClass('toolbar');
};
