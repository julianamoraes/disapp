angular.module('disapp').controller('DesaparecidosController',
	function ($scope, $resource) {
		$scope.desaparecidos = [];
		$scope.filtro = '';

		/*$scope.init = function() {
			buscaDesaparecidos();
		};

		$scope.init();*/

		var Desaparecido = $resource('/desaparecidos/:id');

		function buscaDesaparecidos() {
			Desaparecido.query(
				function(desaparecidos) {
					$scope.desaparecidos = desaparecidos;
				},
				function(erro) {
					console.log("Não foi possível obter a lista de desaparecidos.");
					console.log(erro);
				}
			);
		}
		buscaDesaparecidos();

		$scope.remove = function(desaparecido) {
			Desaparecido.delete({id: desaparecido._id},
				buscaDesaparecidos,
				function(erro) {
					console.log("Não foi  possível remover.");
					console.log(erro);
				});
		};	

});