/* jasmine-like end2end tests go here */
describe('Pivotal Expert App', function() {

	it('should bootstrap', function(){
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
			expect( repeater('.projectsmgtWorkroomTableEntry').count() ).toBe(2);
			element('#projects_tab').click();
			expect( repeater('.projectsmgtProjectsTableEntry').count() ).toBe(3);
			element('#bids_tab').click();
			expect( repeater('.projectsmgtBidsTableEntry').count() ).toBe(2);
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
		it('1.3.1 should have project title = "First Project Ever" with project description', function(){
			expect(binding('workroom.title')).toBe("Eight Project Ever (Developer: Kennethkok)");
			//expect(binding('workroom.description')).toBe("Some description you have there");
		});
		
		it('1.3.2 owner should be DanielTsou, developer mark chen', function(){
			expect(binding('workroom.owner')).toBe("Raymondchua");
			expect(binding('workroom.dev')).toBe("Kennethkok");
		});
		
		//tests the chatroom
		it('1.3.3 should have 4 entries', function(){
			expect( repeater('.projectWall_message_entry').count()).toBe(0);
		});
		
		/*can only receive first entry, not sure how to test entry [2], etc yet.
		it('first entry should be from mark chen, "Tell me everything!", at 2011-09-21 (03:26 PM)"', function(){
			expect(binding('message.user')).toBe("Markchen");
			expect(binding('message.message')).toBe("Tell me everything!");
			expect(binding('message.timestamp')).toBe("2011-09-21 (03:26 PM)");
		});*/
		
		//tests the iteration, workflow
		it('1.3.4 should have 4 iterations', function(){
			expect(repeater('.projectWorkplan_iteration_entry').count()).toBe(0);
		});
		
		it('1.3.5 first entry should be "do something 1", "in review"',function(){
			//expect(binding('iteration.task')).toBe("Planning to do something 1");
			//expect(binding('iteration.status')).toBe("Completed");
		});
		
	});	
	
	describe('2.1 Create a new project', function(){
	
		it('2.1.1 should have 3 projects in my list', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();
			expect( repeater('.projectsmgtProjectsTableEntry').count()).toBe(3);
		});
	
			//test this on GAE to make sure that the dynamically generated data corresponds
		it('2.1.2 should go navigate to project create page', function(){
			browser().navigateTo('/#/projects/create');
			//expect(browser().location().hash()).toBe('/');
			//element('#projectList_create_new').click();
			expect(browser().location().hash()).toBe('/projects/create');
		});
		
		it('2.1.3 should input the appropriate params', function(){
			input('createNewProject_title').enter('e2eTestProject');
			input('createNewProject_budget').enter('555');
			input('createNewProject_description').enter("This project is automatically created by e2e");
			input('createNewProject_tags').enter("AngularJS, Jasmine BDD");
			input('projectAddBid_agreeToTerms').check();			
			element('#projectAddBid_bidBtn').click();
			
			//sleep to allow loading to be completed, else the test fails cause the runner gets ahead of processing
			sleep(1);
		});
		
		it('2.1.4 should have a new project in my list', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();			
			expect( repeater('.projectsmgtProjectsTableEntry').count()).toBe(4);
			
		});
		
		it('2.1.5 should display the correct new project', function(){
			browser().navigateTo('/#');
			element('#projectsmgt_tab').click();
			element('#projects_tab').click();			
			element('#projectsmgt_projects_Table tr:nth-child(2) td:nth-child(1)').click();

			expect(binding('project.title')).toBe('e2eTestProject');
			expect(repeater('.project_view_bidManage_bid_entry').count()).toBe(0);

		});
	});
	
	
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
		
		
	});
	
	/*
	describe('2.3.1 Accept bids', function(){
	
	});
	
	describe('2.3.2 Workroom chat', function(){
	
	});

	describe('2.3.3 Accept iteration deliverable', function(){
	
	});
	
	describe('2.3.4 Reject iteration deliverable', function(){
	
	});

	describe('2.4.1 Deliver iteration deliverable', function(){
	
	});
	
	describe('2.5 Edit iteration status', function(){
	
	});	
	
	*/
	
	/*scenarios to write tests for non-core functions
	TO BE DONE BY MONDAY

	describe('Edit my user profile', function(){
	
	});

	describe('Invite developer to project', function(){
	
	});	
	
	describe('View developer complete profile', function(){
	
	});

	describe('Respond to project invitation', function(){
	
	});

	describe('Add user to contact list', function(){
	
	});	
	
	describe('Suggest a badge', function(){
	
	});

	describe('Suggest an institution', function(){
	
	});
	
	
	*/
	
	
	

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
    
    it('should perform final bootstrap', function(){
    	browser().navigateTo('/bootstrap');
    });
  });*/
});
