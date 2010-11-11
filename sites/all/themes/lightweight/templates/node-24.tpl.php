<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

	

  <div class="content clear-block">
  <div class="left">
	<div class="dialogo-box">
	  <h2>Que Somos?</h2>
      <?php print $field_video_rendered ?>
      <?php print $node->content['body']['#value']; ?>
	</div>
	<div class="dialogo-box">
	  <h2>Comunicación hallazgos</h2>
      <?php print $field_imagen_politica_rendered ?>
      <?php print $field_descripcion_rendered ?>
	  <?php print $field_recursos_rendered ?>
	</div>
  </div>
 
<div class="novedades">
      <div class="top"></div>
	<?php
	$viewName = 'novedades';
	//Pass every tid to the argument.
	$argument = $node->nid;
	//if (arg(0) == 'node' && is_numeric(arg(1))) $nodeid = arg(1);
	//if ($nodeid = 73){
	//$display_id = 'block_4';
    //}
    //else {
    $display_id = 'block_3';
    //}
	print "<h2>Novedades</h2>";
	print views_embed_view($viewName, $display_id, $argument);
	?>
      <div class="bot"></div>
	</div>
 
 
 
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>

<div class="clear-block">
  <h3>Siguenos en:</h3>
  <?php print $field_logotipos_rendered ?>
</div>
