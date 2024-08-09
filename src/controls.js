const { __ } = wp.i18n;
const { BlockControls } = wp.blockEditor;
const { DropdownMenu, MenuGroup, MenuItem, ToolbarGroup } = wp.components;

const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { theme } = attributes;

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

	return (
		<BlockControls group="other">
			<ToolbarGroup>
				<DropdownMenu
					icon={<span>{__('Theme', 'custom-domain')}</span>}
					label={__('Switch Theme', 'custom-domain')}
				>
					{({ onClose }) => (
						<MenuGroup>
							{themes.map((themeData) => {
								return (
									<MenuItem
										icon={theme === themeData.key ? 'yes' : ''}
										onClick={() => {
											setAttributes({ theme: themeData.key });
											onClose();
										}}
									>
										{themeData.label}
									</MenuItem>
								);
							})}
						</MenuGroup>
					)}
				</DropdownMenu>
			</ToolbarGroup>
		</BlockControls>
	);
};

export default Controls;
