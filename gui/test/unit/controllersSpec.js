/* jasmine specs for controllers go here */
describe('Pivotal Expert GUI controllers', function() {

	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected){
				return angular.equals(this.actual, expected);
			}
		});
	});

  describe('Dummy unit test', function(){
  
	it('should create "phones" model with 3 phones', function() {
		var ctrl = "1";
		//test works as dummy
		expect("1").toBe("1");
	});
  }); //end of dummy unit test
  
   describe('ProjectListCtrl', function(){
    var scope, $browser, ctrl;

    beforeEach(function() {
      scope = angular.scope();
      $browser = scope.$service('$browser');

		//the names doesnt matter, problem lies in the ctrl variable not recognizable
      $browser.xhr.expectGET('res/project/project_index').respond([{name: 'project 1'},
                                                            {name: 'project 2'}]);
      ctrl = scope.$new(ProjectListCtrl);
    });

    it('should display all the project list items', function() {
      expect(ctrl.projects).toEqual([]);
      $browser.xhr.flush();

      expect(ctrl.phones).toEqualData([{name: 'Nexus S'},
                                       {name: 'Motorola DROID'}]);
    });
  }); //end of ProjectListCtrl
  
});