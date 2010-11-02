<?php

/**
 * Implementation of hook_ctools_plugin_api().
 */
function programas_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "context" && $api == "context") {
    return array("version" => 3);
  }
}

/**
 * Implementation of hook_imagecache_default_presets().
 */
function programas_imagecache_default_presets() {
  $items = array(
    'cienxcientocuarenta' => array(
      'presetname' => 'cienxcientocuarenta',
      'actions' => array(
        '0' => array(
          'weight' => '0',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '100',
            'height' => '140',
          ),
        ),
      ),
    ),
    'doscientosxdoscientoscuarenta' => array(
      'presetname' => 'doscientosxdoscientoscuarenta',
      'actions' => array(
        '0' => array(
          'weight' => '0',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '200',
            'height' => '240',
          ),
        ),
      ),
    ),
  );
  return $items;
}

/**
 * Implementation of hook_node_info().
 */
function programas_node_info() {
  $items = array(
    'panorama' => array(
      'name' => t('Panorama Andino'),
      'module' => 'features',
      'description' => t('Aca se crearan los diferentes Panoramas Andinos'),
      'has_title' => '1',
      'title_label' => t('Título'),
      'has_body' => '1',
      'body_label' => t('Cuerpo'),
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}
