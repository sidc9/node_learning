
var dns = require('dns');

name = 'www.google.com';
dns.resolve4(name, myCallbackFunc);

function myCallbackFunc(err, addr){

	if(err) throw err;

	console.log('address: ' + JSON.stringify(addr));
}

console.log('Ok done');