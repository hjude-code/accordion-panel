<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$headingTagName = $attributes['headingTagName'];

 $panelHeading = "<$headingTagName>" . $attributes['panelHeading'] . "</$headingTagName>";

$styleString = '';

$panelBgColor = $attributes['panelBgColor'];
$styleString .= "--panelBgColor: $panelBgColor; ";

$panelHeadingColorClose = $attributes['panelHeadingColorClose'];
$styleString .= "--panelHeadingColorClose: $panelHeadingColorClose; ";

$panelHeadingColorOpen = $attributes['panelHeadingColorOpen'];
$styleString .= "--panelHeadingColorOpen: $panelHeadingColorOpen; ";

$ruleColor = $attributes['ruleColor'];
$styleString .= "--ruleColor: $ruleColor; ";

$headerAlignment = $attributes['headerAlignment'];
$styleString .= "--headerAlignment: $headerAlignment; ";

$maxPanelHeight = $attributes['maxPanelHeight'];
$styleString .= "--maxPanelHeight: $maxPanelHeight; ";



 $wrapper_attributes = get_block_wrapper_attributes([
	'style' => $styleString
]);



?>



<div <?php echo $wrapper_attributes ?>>
	<a class="panel-header">
		<span class="accordionRule accordionRule-start"></span>
		<span class="panel-headings">
			<span class="panel-heading panel-heading-close"> <?php echo $panelHeading ?> </span>
			<span class="panel-heading panel-heading-open"> <?php echo $panelHeading ?> </span>
		</span>
		<span class="accordionRule accordionRule-end"></span>
	</a>
	<div class="panel">
		<div class="panel-content">
			<?php echo $content ?>
		</div>
	</div>
</div>
