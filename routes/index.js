exports.main = function(req,res){

	res.render('choose');

}


exports.room_window = function(req,res){

	var room = req.params.room;
	res.render('room', { room : room });

}