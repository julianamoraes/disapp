angular.module('disapp', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {
		$routeProvider.when('/desaparecidos', {
			templateUrl: 'partials/desaparecidos.html',
			controller: 'DesaparecidosController'
		});
		$routeProvider.when('/desaparecido/:desaparecidoId', {
			templateUrl: 'partials/desaparecido.html',
			controller: 'DesaparecidoController'
		});
		$routeProvider.when('/desaparecido', {
			templateUrl: 'partials/desaparecido.html',
			controller: 'DesaparecidoController'
		});
		$routeProvider.otherwise({redirectTo: '/desaparecidos'});
});
