<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 $panelHeading = $attributes['panel-heading'];
?>



<div <?php echo get_block_wrapper_attributes(); ?>>
	<a class="panel-header">
		<span class="accordionRule accordionRule-left"></span>
		<span class="panel-headings">
			<h2 class="panel-heading panel-heading-close"> <?php echo $panelHeading ?> </h2>
			<h2 class="panel-heading panel-heading-open"> <?php echo $panelHeading ?> </h2>
		</span>
		<span class="accordionRule accordionRule-right"></span>
	</a>
	<div class="panel-content">
		<p>panel content</p>
	</div>
</div>
