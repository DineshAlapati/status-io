describe('searchBarDirective', function() {
    var $compile, scope, elem, isolated, companyService,
        mockedData = {
            data : {
                properties: {
                    name: 'Amazon',
                    founded_on_year: 1994,
                    stock_symbol: "AMZN"
                }
            }
        };

    beforeEach(module('status-io', 'templates/searchBar.html', function($provide) {
        $provide.value('companyService', {
            getCompany: function() {
                return {
                    then: function(callback) { return callback(mockedData); }
                };
            }
        });
    }));

    beforeEach(inject(function(_$compile_, _$rootScope_,_companyService_) {
        $compile = _$compile_;
        scope = _$rootScope_.$new();
        companyService = _companyService_;
        elem = $compile('<div search-bar="company"></div>')(scope);
        scope.$digest();
        isolated = elem.isolateScope();
    }));

    it('should render the search bar directive', function() {
        expect(elem.hasClass('search')).toBeTruthy();
    });

    it('should call companyService with the company name', function() {
        isolated.companyName = 'Facebook';
        spyOn(companyService, 'getCompany').andCallThrough();
        elem.find('div').find('form').find('button').triggerHandler('click');
        scope.$digest();
        expect(companyService.getCompany).toHaveBeenCalledWith('Facebook');
    });

    it('should expose requested to scope', function() {
        elem.find('div').find('form').find('button').triggerHandler('click');
        scope.$digest();
        expect(scope.company).toEqual({ properties : { name : 'Amazon', founded_on_year : 1994, stock_symbol : 'AMZN' }});
    });
});