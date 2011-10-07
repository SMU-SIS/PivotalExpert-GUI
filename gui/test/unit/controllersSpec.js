/* jasmine specs for controllers go here */
describe('Pivotal Expert GUI controllers', function() {

	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected){
				return angular.equals(this.actual, expected);
			}
		});
	});


	//TEST 0
	describe('Dummy unit test', function(){
	
		it('must pass based on the laws of mathematics!', function() {
			var ctrl = "1";
			//test works as dummy
			expect("1").toBe("1");
		});
  	}); //end of TEST 0
  
  
  	//TEST 1
	describe('ProjectListCtrl test', function(){
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
	});//end of TEST 1
  
  
  	//TEST 2
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
	});//end of TEST 2
	
	
	//TEST 3
	describe('DashboardCtrl test', function(){
		var scope, ctrl, $browser;
		
		beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');			
			$browser.xhr.expectGET('rest/dashboard/dashboard')
			.respond([{"workrooms": [{"status": "In Review", "title": "First Project Ever", "owner_gravatar": "c4c0fcba5247b525031625b4062d085a", "iteration": 1, "budget": 200.0, "developer_gravatar": "8a47e431b9e79c33985ee3bc280198dd", "owner": "Danieltsou", "id": "12050", "developer": "Markchen"}, {"status": "In Review", "title": "Third Project Ever", "owner_gravatar": "a4126f00847dc4f62786982a7be02972", "iteration": 1, "budget": 200.0, "developer_gravatar": "c4c0fcba5247b525031625b4062d085a", "owner": "RobertChai", "id": "17023", "developer": "Danieltsou"}], "bids": [{"status": "Awaiting Acceptance", "tags": ["Javascript", "HTML"], "owner_gravatar": "8a47e431b9e79c33985ee3bc280198dd", "title": "Second Project Ever", "date": "2011-09-21", "owner": "Markchen", "messageURL": "What message is this?", "project_id": "17021"}], "projects": [{"status": "Open for Bids", "amount": 200.0, "id": "10044", "title": "Seventh Project Ever"}, {"status": "Not Accepting Bids", "amount": 200.0, "id": "10043", "title": "Fifth Project Ever"}, {"status": "Open for Bids", "amount": 200.0, "id": "14040", "title": "First Project Ever"}], "entries": [{"user_image": "http:\/\/www.gravatar.com\/avatar\/a4126f00847dc4f62786982a7be02972?s=50&d=mm", "message": "RobertChai: What would you like to know?", "time_sent": "2011-09-21 (03:26 PM)", "subject": "New \"Third Project Ever\" Workroom Message"}, {"user_image": "http:\/\/www.gravatar.com\/avatar\/a4126f00847dc4f62786982a7be02972?s=50&d=mm", "message": "RobertChai: Hello Daniel, welcome to my project", "time_sent": "2011-09-21 (03:26 PM)", "subject": "New \"Third Project Ever\" Workroom Message"}, {"user_image": "http:\/\/www.gravatar.com\/avatar\/8a47e431b9e79c33985ee3bc280198dd?s=50&d=mm", "message": "Markchen: Tell me everything!", "time_sent": "2011-09-21 (03:26 PM)", "subject": "New \"First Project Ever\" Workroom Message"}, {"user_image": "http:\/\/www.gravatar.com\/avatar\/8a47e431b9e79c33985ee3bc280198dd?s=50&d=mm", "message": "Markchen: Hello Daniel, Thanks!", "time_sent": "2011-09-21 (03:26 PM)", "subject": "New \"First Project Ever\" Workroom Message"}, {"user_image": "http:\/\/www.gravatar.com\/avatar\/8a47e431b9e79c33985ee3bc280198dd?s=50&d=mm", "message": "Hello There! Nice weather for a message", "time_sent": "2011-09-21 (03:26 PM)", "subject": "Markchen: \"From Mark to Dan\""}]}]);
			ctrl = new scope.$new(DashboardCtrl);
		});
		
		it('should have workroom 1 with these params', function() {
			$browser.xhr.flush();
			expect(ctrl.dashboard[0].workrooms).not.toBeNull();
			expect(ctrl.dashboard[0].workrooms[0].status).toBe("In Review");
			expect(ctrl.dashboard[0].workrooms[0].budget).toBe(200);	
			expect(ctrl.dashboard[0].workrooms[0].title).toBe("First Project Ever");
			expect(ctrl.dashboard[0].workrooms[0].owner).toBe("Danieltsou");
			expect(ctrl.dashboard[0].workrooms[0].developer).toBe("Markchen");
			expect(ctrl.dashboard[0].workrooms[0].iteration).toBe(1);
			
		});	
	});//end of TEST 3
  
	
	//TEST 4
	describe('UserEditCtrl test', function(){
		var scope, ctrl, $browser;
		
		beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');
			$browser.xhr.expectGET('rest/dashboard/user_edit')
			.respond({"schoolEmail": "iamobiwan@gmail.com", "nickname": "jedimdan", "aboutMe": null, "gravatar": "c4c0fcba5247b525031625b4062d085a", "paypalEmail": null, "email": "jedimdan@gmail.com"});
			ctrl = new scope.$new(UserEditCtrl);
		});
		
		it('should return all the particulars of the user', function() {
			$browser.xhr.flush();
			expect(ctrl.user.schoolEmail).toBe("iamobiwan@gmail.com");
		});
	});//end of TEST 4
  

	//TEST 5
	//this is still not working due to "this.params.workroomID"
	describe('WorkroomCtrl test', function(){
		var scope, ctrl, $browser;
		
		beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');
		});
		
		it('should return details of the workroom', function() {
		
			//sets the scope.param value of workroom id to static value: 12050
			scope.params = {workroomID:'12050'};
			
			//1st xhr get request for WorkroomCtrl 
			$browser.xhr.expectGET('rest/workroom/details/12050')
			.respond({"description": "Some description you have there", "title": "First Project Ever", "owner_gravatar": "c4c0fcba5247b525031625b4062d085a", "dev": "Markchen", "dev_gravatar": "8a47e431b9e79c33985ee3bc280198dd", "iterations": [{"status": "In Review", "increase": "Accept", "task": "Planning to do something 1", "decrease": "Reject", "iterationNo": 1}, {"status": "In Queue", "increase": null, "task": "Planning to do something 2", "decrease": null, "iterationNo": 2}, {"status": "In Queue", "increase": null, "task": "Planning to do something 3", "decrease": null, "iterationNo": 3}, {"status": "In Queue", "increase": null, "task": "Planning to do something 4", "decrease": null, "iterationNo": 4}], "owner": "Danieltsou"});
			
			//2nd xhr get request for WorkroomCtrl
			$browser.xhr.expectGET('rest/workroom/messages/12050')
			.respond({"messages": [{"timestamp": "2011-09-21 (03:26 PM)", "message": "Tell me everything!", "user_gravatar": "8a47e431b9e79c33985ee3bc280198dd", "user": "Markchen"}, {"timestamp": "2011-09-21 (03:26 PM)", "message": "What would you like to know?", "user_gravatar": "c4c0fcba5247b525031625b4062d085a", "user": "Danieltsou"}, {"timestamp": "2011-09-21 (03:26 PM)", "message": "Hello Daniel, Thanks!", "user_gravatar": "8a47e431b9e79c33985ee3bc280198dd", "user": "Markchen"}, {"timestamp": "2011-09-21 (03:26 PM)", "message": "Hello Mark, welcome to my project", "user_gravatar": "c4c0fcba5247b525031625b4062d085a", "user": "Danieltsou"}]});
			
			ctrl = scope.$new(WorkroomCtrl);
			
			//flushing the xhr before tests
			$browser.xhr.flush();
			expect(ctrl.workroom.description).toBe("Some description you have there");
			expect(ctrl.messages.messages[0].timestamp).toBe("2011-09-21 (03:26 PM)");
		});
	});//end of TEST 5
	
	
	//TEST 6
	describe('NavbarCtrl test', function(){
		var scope, ctrl, $browser;
		
		beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');
			$browser.xhr.expectGET('rest/navbar/dashboard')
			.respond({"workrooms": [{"id": "12050", "title": "First Project Ever"}, {"id": "17023", "title": "Third Project Ever"}], "bids": [{"id": "17021", "title": "Second Project Ever"}], "projects": [{"id": "10044", "title": "Seventh Project Ever"}, {"id": "10043", "title": "Fifth Project Ever"}, {"id": "14040", "title": "First Project Ever"}]});
			ctrl = new scope.$new(NavbarCtrl);
		});
		
		it('should return correct details in the dropdown navbar', function() {
			$browser.xhr.flush();
			expect(ctrl.navbar.projects[1].id).toBe("10043");
			expect(ctrl.navbar.bids[0].id).toBe("17021");
			expect(ctrl.navbar.workrooms[1].id).toBe("17023");
		});
	});//end of TEST 6


	//TEST 7
	describe('DevelopersCtrl test', function(){
		var scope, ctrl, $browser;
		
		beforeEach(function() {
			scope = angular.scope();
			$browser = scope.$service('$browser');
			$browser.xhr.expectGET('rest/developer')
			.respond([{"name":"Mark","country":"SG","school":"SMU","earnings":"SGD$50","badges":[]},{"name":"Daniel","country":"SG",	"school":"SMU","earnings":"SGD$100","badges":["gui/images/badges/python1.png","gui/images/badges/python2.png"]}]);
			ctrl = new scope.$new(DevelopersCtrl);
		});
		
		it('should return 2 developers, mark and daniel', function() {
			$browser.xhr.flush();
			expect(ctrl.developers.length).toBe(2);
			expect(ctrl.developers[0].name).toBe("Mark");
			expect(ctrl.developers[1].name).toBe("Daniel");
		});
	});//end of TEST 7	
	
	
});//end of PE GUI unit tests