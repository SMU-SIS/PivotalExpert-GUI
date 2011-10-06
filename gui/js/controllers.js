PageRouter_Master.$inject = ["$route","$location","$resource"];
function PageRouter_Master($route, $location, $resource) { //router for the website itself
	var self = this;
	self.alertMsg = $location.hashSearch.alertMsg;
	self.formServer = "";
	//self.formServer = "http://localhost:8080/";
	self.$location = $location;
	
	/* DEFAULT Re-Directs */
	$route.otherwise({redirectTo: '/'});
	
	//should check based on whether user is logged in
	$route.when('/',{template:'gui/html/main_index.html'});
	
	/* HEADER Re-Directs */
	$route.when('/welcome',{template:'gui/html/welcome.html'});
	$route.when('/dashboard',{template:'gui/html/dashboard.html'});
	
	//institutions module
	$route.when('/institutions',{template:'gui/html/institution_index.html'});
	$route.when('/institutions/add',{template:'gui/html/institution_add.html'});
	
	//projects module
	$route.when('/projects',{template:'gui/html/project_index.html', controller: ProjectListCtrl});
	$route.when('/projects/create',{template:'gui/html/project_create.html'});	
	$route.when('/projects/:projectID',{template:'gui/html/project_view.html', controller: ProjectViewCtrl});
	
	//workroom module
	$route.when('/workroom/:workroomID',{template:'gui/html/workroom_index.html', controller: WorkroomCtrl});	
	$route.when('/workroom/:workroomID/comment',{template:'gui/html/project_comment.html'});	

	
	//developers module
	$route.when('/developers',{template:'gui/html/developer_index.html', controller: DevelopersCtrl});
	$route.when('/developers/world/',{template:'gui/html/worldmap.html'}); 
	$route.when('/developers/<country_id>',{template:''}); //TESTING
	
	/* FOOTER Re-Directs */
	$route.when('/sitemap',{template:'gui/html/sitemap.html'});// sitemap page
	$route.when('/faq',{template:'gui/html/faq.html'});// faq page
	$route.when('/terms_of_service',{template:'gui/html/terms.html'});// terms of service page
	$route.when('/contact_us',{template:'gui/html/contact_us.html'});// contact us page
	
	
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

//hold off writing test for this function till the rest gets done
function ProjectViewCtrl($resource){
	this.projectID = this.params.projectID; //gets parameter passed from router
	projectID = this.projectID; //passes parameter to a variable that JS can read within the included page
	
	this.projectRoute = projectRoute = $.parseJSON($.ajax({url:'rest/project/project_view/'+projectID,dataType: 'json',async:false}).responseText);
	
	this.project = project = projectRoute.project;
	
	this.leftID = 'project_bid_projectDetails';
	this.leftSrc = 'gui/html/project_view_detailsView.html';
	this.rightID = 'project_bid_projectFunction';
	
	switch(projectRoute.role){
		case "owner":
			this.leftID = 'project_bid_projectDetails_owner';
			this.leftSrc = 'gui/html/project_view_detailsEdit.html';
			this.rightID = 'project_bid_projectFunction_owner';
			this.rightSrc = 'gui/html/project_view_bidManage.html';
			this.bids = bids = projectRoute.bids;
			this.title = 'Manage ';
			break;
		case "bidder":
			this.rightSrc = 'gui/html/project_view_bidEdit.html';
			this.bid = bid = projectRoute.bid;
			this.title = 'Edit My Bid for ';
			break;
		case "everyone":
			this.rightSrc = 'gui/html/project_view_bidAdd.html';
			this.title = 'Bid for ';
			break;
		case "winner":
			//redirect to workroom
			this.rightSrc = 'gui/html/project_view_bidWon.html';
			break;
		case "closed":
			this.rightSrc = 'gui/html/project_view_bidClosed.html';
			this.title = 'View ';
			break;
		default:
			this.rightSrc = 'gui/html/project_view_bidClosed.html';
			this.title = 'View (Signed Out) ';
			break;
	}
}

function ProjectListCtrl($resource) {
  this.projects = $resource('rest/project/project_index').query();
  this.page="bid";
  //this.page="projects/accept";
}

function DashboardCtrl($resource) {
	this.dashboard = $resource('rest/dashboard/dashboard').query();
}

function UserEditCtrl($resource) {
	this.user = $resource('rest/dashboard/user_edit').get();
}

function WorkroomCtrl($resource) {
	this.workroom = $resource('rest/workroom/details/'+this.params.workroomID).get();
	this.messages = $resource('rest/workroom/messages/'+this.params.workroomID).get();
}

function NavbarCtrl($resource){
	/* Navbar data */
	this.navbar = $resource('rest/navbar/dashboard').get();
}

function DevelopersCtrl($resource){
	//this.developers = $resource('rest/developer').query();
	this.developers = $resource('rest/developer').query();
	this.orderProp = 'earnings';
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

//validation for forms
function ValidationCtrl($invalidWidgets){
  this.$invalidWidgets = $invalidWidgets;
}
//ValidationCtrl.$inject = ['$invalidWidgets'];
