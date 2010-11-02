<?php
// $Id: timeline.admin.inc,v 1.1.2.6 2009/11/13 18:41:56 xamanu Exp $

/**
 * @file
 * Admin settings for timeline module.
 */


/**
 * Declares administrative settings for the module.
 */
function timeline_admin_settings() {
  // Library
  $form['library'] = array(
    '#type' => 'fieldset',
    '#title' => t('SIMILE Timeline Library'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
    '#description' => t('You can select to get the timeline libraries from the SIMILE server or your can install it locally.')
  );

  $form['library']['timeline_library_source'] = array(
    '#type'          => 'select',
    '#title'         => t('Location of Simile Timeline libraries'),
    '#default_value' => variable_get('timeline_library_source', 'Simile Server'),
    '#options'       => array('hosted' => t('Simile Server')),
    '#description'   => t('Only simile server available. The timeline library is not installed locally.'),
  );

  // Check correct inclusion of local timeline library
  if ($timeline_library_status = timeline_validate_library()) {
    if (is_string($timeline_library_status)) {
      $form['library']['timeline_library_source']['#description'] = t('Information for local installation:') .' '. t($timeline_library_status);
    }
    elseif ($timeline_library_status == TRUE) {
      $form['library']['timeline_library_source']['#options']['local'] = 'Local folder' ;
      $form['library']['timeline_library_source']['#description'] = t('A local timeline library has been found at this location: !timeline_library_path', array('!timeline_library_path' => '<div class="status">' . libraries_get_path('simile_timeline') . '</div>'));
    }
  }

  // Display settings
  $form['display'] = array(
    '#type' => 'fieldset',
    '#title' => t('Default display settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['display']['timeline_default_width'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Default width'),
    '#default_value' => variable_get('timeline_default_width', '100%'),
    '#size'          => 6,
    '#maxlength'     => 6,
    '#description'   => t('The default width of a timeline (in units of em, px or %), e.g. 600px or 90%.'),
  );
  $form['display']['timeline_default_height'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Default height'),
    '#default_value' => variable_get('timeline_default_height', '400px'),
    '#size'          => 6,
    '#maxlength'     => 6,
    '#description'   => t('The default height of a timeline (in units of em, px or %), e.g. 400px.'),
  );

  // Display settings
  $form['advanced'] = array(
    '#type' => 'fieldset',
    '#title' => t('Advanced settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['advanced']['timeline_debug'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Debug mode'),
    '#default_value' => variable_get('timeline_debug', FALSE),
    '#size'          => 6,
    '#maxlength'     => 6,
    '#description'   => t('The debug mode prints out the data array when navigating to a views with a user having "administer views" permission. This can easily be copied and sent for remote debugging.'),
  );
  $form['#submit'][] = 'timeline_admin_settings_submit';
  return system_settings_form($form);
}

/**
 * Form submit function.
 * Create a file with the variables of the local position of the SIMILE Ajax library.
 * To be able to include them in drupal 6 before the timeline is getting included.
 * This functions shouldn't be necessary for drupal 7.
 */
function timeline_admin_settings_submit(&$form, $form_state) {
  if ($form_state['values']['timeline_library_source'] == 'local') {

    $timeline_lib_path = base_path() . libraries_get_path('simile_timeline');

    // Create the js/ within the files folder.
    $jspath = file_create_path('timeline');
    file_check_directory($jspath, FILE_CREATE_DIRECTORY);

    // Build aggregate JS file.
    $contents = "var Timeline_ajax_url = '". $timeline_lib_path ."/timeline_ajax/simile-ajax-api.js'; ";
    $contents .= "var Timeline_urlPrefix= '". $timeline_lib_path ."/timeline_js/';";

    // Create the JS file.
    file_save_data($contents, $jspath .'/local_variables.js', FILE_EXISTS_REPLACE);
    return TRUE;
  }
  return FALSE;
}