<?php
// $Id: print.tpl.php,v 1.8.2.17 2010/08/18 00:33:34 jcnventura Exp $

/**
 * @file
 * Default print module template
 *
 * @ingroup print
 */
?>
<?php $node = $print['node']; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="<?php print $print['language']; ?>" xml:lang="<?php print $print['language']; ?>">
  <head>
    <?php print $print['head']; ?>
    <?php print $print['base_href']; ?>
    <title><?php print $print['title']; ?></title>
    <?php //print $print['scripts']; ?>
    <?php print $print['sendtoprinter']; ?>
    <?php print $print['robots_meta']; ?>
    <?php print $print['favicon']; ?>
    <link href="/sites/all/modules/print/css/print.css?F" media="all" rel="stylesheet" type="text/css">
  </head>
  <body>
  asdasdasdasd asdjasldj
    <?php if (!empty($print['message'])) {
      print '<div class="print-message">'. $print['message'] .'</div><p />';
    } ?>
    <div class="print-logo"><?php print $print['logo']; ?></div>
    <div class="print-site_name"><?php print $print['site_name']; ?></div>
    <p />
    <div class="print-breadcrumb"><?php print $print['breadcrumb']; ?></div>
    <hr class="print-hr" />
    <h1 class="print-title"><?php print $print['title']; ?></h1>
    <div class="print-submitted"><?php print $print['submitted']; ?></div>
    <div class="print-created"><?php print $print['created']; ?></div>


    <div class="print-content"><?php //print $print['content']; ?></div>


	<div>
      <?php print $node->content['body']['#value']; ?>
	</div>
	<div>
	  <h2>Editorial</h2>
	  <?php print $node->field_titulo[0]['value']; ?>
	  <?php $articulo = strip_tags($node->field_descripcion[0]['value']); ?>
	  <p><?php print $articulo; ?></p>
	</div>
	<div>
	  <h2>Articulo Principal</h2>
      <?php print $node->field_titulo_dos[0]['value']; ?>
	  <?php $articuloDos = strip_tags($node->field_descripcion_accion[0]['value']); ?>
	  <p><?php print $articuloDos; ?></p>
	</div>
	<div>
	  <h2>Articulo</h2>
	  <?php print $node->field_titulo_tres[0]['value']; ?>
	  <?php $articuloTres = strip_tags($node->field_descripcion_conocimiento[0]['value']); ?>
	  <p><?php print $articuloTres; ?></p>
	</div>
  </div>



    <div class="print-taxonomy"><?php print $print['taxonomy']; ?></div>
    <div class="print-footer"><?php print $print['footer_message']; ?></div>
    <hr class="print-hr" />
    <div class="print-source_url"><?php print $print['source_url']; ?></div>
    <div class="print-links"><?php print $print['pfp_links']; ?></div>
  </body>
</html>
