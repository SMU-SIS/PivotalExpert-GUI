/* jasmine specs for controllers go here */
describe('Pivotal Expert GUI controllers', function() {

	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected){
				return angular.equals(this.actual, expected);
			}
		});
	});

	//this is just a test ensure that the file is running properly
  describe('Dummy unit test', function(){
  
	it('must pass based on the laws of mathematics!', function() {
		var ctrl = "1";
		//test works as dummy
		expect("1").toBe("1");
	});
  }); //end of dummy unit test
  
  
   describe('ProjectListCtrl', function () {
  var scope = null, $browser = null, ctrl = null,
    projects = [{ name: 'p1' }, { name: 'p2' }];

  function newController() {
    $browser.xhr.
      expectGET('/rest/project/project_index').
      respond(angular.copy(projects));
    ctrl = scope.$new(ProjectListCtrl);
  }

  beforeEach(function () {
    this.addMatchers({
      toEqualData: function (expected) {
        return angular.equals(this.actual, expected);
      }
    });
    scope = angular.scope();
    $browser = scope.$service('$browser');
    ctrl = null;
  });

  afterEach(function () {
    expect($browser.xhr.requests.length).
      toBe(0, 'You have not flushed the requests.');
  });

  describe('inizialization', function () {
    it('should fetch project index', function () {
      newController();
      $browser.xhr.flush();
      expect(ctrl.projects).toEqualData(projects);
    });
  });

});
  
});