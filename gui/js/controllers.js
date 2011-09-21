PageRouter_Master.$inject = ["$route","$location"];
function PageRouter_Master($route, $location) { //router for the website itself
	var self = this;
	self.alertMsg = $location.hashSearch.alertMsg;
	self.formServer = "";
	//self.formServer = "http://localhost:8080/";
	self.$location = $location;
	
	/* DEFAULT Re-Directs */
	$route.otherwise({redirectTo: '/'});
	
	//should check based on whether user is logged in
	$route.when('/',{template:'gui/html/main_index.html'});
	
	//when not signed in
	//	$route.when('/',{template:'gui/html/welcome.html', controller: WelcomeCtrl});
	
	
	/* HEADER Re-Directs */
	$route.when('/welcome',{template:'gui/html/welcome.html'});
	$route.when('/dashboard',{template:'gui/html/dashboard.html'});
	
	//institutions module
	$route.when('/institutions',{template:'gui/html/institution_index.html'});
	$route.when('/institutions/add',{template:'gui/html/institution_add.html'});
	
	//projects module
	$route.when('/projects',{template:'gui/html/project_index.html', controller: ProjectListCtrl});
	$route.when('/projects/create',{template:'gui/html/project_create.html'});
	
	
	//$route.when('/projects/bid/:project',{template:'gui/html/project_bid.html', controller: ProjectDetailsCtrl}); 
	
	$route.when('/projects/:projectID',{template:'gui/html/project_view.html', controller: ProjectViewCtrl});
	//$route.when('/projects/:project/owner',{template:''}); //TESTING
	//$route.when('/projects/:project/bidder',{template:''}); //TESTING
	//$route.when('/projects/:project/payment',{template:''}); //TESTING	
	
	$route.when('/workroom/:workroom',{template:'gui/html/workroom_index.html'});
	
	//$route.when('/projects/:projectId/accept',{template:'gui/html/project_accept.html', controller: ProjectAcceptCtrl}); //TESTING	
	//$route.when('/projects/manage',{template:'gui/html/project_manage.html'}); //TESTING	
	
	
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
	$route.when('/edit_profile',{template:'gui/html/user_edit.html', controller: UserEditCtrl});
	$route.when('/badges/suggest',{template:'gui/html/suggest_badge.html'});
	$route.when('/inbox',{template:'gui/html/inbox.html'});
	$route.when('/inbox/compose',{template:'gui/html/message_send.html'});
	
	
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

function ProjectViewCtrl($resource){
	this.projectID = this.params.projectID; //gets parameter passed from router
	projectID = this.projectID; //passes parameter to a variable that JS can read within the included page
	
	this.projectRoute = projectRoute = $.parseJSON($.ajax({url:'rest/project/project_view/'+projectID,dataType: 'json',async:false}).responseText);
	
	this.project = project = projectRoute.project;
	
	switch(projectRoute.role){
		case "owner":
			this.leftID = 'project_bid_projectDetails_owner';
			this.leftSrc = 'gui/html/project_view_detailsEdit.html';
			this.rightID = 'project_bid_projectFunction_owner';
			this.rightSrc = 'gui/html/project_view_bidManage.html';
			break;
		default:
			this.leftID = 'project_bid_projectDetails';
			this.leftSrc = 'gui/html/project_view_detailsView.html';
			this.rightID = 'project_bid_projectFunction';
			if(projectRoute.role == 'bidder'){
				this.rightSrc = 'gui/html/project_view_bidEdit.html';
			}
			else{
				this.rightSrc = 'gui/html/project_view_bidAdd.html';
			}
	}
}

function ProjectListCtrl(RestCall) {
  this.projects = RestCall.query({action:'project', file:'project_index'});
  this.page="bid";
  //this.page="projects/accept";
}
//ProjectListCtrl.$inject = ['RestCall'];

function ProjectDetailsCtrl(RestCall) {
	this.projectDetails = RestCall.query({pageName:'project'});
}
//ProjectDetailsCtrl.$inject = ['RestCall'];

function ProjectAcceptCtrl(RestCall) {
	this.projectAccept = RestCall.query({action:'project', file:'project_accept'});
}
//ProjectAcceptCtrl.$inject = ['RestCall'];

function DashboardCtrl(RestCall) {
	this.dashboard = RestCall.query({action:'dashboard', file:'dashboard'});
}
//DashboardCtrl.$inject = ['RestCall'];

function UserEditCtrl($resource) {
	this.user = $resource('rest/dashboard/user_edit').get();
}

//Method that checks for current user
CurrentUserController.$inject = ['$resource'];
function CurrentUserController($resource){
	this.Activity = $resource( 'rest/action/get_current_user');
	this.fetch();
}
CurrentUserController.prototype = {
	fetch: function(){
		this.currentUser = this.Activity.get();
		this.$parent.currentUser = this.currentUser; //passes current user object to parent controller
	}
}

