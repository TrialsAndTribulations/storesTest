// import { writable } from 'svelte/store';
const { writable } = require('svelte/store');
exports.myObject = writable({ test: 42 });
