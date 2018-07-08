/**
 * make ajax call
 */

var request = require('request');
var yargs = require('yargs');



var url = 'https://jsonplaceholder.typicode.com/posts';

// var encodeAddress = encodeURIComponent(url); - for encoding URI parameters

request({
	url: url,
	json:true
}, (error,response,body) => {
	//console.log(body);
	
	// stringify method is used to create a JSON string from Object/array
	var jsonobj = JSON.stringify(body);
	
	//console.log(body);
	
	console.log('length is ' + jsonobj.length);
	//jsonobj.search(pattern)

	console.log(`results ${body[0].userId}`);
	
	
}

);