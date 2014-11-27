/**
 * @ngdoc service
 * @name companyService
 * @id companyService
 * @description This service calls the Crunchbase API with the company name as a parameter
 *
 */
app.service('companyService', ['$http', function($http){

	var API_KEY = 'f0f7bafa604777d24f493321f40efff5';

	function requestCompany(name) {
		return $http({
			cache: true,
			method: 'GET',
			url: 'http://www.corsproxy.com/api.crunchbase.com/v/2/organization/' + encodeURIComponent(name) + '?user_key=' + API_KEY
		});
	}

	this.getCompany = function(name) {
		return requestCompany(name);
	};
}]);