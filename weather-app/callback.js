/**
 * callback function usage
 */

var getUser = (id,callback) => {
	
	var user = {
			name: 'naveen',
			salary:'3222',
			id:id
	}
	
	setTimeout(() => {
		callback(user);
	}, 3000)
	
}

getUser(10,	(userObj) => {
	
	console.log('inside get user callback');
	console.log('user ' + userObj.name);
	
	
}
		
);
