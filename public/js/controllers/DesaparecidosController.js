angular.module('disapp').controller('DesaparecidosController',
	function ($resource, $scope) {

		$scope.desaparecidos = [];
		
		$scope.filtro = '';
		
		$scope.mensagem = {texto: ''};

		/*$scope.init = function() {
			buscaDesaparecidos();
		};

		$scope.init();*/

		var Desaparecido = $resource('/desaparecidos/:id');
		//nao deu certo instanciar o resource pelo service

		function buscaDesaparecidos() {
			Desaparecido.query(
				function(desaparecidos) {
					$scope.desaparecidos = desaparecidos;
					$scope.mensagem = {};
				},
				function(erro) {
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista.'
					};
				});
		}
		buscaDesaparecidos();

		$scope.remove = function(desaparecido) {
			Desaparecido.delete({id: desaparecido._id},
				buscaDesaparecidos,
				function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível remover.'
					};
					console.log(erro);
				});
		};	

});