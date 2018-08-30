/**
 * Vue component class.
 *
 * @name 			hello-world
 * @project 	client
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			August 30th 2018, 2:47:32 pm
 */


import backend from '@/providers/backend';


export default {

	name: 'hello-world',

	created() {

		setTimeout(() => {
			this.loadTitle();
		}, 1000);

	},

	data() {
		return {
			titleSuffix: null
		}
	},

	methods: {

		async loadTitle() {

			let { data } = await backend.get('/test');

			this.titleSuffix = data.title;

		}

	},

	computed: {
		title() {
			return `Title: ${this.titleSuffix}`;
		}
	}

}
