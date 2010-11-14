<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">

  <?php
    if (user_access('edit any page content')) 
    {
    //print l('Editar', 'node/'.$node->nid.'/edit');
 print '<div class="button_wrapper"><a href="'. base_path() .'node/'.$node->nid.'" class="button"><span>Ver</span></a> <a href="'. base_path() .'node/'.$node->nid.'/edit" class="button"><span>Editar</span></a></div>';    }
  ?>

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

	

  <div class="content clear-block">
    <?php print $picture ?>
	<?php  //echo "<script type=text/javascript>document.write('<a href=\"' + document.URL + \" #myDiv > *\" + '\" rel=\"lightmodal[|height:400px;width:400px]\">Miembros</a>')</script>";?>
	
    <?php //print $content ?>
	<div class="general">

	  <div class="general-right">
	    <?php print $field_imagen_rendered ?>
	  </div>
	  <?php print $field_descripcion_rendered ?>
      <?php print phptemplate_facebook_like($node_url); ?>  
	  <a href="<?php print $node_url ?> #myDiv > *" class="boton" rel="lightmodal[|height:400px;width:600px]">Equipo</a>
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
    $display_id = 'block_9';
    //}
	print "<h2>Novedades</h2>";
	print views_embed_view($viewName, $display_id, $argument);
	?>
      <div class="bot"></div>
	</div>
	<div class="panorama-box conocimiento">
      <div class="top"></div>
      <div class="inner-wrapper">
	  <h3>Estado del conocimiento</h3>
	  <?php print $field_imagen_conocimiento_rendered ?>
	  <?php print $field_descripcion_conocimiento_rendered ?>
	  <?php print $field_informe_conocimiento_rendered ?>
	  <?php print $field_recursos_uno_rendered ?>
	  </div>
	  <div class="bot"></div>
	</div>
	<div class="panorama-box accion">
	  <div class="top"></div>
	  <div class="inner-wrapper">
	  <h3>Estado de la acción</h3>
	  <?php print $field_imagen_accion_rendered ?>
	  <?php print $field_descripcion_accion_rendered ?>
	  <?php print $field_informe_accion_rendered ?>
	  <?php print $field_recursos_dos_rendered ?>
	  </div>
	  <div class="bot"></div>
	</div>
	<div class="panorama-box politico">
	  <div class="top"></div>
	  <div class="inner-wrapper">
	  <h3>Estado de la politica</h3>
	  <?php print $field_imagen_politica_rendered ?>
	  <?php print $field_descripcion_politico_rendered ?>
	  <?php print $field_informe_politica_rendered ?>
	  <?php print $field_recursos_politico_rendered ?>
	  <?php print $field_recursos_tres_rendered ?>
	  </div>
	  <div class="bot"></div>
	</div>
	<div id="myDiv" style="display:none" class="panorama-box miembros">
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

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>


<?php print $field_logotipos_rendered ?>
