<?php
// $Id$

/**
 * @file
 * Administrative page callbacks for the Google Fonts UI module.
 */

/**
 * Implementation of hook_admin_settings() for configuring the module
 */
function google_fonts_ui_admin_settings_form(&$form_state) {
  $form = array();
  
  $form['introduction'] = array(
    '#value' => t('For each enabled font you can add one or more rules.<br />Examples given: <code>.node H2</code> or <code>#logo-floater h1</code>'),
  );

  $fonts_to_load = array();
  $style_to_add = '<style type="text/css">.font_example label{ font-size: 30px; } ';
  foreach (variable_get('google_fonts_enabled_fonts', array()) as $font) {
    if ($font) {
      $form['google_fonts_ui_' . _google_fonts_system_fontname($font)] = array(
        '#type' => 'textarea',
        '#title' => str_replace('_', ' ', $font),
        '#default_value' => variable_get('google_fonts_ui_' . _google_fonts_system_fontname($font), NULL),
        '#description' => 'Add one or more CSS selectors, one for each line.',
        '#prefix' => '<div class="font_example ' . _google_fonts_system_fontname($font) . '">',
        '#suffix' => '</div>',
        '#rows' => 3,
      );
      
      $fonts_to_load[] = _google_fonts_system_fontname($font);
      $style_to_add .= '.' . _google_fonts_system_fontname($font) . ' label{ font-family: "' . str_replace('_', ' ', $font) . '"; } ';
    }
  }
  $style_to_add .= '</style>';
  
  $form['enabled_fonts'] = array(
    '#type' => 'hidden',
    '#value' => implode('|', $fonts_to_load),
  );
  
  $form['#submit'][] = 'google_fonts_ui_admin_settings_form_submit';
  
  drupal_set_html_head($style_to_add);
  return system_settings_form($form);
}

/**
 * Implementation of hook_form_submit() for creating the CSS file
 */
function google_fonts_ui_admin_settings_form_submit($form, &$form_state) {
  $css_value = '/* CSS code for the Google Fonts module */' . "\n\n";
  foreach (explode('|', $form['enabled_fonts']["#value"]) as $font) {
    $selectors = $form['google_fonts_ui_' . $font]["#value"];
    if (!empty($selectors)) {
      $selectors = check_plain(str_replace("\r\n", ",\r\n", trim($selectors)));
      $selectors = str_replace(',,', ',', $selectors);
      $css_value .= $selectors . '{ font-family: "' . str_replace('_', ' ', $font) . '"; }' . "\n\n";
    }
  }
  
  variable_set('google_fonts_ui_css_contents', $css_value);
  
  // Save the CSS code as local file
  if (!_google_fonts_cache($css_value, TRUE)) {
    drupal_set_message(t('Could not generate the CSS code for the Google Fonts.'), 'error');
  }
}