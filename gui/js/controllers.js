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
	$route.when('/projects/page/:pageID',{template:'gui/html/project_index.html', controller: ProjectListCtrl});
	$route.when('/projects/create',{template:'gui/html/project_create.html'});	
	$route.when('/projects/:projectID',{template:'gui/html/project_view.html', controller: ProjectViewCtrl});
	
	//workroom module
	$route.when('/workroom/:workroomID',{template:'gui/html/workroom_index.html', controller: WorkroomCtrl});	
	$route.when('/workroom/:workroomID/comment',{template:'gui/html/project_comment.html'});	

	
	//developers module
	$route.when('/developers',{template:'gui/html/developer_index.html', controller: DevelopersCtrl});
	$route.when('/developers/page/:pageID',{template:'gui/html/developer_index.html', controller: DevelopersCtrl});
//	$route.when('/developers/world/',{template:'gui/html/worldmap.html'}); 
//	$route.when('/developers/<country_id>',{template:''}); //TESTING
	
	//user profiles
	$route.when('/user/:id',{template:'gui/html/user_view.html'});
	
	//settings module
	$route.when('/settings/paypal',{template:'gui/html/settings_paypal.html', controller: SettingsPayPalCtrl});
	$route.when('/settings/user',{template:'gui/html/settings_user.html', controller: SettingsUserCtrl});
	$route.when('/settings/school',{template:'gui/html/settings_school.html', controller: SettingsSchoolCtrl});
	$route.when('/settings/school/saved',{template:'gui/html/settings_school_saved.html'});
	$route.when('/settings/school/verify/:guid',{template:'gui/html/settings_school_verified.html', controller: SettingsSchoolVerifyCtrl});
	
	//messaging module
	$route.when('/messages',{template:'gui/html/messages_index.html', controller:MessagesCtrl});
	$route.when('/messages/compose',{template:'gui/html/messages_send.html'});
	
	/* FOOTER Re-Directs */
	$route.when('/sitemap',{template:'gui/html/sitemap.html'});// sitemap page
	$route.when('/faq',{template:'gui/html/faq.html'});// faq page
	$route.when('/terms_of_service',{template:'gui/html/terms.html'});// terms of service page
	$route.when('/contact_us',{template:'gui/html/contact_us.html'});// contact us page
	
	
	/* SUB-PAGES Re-Directs */
	$route.when('/badges/suggest',{template:'gui/html/suggest_badge.html'});
	
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
	
	this.projectRoute = projectRoute = $.parseJSON($.ajax({url:'rest/projects/project_view/'+projectID,dataType: 'json',async:false}).responseText);
	
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
	if (this.params.pageID) {
		page = this.params.pageID;
	}
	else {
		page = 1;
	}

	this.projects = $resource('rest/projects/project_index/page/'+page).get();
}

function DashboardCtrl($resource) {
	this.dashboard = $resource('rest/dashboard/dashboard').query();
}

function SettingsUserCtrl($resource) {
	this.user = $resource('rest/dashboard/user_edit').get();
}

function WorkroomCtrl($resource) {
	this.workroom = workroom = $.parseJSON($.ajax({url:'rest/workroom/details/'+this.params.workroomID,dataType: 'json',async:false}).responseText);
	//this.workroom = $resource('rest/workroom/details/'+this.params.workroomID).get();
	this.messages = $resource('rest/workroom/messages/'+this.params.workroomID).get();
	
	if (workroom.alert != null){
		alert(workroom.alert);
	}
	workroom.alert = null;
}

function NavbarCtrl($resource){
	/* Navbar data */
	this.navbar = $resource('rest/navbar/dashboard').get();
}

function DevelopersCtrl($resource){
	if (this.params.pageID) {
		page = this.params.pageID;
	}
	else {
		page = 1;
	}
	
	this.developers = $resource('rest/developers/developers_index/'+page).get();
}

function SettingsPayPalCtrl($resource){
	this.pp_settings = $resource('rest/settings/paypal').get()
}

function SettingsSchoolCtrl($resource){
	this.schools = $resource('rest/settings/get_schools').query()
}

function SettingsSchoolVerifyCtrl($resource){
	this.verified = $resource('rest/settings/school/verify/'+this.params.guid).get()
}

function MessagesCtrl($resource){
	this.msg_view = 'gui/html/messages_mailbox.html'
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

//Controls paging of lists such as projects and news feeds
function PaginationCtrl(){
	var self = this;
	//alert("paging"+self.total);
	var noOfPages = Math.ceil(self.total/ 10);//calculate number of pages
	
	//retrieve category of projects stored
	var url = window.location.href;
	var start = url.indexOf('#')+2 //index of first letter after # sign in URL
	var end = url.substring(start).indexOf('/'); //index of the first / after # in URL
	
	//if there is more than one / after the #, set the index of the second / as the limit
	if (end<=0){
		var action = url.substring(start); 
	} else {
		var action = url.substring(start, start+end);
	}
	
	//construct the page links (/projects/page/:pageID)
	self.pages = [];
	for (index=1;index<=noOfPages;index++) {
		self.pages.push('#/' + action + '/page/' + index);
	}
	//return pages;
}
