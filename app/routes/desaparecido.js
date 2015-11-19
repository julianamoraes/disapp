module.exports = function(app) {
	var controller = app.controllers.desaparecido;
	//app.get('/desaparecidos', controller.listaDesaparecidos);
	//app.get('/desaparecidos/:id', controller.obtemDesaparecido);

	app.route('/desaparecidos')
		.get(controller.listaDesaparecidos)
		.post(function(req, res) {
	        controller.salvaDesaparecido(req, res);
	    });
	app.route('/desaparecidos/:id')
		.get(controller.obtemDesaparecido)
		.delete(function(req, res) {
	        controller.removeDesaparecido(req, res);
	    });

};