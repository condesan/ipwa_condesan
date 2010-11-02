<?php

/**
 * Implementation of hook_menu_default_menu_custom().
 */
function quienes_somos_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: primary-links
  $menus['primary-links'] = array(
    'menu_name' => 'primary-links',
    'title' => 'Enlaces primarios',
    'description' => 'Los enlaces primarios se utilizan con frecuencia en el tema para mostrar las principales secciones de un sitio web. Una típica representación de los principales enlaces son las pestañas en la parte superior.',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Enlaces primarios');
  t('Los enlaces primarios se utilizan con frecuencia en el tema para mostrar las principales secciones de un sitio web. Una típica representación de los principales enlaces son las pestañas en la parte superior.');


  return $menus;
}
