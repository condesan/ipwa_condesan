<?php

/**
 * Implementation of hook_fieldgroup_default_groups().
 */
function programas_fieldgroup_default_groups() {
  $groups = array();

  // Exported group: group_e_accion
  $groups['panorama-group_e_accion'] = array(
    'group_type' => 'standard',
    'type_name' => 'panorama',
    'group_name' => 'group_e_accion',
    'label' => 'Est. Accion',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => array(
        'weight' => '0',
        'label' => 'above',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'description' => '',
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
      ),
    ),
    'weight' => '0',
    'fields' => array(
      '0' => 'field_imagen_accion',
      '1' => 'field_e_accion',
      '2' => 'field_recursos_accion',
    ),
  );

  // Exported group: group_e_conocimiento
  $groups['panorama-group_e_conocimiento'] = array(
    'group_type' => 'standard',
    'type_name' => 'panorama',
    'group_name' => 'group_e_conocimiento',
    'label' => 'Est. Conocimiento',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => array(
        'weight' => '-1',
        'label' => 'above',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'description' => '',
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
      ),
    ),
    'weight' => '-1',
    'fields' => array(
      '0' => 'field_imagen_conocimiento',
      '1' => 'field_e_conocimiento',
      '2' => 'field_recursos',
    ),
  );

  // Exported group: group_e_politico
  $groups['panorama-group_e_politico'] = array(
    'group_type' => 'standard',
    'type_name' => 'panorama',
    'group_name' => 'group_e_politico',
    'label' => 'Est. Politico',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => array(
        'weight' => '1',
        'label' => 'above',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'description' => '',
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
      ),
    ),
    'weight' => '1',
    'fields' => array(
      '0' => 'field_imagen_politica',
      '1' => 'field_e_politico',
      '2' => 'field_recursos_politicos',
    ),
  );

  // Exported group: group_general
  $groups['panorama-group_general'] = array(
    'group_type' => 'standard',
    'type_name' => 'panorama',
    'group_name' => 'group_general',
    'label' => 'General',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => array(
        'weight' => '-2',
        'label' => 'above',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'description' => '',
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
      ),
    ),
    'weight' => '-2',
    'fields' => array(
      '0' => 'field_imagen',
      '1' => 'field_general',
      '2' => 'field_representan',
    ),
  );

  // Exported group: group_miembros
  $groups['panorama-group_miembros'] = array(
    'group_type' => 'standard',
    'type_name' => 'panorama',
    'group_name' => 'group_miembros',
    'label' => 'Miembros',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => array(
        'weight' => '-3',
        'label' => 'above',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'description' => '',
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
      ),
    ),
    'weight' => '-3',
    'fields' => array(
      '0' => 'field_miembros',
      '1' => 'field_miembros_texto',
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Est. Accion');
  t('Est. Conocimiento');
  t('Est. Politico');
  t('General');
  t('Miembros');

  return $groups;
}
