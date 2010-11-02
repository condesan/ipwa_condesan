<?php

/**
 * Implementation of hook_context_default_contexts().
 */
function programas_context_default_contexts() {
  $export = array();
  $context = new stdClass;
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'programas';
  $context->description = 'Los programas de Condesan';
  $context->tag = 'nav';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'panorama' => 'panorama',
      ),
      'options' => array(
        'node_form' => 1,
      ),
    ),
    'path' => array(
      'values' => array(
        'programas/que-es-panorama-andino' => 'programas/que-es-panorama-andino',
        'programas/que-es-dialogo-andino' => 'programas/que-es-dialogo-andino',
        'programas/que-es-infoandina' => 'programas/que-es-infoandina',
      ),
    ),
  );
  $context->reactions = array(
    'menu' => 'node/22',
  );
  $context->condition_mode = 0;

  $translatables['programas'] = array(
    t('Los programas de Condesan'),
    t('nav'),
  );

  $export['programas'] = $context;
  return $export;
}
