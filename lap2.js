var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
let i=1 ;
let count ;
client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5735512104');
});
client.on('data', function(data) {
 console.log('DATA: ' + data);
 	i++
 	client.write(i.toString())
 	console.log('input: '+ i.toString())
 	if(data == "BINGO"){
 		client.destroy()
 	}
 	if(data == "WRONG"){
 		count ++
 	}
 	else if (count = 5){
 		client.destroy()
 	}
 
});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
