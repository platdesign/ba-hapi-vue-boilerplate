'use strict';

import axios from 'axios';


const backend = axios.create({
	baseURL: '/backend'
});


export default backend;
