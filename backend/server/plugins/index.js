'use strict';



module.exports = {
	async register(server) {

		// Logging
		await server.register(require('./logging'));

		// Routes
		await server.register({
			plugin: require('./routes'),
			options: {
				dirs: { './server/routes': '/' }
			}
		});

		// Auth
		await server.register(require('./auth'));

	},
	name: 'plugins-wrapper'
}
