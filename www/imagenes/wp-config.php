<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'aupabilbaoeu');

/** MySQL database username */
define('DB_USER', 'aupabilbaoeu');

/** MySQL database password */
define('DB_PASSWORD', 'o1a9B6l4B');

/** MySQL hostname */
define('DB_HOST', 'aupabilbaoeu.mysql.db');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ijqmOOKxDfYEhMj0HolxmJ1cOhIVh7JTFtyvj2FY5/fy0DwwxthvakpMdToT');
define('SECURE_AUTH_KEY',  'efPad/D5aD/YwRWTskZIvVk6Bnho7Br2AECnKyQXEezqTUgDdB+uCXKs3k+a');
define('LOGGED_IN_KEY',    'VtOfrgu3juosqSdE1xwPolxbSjiHa0fClAHykyHqiVnM1IE8VJU3T/uwPDmX');
define('NONCE_KEY',        'PfVCtqOpeBIf6hVV6mpTShJV1188VL3xI1tTGS8ILRIC8xGGm5TWF1dVHvp6');
define('AUTH_SALT',        'YyJxjpd3H8PJ1zL/nhEApYFV361VPs/s7GzLcg8nCW4CI30Kffc8MpJ7CCmT');
define('SECURE_AUTH_SALT', 'RhhFGoNhd2F/mlHfRYfTP9uDkZ9INsYNfgZEsaJUjmHs4Khu65SndJYgcv8x');
define('LOGGED_IN_SALT',   'o2JxOCJHoobMoUQIs9QK1qL4AsajWJoQpyVS0kVwaQJ7xJ+Fgq6lpbhn1Bly');
define('NONCE_SALT',       'M27EMpob5LpYEwb4w6mzNgsyVg5ATSCd2qHkjWICbT/VJR92HlroFQWYYP7W');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wor2749_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
