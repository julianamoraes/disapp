angular.module('disapp').factory('Desaparecido', 
	function($resource) {
		return $resource('/desaparecidos/:id');
	}
);