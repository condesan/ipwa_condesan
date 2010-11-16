<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">
  <div class="boton-wrapper">
  <a href="<?php print $node_url ?> #myDiv > *" class="boton" rel="lightmodal[|height:400px;width:600px]">Equipo</a>
  </div>
  <div class="content clear-block">

    <div class="left">
		<div class="iniciativa-box descripcion">
		
          <div class="top"></div>
          <div class="inner-wrapper">
		  <h2>Descripción</h2>
	      <?php print $field_imagen_rendered ?>
	      <?php print $field_descripcion_rendered ?>
          </div>
        <div class="bot"></div>
		</div>
		
		<!--<div class="iniciativa-box">
          <div class="top"></div>
          <div class="inner-wrapper">
		  <h2>Aliados</h2>
	      <?php #print $field_aliados_rendered ?>
          </div>
          <div class="bot"></div>
		</div>-->
	  </div>
	  <div class="right">
		<div class="iniciativa-box intervencion">
          <div class="top"></div>
          <div class="inner-wrapper">
		  <h2>Zona de intervención</h2>
		  <?php #print $field_imagen_accion_rendered ?>
	      <?php #print $field_descripcion_accion_rendered ?>
				<?php print $field_ubicacion_rendered; ?>
          </div>
          <div class="bot"></div>
		</div>
	    <!--<div class="iniciativa-box">
          <div class="top"></div>
          <div class="inner-wrapper">
		  <?php
		  $viewName = 'novedades';
	      $display_id = 'block_10';
	      $argument = $node->nid;
		  #print "<h2>Novedades</h2>";
		  #print views_embed_view($viewName, $display_id, $argument);
		  ?>
          </div>
          <div class="bot"></div>
		</div>-->
	  </div>
  </div>

  <div id="myDiv" style="display:none" class="panorama-box miembros">
    <div>
      <?php print $field_equipo_rendered ?>
    </div>
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>
