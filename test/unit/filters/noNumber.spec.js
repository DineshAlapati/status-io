describe('noNumber', function() {
	var filter;

	beforeEach(module('status-io'));

	beforeEach(inject(function($filter) {
		filter = $filter('noNumber');
	}));

	it('should not allow numbers', function() {
		var value = 100;
		expect(filter(value, '')).toBe('');
	});		

	it('should allow letters', function() {
		var value = 'gonzalo';
		expect(filter(value, '')).toBe(value);
	})
});