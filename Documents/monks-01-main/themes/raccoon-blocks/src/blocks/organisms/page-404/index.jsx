
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import './style.scss';
import metadata from './block.json';
import Controls from "./controls.jsx";

registerBlockType(metadata.name, {
	title: metadata.title,
	description: metadata.description,
	attributes: metadata.attributes,
	example: metadata.example,
	category: metadata.category,
	icon: 'admin-site',
	edit: EditorComponent,
	save: () => <InnerBlocks.Content />,
});

/**
 * Block component at wp-admin
 * @param {*} props Block's properties
 * @returns JSX
 */
export default function EditorComponent({ attributes, setAttributes }) {
	const randomComponentId = Math.floor(Math.random() * 10000);

	const { variant, bgColor, marginM, marginD } = attributes;

	const inlineStyles = `
		.page-404 {
			background: ${bgColor}
		}

		.page-404.margin-bottom-${randomComponentId} {
			margin-bottom: ${marginM}px;
		}

		
		@media (min-width: 768px) {
			.page-404.margin-bottom-${randomComponentId} {
				margin-bottom: ${marginD}px;
			}
		}
	`;

	return (
		<>
			{/* Editor controls */}
			<Controls attributes={attributes} setAttributes={setAttributes} />

			<style>{inlineStyles}</style>

			<div className={`page-404 ${variant} margin-bottom-${randomComponentId}`}>
				<InnerBlocks template={[['rm/typography', { tag: 'p', size: 'body-1', color: '#0063A4' }]]} />
			</div>
		</>
	);
}