function PageRouter_Master($route) { //router for the website itself
	var self = this;
	
	//institutes module
	$route.when('/institutes',{template:'institutes_index.html'});
	
	//projects module
	$route.when('/projects',{template:'project_index.html'});
	$route.when('/projects/create',{template:'project_create.html'});
	$route.when('/projects/viewtest',{template:'project_view.html'}); //temporary for testing.
	
	//developers module
	$route.when('/developers',{template:'developer_index.html'});
	
	//should check based on whether user is logged on or not
	//user management module
	$route.when('/',{template:'user_profile.html'});
	$route.otherwise({redirectTo: '/'});
	
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
