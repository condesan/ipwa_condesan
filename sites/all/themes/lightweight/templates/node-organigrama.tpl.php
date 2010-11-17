<?php drupal_add_css(drupal_get_path('theme', 'lightweight').'/css/slickmap-drupal.css', 'theme', 'all'); ?>

<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">
	<?php
	    if (user_access('edit any page content')) 
	    {
	    //print l('Editar', 'node/'.$node->nid.'/edit');
	     print '<div class="button_wrapper"><a href="'. base_path() .'node/'.$node->nid.'" class="button"><span>Ver</span></a> <a href="'. base_path() .'node/'.$node->nid.'/edit" class="button"><span>Editar</span></a></div>';
	    }
	  ?>

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

	

  <div class="content clear-block">
    <?php print $node->content['body']['#value']; ?>
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>
