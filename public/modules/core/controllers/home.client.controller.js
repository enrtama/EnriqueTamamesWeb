'use strict';

angular.module('core')
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 30)
	.controller('HomeController', ['$scope', 'Authentication', '$log', '$translate',
		function($scope, Authentication, $log, $translate) {

		// This provides Authentication context.
		$scope.authentication = Authentication;
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
		$scope.changeLanguage = function (e, language) {
			$translate.use(language);
			var current = angular.element(e.currentTarget);
			var languageOptions = angular.element($('.flag'));
			angular.forEach(languageOptions, function(option) {
				var element = angular.element(option);
				if (element.hasClass('selected')) {
					element.removeClass('selected');
					element.addClass('unselected');
				}
			});
			current.addClass('selected');
		};

		$translate(['TITLE', 'TEXT', 'BUTTON_LANG_EN', 'BUTTON_LANG_ES']).then(function (translations) {
			$scope.title = translations.TITLE;
			$scope.text = translations.TEXT;
			$scope.buttonEnglish = translations.BUTTON_LANG_EN;
			$scope.buttonSpanish = translations.BUTTON_LANG_ES;
		});

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
	.controller('SubmitController', ['$scope', '$http', '$location', 'Authentication', '$translate', 'Contacts', 'toasty',
		function($scope, $http, $location, Authentication, translate, Contacts, toasty) {

			$scope.submit = function(form) {
				// HTTP post
				var contact = new Contacts({
					username: $scope.contact.username,
					email: $scope.contact.email,
					message: $scope.contact.message
				});
				contact.$save(function(response) {
					toasty.pop.success({
						title: 'Your message has been sent successfully!',
						sound: false,
						showClose: true,
						clickToClose: false
					});
					$scope.username = '';
					$scope.email = '';
					$scope.message = '';
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;
				});
			};
	}
]);

angular.module('core')
	.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	}
);
