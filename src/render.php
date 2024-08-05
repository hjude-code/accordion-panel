<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 $panelHeading = $attributes['panelHeading'];

$styleString = '';

$panelBgColor = $attributes['panelBgColor'];
$styleString .= "--panelBgColor: $panelBgColor; ";

$panelHeadingColorClose = $attributes['panelHeadingColorClose'];
$styleString .= "--panelHeadingColorClose: $panelHeadingColorClose; ";

$panelHeadingColorOpen = $attributes['panelHeadingColorOpen'];
$styleString .= "--panelHeadingColorOpen: $panelHeadingColorOpen; ";

$ruleColor = $attributes['ruleColor'];
$styleString .= "--ruleColor: $ruleColor; ";



 $wrapper_attributes = get_block_wrapper_attributes([
	'style' => $styleString
]);
?>



<div <?php echo $wrapper_attributes ?>>
	<a class="panel-header">
		<span class="accordionRule accordionRule-start"></span>
		<span class="panel-headings">
			<span class="panel-heading panel-heading-close"> <h2> <?php echo $panelHeading ?> </h2> </span>
			<span class="panel-heading panel-heading-open"> <h2> <?php echo $panelHeading ?> </h2> </span>
		</span>
		<span class="accordionRule accordionRule-end"></span>
	</a>
	<div class="panel">
		<div class="panel-content">
			<?php echo $content ?>
		</div>
	</div>
</div>
