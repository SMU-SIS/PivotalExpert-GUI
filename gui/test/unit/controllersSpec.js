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
  
	describe('Project List Controller test', function(){
		var scope, ctrl, $browser;
		
		beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');
			
			$browser.xhr.expectGET('rest/project/project_index')
          .respond([{"status": "open", "title": "Seventh Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDQsSB1Byb2plY3QYBww", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDQsSB1Byb2plY3QYBww", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 7}, {"status": "in progress", "title": "Fourth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY6wcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY6wcM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 1003}, {"status": "open", "title": "Fifth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY7AcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY7AcM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 1004}, {"status": "open", "title": "Sixth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY1w8M", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY1w8M", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 2007}, {"status": "closed", "title": "First Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYuxcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYuxcM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 3003}, {"status": "open", "title": "Last Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYpx8M", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYpx8M", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 4007}, {"status": "in progress", "title": "Third Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYiycM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYiycM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 5003}, {"status": "closed", "title": "Second Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2jYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2jYM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 7002}, {"status": "open", "title": "Eight Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2zYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2zYM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 7003}, {"status": "open", "title": "Nineth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY3DYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY3DYM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 7004}]);
          
            ctrl = new scope.$new(ProjectListCtrl);
		});
	
		it('should return 10 items',function() {
			$browser.xhr.flush();
			expect(ctrl.projects.length).toBe(10);
		});
	});
  
	describe('Get Current User Controller test', function(){
	var scope, ctrl, $browser;
	
	beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');
			
			$browser.xhr.expectGET('rest/action/get_current_user')
          .respond({"schoolName": "SMU", "gravatar": "c4c0fcba5247b525031625b4062d085a", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY6z4M", "schoolLogo": "sg-smu", "nickname": "Danieltsou", "email": "jedimdan@gmail.com"});
			
			ctrl = new scope.$new(CurrentUserController);
		});
	
	it('should say daniel is logged in',function() {
		$browser.xhr.flush();
		expect(ctrl.currentUser.nickname).toBe("Danieltsou");
	});
	});
  
  
   describe('ProjectListCtrl', function () {
  var scope = null, $browser = null, ctrl = null,
    projects = [{ name: 'p1' }, { name: 'p2' }];

  function newController() {
    $browser.xhr.
      expectGET('rest/project/project_index').
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