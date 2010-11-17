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
	<?php if ($field_imagen[1]['filepath']): ?>
      <?php drupal_add_js(drupal_get_path('theme', 'lightweight').'/js/loopedslider.js', 'theme', 'footer'); ?>
      <?php drupal_add_css(drupal_get_path('theme', 'lightweight').'/css/loopedslider.css', 'theme', 'all'); ?>
      <div id="loopedSlider">
        <div class="container">
		    <ul class="slides">
               	<?php
			       $i = 0;
			       foreach ($node->field_imagen as $slide){
			        print '<li>';
			         print theme('imagecache', 'medium', $node->field_imagen[$i]['filepath'] );
			        print '</li>';
			         $i++;
			       }
			       ?>
            </ul>
		  </div>
        <div class="nav"><a href="#" class="previous">previous</a>
        <a href="#" class="next">next</a></div>
      </div>
        <script type="text/javascript" charset="utf-8">
			$(function(){
				$('#loopedSlider').loopedSlider({
					autoStart: 7000,
					restart: 7000,
					slidespeed: 900
				});
			});
		</script>
    <?php elseif ($field_imagen[0]['filepath']): ?>
	  	<style type="text/css">.imagecache-medium{float:right;margin:0 0 10px 20px;}</style>
		  <?php print theme('imagecache', 'medium', $node->field_imagen[0]['filepath']); ?>
    <?php endif; ?>
    
    <?php print $node->content['body']['#value']; ?>
    <?php print $field_equipo_rendered ?>
    <?php print $field_aliados_rel_rendered ?>
		<?php if ($node->nid==58) { 
			#print $field_ubicacion_rendered;
			}
		
		?>
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>
