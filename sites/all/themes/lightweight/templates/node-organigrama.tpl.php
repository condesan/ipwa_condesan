<?php drupal_add_css(drupal_get_path('theme', 'lightweight').'/css/slickmap-drupal.css', 'theme', 'all'); ?>

<div id="node-<?php print $node->nid ?>" class="node node-<?php print $node->type ?>">
	<?php
	    if (user_access('edit any page content')) 
	    {
	    //print l('Editar', 'node/'.$node->nid.'/edit');
	    print '<div class="button_wrapper"><a href="/node/'.$node->nid.'" class="button"><span>Ver</span></a> <a href="/node/'.$node->nid.'/edit" class="button"><span>Editar</span></a></div>';
	    }
	  ?>

<?php if (!$page): ?>
  <h2 class="teaser-title"><a href="<?php print $node_url ?>" title="<?php print $title ?>">
    <?php print $title ?></a></h2>
<?php endif; ?>

	

  <div class="content clear-block">
    <?php print $node->content['body']['#value']; ?>
    <ul class="tree">
      <?php print '<li class="first"><a href="/condesan/'.node_load($field_org_uno[0]['nid'])->path.'">'.node_load($field_org_uno[0]['nid'])->title.'</a></li>'; ?>
      <?php print '<li><a href="/condesan/'.node_load($field_org_dos[0]['nid'])->path.'">'.node_load($field_org_dos[0]['nid'])->title.'</a>'; ?>
        <ul>
          <?php
           $i = 0;
           foreach ($field_org_tres_uno as $slide){
            print '<li>';
             print '<a href="/condesan/'.node_load($field_org_tres_uno[$i]['nid'])->path.'">'.node_load($field_org_tres_uno[$i]['nid'])->title.'</a>' ;
            print '</li>';
             $i++;
           }?>
        </ul></li>
      <?php print '<li><a href="/condesan/'.node_load($field_org_dos[1]['nid'])->path.'">'.node_load($field_org_dos[1]['nid'])->title.'</a>'; ?>
        <ul>
          <?php
           $i = 0;
           foreach ($field_org_tres_uno as $slide){
            print '<li>';
             print '<a href="/condesan/'.node_load($field_org_tres_dos[$i]['nid'])->path.'">'.node_load($field_org_tres_dos[$i]['nid'])->title.'</a>' ;
            print '</li>';
             $i++;
           }?>
        </ul></li>
      <?php print '<li><a href="/condesan/'.node_load($field_org_dos[2]['nid'])->path.'">'.node_load($field_org_dos[2]['nid'])->title.'</a>'; ?>
        <ul>
          <?php
           $i = 0;
           foreach ($field_org_tres_uno as $slide){
            print '<li>';
             print '<a href="/condesan/'.node_load($field_org_tres_tres[$i]['nid'])->path.'">'.node_load($field_org_tres_tres[$i]['nid'])->title.'</a>' ;
            print '</li>';
             $i++;
           }?>
        </ul></li>
      <?php print '<li><a href="/condesan/'.node_load($field_org_dos[3]['nid'])->path.'">'.node_load($field_org_dos[3]['nid'])->title.'</a>'; ?>
	    <ul>
          <?php
           $i = 0;
           foreach ($field_org_tres_uno as $slide){
            print '<li>';
             print '<a href="/condesan/'.node_load($field_org_tres_cuatro[$i]['nid'])->path.'">'.node_load($field_org_tres_cuatro[$i]['nid'])->title.'</a>' ;
            print '</li>';
             $i++;
           }?>
        </ul></li>

    </ul>
  </div>

<?php if ($links): ?>
  <div class="node-links"><?php print $links ?></div>
<?php endif; ?>

</div>