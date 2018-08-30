'use strict';


const Code = require('code');
const { expect } = Code;

const boot = require('../server');
const config = require('config');


describe('First', () => {

	let server;
	beforeEach(async () => server = await boot(config));


	describe('[GET] /', () => {

		it(`should return 'Hello World'`, async () => {

			let { result } = await server.inject({
				method: 'GET',
				url: '/'
			});

			expect(result)
				.to.equal('Hello World');

		});


	});


});
