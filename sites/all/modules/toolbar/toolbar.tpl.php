<?php
// $Id: toolbar.tpl.php,v 1.1.2.1 2010/08/08 16:38:47 dankh Exp $

/**
 * @file toolbar.tpl.php
 * Default theme implementation for toolbars.
 *
 * Available variables:
 * - $shortcuts: Toolbar links.
 * - $system_shortcuts: Static system links.
 * - $help: Help message.
 *
 * @see theme_toolbar()
 */
?>
<div id='toolbar-toolbar' class='clear-block'>
  <div class='depth-0 clear-block'>

    <div id="admin-toolbar-admin">
      <?php print theme('links', $shortcuts); ?>
    </div>

    <div id="admin-toolbar-user">
      <?php print theme('links', $system_shortcuts); ?>
      <span class="trigger">
        <a href="#" id="contextual-help-toggle"><span class="icon-help"></span></a>
      </span>
      <div id="toolbar-help" class="hidden">
        <span class="help-close"></span>
        <?php print $help; ?>
      </div>
    </div>

  </div>

  <div class="shadow"></div>
</div>
