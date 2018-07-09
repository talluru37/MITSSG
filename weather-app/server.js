/**
 * http://usejsdoc.org/
 */

const express = require('express');

var app = express();

app.use(express.static('/global/'));



app.get('/', (request,response) => {
	
	//response.send('Hello express..')

	response.contentType('application/json');
	response.send({
		name:'naveen',
		salary:'1224'
	});
	
});

app.listen(3000);