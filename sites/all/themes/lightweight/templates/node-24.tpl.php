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
			
			<?php print l('Equipo', $node_url . ' #myDiv2 > *',  array('external' => TRUE, 'query' => NULL, 'attributes' => array('rel' => 'lightmodal[|height:400px;width:600px]', 'class' => 'boton'))); ?>
					
	</div>
	<div class="dialogo-box">
	  <h2><!--Comunicación hallazgos--></h2>
      <?php print $field_imagen_politica_rendered ?>
      <?php print $field_descripcion_rendered ?>
	  <?php print $field_recursos_rendered ?>
	</div>
  </div>
  <div class="right">
	<div class="dialogo-box aprendizaje">
	  <h2><!--Periodismo para el desarrollo --></h2>
	  <?php print $field_imagen_accion_rendered ?>
	  <?php print $field_descripcion_accion_rendered ?>
	  <?php print $field_recursos_accion_rendered ?>
	</div>
    <div class="dialogo-box aprendizaje">
	  <h2><!--Gestión de información --></h2>
	  <?php print $field_imagen_conocimiento_rendered ?>
	  <?php print $field_descripcion_conocimiento_rendered ?>
	  <?php print $field_recursos_conocimiento_rendered ?>
	</div>
	
	
		<div id="myDiv2" style="display:none" class="dialogo-box miembros">
		<div>
        	<?php
				//$firstMiembro= $field_equipo[0]['nid'];
				//$firstMiembro= node_load($firstMiembro);
				//dprint_r($firstMiembro)	
			?>
			<?php //print $firstMiembro->title ?>
	  <?php print $field_equipo_rendered ?>
	  </div>
	</div>
	
	
	
	
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
