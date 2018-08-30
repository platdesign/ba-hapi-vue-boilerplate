'use strict';

import Vue from 'vue';
import HelloWorld from './components/hello-world';




const app = new Vue({
	render: h => h(HelloWorld)
});


app.$mount('#app');
