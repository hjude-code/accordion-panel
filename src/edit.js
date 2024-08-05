/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls, useSetting } from '@wordpress/block-editor';
import {Card, CardBody, CardHeader, Heading, CardMedia, PanelRow, Panel, PanelBody, PanelHeader, TextControl, ColorPicker, ColorPalette} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const styleVars = {
		'--ruleColor': attributes.ruleColor,
		'--panelHeadingColorClose': attributes.panelHeadingColorClose,
		'--panelHeadingColorOpen': attributes.panelHeadingColorOpen,
		'--panelBgColor': attributes.panelBgColor,
	}

	return (
		<div { ...useBlockProps({style: styleVars}) }>
			<InspectorControls>
				<Panel header="Controls">
					<PanelBody title="Panel Heading" initialOpen={ true }>
						<PanelRow>
							<TextControl
								label="Panel Heading Text"
								value={ attributes.panelHeading }
								onChange={ ( newHeading ) => setAttributes({panelHeading:newHeading}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Panel Background Color" initialOpen={ false }>
						<PanelRow>
							<ColorPalette
								header="Panel Background Color"
								label="Panel Background Color"
								value={ attributes.panelBgColor }
								colors={[...useSetting('color.palette')]}
								onChange={ ( newColor ) => setAttributes({panelBgColor:newColor}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Panel Heading Color - Open" initialOpen={ false }>
						<PanelRow>
							<ColorPalette
								value={ attributes.panelHeadingColorOpen }
								colors={[...useSetting('color.palette')]}
								onChange={ ( newColor ) => setAttributes({panelHeadingColorOpen:newColor}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Panel Heading Color - Closed" initialOpen={ false }>
						<PanelRow>
							<ColorPalette
								value={ attributes.panelHeadingColorClose }
								colors={[...useSetting('color.palette')]}
								onChange={ ( newColor ) => setAttributes({panelHeadingColorClose:newColor}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Rules" initialOpen={ false }>
						<PanelRow>
							<ColorPalette
								value={ attributes.ruleColor }
								colors={[...useSetting('color.palette')]}
								onChange={ ( newColor ) => setAttributes({ruleColor:newColor}) }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div class="panel-header">
				<span class="accordionRule accordionRule-left"></span>
				<span class="panel-headings">
						<span class="panel-heading"><h2 >{attributes.panelHeading}</h2></span>
				</span>
				<span class="accordionRule accordionRule-right"></span>
			</div>
			<div class="panel">
				<div class="panel-content">
					<InnerBlocks/>
				</div>
			</div>
		</div>
	);
}
