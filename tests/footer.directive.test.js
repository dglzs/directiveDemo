'use strict';

describe('Test footerInfo', function() {
	var $compile, $rootScope, element;

	beforeEach(module('footer'));

	//load templates
	beforeEach(module('templates'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$rootScope.qiming = {
			name: '启明星辰',
			version: '10.0.13980.1',
			status: 'alpha',
			year: '2015',
			website: 'http://alpha.nj.trantect.com/',
			websiteName: '云子可信官网'
		};
		element = angular.element(
			"<cfooter info='qiming'></cfooter>");
		$compile(element)($rootScope);
		$rootScope.$digest();
	}));

	it('should show websiteName', function() {
		var contents = element.find('a');
		expect(contents.text()).toEqual('云子可信官网');
		});

	it('should show year and name', function() {
		var contents = element.find('span');
		expect(contents.eq(0).text()).toEqual('Copyright © 2015 启明星辰');
		});

	it('should show version and status', function() {
		var contents = element.find('span');
		expect(contents.eq(3).text()).toEqual('version: 10.0.13980.1 alpha');
		});
});
