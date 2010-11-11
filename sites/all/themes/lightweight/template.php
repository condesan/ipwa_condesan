<?php

function phptemplate_facebook_like($node_url) {
  $output = '<div class="facebook-like">';
  $output .= '<iframe src="http://www.facebook.com/plugins/like.php?href=yourtango.com' . $node_url . '&amp;layout=standard&amp;show_faces=false&amp;width=370&amp;action=like&amp;font&amp;colorscheme=light&amp;height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:220px; height:50px;" allowTransparency="true"></iframe>';
  $output .= '</div>';
  return $output;
}

function phptemplate_sharethis_snippet() {
  $output = '<script type="text/javascript" src="http://w.sharethis.com/button/sharethis.js#publisher=51a48290-53fa-4c9d-bad7-65eebd66de13&amp;type=website&amp;popup=true&amp;embeds=true&amp;post_services=fark%2Cfacebook%2Ctwitter%2Cybuzz%2Cdigg%2Cdelicious%2Cstumbleupon%2Creddit%2Cmyspace%2Ckirtsy%2Ccurrent%2Cpropeller%2Cmixx%2Cblogger%2Cwordpress%2Ctypepad%2Cgoogle_bmarks%2Cwindows_live%2Cnewsvine%2Cfriendfeed%2Cmister_wong"></script>';
  return $output;
}

function phptemplate_socialsharelinks($node, $base_url) {
  $out  =  '<div id="sociallinks" class="node-links">';
  $out .=  '<span class="share-title">Share: </span>';
  
  $out .= l(t('Facebook'), "http://www.facebook.com/sharer.php?u=" .$base_url. "/" .$node->path. "&t=" .$node->title, array('attributes' => array('class' => 'facebook', 'title' => t('Facebook'),)));
  //$out .=  '  <div class="node-link-sep"></div>';
  $out .= l(t('Twitter'), "http://www.twitter.com/home/?status=" .$base_url. "/" .$node->path. "+" .$node->title, array('attributes' => array('class' => 'twitter', 'title' => t('Twitter'),)));
  //$out .=  '  <div class="node-link-sep"></div>'; 
  $out .=  '  <script type="text/javascript" src="http://d.yimg.com/ds/badge2.js" badgetype="logo">';
  $out .=    '    tango501:' . $base_url . '/' .$node->path;
  $out .=    '  </script>';
  //$out .=  '  <div class="node-link-sep"></div>'; 
  $out .= l(t('StumbleUpon'), "http://www.stumbleupon.com/submit?url=" .$base_url. "/" .$node->path. "&title=" .$node->title, array('attributes' => array('class' => 'stumbleupon', 'title' => t('StumbleUpon'),)));
  //$out .=  '  <div class="node-link-sep"></div>';  
  $out .= l(t('Digg'), "http://digg.com/submit?phase=2&url=" .$base_url. "/" .$node->path. "&title=" .$node->title, array('attributes' => array('class' => 'digg', 'title' => t('Digg'),)));
  //$out .=  '  <div class="node-link-sep"></div>';  
  $out .= l(t('Reddit'), "http://reddit.com/submit?url=" .$base_url. "/" .$node->path. "&title=" .$node->title, array('attributes' => array('class' => 'reddit', 'title' => t('Reddit'),)));  
  
  $out .=  '  <div class="node-link-sep"></div>';
  $out .=  '</div>';
  
  return $out;

}

/**
* Override or insert variables into the node templates.
*
* @param $vars
*   An array of variables to pass to the theme template.
* @param $hook
*   The name of the template being rendered ("node" in this case.)
*/
// Replace 'THEME' with your theme's name or 'phptemplate'
function phptemplate_preprocess_node(&$vars, $hook) {
  $node = $vars['node'];
  $vars['template_file'] = 'node-'. $node->nid;
}

/**
* Converts a string to a suitable html ID attribute.
*
* <a href="http://www.w3.org/TR/html4/struct/global.html#h-7.5.2" title="http://www.w3.org/TR/html4/struct/global.html#h-7.5.2" rel="nofollow">http://www.w3.org/TR/html4/struct/global.html#h-7.5.2</a> specifies what makes a
* valid ID attribute in HTML. This function:
*
* - Ensure an ID starts with an alpha character by optionally adding an 'id'.
* - Replaces any character except A-Z, numbers, and underscores with dashes.
* - Converts entire string to lowercase.
*
* @param $string
*   The string
* @return
*   The converted string
*/
function lightweight_id_safe($string) {
  // Replace with dashes anything that isn't A-Z, numbers, dashes, or underscores.
  $string = strtolower(preg_replace('/[^a-zA-Z0-9_-]+/', '-', $string));
  // If the first character is not a-z, add 'n' in front.
  if (!ctype_lower($string{0})) { // Don't use ctype_alpha since its locale aware.
    $string = 'id' . $string;
  }
  return $string;
}

/**
* Intercept page template variables
*
* @param $vars
*   A sequential array of variables passed to the theme function.
*/
function lightweight_preprocess_page(&$vars) {
	/*dsm($vars);*/
	
  if (!$vars['is_front']) {
    // Add unique classes for each page and website section
    $path = drupal_get_path_alias($_GET['q']);
    list($section, ) = explode('/', $path, 2);
    $vars['body_classes'] .= ' ' . lightweight_id_safe('page-' . $path) . ' ';
    $vars['body_classes'] .= ' ' . lightweight_id_safe('section-' . $section) . ' ';
  }
  if ($vars['node']->type != "") {
    $vars['template_files'][] = "page-node-" . $vars['node']->type;
  }
}

/**
* Override or insert PHPTemplate variables into the search_theme_form template.
*
* @param $vars
*   A sequential array of variables to pass to the theme template.
* @param $hook
*   The name of the theme function being called (not used in this case.)
*/
function lightweight_preprocess_search_theme_form(&$vars, $hook) {
  // Remove the "Search this site" label from the form.
  $vars['form']['search_theme_form']['#title'] = t('');
  
  // Set a default value for text inside the search box field.
  $vars['form']['search_theme_form']['#value'] = '';

  
  // Change the text on the submit button
  //$vars['form']['submit']['#value'] = t('Go');

  // Rebuild the rendered version (search form only, rest remains unchanged)
  unset($vars['form']['search_theme_form']['#printed']);
  $vars['search']['search_theme_form'] = drupal_render($vars['form']['search_theme_form']);

  $vars['form']['submit']['#type'] = 'image_button';
  $vars['form']['submit']['#src'] = path_to_theme() . '/images/search.png';
    
  // Rebuild the rendered version (submit button, rest remains unchanged)
  unset($vars['form']['submit']['#printed']);
  $vars['search']['submit'] = drupal_render($vars['form']['submit']);

  // Collect all form elements to make it easier to print the whole form.
  $vars['search_form'] = implode($vars['search']);
}


function lightweight_breadcrumb($breadcrumb) {
  $img_separator = '<img src="'.base_path().'sites/all/themes/lightweight/images/breadcrumbs.png">'; //( youimage locatopn like this/images/mybreadcrumbimage.png;)
  if (!empty($breadcrumb)) {
      return '<div class="breadcrumb">'. implode($img_separator, $breadcrumb) .'</div>';
  }
}
