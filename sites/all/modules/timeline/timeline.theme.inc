<?php
// $Id: timeline.theme.inc,v 1.13.2.1.2.13 2009/10/19 13:30:30 xamanu Exp $
/**
 * @file
 * Theme functions for timeline.
 */

/**
 * Implementation of template_process for views-view-timeline.
 */
function template_preprocess_views_view_timeline(&$vars) {
  if (isset($vars['options']['debug'])) {
    $vars['debug'] = theme('timeline_debug', $vars['options']['debug']);
  }
  // create actual timeline
  if (_timeline_include($vars['options']['timeline']['theme'])) {

    // preprocess css information for the template
    $vars['id'] = $vars['view']->name;
    $vars['class'] = $vars['view']->name;
    $vars['height'] = $vars['options']['timeline']['height'];
    $vars['width'] = $vars['options']['timeline']['width'];
    $vars['controls'] = $vars['options']['misc']['controls'];
    if($vars['options']['timeline']['theme'] == "ClassicTheme") {
      $vars['timeline_theme'] = "ClassicTheme";
    }
    else {
      $vars['timeline_theme'] = drupal_substr(strrchr($vars['options']['timeline']['theme'], '/'), 1);
    }
  }
}


/**
 * Overridable theme function.
 * This functions prints a warning when no data is available.
 */
function theme_timeline_nodata() {
  drupal_set_message(t('There is no data available to show on the timeline'), 'warning');
}

/**
 * Overridable theme function.
 * This returns the title of each event bubble on the timeline.
 */
function theme_timeline_bubble_title($row, $alias) {
  return $row->$alias;
}


/**
 * Overridable theme function.
 * This creates the url that the title of each event bubble is linked to.
 */
function theme_timeline_bubble_url($row, $link_enabled) {
  if ($link_enabled) {
    return base_path() . drupal_get_path_alias('node/' . $row->nid);
  }
  return FALSE;
}

/*
 * Function to theme a textarea with a array inside
 */
function theme_timeline_debug($debug_array) {
  $output = '<div id="timeline_debug">';
  $output .= '<label><strong>DEBUG:</strong></label>';
  $output .= '<div class="resizable-textarea"><textarea id="edit-code" class="form-textarea resizable textarea-processed" name="code" rows ="10" cols="60">';
  $output .= var_export($debug_array, TRUE);
  $output .= '</textarea></div></div>';
  return $output;
}

/**
 * Inlude all js and css files that needs the timeline.
 * Depending on the timeline views settings the external SIMILE server is used.
 * Or otherwise a local installation.
 *
 * @return: TRUE if everything could be included properly
 *          FALSE if Simile Exhibit Libraries aren't found
 */
function _timeline_include($timeline_theme) {
  $timeline_mod_path = drupal_get_path('module', 'timeline');

  // Use SIMILE Server
  if (variable_get('timeline_library_source', 'hosted') == 'hosted') {
    $timeline_api = 'http://static.simile.mit.edu/timeline/api-2.3.0/timeline-api.js?bundle=true';
    drupal_set_html_head('<script type="text/javascript" src="'. $timeline_api .'"></script>'); //  We have to wait to D7 to get rid of this: #91250 - fd
  }
  elseif (variable_get('timeline_library_source', 'hosted') == 'local' && $message = timeline_validate_library()) {
    $timeline_lib_path = libraries_get_path('simile_timeline');
    drupal_add_js(file_directory_path() . '/timeline/local_variables.js');
    drupal_add_js($timeline_lib_path . '/timeline_js/timeline-api.js');
  }
  else {
    drupal_set_message(t('Simile Timeline Libraries not found'), 'error');
    return FALSE;
  }

  drupal_add_css($timeline_mod_path . '/css/timeline.css');

  // include custom theme files (if activated)
  if ($timeline_theme != $timeline_mod_path . '/themes/ClassicTheme' && $timeline_theme != FALSE) {
    drupal_add_js($timeline_theme . '/theme.js');
    drupal_add_css($timeline_theme . '/theme.css');
  }
  drupal_add_js($timeline_mod_path . '/js/timeline.js');
  return TRUE;
}
