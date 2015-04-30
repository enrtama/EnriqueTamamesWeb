'use strict';

// Contacts controller
angular.module('contacts').controller('ContactsController', ['$scope', '$stateParams', '$location', 'Authentication', '$modal', 'Contacts', '$log',
	function($scope, $stateParams, $location, Authentication, $modal, Contacts, $log) {
		$scope.authentication = Authentication;

		// Create new Contact
		$scope.create = function() {
			// Create new Contact object
			var contact = new Contacts ({
				name: this.name
			});

			// Redirect after save
			contact.$save(function(response) {
				$location.path('contacts/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Contact
		$scope.remove = function(contact) {
			if ( contact ) { 
				
				var modalInstance = $modal.open({
					templateUrl: 'modules/core/views/modal.client.view.html',
					controller: 'ModalInstanceController',
					resolve: {
						content: function () {
							return {
								header: 'Delete contact',
								body: 'Are you sure you want to delete?',
								object: contact
							};
						}
					}
				});

				modalInstance.result.then(function () {
					contact.$remove();
					for (var i in $scope.contacts) {
						if ($scope.contacts [i] === contact) {
							$scope.contacts.splice(i, 1);
						}
					}
				}, function () {
					// $log.info('Modal dismissed at: ' + new Date());
				});
			} else {
				$scope.contact.$remove(function() {
					$location.path('contacts');
				});
			}
		};

		// Update existing Contact
		$scope.update = function() {
			var contact = $scope.contact;

			contact.$update(function() {
				$location.path('contacts/' + contact._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Contacts
		$scope.find = function() {
			$scope.contacts = Contacts.query();
		};

		// Find existing Contact
		$scope.findOne = function() {
			$scope.contact = Contacts.get({ 
				contactId: $stateParams.contactId
			});
		};
	}
]);