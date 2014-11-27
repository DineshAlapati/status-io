/**
 * @ngdoc directive
 * @name uiNavbar
 * @id uiNavbar
 * @description This directives renders the uiNavbar
 *
 * ###How to use this directive
 * <div ui-navbar></div>
 */
app.directive('uiNavbar', function(){
	return {
		restrict: 'EAC',
		templateUrl: 'templates/navbar.html',
		replace: true
	};
});