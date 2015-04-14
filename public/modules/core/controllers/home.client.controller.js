'use strict';

angular.module('core')
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 30)
	.controller('HomeController', ['$scope', 'Authentication', '$modal', '$log',
	function($scope, Authentication, $modal, $log) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.container = angular.element(document.querySelector('#rightColumn'));
		$scope.sections = angular.element($('.section').css('height', window.screen.availHeight));
		$scope.myInterval = 2000;
		$scope.alerts = [
			{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
			{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
		];
		$scope.user = {
			name: 'awesome user'
		}; 

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

		// Example actions
		$scope.showMessage = function() {
			alert('Clicked!');
  		};

  		// Alerts
		$scope.addAlert = function() {
			$scope.alerts.push({msg: 'Another alert!'});
		};
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		// Modal
		$scope.open = function (size) {
			var modalInstance = $modal.open({
				templateUrl: 'modules/core/views/modal.client.view.html',
				controller: 'ModalInstanceController',
				size: size,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	}
]);

angular.module('core')
	.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	}
);
