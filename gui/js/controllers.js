function PageRouter_Master($route) { //router for the website itself
	var self = this;
	
	/* DEFAULT Re-Directs */
	$route.otherwise({redirectTo: '/'});
	
	//should check based on whether user is logged on or not
	$route.when('/',{template:'html/dashboard.html', controller: DashboardCtrl});
	
	
	/* HEADER Re-Directs */
	$route.when('/welcome',{template:'html/welcome.html'});
	$route.when('/dashboard',{template:'html/dashboard.html', controller: DashboardCtrl});
	
	//institutions module
	$route.when('/institutions',{template:'html/institution_index.html'});
	$route.when('/institutions/add',{template:'html/institution_add.html'});
	
	//projects module
	$route.when('/projects',{template:'html/project_index.html', controller: ProjectListCtrl});
	$route.when('/projects/create',{template:'html/project_create.html'});
	
	
	$route.when('/projects/bid/:project',{template:'html/project_bid.html', controller: ProjectDetailsCtrl}); 
	
	$route.when('/projects/<project_id>',{template:'html/project_view.html'}); //TESTING
	$route.when('/projects/<project_id>/view/owner',{template:''}); //TESTING
	$route.when('/projects/<project_id>/view/dev',{template:''}); //TESTING
	$route.when('/projects/<project_id>/bid',{template:''}); //TESTING
	$route.when('/projects/<project_id>/bid/manage',{template:''}); //TESTING
	$route.when('/projects/<project_id>/payment',{template:''}); //TESTING	
	
	
	$route.when('/projects/accept/:project',{template:'html/project_accept.html', controller: ProjectAcceptCtrl}); //TESTING	
	
	
	//developers module
	$route.when('/developers',{template:'html/developer_index.html'});
	$route.when('/developers/world/',{template:'html/worldmap.html'}); 
	
	
	$route.when('/developers/<country_id>',{template:''}); //TESTING
	
	/* FOOTER Re-Directs */
	$route.when('/sitemap',{template:'html/sitemap.html'});					// sitemap page
	$route.when('/faq',{template:'html/faq.html'});									// faq page
	$route.when('/terms_of_service',{template:'html/terms.html'});				// terms of service page
	$route.when('/contact_us',{template:'html/contact_us.html'});				// contact us page
	
	
	/* SUB-PAGES Re-Directs */
	$route.when('/edit_profile',{template:'html/user_edit.html'});
	$route.when('/badges/suggest',{template:'html/suggest_badge.html'});
	$route.when('/inbox',{template:'html/inbox.html'});
	
	
	
	$route.when('/user/<user_id>/view_profile',{template:''});	// TESTING
	$route.when('/badges/<user_id>',{template:''});	// TESTING
	
	
	$route.onChange(function() {
		self.params = $route.current.params;
	});
	$route.parent(this);
}

function PageRouter_UserProjects($route) {
	var self = this;
}

function PageRouter_ProjectsView($route) {
	var self = this;
}

function ProjectListCtrl(RestCall) {
  this.projects = RestCall.query({pageName:'project_index'});
}
//ProjectListCtrl.$inject = ['RestCall'];

function ProjectDetailsCtrl(RestCall) {
	this.projectDetails = RestCall.query({pageName:'project'});
}

function ProjectAcceptCtrl(RestCall) {
	this.projectAccept = RestCall.query({pageName:'project_accept'});
}

function DashboardCtrl(RestCall) {
	this.iterations = RestCall.query({pageName:'iteration'});
	this.messageList = RestCall.query({pageName:'message'});
}
//DashboardCtrl.$inject = ['RestCall'];

function MessageListCtrl(RestCall) {
	this.messageList = RestCall.query({pageName:'message'});
}
//MessageListCtrl.$inject = ['RestCall'];

function IterationListCtrl(RestCall) {
	this.iterationList = RestCall.query({pageName:'message'});
}
//MessageListCtrl.$inject = ['RestCall'];

