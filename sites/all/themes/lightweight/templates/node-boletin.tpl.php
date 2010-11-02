<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

	

  <div class="content clear-block">
	<?php
	print print_insert_link();
	?>
	<div class="boletin-box">
	  <div class="general-right">
        <?php print $field_imagen_portada_rendered ?>
      </div>
      <?php print $node->content['body']['#value']; ?>
	</div>
	<div class="boletin-box">
	  <h2>Editorial</h2>
	  <?php print $field_titulo_rendered ?>
      <?php print $field_imagen_accion_rendered ?>
	  <?php print $field_descripcion_rendered ?>
	</div>
	<div class="boletin-box">
	  <h2>Articulo Principal</h2>
      <?php print $field_titulo_dos_rendered ?>
	  <?php print $field_imagen_conocimiento_rendered ?>
	  <?php print $field_descripcion_accion_rendered ?>
	</div>
	<div class="boletin-box">
	  <h2>Articulo</h2>
	  <?php print $field_titulo_tres_rendered ?>
	  <?php print $field_imagen_novedades_rendered ?>
	  <?php print $field_descripcion_conocimiento_rendered ?>
	</div>
  </div>
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>