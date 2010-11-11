<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">
  <?php
    if (user_access('edit any page content')) 
    {
    print '<div class="button_wrapper"><a href="/node/'.$node->nid.'" class="button"><span>Ver</span></a> <a href="/node/'.$node->nid.'/edit" class="button"><span>Editar</span></a></div>';
    }
  ?>

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

  <div class="condesan-cloud">
    <?php
	//$tagcloud = "";
	//drupal_set_html_head('<style type="text/css">@import url('.drupal_get_path('module','tagadelic').'/tagadelic.css);</style>');
	//$vocs= array(1,2,3); //  ids of vocabs for which you want to build a tag cloud
	//$tagcloud = theme('tagadelic_weighted',tagadelic_sort_tags(tagadelic_get_weighted_tags($vocs)));
	//print $tagcloud;
	$block = (object) module_invoke('cumulus', 'block', 'view', "0");
	print theme('block',$block);
	?>
  </div>

  <div class="content clear-block">
    <?php print $picture ?>
    <?php print $content ?>
  </div>

	<?php
	//$block = (object) module_invoke('tagadelic', 'block', 'view', "1");
	//print theme('block',$block);
	?>
	
  

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>
