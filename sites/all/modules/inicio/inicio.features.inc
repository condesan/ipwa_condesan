<?php

/**
 * Implementation of hook_imagecache_default_presets().
 */
function inicio_imagecache_default_presets() {
  $items = array(
    'banner' => array(
      'presetname' => 'banner',
      'actions' => array(
        '0' => array(
          'weight' => '0',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '633',
            'height' => '290',
          ),
        ),
        '1' => array(
          'weight' => '0',
          'module' => 'imagecache_coloractions',
          'action' => 'imagecache_convert',
          'data' => array(
            'format' => 'image/png',
          ),
        ),
        '2' => array(
          'weight' => '0',
          'module' => 'imagecache_canvasactions',
          'action' => 'canvasactions_roundedcorners',
          'data' => array(
            'radius' => '',
            'independent_corners_set' => array(
              'independent_corners' => 1,
              'radii' => array(
                'tl' => '10',
                'tr' => '0',
                'bl' => '10',
                'br' => '0',
              ),
            ),
          ),
        ),
      ),
    ),
    'thumb' => array(
      'presetname' => 'thumb',
      'actions' => array(
        '0' => array(
          'weight' => '-7',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '90',
            'height' => '80',
          ),
        ),
        '1' => array(
          'weight' => '-6',
          'module' => 'imagecache_canvasactions',
          'action' => 'canvasactions_canvas2file',
          'data' => array(
            'xpos' => '6',
            'ypos' => '6',
            'alpha' => '100',
            'path' => 'thumb-shadow.png',
            'dimensions' => 'background',
          ),
        ),
      ),
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function inicio_views_api() {
  return array(
    'api' => '2',
  );
}
