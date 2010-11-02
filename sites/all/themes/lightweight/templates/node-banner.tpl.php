<?php drupal_add_js(drupal_get_path('theme', 'lightweight').'/js/loopedslider.js', 'theme', 'footer'); ?>
<?php drupal_add_css(drupal_get_path('theme', 'lightweight').'/css/loopedslider.css', 'theme', 'all'); ?>


<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">

 <div class="content clear-block">
	
	<div id="newsSlider">

	  <div class="container">
	    <ul class="slides">
       <?php
       $i = 0;
       foreach ($node->field_imagen_banner as $slide){
        print '<li>';
         print theme('imagecache', 'banner', $node->field_imagen_banner[$i]['filepath'] );
         print '<p>'. check_markup($node->field_imagen_banner[$i]['data']['title']) .'</p>';
        print '</li>';
         $i++;
       }

       ?>
	    </ul>
	  </div>

	  <div class="nav"><a href="#" class="previous">previous</a>
	  <a href="#" class="next">next</a></div>
	</div>
    
  </div>


</div>

<script type="text/javascript" charset="utf-8">
	$(function(){
		$('#newsSlider').loopedSlider({
			autoStart: 7000,
			restart: 7000,
			slidespeed: 900	
		});
	});
</script>