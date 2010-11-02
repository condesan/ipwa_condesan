<?php
// $Id: timeline.views.inc,v 1.6.2.3.2.6 2009/08/27 00:40:54 xamanu Exp $
/**
 * @file
 * Views plugins definition for timeline.
 */

/**
 * Implementation of hook_views_style_plugins(). Adds view types to views UI interface.
 */
function timeline_views_plugins() {
  return array(
    'style' => array(
      'timeline' => array(
        'title' => t('Timeline'),
        'help' => t('Displays content on a SIMILE Timeline.'),
        'handler' => 'views_views_plugin_style_timeline',
        'theme' => 'views_view_timeline',
        'uses fields' => TRUE,
        'uses options' => TRUE,
        'type' => 'normal',
        'uses row plugin' => TRUE,
        'even empty' => TRUE,
      ),
    ),
  );
}


/**
 * Implementation of hook_views_default_views().
 */
function timeline_views_default_views() {
  $views = array();

  // Add timeline_nodes view.
  $view = new view;
  $view->name = 'timeline_nodes';
  $view->description = 'Example timeline of nodes';
  $view->tag = '';
  $view->view_php = '';
  $view->base_table = 'node';
  $view->is_cacheable = FALSE;
  $view->api_version = 2;
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */
  $handler = $view->new_display('default', 'Defaults', 'default');
  $handler->override_option('fields', array(
    'created' => array(
      'label' => 'Post date',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'strip_tags' => 0,
        'html' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'date_format' => 'small',
      'custom_date_format' => '',
      'exclude' => 0,
      'id' => 'created',
      'table' => 'node',
      'field' => 'created',
      'relationship' => 'none',
    ),
    'title' => array(
      'label' => 'Title',
      'link_to_node' => 0,
      'exclude' => 0,
      'id' => 'title',
      'table' => 'node',
      'field' => 'title',
      'relationship' => 'none',
    ),
    'body' => array(
      'id' => 'body',
      'table' => 'node_revisions',
      'field' => 'body',
    ),
  ));
  $handler->override_option('sorts', array(
    'created' => array(
      'order' => 'ASC',
      'granularity' => 'second',
      'id' => 'created',
      'table' => 'node',
      'field' => 'created',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('filters', array(
    'status' => array(
        'operator' => '=',
        'value' => '1',
        'group' => '0',
        'exposed' => FALSE,
        'expose' => array(
        'operator' => FALSE,
        'label' => '',
      ),
      'id' => 'status',
      'table' => 'node',
      'field' => 'status',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('access', array(
    'type' => 'none',
  ));
  $handler->override_option('cache', array(
    'type' => 'none',
  ));
  $handler->override_option('items_per_page', 0);
  $handler->override_option('style_plugin', 'timeline');
  $handler->override_option('style_options', array(
    'grouping' => '',
    'colors' => array(
      'values' => '',
    ),
    'display' => array(
      'type' => '0',
      'width' => '100%',
      'height' => '400px',
      'appearance' => array(
        'theme' => 'ClassicTheme',
        'bubble_width' => '250',
        'bubble_height' => '',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'link' => 1,
      'start' => 'created',
      'end' => '',
      'advanced' => array(
        'earliestStart' => '',
        'latestEnd' => '',
      ),
    ),
    'bands' => array(
      'band1_unit' => 'week',
      'band2_unit' => 'month',
      'focus' => 'today',
      'focus_custom' => '',
    ),
  ));
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->override_option('path', 'timeline/nodes');
  $handler->override_option('menu', array(
    'type' => 'none',
    'title' => '',
    'weight' => 0,
  ));
  $handler->override_option('tab_options', array(
    'type' => 'none',
    'title' => '',
    'weight' => 0,
  ));
  $views[$view->name] = $view;

  return $views;
}