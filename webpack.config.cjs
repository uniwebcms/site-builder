/**
 * For configuration details and customization options, see:
 * https://github.com/uniwebcms/site-content-collector/blob/main/docs/webpack-config.md
 */
const { getConfig } = require('@uniwebcms/site-content-collector/webpack');
const webpack = require('webpack');

module.exports = async (_, argv) => getConfig(webpack, argv, __dirname);
