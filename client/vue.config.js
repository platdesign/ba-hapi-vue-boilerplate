'use strict';

const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	chainWebpack: config => {
		config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');

		config.plugin('chunkmanifest')
			.use(ManifestPlugin, []);

	},
	devServer: {
		port: process.env.PORT || 9001,

		proxy: {
			'/backend': {
				target: 'http://localhost:4000',
				ws: true,
				changeOrigin: true
			}
		}

	},



}

