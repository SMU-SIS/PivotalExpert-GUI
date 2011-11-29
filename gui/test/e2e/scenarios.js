/* jasmine-like end2end tests go here */
describe('Pivotal Expert App', function() {

	it('should bootstrap before all tests', function(){
		browser().navigateTo('/bootstrap');
	});
	
	it('should redirect index.html to index.html#/projects', function() {
		browser().navigateTo('/#/projects');
		expect(browser().location().hash()).toBe('/projects');
	});	
	
	//scenarios to write tests for in sequence
	
	describe('1.1 Dashboard view', function() {		
		it('1.1.1 should return 0 messages, 1 workroom, 2 projects, 1 bid in the list', function() {
			browser().navigateTo('/');
			expect( repeater('.newsfeedTableEntry').count() ).toBe(1);
			element('#projectsmgt_tab').click();
			expect( repeater('.projectsmgtWorkroomTableEntry').count() ).toBe(1);
			element('#projects_tab').click();
			expect( repeater('.projectsmgtProjectsTableEntry').count() ).toBe(2);
			element('#bids_tab').click();
			expect( repeater('.projectsmgtBidsTableEntry').count() ).toBe(1);
		});
	});
	
	describe('1.2 Project list view', 
	function() {	
		beforeEach(function() {
			browser().navigateTo('/#/projects');
		});
		
		it('1.2.1 should return 2 projects in the list page 1', function() {
			expect( repeater('.projectListTableEntry').count() ).toBe(5);
		});
	});		

	describe('1.3 Workroom view', function(){
		beforeEach(function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projectsmgt_workroom_Table tr:nth-child(1) td:nth-child(1)').click();
		});
		
		//tests the display for the workroom details
		it('1.3.1 should have project title = Eight Project Ever', function(){
			expect(binding('workroom.title')).toBe("Eight Project Ever (Developer: Kennethkok)");
			expect(binding('workroom.owner')).toBe('Raymondchua');
		});
		
		it('1.3.2 owner should be Raymondchua, developer Kennethkok', function(){
			expect(binding('workroom.owner')).toBe("Raymondchua");
			expect(binding('workroom.dev')).toBe("Kennethkok");
		});
		
		//tests the chatroom
		it('1.3.3 should have 4 entries', function(){
			expect( repeater('.projectWall_message_entry').count()).toBe(0);
		});
		
		//tests the iteration, workflow
		it('1.3.4 should have 4 iterations', function(){
			expect(repeater('.projectWorkplan_iteration_entry').count()).toBe(0);
		});
		
	});	
	
	describe('2.1 Create a new project', function(){
	
		it('2.1.1 should have 3 projects in my list', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();
			expect( repeater('.projectsmgtProjectsTableEntry').count()).toBe(2);
		});
	
		it('2.1.2 should go navigate to project create page', function(){
			browser().navigateTo('/#/projects/create');
			expect(browser().location().hash()).toBe('/projects/create');
		});
		
		it('2.1.3 should input the appropriate params', function(){
			input('createNewProject_title').enter('e2eTestProject');
			input('createNewProject_budget').enter('555');
			input('createNewProject_description').enter("This project is automatically created by e2e");
			//input('createNewProject_tags').enter("AngularJS, Jasmine BDD");
			input('projectAddBid_agreeToTerms').check();			
			element('#projectAddBid_bidBtn').click();
			
			//sleep to allow loading to be completed, else the test fails cause the runner gets ahead of processing
			sleep(1);
		});
		
		it('2.1.4 should have a new project in my list', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();			
			expect( repeater('.projectsmgtProjectsTableEntry').count()).toBe(2);
			
		});
		
		/* cannot proceed with 2.1.5 because we're unable to test PayPal in create project
		it('2.1.5 should display the correct new project', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();			
			element('#projectsmgt_projects_Table tr:nth-child(2) td:nth-child(1)').click();

			pause();
			expect(binding('project.title')).toBe('e2eTestProject');
			expect(repeater('.project_view_bidManage_bid_entry').count()).toBe(0);

		}); */
	});
	
	
	/*
	describe('2.2 Bid for project', function(){
		it('2.2.1 should set up paypal account', function(){
			browser().navigateTo('/#/settings/paypal');
			input('settings_paypal_email').enter('kenneth.kok.2009@gmail.com');
			
			//this function is incomplete, unable to carry on test
			element('settings_paypal_email_save').click();
		});
	
		it('2.2.2 should have 3 projects in my list', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();			
			expect( repeater('.projectsmgtProjectsTableEntry').count()).toBe(4);
		});	
		
		it('2.2.3 should show all my bids to be 1 + 1 placeholder', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#bids_tab').click();
			expect( repeater('.projectsmgtBidsTableEntry').count() ).toBe(2);
		});
		
		it('2.2.4 should allow me to bid for the correct project', function(){
			browser().navigateTo('/#/projects');
			//pause();
		//	element('#projectListTableEntry tr:nth-child(2) td:nth-child(1)').click();		
			element('#project_index_Table tr:nth-child(3) td:nth-child(1)').click();			
			expect(binding('project.title')).toBe("Last Project Ever");
		});
		
		it('2.2.5 bids for the project in 2 iterations at 50 dollars each', function(){
			input('projectAddBid_price').enter("55");
			input('projectAddBid_task1').enter("plan 1");
			input('projectAddBid_task2').enter("plan 2");
			input("projectAddBid_agreeToTerms").check();
		});
		
		
	});*/
	
	/*
	describe('2.3.1 Accept bids', function(){
		//undone due to paypal
	});
	
	describe('2.3.2 Workroom chat', function(){
		
	});

	describe('2.3.3 Accept iteration deliverable', function(){
	
	});
	
	describe('2.3.4 Reject iteration deliverable', function(){
	
	});*/

	describe('2.4.1 Deliver iteration deliverable', function(){
		it('should deliver the current iteration', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projectsmgt_workroom_Table tr:nth-child(1) td:nth-child(1)').click();
			expect(binding('workroom.title')).toBe("Eight Project Ever (Developer: Kennethkok)");
			//can't proceed until deliverable can be acccepted
		});
		//expect(binding('a')).toBe('b');
	});
	
	/*
	describe('2.5 Edit iteration status', function(){
	
	});	
	*/
	
	//scenarios to write tests for non-core functions
	describe('Edit my user profile', function(){
		it('should check my current email to be kenneth.kok.2009@smu.edu.sg', function(){
			browser().navigateTo('/#/settings/user');
			expect(browser().location().hash()).toBe('/settings/user');
			//binding not recognized
			//expect(binding('.aboutMe')).toBe('kenneth.kok.2009@smu.edu.sg');
		});
		
		it('should change my email', function(){
			//binding not recognized
			//input('user.schoolEmail').enter('kenneth.kok.2008@smu.edu.sg');
			//browser().reload();
		});
	});

	/*
	describe('Invite developer to project', function(){
	
	});	
	
	describe('View developer complete profile', function(){
	
	});
	
	describe('Respond to project invitation', function(){

	});

	*/
	describe('Suggest an institution', function(){
		it('should add a new school', function(){

			browser().navigateTo('/#/settings/school');
			expect(browser().location().hash()).toBe('/settings/school');
			expect(repeater('.sort_select_school_option').count()).toBe(2);

			browser().navigateTo('/#/settings/school/suggest');
			input('suggestNewSchool_school').enter('testSchool');
			input('suggestNewSchool_school_short').enter('tS');
			select('suggestNewSchool_school_country').option('Singapore');
			input('suggestNewSchool_school_web').enter('www.test.edu.sg');
			input('suggestNewSchool_school_email').enter('test@pe.com');
			pause();
			element('#projectAddBid_bidBtn').click();
			sleep(2);
			expect(browser().location().hash()).toBe('/settings/user?alertMsg=Your suggestion has been received!');
			
		});
	});
	
});
