describe('noteCtrl', function() {
	var scope, noteCtrl;

	beforeEach(module('status-io'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		noteCtrl = $controller('noteCtrl', {
			$scope: scope
		});
		scope.notes = 'This is a note';
		scope.$apply();
	}));

	it('should save the note', function() {
		scope.storeNotes(scope.notes);
		expect(window.sessionStorage.getItem('userNote')).toEqual('"This is a note"');
	});

	it('should retrive the note', function() {
		scope.retrieveNotes();
		expect(scope.note).toEqual('This is a note');
	})
});