'use strict';


angular.module('core')
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 30)
	.controller('HomeController', ['$scope', '$document', 'Authentication',
	function($scope, $document, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		var container = angular.element(document.querySelector('#container'));
		var section2 = angular.element(document.querySelector('#section-2'));

		$scope.toTheTop = function() {
			container.scrollTop(0, 5000);
		};

		$scope.toSection2 = function() {
			container.scrollTo(section2, 0, 1000);
		};

	}
]);