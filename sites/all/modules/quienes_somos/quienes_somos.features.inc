<?php

/**
 * Implementation of hook_ctools_plugin_api().
 */
function quienes_somos_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "context" && $api == "context") {
    return array("version" => 3);
  }
}

/**
 * Implementation of hook_imagecache_default_presets().
 */
function quienes_somos_imagecache_default_presets() {
  $items = array(
    'quiktab_qs' => array(
      'presetname' => 'quiktab_qs',
      'actions' => array(
        '0' => array(
          'weight' => '0',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '200',
            'height' => '235',
          ),
        ),
      ),
    ),
    'thumb_cienxcien' => array(
      'presetname' => 'thumb_cienxcien',
      'actions' => array(
        '0' => array(
          'weight' => '0',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '100',
            'height' => '100',
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
function quienes_somos_node_info() {
  $items = array(
    'programas' => array(
      'name' => t('Programas'),
      'module' => 'features',
      'description' => t('Aca tendremos los videos y la introduccion a los programas'),
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
