var desaparecidos = [
	{_id: 1, nome: 'Desaparecido 1', email: 'cont1@gmail.com'},
	{_id: 2, nome: 'Desaparecido 2', email: 'cont2@gmail.com'},
	{_id: 3, nome: 'Desaparecido 3', email: 'cont3@gmail.com'}
];

var ID_DESAPARECIDO_INC = 3;

module.exports = function() {
	var controller = {};
	controller.listaDesaparecidos = function(req, res) {
		//envia a lista
		res.json(desaparecidos);
	}
	controller.obtemDesaparecido = function(req, res) {
		var idDesaparecido = req.params.id;
		var desaparecido = desaparecidos.filter(function(desaparecido) {
			return desaparecido._id == idDesaparecido;
		}) [0];
		desaparecido ?
		res.json(desaparecido) :
		res.status(404).send('Desaparecido não encontrado.');
	}
	return controller;

	controller.removeDesaparecido = function(req, res) {
		var idDesaparecido = req.params.id;
		desaparecidos = desaparecidos.filter(function(desaparecido) {
			return desaparecido._id != idDesaparecido;
		});
		res.send(204).end();
		//console.log('API: removeDesaparecido: ' + idDesaparecido);
	};

	controller.salvaDesaparecido = function(req, res) {
		 var desaparecido = req.body;
		 desaparecido = desaparecido._id ?
		 	atualiza(desaparecido) :
		 	adiciona(desaparecido);
		 res.json(desaparecido);
	};

	function adiciona(desaparecidoNovo) {
		desaparecidoNovo._id = ++ID_DESAPARECIDO_INC;;
		desaparecidos.push(desaparecidoNovo);
		return desaparecidoNovo;
	}

	function atualiza(desaparecidoAlterar) {
		desaparecidos = desaparecidos.map(function(desaparecido) {
			if(desaparecido._id == desaparecidoAlterar._id) {
				desaparecido = desaparecidoAlterar;
			}
			return desaparecido;
		});
		return desaparecidoAlterar;
	}
}