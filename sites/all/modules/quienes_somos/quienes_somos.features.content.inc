<?php

/**
 * Implementation of hook_content_default_fields().
 */
function quienes_somos_content_default_fields() {
  $fields = array();

  // Exported field: field_fecha
  $fields['linea_tiempo-field_fecha'] = array(
    'field_name' => 'field_fecha',
    'type_name' => 'linea_tiempo',
    'display_settings' => array(
      'weight' => '-4',
      'parent' => '',
      'label' => array(
        'format' => 'hidden',
      ),
      'teaser' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      '4' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      'token' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
    'widget_active' => '1',
    'type' => 'datetime',
    'required' => '1',
    'multiple' => '0',
    'module' => 'date',
    'active' => '1',
    'granularity' => array(
      'year' => 'year',
      'month' => 'month',
      'day' => 'day',
    ),
    'timezone_db' => '',
    'tz_handling' => 'none',
    'todate' => '',
    'repeat' => 0,
    'repeat_collapsed' => '',
    'default_format' => 'medium',
    'widget' => array(
      'default_value' => 'blank',
      'default_value_code' => '',
      'default_value2' => 'same',
      'default_value_code2' => '',
      'input_format' => 'm/d/Y - H:i',
      'input_format_custom' => '',
      'increment' => '1',
      'text_parts' => array(),
      'year_range' => '-100:+100',
      'label_position' => 'above',
      'label' => 'Fecha',
      'weight' => '-4',
      'description' => '',
      'type' => 'date_popup',
      'module' => 'date',
    ),
  );

  // Exported field: field_imagen
  $fields['linea_tiempo-field_imagen'] = array(
    'field_name' => 'field_imagen',
    'type_name' => 'linea_tiempo',
    'display_settings' => array(
      'weight' => '-2',
      'parent' => '',
      'label' => array(
        'format' => 'hidden',
      ),
      'teaser' => array(
        'format' => 'thumb_cienxcien_default',
        'exclude' => 0,
      ),
      'full' => array(
        'format' => 'imagefield__lightbox2__doscientosxdoscientoscuarenta__original',
        'exclude' => 0,
      ),
      '4' => array(
        'format' => 'image_plain',
        'exclude' => 0,
      ),
      'token' => array(
        'format' => 'image_plain',
        'exclude' => 0,
      ),
    ),
    'widget_active' => '1',
    'type' => 'filefield',
    'required' => '0',
    'multiple' => '1',
    'module' => 'filefield',
    'active' => '1',
    'list_field' => '0',
    'list_default' => 1,
    'description_field' => '0',
    'widget' => array(
      'file_extensions' => 'png gif jpg jpeg',
      'file_path' => '',
      'progress_indicator' => 'bar',
      'max_filesize_per_file' => '',
      'max_filesize_per_node' => '',
      'max_resolution' => '0',
      'min_resolution' => '0',
      'alt' => '',
      'custom_alt' => 0,
      'title' => '',
      'custom_title' => 0,
      'title_type' => 'textfield',
      'default_image' => NULL,
      'use_default_image' => 0,
      'label' => 'Imagen',
      'weight' => '-2',
      'description' => '',
      'type' => 'imagefield_widget',
      'module' => 'imagefield',
    ),
  );

  // Exported field: field_imagen
  $fields['locaciones_donde_trabajamos-field_imagen'] = array(
    'field_name' => 'field_imagen',
    'type_name' => 'locaciones_donde_trabajamos',
    'display_settings' => array(
      'weight' => '-4',
      'parent' => '',
      'label' => array(
        'format' => 'hidden',
      ),
      'teaser' => array(
        'format' => 'thumb_cienxcien_default',
        'exclude' => 0,
      ),
      'full' => array(
        'format' => 'quiktab_qs_linked',
        'exclude' => 0,
      ),
      '4' => array(
        'format' => 'image_plain',
        'exclude' => 0,
      ),
      'token' => array(
        'format' => 'image_plain',
        'exclude' => 0,
      ),
    ),
    'widget_active' => '1',
    'type' => 'filefield',
    'required' => '0',
    'multiple' => '1',
    'module' => 'filefield',
    'active' => '1',
    'list_field' => '0',
    'list_default' => 1,
    'description_field' => '0',
    'widget' => array(
      'file_extensions' => 'png gif jpg jpeg',
      'file_path' => '',
      'progress_indicator' => 'bar',
      'max_filesize_per_file' => '',
      'max_filesize_per_node' => '',
      'max_resolution' => '0',
      'min_resolution' => '0',
      'alt' => '',
      'custom_alt' => 0,
      'title' => '',
      'custom_title' => 0,
      'title_type' => 'textfield',
      'default_image' => NULL,
      'use_default_image' => 0,
      'label' => 'Imagen',
      'weight' => '-4',
      'description' => '',
      'type' => 'imagefield_widget',
      'module' => 'imagefield',
    ),
  );

  // Exported field: field_ubi_mapa
  $fields['locaciones_donde_trabajamos-field_ubi_mapa'] = array(
    'field_name' => 'field_ubi_mapa',
    'type_name' => 'locaciones_donde_trabajamos',
    'display_settings' => array(
      'weight' => '-1',
      'parent' => '',
      'label' => array(
        'format' => 'inline',
      ),
      'teaser' => array(
        'format' => 'hidden',
        'exclude' => 0,
      ),
      'full' => array(
        'format' => 'hidden',
        'exclude' => 0,
      ),
      '4' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      'token' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
    'widget_active' => '1',
    'type' => 'location',
    'required' => '0',
    'multiple' => '0',
    'module' => 'location_cck',
    'active' => '1',
    'widget' => array(
      'default_value' => array(
        '0' => array(
          'locpick' => array(
            'user_latitude' => '',
            'user_longitude' => '',
          ),
          'name' => '',
          'additional' => '',
          'street' => '',
          'country' => 'us',
          'location_settings' => array(
            'form' => array(
              'weight' => '0',
              'collapsible' => 1,
              'collapsed' => 1,
              'fields' => array(
                'name' => array(
                  'default' => '',
                  'collect' => 1,
                  'weight' => '2',
                ),
                'street' => array(
                  'default' => '',
                  'collect' => 1,
                  'weight' => '4',
                ),
                'additional' => array(
                  'default' => '',
                  'collect' => 1,
                  'weight' => '6',
                ),
                'city' => array(
                  'default' => '',
                  'collect' => 0,
                  'weight' => '8',
                ),
                'province' => array(
                  'default' => '',
                  'collect' => 0,
                  'weight' => '10',
                ),
                'postal_code' => array(
                  'default' => '',
                  'collect' => 0,
                  'weight' => '12',
                ),
                'country' => array(
                  'default' => 'us',
                  'collect' => 1,
                  'weight' => '14',
                ),
                'lid' => array(
                  'default' => FALSE,
                ),
                'latitude' => array(
                  'default' => 0,
                ),
                'longitude' => array(
                  'default' => 0,
                ),
                'source' => array(
                  'default' => 0,
                ),
                'is_primary' => array(
                  'default' => 0,
                ),
              ),
            ),
            'display' => array(
              'weight' => '0',
              'hide' => array(
                'name' => 0,
                'street' => 0,
                'additional' => 0,
                'city' => 0,
                'province' => 0,
                'postal_code' => 0,
                'country' => 0,
                'province_name' => 0,
                'country_name' => 0,
                'map_link' => 0,
                'coords' => 0,
              ),
            ),
          ),
        ),
      ),
      'default_value_php' => NULL,
      'label' => 'Ubicacion en el Mapa',
      'weight' => '-1',
      'description' => '',
      'type' => 'location',
      'module' => 'location_cck',
    ),
  );

  // Exported field: field_video
  $fields['programas-field_video'] = array(
    'field_name' => 'field_video',
    'type_name' => 'programas',
    'display_settings' => array(
      'weight' => '-4',
      'parent' => '',
      'label' => array(
        'format' => 'hidden',
      ),
      'teaser' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      '4' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
      'token' => array(
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
    'widget_active' => '1',
    'type' => 'emvideo',
    'required' => '0',
    'multiple' => '0',
    'module' => 'emvideo',
    'active' => '1',
    'widget' => array(
      'video_width' => '350',
      'video_height' => '265',
      'video_autoplay' => 0,
      'preview_width' => '350',
      'preview_height' => '310',
      'preview_autoplay' => 0,
      'thumbnail_width' => '120',
      'thumbnail_height' => '90',
      'thumbnail_default_path' => '',
      'thumbnail_link_title' => 'See video',
      'providers' => array(
        'bliptv' => 'bliptv',
        'google' => 'google',
        'livevideo' => 'livevideo',
        'myspace' => 'myspace',
        'spike' => 'spike',
        'vimeo' => 'vimeo',
        'youtube' => 'youtube',
        'zzz_custom_url' => 'zzz_custom_url',
        'archive' => 0,
        'dailymotion' => 0,
        'guba' => 0,
        'imeem' => 0,
        'lastfm' => 0,
        'metacafe' => 0,
        'revver' => 0,
        'sevenload' => 0,
        'tudou' => 0,
        'twistage' => 0,
        'ustream' => 0,
        'ustreamlive' => 0,
        'voicethread' => 0,
        'yahoomusic' => 0,
      ),
      'emthumb' => 0,
      'emthumb_label' => 'Video custom thumbnail',
      'emthumb_description' => 'If you upload a custom thumbnail, then this will be displayed when the Video thumbnail is called for, overriding any automatic thumbnails by custom providers.',
      'emthumb_max_resolution' => '0',
      'emimport_image_path' => '',
      'emthumb_custom_alt' => 0,
      'emthumb_custom_title' => 0,
      'emthumb_store_local_thumbnail' => 1,
      'emthumb_start_collapsed' => 0,
      'default_value' => array(
        '0' => array(
          'embed' => '',
          'value' => '',
        ),
      ),
      'default_value_php' => NULL,
      'label' => 'Video',
      'weight' => '-4',
      'description' => '',
      'type' => 'emvideo_textfields',
      'module' => 'emvideo',
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Fecha');
  t('Imagen');
  t('Ubicacion en el Mapa');
  t('Video');

  return $fields;
}
