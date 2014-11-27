/**
 * @ngdoc directive
 * @name companyStats
 * @id companyStats
 * @description This directives renders the company stats
 *
 * ###How to use this directive
 * <div company-stats="object"></div>
 */
app.directive('companyStats', function(){
	return {
		restrict: 'EAC',
		templateUrl: 'templates/companyStats.html',
		scope: {
			company: '=companyStats'
		}
	};
});