'use strict';


module.exports = {
	method: 'GET',
	path: '/',
	async handler(req, h) {
		return {
			title: 'Hello World'
		}
	}
}
