const { __ } = wp.i18n;
const { BlockControls } = wp.blockEditor;
import { ToolbarDropdownMenu, MenuGroup, MenuItem, ToolbarGroup } from '@wordpress/components';

const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { theme, table } = attributes;

	/*const themes = [
		{
			key: '',
			label: __('Default', 'custom-domain'),
		},
		{
			key: 'dark',
			label: __('Dark', 'custom-domain'),
		},
		{
			key: 'retro',
			label: __('Retro', 'custom-domain'),
		},
		{
			key: 'vintage',
			label: __('Vintage', 'custom-domain'),
		},
		{
			key: 'tables',
			label: __(JSON.stringify(props.tables), 'custom-domain'),
		},
	];*/
	const KONTROLS = Object.keys(props.tables).map((table) => {
		return {key: table, label: table}
	})
	const themes = KONTROLS
	console.log("KONTORLS", KONTROLS)

	return (																// https://github.com/WordPress/gutenberg/blob/trunk/docs/getting-started/fundamentals/block-in-the-editor.md
		<BlockControls group="other">
			<ToolbarGroup>
				<ToolbarDropdownMenu												// https://developer.wordpress.org/block-editor/reference-guides/components/dropdown-menu/
					icon={<span>{__('Theme', 'custom-domain')}</span>}		// https://stackoverflow.com/questions/49425755/arrow-functions-and-the-use-of-parentheses-or-or
					label={__('Switch Theme', 'custom-domain')}
				>
					{({ onClose }) => (
						<MenuGroup>
							{themes.map((themeData) => {
								return (
									<MenuItem
										icon={theme === themeData.key ? 'yes' : ''}
										onClick={() => {
											setAttributes({ table: themeData.key });
											onClose();
										}}
									>
										{themeData.label}
									</MenuItem>
								);
							})}
						</MenuGroup>
					)}
				</ToolbarDropdownMenu>
			</ToolbarGroup>
		</BlockControls>
	);
};

export default Controls;
