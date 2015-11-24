var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

//ObjectID de algum desparecido existente
var _idDesejado  = new  ObjectID('53ee689e89bd201218944bba');

MongoClient.connect('mongodb://127.0.0.1:27017/disapp',
	function(erro, db) {
		if(erro) throw err;
		db.collection('disapp').findOne({_id : _idDesejado},
			function(erro, desparecido) {
				if (erro) throw err;
				console.log(desparecido);
			});
	});