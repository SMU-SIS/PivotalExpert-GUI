function PageRouter_Master($route) { //router for the website itself
	var self = this;
	
	/* DEFAULT Re-Directs */
	$route.otherwise({redirectTo: '/'});
	
	//should check based on whether user is logged on or not
	$route.when('/',{template:'gui/html/dashboard.html', controller: DashboardCtrl});
	
	
	/* HEADER Re-Directs */
	$route.when('/welcome',{template:'gui/html/welcome.html'});
	$route.when('/dashboard',{template:'gui/html/dashboard.html', controller: DashboardCtrl});
	
	//institutions module
	$route.when('/institutions',{template:'gui/html/institution_index.html'});
	$route.when('/institutions/add',{template:'gui/html/institution_add.html'});
	
	//projects module
	$route.when('/projects',{template:'gui/html/project_index.html', controller: ProjectListCtrl});
	$route.when('/projects/create',{template:'gui/html/project_create.html'});
	
	
	$route.when('/projects/bid/:project',{template:'gui/html/project_bid.html', controller: ProjectDetailsCtrl}); 
	
	$route.when('/projects/<project_id>',{template:'gui/html/project_view.html'}); //TESTING
	$route.when('/projects/<project_id>/view/owner',{template:''}); //TESTING
	$route.when('/projects/<project_id>/view/dev',{template:''}); //TESTING
	$route.when('/projects/<project_id>/bid',{template:''}); //TESTING
	$route.when('/projects/<project_id>/bid/manage',{template:''}); //TESTING
	$route.when('/projects/<project_id>/payment',{template:''}); //TESTING	
	
	
	$route.when('/projects/accept',{template:'gui/html/project_accept.html'}); //TESTING	
	$route.when('/projects/manage',{template:'gui/html/project_manage.html'}); //TESTING	
	
	
	
	//developers module
	$route.when('/developers',{template:'gui/html/developer_index.html'});
	$route.when('/developers/world/',{template:'gui/html/worldmap.html'}); 
	
	
	$route.when('/developers/<country_id>',{template:''}); //TESTING
	
	/* FOOTER Re-Directs */
	$route.when('/sitemap',{template:'gui/html/sitemap.html'});					// sitemap page
	$route.when('/faq',{template:'gui/html/faq.html'});									// faq page
	$route.when('/terms_of_service',{template:'gui/html/terms.html'});				// terms of service page
	$route.when('/contact_us',{template:'gui/html/contact_us.html'});				// contact us page
	
	
	/* SUB-PAGES Re-Directs */
	$route.when('/edit_profile',{template:'gui/html/user_edit.html'});
	$route.when('/badges/suggest',{template:'gui/html/suggest_badge.html'});
	$route.when('/inbox',{template:'gui/html/inbox.html'});
	
	
	
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

function DashboardCtrl(RestCall) {
	this.iterations = RestCall.query({pageName:'iteration'});
	this.messages = RestCall.query({pageName:'message'});
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

function ProjectDetailsCtrl(RestCall) {
	this.projectDetails = RestCall.query({pageName:'project'});
}

/*
function ProjectDetailsCtrl(Project_) {
  var self = this;

  self.phone = Phone_.get({phoneId: self.params.phoneId}, function(phone) {
    self.mainImageUrl = phone.images[0];
  });

  self.setImage = function(imageUrl) {
    self.mainImageUrl = imageUrl;
  }
}*/

/*
function ProjectListCtrl(Project){
	this.projectList = Project.query();
}
ProjectListCtrl.$inject = ['Project'];

function DashboardCtrl(Iteration, Message){
	this.iterationList = Iteration.query();
	this.messageList = Message.query();
}

function IterationListCtrl(Iteration){
	this.iterationList = Iteration.query();
}

function MessageListCtrl(Message){
	this.messageList = Message.query();
}
*/
