/**
 * @ngdoc directive
 * @name searchBar
 * @id searchBar
 * @description This directives renders the search bar and calls companyService
 *
 * ###How to use this directive
 * <div search-bar=object></div>
 */
app.directive('searchBar', ['companyService', function(companyService){
	return {
		restrict: 'EAC',
		templateUrl: 'templates/searchBar.html',
		replace: true,
		scope: {
			company: '=searchBar'
		},
		link: function(scope, elem) {
			scope.grabCompany = function() {
				companyService.getCompany(scope.companyName).then(function(res) {
					scope.company = res.data;
				});
			};
		}
	};
}]);