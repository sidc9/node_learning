var irc = require('irc');

var botConfig = {
	channels: ['#newcoder'],
	server: 'webchat.freenode.net',
	name: 'myIrcBot'
}

var client = new irc.Client(botConfig.server, botConfig.name, {
	channels: botConfig.channels});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

client.addListener('join', function(chnl, nick, msg){
	console.info('connected to irc server');
});

client.addListener('registered', function(msg){
	console.log('registered');
})

client.join('#newcoder',function() {
	console.log('joined');
});

console.log('waiting...');
client.connect(2, function() {
	console.log('connected');
});
console.log('ok done');

client.say('#newcoder', "I'm a bot!");