'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'toasty', function($scope, $stateParams, $location, Authentication, Articles, toasty) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					toasty.pop.success({
						title: 'The article has been removed!',
						sound: false,
						showClose: true,
						clickToClose: false
					});
					$location.path('articles');
				});
			}
		};

		$scope.update = function(article) {
			article.$update(function() {
				toasty.pop.success({
					title: 'The article has been updated!',
					sound: false,
					showClose: true,
					clickToClose: false
				});
				$location.path('articles');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);