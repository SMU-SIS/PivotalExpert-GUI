/* jasmine-like end2end tests go here */
describe('Pivotal Expert App', function() {

	it('should redirect index.html to index.html#/projects', function() {
		browser().navigateTo('../../../#/projects');
		expect(browser().location().hash()).toBe('/projects');
	});
	
	
	describe('Dashboard view', 
	function() {	
		beforeEach(function() {
			browser().navigateTo('../../../index.html#');
		});
		
		it('should return 5 messages in the list', function() {
			expect( repeater('.newsfeedTableEntry').count() ).toBe(5);
		});
		
		it('should return 2 workrooms + 1 placeholder in the list', function() {
			expect( repeater('.projectsmgtWorkroomTableEntry').count() ).toBe(3);
		});
		
		it('should return 3 projects + 1 placeholder in the list', function() {
			expect( repeater('.projectsmgtProjectsTableEntry').count() ).toBe(4);
		});
		
		it('should return 1 bid + 1 placeholder in the list', function() {
			expect( repeater('.projectsmgtBidsTableEntry').count() ).toBe(2);
		});
	});
	
	
	
	describe('Create a new project', function(){
		beforeEach(function(){
		
			//creates a new project for testing
			browser().nagivateTo('../../../index.html#/projects/create');
			input('createNewProject_title').enter("e2eTestProject");
			input('createNewProject_budget').enter(555);
			input('createNewProject_description').enter("This project is automatically created by e2e");
			input('createNewProject_tags').enter("AngularJS, Jasmine BDD");
			select('projectAddBid_agreeToTerms');
			select('projectAddBid_bidBtn');
		});
		
	});
	
	describe('Project list view', 
	function() {	
		beforeEach(function() {
			browser().navigateTo('../../../index.html#/projects');
		});
		
		it('should return 10 projects in the list', function() {
			expect( repeater('.projectListTableEntry').count() ).toBe(10);
		});
	});	
	
	describe('Workroom view', function(){
		beforeEach(function(){
			browser().navigateTo('../../../index.html#/workroom/12050');
		});
		
		//tests the display for the workroom details
		it('should have project title = "First Project Ever" with project description', function(){
			expect(binding('workroom.title')).toBe("First Project Ever");
			expect(binding('workroom.description')).toBe("Some description you have there");
		});
		
		it('owner should be DanielTsou, developer mark chen', function(){
			expect(binding('workroom.owner')).toBe("Danieltsou");
			expect(binding('workroom.dev')).toBe("Markchen");
		});
		
		//tests the chatroom
		it('should have 4 entries', function(){
			expect( repeater('.projectWall_message_entry').count()).toBe(4);
		});
		
		//can only receive first entry, not sure how to test entry [2], etc yet.
		it('first entry should be from mark chen, "Tell me everything!", at 2011-09-21 (03:26 PM)"', function(){
			expect(binding('message.user')).toBe("Markchen");
			expect(binding('message.message')).toBe("Tell me everything!");
			expect(binding('message.timestamp')).toBe("2011-09-21 (03:26 PM)");
		});
		
		//tests the iteration, workflow
		it('should have 4 iterations', function(){
			expect(repeater('.projectWorkplan_iteration_entry').count()).toBe(4);
		});
		
		it('first entry should be "do something 1", "in review"',function(){
			expect(binding('iteration.task')).toBe("Planning to do something 1");
			expect(binding('iteration.status')).toBe("In Review");
		});
		
	});
	
	
	

    /*it('should be possible to control phone order via the drop down select box', function() {
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.phones li', 'Phone List').column('a')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('alphabetical');

      expect(repeater('.phones li', 'Phone List').column('a')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('should render phone specific links', function() {
      input('query').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().hash()).toBe('/phones/nexus-s');
    });
    
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../../app../../../index.html#/phones/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(binding('phone.name')).toBe('Nexus S');
    });


    it('should display the first phone image as the main phone image', function() {
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.phone-thumbs li:nth-child(3) img').click();
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

      element('.phone-thumbs li:nth-child(1) img').click();
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });
  });*/
});
