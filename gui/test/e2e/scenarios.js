/* jasmine-like end2end tests go here */
describe('Pivotal Expert App', function() {

	it('should redirect index.html to index.html#/projects', function() {
		browser().navigateTo('../../../#/projects');
		expect(browser().location().hash()).toBe('/projects');
	});
	
	
	describe('Project list view', 
	function() {	
		beforeEach(function() {
			browser().navigateTo('../../../#/projects');
		});
		
		it('should return 10 projects in the list', function() {
			expect( repeater('.projectListTableEntry').count() ).toBe(10);
		});
	});
	
	describe('Dashboard view', 
	function() {	
		beforeEach(function() {
			browser().navigateTo('../../../');
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
