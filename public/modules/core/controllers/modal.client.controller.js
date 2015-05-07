'use strict';

angular.module('core')
	.controller('ModalInstanceController', ['$scope', '$modalInstance', 'content',  function($scope, $modalInstance, content) {
		$scope.header = content.header;
		$scope.body = content.body;
		$scope.object = content.object;

		$scope.ok = function () {
			$modalInstance.close();
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}
]);