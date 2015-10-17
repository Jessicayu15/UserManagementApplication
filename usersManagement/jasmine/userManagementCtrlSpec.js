describe('controller specs', function() {

	beforeEach(function() {
		module('userManagementApp');
	});

	var scope, myService;

	beforeEach(inject(function($rootScope, $controller,_myService_) {

		scope = $rootScope.$new();

		$controller('userManagementCtrl', {
			$scope : scope
		});
        myService = _myService_;
	}));

		it('should fetch myService data', function() {
			console.log(myService.editSelectedFlag);

		});
    
    
});