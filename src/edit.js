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
import { useBlockProps } from '@wordpress/block-editor';

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
 * @return {Element} Element to render.
 */

import apiFetch from '@wordpress/api-fetch';


export default /*async*/ function Edit() {
	//wp_enqueue_script( 'wp-api' );
	//console.log(wp.api);

	// TODO use react statsto replace unusable await ...

	let tabless = "fuck this shit"

	/*await*/ apiFetch( { path: '/myplugin/v1/tables' } ).then( ( tables ) => { // TODO what about wp.api ??
		console.log(tables)
		tabless = tables
	} ).catch((e) => {
		console.log(e)
	});

	return (
		<p { ...useBlockProps() }>
			{ __(
				JSON.stringify(tables),
				'copyright-date-block'
			) }
		</p>
	);
}
