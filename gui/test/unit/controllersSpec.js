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
      $browser.xhr.expectGET('rest/project/project_index').respond([{"status": "open", "title": "Seventh Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDQsSB1Byb2plY3QYBww", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDQsSB1Byb2plY3QYBww", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 7}, {"status": "in progress", "title": "Fourth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY6wcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY6wcM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 1003}, {"status": "open", "title": "Fifth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY7AcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY7AcM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 1004}, {"status": "open", "title": "Sixth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY1w8M", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY1w8M", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 2007}, {"status": "closed", "title": "First Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYuxcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYuxcM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 3003}, {"status": "open", "title": "Last Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYpx8M", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYpx8M", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 4007}, {"status": "in progress", "title": "Third Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYiycM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYiycM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 5003}, {"status": "closed", "title": "Second Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2jYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2jYM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 7002}, {"status": "open", "title": "Eight Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2zYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2zYM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 7003}, {"status": "open", "title": "Nineth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY3DYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY3DYM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 7004}]);
      ctrl = scope.$new(ProjectListCtrl);
    });

    it('should display all the project list items', function() {
      expect(ctrl.projects).toEqual([]);
      $browser.xhr.flush();
      
      expect(ctrl.projects.length).toBe(10);

      expect(ctrl.projects).toEqualData([{"status": "open", "title": "Seventh Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDQsSB1Byb2plY3QYBww", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDQsSB1Byb2plY3QYBww", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 7}, {"status": "in progress", "title": "Fourth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY6wcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY6wcM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 1003}, {"status": "open", "title": "Fifth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY7AcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY7AcM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 1004}, {"status": "open", "title": "Sixth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY1w8M", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY1w8M", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 2007}, {"status": "closed", "title": "First Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYuxcM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYuxcM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 3003}, {"status": "open", "title": "Last Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYpx8M", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYpx8M", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 4007}, {"status": "in progress", "title": "Third Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYiycM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QYiycM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 5003}, {"status": "closed", "title": "Second Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2jYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2jYM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 7002}, {"status": "open", "title": "Eight Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2zYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY2zYM", "owner": "MarkJeremiahChen", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIYuRcM", "id": 7003}, {"status": "open", "title": "Nineth Project Ever", "tags": ["Graphic design", "SQL"], "budget": 200.0, "project_url": "\/project\/ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY3DYM", "created": "2011-09-18", "key": "ahJzfnBpdm90YWxleHBlcnRkZXZyDgsSB1Byb2plY3QY3DYM", "owner": "jedimdan", "owner_url": "\/user\/ahJzfnBpdm90YWxleHBlcnRkZXZyCwsSBFVzZXIY0Q8M", "id": 7004}]);
    });
  }); //end of ProjectListCtrl
  
});