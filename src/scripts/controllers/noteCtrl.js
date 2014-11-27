/**
 * @ngdoc controller
 * @name noteCtrl
 * @id noteCtrl
 * @description This is the controller for the note creation tool
 */
app.controller('noteCtrl', ['$scope', '$filter', function($scope, $filter) {

	var noNumbers = $filter('noNumber'), note;

	$scope.storeNotes = function(note) {
		sessionStorage.userNote = angular.toJson(note);
		alert('Saved');
	};

 	$scope.retrieveNotes = function() {
		$scope.note = angular.fromJson(sessionStorage.userNote);
	};
}]);