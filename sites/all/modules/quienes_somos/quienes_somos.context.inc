<?php

/**
 * Implementation of hook_context_default_contexts().
 */
function quienes_somos_context_default_contexts() {
  $export = array();
  $context = new stdClass;
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'quienes_somos';
  $context->description = 'Seccion de quienes somos';
  $context->tag = 'nav';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'que-es-condesan' => 'que-es-condesan',
        'quienes-somos' => 'quienes-somos',
        'que-hacemos' => 'que-hacemos',
      ),
    ),
  );
  $context->reactions = array(
    'menu' => 'node/55',
  );
  $context->condition_mode = 1;

  $translatables['quienes_somos'] = array(
    t('Seccion de quienes somos'),
    t('nav'),
  );

  $export['quienes_somos'] = $context;
  return $export;
}
