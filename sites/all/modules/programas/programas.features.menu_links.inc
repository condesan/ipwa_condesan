<?php

/**
 * Implementation of hook_menu_default_menu_links().
 */
function programas_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: primary-links:node/22
  $menu_links['primary-links:node/22'] = array(
    'menu_name' => 'primary-links',
    'link_path' => 'node/22',
    'router_path' => 'node/%',
    'link_title' => 'Programas',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
    ),
    'module' => 'menu',
    'hidden' => '0',
    'external' => '0',
    'has_children' => '1',
    'expanded' => '0',
    'weight' => '-47',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Programas');


  return $menu_links;
}
