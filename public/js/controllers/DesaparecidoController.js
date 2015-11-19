angular.module('disapp').controller('DesaparecidoController',
	function($scope, $routeParams, $resource) {

		var Desaparecido = $resource('/desaparecidos/:id');
		//nao deu certo instanciar o resource pelo service

		$scope.desaparecido = new Desaparecido();

		if ($routeParams.desaparecidoId) {
			Desaparecido.get({id: $routeParams.desaparecidoId},
				function(desaparecido) {
					$scope.desaparecido = desaparecido;
				},
				function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível obter o registro. Novo registro.'
					};
				}
			);
		} else {
			$scope.desaparecido = {};
		}

		$scope.salva = function() {
			Desaparecido.save($scope.desaparecido)
				.$promise.then(function(data){
					$scope.mensagem = {texto: 'Salvo com sucesso.'};
					//limpar form
					$scope.desaparecido = new Desaparecido();
				})
				.catch(function(erro) {
					$scope.mensagem = {texto: 'Não foi possível salvar.'}
				});
		};
		
});