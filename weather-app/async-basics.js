/**
 * http://usejsdoc.org/
 */

console.log('starting the app..');


setTimeout( () => {
	
	console.log('inside callback ');
}, 2000)


setTimeout( () => {
	
	console.log('inside callback 2 ');
}, 0)


console.log('finishing the app..');