<?php
/**
 * Plugin Name:       Copyright Date Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       copyright-date-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_copyright_date_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_copyright_date_block_block_init' );

function get_tables_name(){
	global $wpdb;
	$tables = $wpdb->get_results('show tables');
	return array_map(function ($in) {
		return $in->Tables_in_wp; // TODO Fuck this shit
	}, $tables);
}
add_action( 'init', 'get_tables_name');
add_action( 'rest_api_init', function() {
	register_rest_route( 'myplugin/v1', '/tables', array(
		'methods' => 'GET',
		'callback' => 'get_tables_name',
		'permission_callback' => '__return_true'
	));
});

/*function dependecy(){
	wp_register_script( 'edit', 'wp-content/plugins/copyright-date-block/src/edit.js', array('wp-api') );
	wp_enqueue_script( 'edit' );
}
add_action('wp_enqueue_scripts', 'dependecy');*/