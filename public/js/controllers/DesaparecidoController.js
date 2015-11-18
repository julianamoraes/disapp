angular.module('disapp').controller('DesaparecidoController',
	function($scope, $routeParams, $resource) {
		var Desaparecido = $resource('/desaparecidos/:id');

		Desaparecido.get({id: $routeParams.desaparecidoId},
			function(desaparecido) {
				$scope.desaparecido =  desaparecido;
			},
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível obter o registro.'
				};
				console.log(erro);
			});
});