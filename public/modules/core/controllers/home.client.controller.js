'use strict';

angular.module('core')
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 30)
	.controller('HomeController', ['$scope', 'Authentication', '$modal', '$log', '$translate', 'toasty',
		function($scope, Authentication, $modal, $log, $translate, toasty) {

		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.sections = angular.element($('.section').css('height', window.screen.availHeight));
		$scope.myInterval = 2000;
		$scope.alerts = [
			{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
			{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
		];
		$scope.user = {
			name: 'awesome user'
		}; 

		// Translation settings
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};

		$translate(['TITLE', 'TEXT', 'BUTTON_LANG_EN', 'BUTTON_LANG_ES']).then(function (translations) {
			$scope.title = translations.TITLE;
			$scope.text = translations.TEXT;
			$scope.buttonEnglish = translations.BUTTON_LANG_EN;
			$scope.buttonSpanish = translations.BUTTON_LANG_ES;
		});

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

		// Toast example
		$scope.openToast = function() {
			toasty.pop.success({
				title: 'Your comment has been successfully added!',
				sound: false,
				showClose: true,
				clickToClose: false
			});
		};

		// Sortable example
		var i;
		$scope.itemsList = {
			items1: [],
			items2: []
		};

		for (i = 0; i <= 5; i += 1) {
			$scope.itemsList.items1.push({'Id': i, 'Label': 'Item ' + i});
		}

		for (i = 0; i <= 5; i += 1) {
			$scope.itemsList.items2.push({'Id': i, 'Label': 'Item 2_' + i});
		}
		$scope.sortableOptions = {
			containment: '#sortable-container',
			//restrict move across columns. move only within column.
			accept: function (sourceItemHandleScope, destSortableScope) {
			  return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
			}
		};
	}
]);

angular.module('core')
	.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	}
);
