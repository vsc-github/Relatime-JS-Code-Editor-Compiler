var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var routes = require('./routes');
var Sandbox = require("sandbox"), s = new Sandbox();
var room,user;

app.set('view engine','ejs');

app.get('/', function(req,res){
	res.render('choose');
});
app.get('/:room?/:user?',function(req,res){
	room = req.params.room;
	user = req.params.user;
	res.render('room', { room : room , user: user});
});



io.on('connection',function(socket){

//WHEN A NEW USER JOINS A ROOM
	socket.on('room',function(room){
		console.log("Someone joined ");
		socket.join(room);
		socket.broadcast.to(room).emit('welcome me');
	});


//WHEN USER CHANGES THE TEXTAREA
	socket.on('user input' , function(msg){
		io.sockets.in(room).emit('user input', msg);
	});

//WHEN USER HITS THE RUN BUTTON
	socket.on('run code' , function(msg){

		s.run( msg, function( output ) {
			
			if(output.console.length>0)
		   		io.sockets.in(room).emit('code output', output.console.toString());
		   	else
		   		io.sockets.in(room).emit('code output', output.result.toString());
		});

	});

//WHEN USER CLOSES THE WEBPAGE
	socket.on('disconnect',function(socket){
	console.log("Someone disconnected from awesome room!!");
	});

});


var port = Number(process.env.PORT || 3000);
http.listen(port);
