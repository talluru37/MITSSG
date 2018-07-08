/**
 * make ajax call
 */

var request = require('request');

request({
	url: 'https://jsonplaceholder.typicode.com/posts',
	json:true
}, (error,response,body) => {
	console.log(body);
}

);