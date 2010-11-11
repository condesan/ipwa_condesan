<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">

  <?php
    if (user_access('edit any page content')) 
    {
    //print l('Editar', 'node/'.$node->nid.'/edit');
    print '<div class="button_wrapper"><a href="'.base_path().'node/'.$node->nid.'" class="button"><span>Ver</span></a> <a href="' . base_path() . 'node/'.$node->nid.'/edit" class="button"><span>Editar</span></a></div>';
    }
  ?>

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

	

  <div class="content clear-block">
  <div class="clear-block">
	<div class="general">
	  <div class="general-right">
	    <?php print $field_imagen_rendered ?>
	  </div>
	  <?php print $field_descripcion_rendered ?>
	  <?php print phptemplate_facebook_like($node_url); ?>  
	</div>
	<div class="novedades">
	  <div class="top"></div>
	  <?php
	  $viewName = 'novedades';
      $display_id = 'block_8';
      $argument = $node->nid;
	  print "<h2>Noticias</h2>";
	  print views_embed_view($viewName, $display_id, $argument);
	  ?>
	  <div class="bot"></div>
	</div>
  </div>
  <div class="clear-block">
	<div class="dialogo-box aprendizaje">
	  <div class="top"></div>
	  <div class="inner-wrapper">
	  <h2>Camino del aprendizaje</h2>
	  <div class="dialogo-box-left">
	    <?php print $field_video_rendered ?>
	    <?php print phptemplate_facebook_like($node_url); ?>  
	    <?php print $field_informe_conocimiento_rendered ?>
	    <?php print $field_recursos_uno_rendered ?>
	  </div>
	  <?php print $field_descripcion_conocimiento_rendered ?>
	  </div>
	  <div class="bot"></div>
	</div>
	<div class="dialogo-box politicas">
	  <div class="top"></div>
	  <div class="inner-wrapper">
	  <h2>Dialogo de políticas</h2>
	  <?php print $field_descripcion_politico_rendered ?>
	  <?php print $field_informe_politica_rendered ?>
	  <?php print $field_recursos_dos_rendered ?>
	  </div>
	  <div class="bot"></div>
	</div>
  </div>
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>


<?php print $field_logotipos_rendered ?>
