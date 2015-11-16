var footer = angular.module('footer', []);

footer.controller('footerController', ['$scope', function($scope) {
	$scope.demostar = {
		name: 'Demostar',
		version: '0.0.1',
		status: 'building',
		year: '2002-2015',
		website: 'http://www.demostar.com',
		websiteName: 'website'
	};
	$scope.beibi = {
		name: 'Beibi',
		version: '0.1.4',
		status: 'building',
		year: '2012-2015',
		website: 'http://www.beibi.cn',
		websiteName: 'our site'
	};
	

}]);

footer.directive('cfooter', function() {
	return {
		restrict: 'E',
		scope: {
			companyInfo: '=info'
		},
		templateUrl: 'views/footerInfo.html'
	};
});
