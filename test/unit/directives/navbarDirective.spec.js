describe('navbarDirective', function() {
	var $compile, $scope, elem;

	beforeEach(module('status-io', 'templates/navbar.html'));

	beforeEach(inject(function(_$compile_, $rootScope) {
		$compile = _$compile_;
		$scope = $rootScope.$new();
		elem = $compile('<div ui-navbar></div>')($scope);
		$scope.$apply();
	}));

	it('should render the navbar directive', function() {
		expect(elem.hasClass('row')).toBeTruthy();
	});
});