/**
 * @ngdoc filter
 * @name noNumber
 * @id noNumber
 * @description returns value without numbers
 */
app.filter('noNumber', ['$filter', function($filter) { 
	var regex = /^[A-z]+$/;

	return function(input) {
		if (regex.test(input)) {
			return input;
		} else {
			return '';
		}
	};
}]);