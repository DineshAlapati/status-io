describe('companyService', function() {
    var service, $httpBackend, $q, $rootScope, company, API_KEY;

    beforeEach(module('status-io'));

    beforeEach(inject(function(_companyService_,_$httpBackend_,_$q_,_$rootScope_) {
        companyService = _companyService_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        company = 'Amazon';
        API_KEY = 'f0f7bafa604777d24f493321f40efff5';

        // expect the actual request
        $httpBackend.expect('GET', 'http://www.corsproxy.com/api.crunchbase.com/v/2/organization/' + company + '?user_key=' + API_KEY);

        // react on that request
        $httpBackend.whenGET('http://www.corsproxy.com/api.crunchbase.com/v/2/organization/' + company + '?user_key=' + API_KEY).respond({
            success: {
                properties: { name: 'Amazon' }
            }
        });
    }));

    it('should return a promise', function () {
        expect(companyService.getCompany('Amazon').then).toBeDefined();
    });

    it('should resolve with data', function () {
        var data;

        // set up a deferred
        var deferred = $q.defer();
        // get promise reference
        var promise = deferred.promise;

        // set up promise resolve callback
        promise.then(function (response) {
            data = response.data.success.properties;
        });

        companyService.getCompany('Amazon').then(function(response) {
            deferred.resolve(response);

        });

        //Explicitly flush pending requests
        $httpBackend.flush();

        // force `$digest` to resolve/reject deferreds
        $rootScope.$digest();

        // make your actual test
        expect(data).toEqual({ name: 'Amazon' });
    });
});