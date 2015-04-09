'use strict';


angular.module('core')
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 30)
	.controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.container = angular.element(document.querySelector('#rightColumn'));
		$scope.sections = angular.element($('.section').css('height', window.screen.availHeight));
		$scope.myInterval = 2000;

		$scope.toTheTop = function() {
			$scope.container.scrollTop(0, 500);
		};

		// Add Carousel
		var slides = $scope.slides = [];
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: 'http://placekitten.com/' + newWidth + '/300',
				text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
		};
		for (var i = 0; i < 4; i++) {
			$scope.addSlide();
		}
	}
]);