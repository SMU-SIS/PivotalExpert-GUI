function PageRouter_Master($route) { //router for the website itself
	var self = this;
	
	/* DEFAULT Re-Directs */
	$route.otherwise({redirectTo: '/'});
	
	//should check based on whether user is logged on or not
	$route.when('/',{template:'dashboard.html'});
	
	
	/* HEADER Re-Directs */
	$route.when('/welcome',{template:'welcome.html'});
	$route.when('/dashboard',{template:'dashboard.html', controller: ProjectListCtrl});
	
	//institutions module
	$route.when('/institutions',{template:'institution_index.html'});
	$route.when('/institutions/add',{template:'institution_add.html'});
	
	//projects module
	$route.when('/projects',{template:'project_index.html'});
	$route.when('/projects/create',{template:'project_create.html'});
	
	
	$route.when('/projects/<project_id>',{template:'project_view.html'}); //TESTING
	$route.when('/projects/<project_id>/view/owner',{template:''}); //TESTING
	$route.when('/projects/<project_id>/view/dev',{template:''}); //TESTING
	$route.when('/projects/<project_id>/bid',{template:''}); //TESTING
	$route.when('/projects/<project_id>/bid/manage',{template:''}); //TESTING
	$route.when('/projects/<project_id>/payment',{template:''}); //TESTING	
	
	
	//developers module
	$route.when('/developers',{template:'developer_index.html'});
	$route.when('/developers/world/',{template:'worldmap.html'}); 
	
	
	$route.when('/developers/<country_id>',{template:''}); //TESTING
	
	/* FOOTER Re-Directs */
	$route.when('/sitemap',{template:'sitemap.html'});					// sitemap page
	$route.when('/faq',{template:'faq.html'});									// faq page
	$route.when('/terms_of_service',{template:'terms.html'});				// terms of service page
	$route.when('/contact_us',{template:'contactus.html'});				// contact us page
	
	
	/* SUB-PAGES Re-Directs */
	$route.when('/edit_profile',{template:'user_edit.html'});
	$route.when('/badges/suggest',{template:'suggest_badge.html'});
	$route.when('/inbox',{template:'inbox.html'});
	
	
	
	$route.when('/user/<user_id>/view_profile',{template:''});	// TESTING
	$route.when('/badges/<user_id>',{template:''});	// TESTING
	
	
	$route.onChange(function() {
		self.params = $route.current.params;
	});
	$route.parent(this);
}

/*use this to display any project list from now on*/
function ProjectListCtrl(Project_) {
  this.projectLists = Project_.query();
}

function PageRouter_UserProjects($route) {
	var self = this;
}

function PageRouter_ProjectsView($route) {
	var self = this;
}
/*
function ProjectListCtrl(Project){
	this.projectList = Project.query();
}
*/
//ProjectListCtrl.$inject = ['Project'];

