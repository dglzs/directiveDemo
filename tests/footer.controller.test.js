'use strict';
describe('footerController', function() {
	beforeEach(module('footer'));

	var $controller;

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	describe('company info', function() {
		var $scope, controller;
		var result = [{
			name: 'Demostar',
			version: '0.0.1',
			status: 'building',
			year: '2002-2015',
			website: 'http://www.demostar.com',
			websiteName: 'website'
		}, {
			name: 'Beibi',
			version: '0.1.4',
			status: 'building',
			year: '2012-2015',
			website: 'http://www.beibi.cn',
			websiteName: 'our site'
		}, {
			name: '启明星辰',
			version: '10.0.13980.1',
			status: 'alpha',
			year: '2015',
			website: 'http://alpha.nj.trantect.com/',
			websiteName: '云子可信官网'
		}];

		beforeEach(function() {
			$scope = {};
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
			$scope.qiming = {
				name: '启明星辰',
				version: '10.0.13980.1',
				status: 'alpha',
				year: '2015',
				website: 'http://alpha.nj.trantect.com/',
				websiteName: '云子可信官网'
			}
			controller = $controller('footerController', {
				$scope: $scope
			});
		});

		it('should equal first result', function() {
			expect($scope.demostar).toEqual(result[0]);
		});

		it('should equal second result', function() {
			expect($scope.beibi).toEqual(result[1]);
		});

		it('should equal third result', function() {
			expect($scope.qiming).toEqual(result[2]);
		});
	});
});
