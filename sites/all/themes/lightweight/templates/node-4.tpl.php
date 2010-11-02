<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">
  <?php
    if (user_access('edit any page content')) 
    {
    print '<div class="button_wrapper"><a href="'. base_path() .'/node/'.$node->nid.'" class="button"><span>Ver</span></a> <a href="'. base_path() .'/node/'.$node->nid.'/edit" class="button"><span>Editar</span></a> <a href="'. base_path() .'admin/build/menu-customize/menu-cdn" class="button"><span>Editar CDN</span></a></div>';
    }
  ?>

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

  <div class="condesan-cdn">
	<?php
	$block = module_invoke('menu', 'block', 'view', "menu-cdn");
	print $block['content'];
	?>
  </div>

  <div class="content clear-block">
    <?php print $node->content['body']['#value']; ?>
  </div>


	
  

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>
