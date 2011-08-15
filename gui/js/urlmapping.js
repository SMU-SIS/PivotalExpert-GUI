function PageRouter_Master($route) { //router for the website itself
	var self = this;
	
	//user management module
	$route.otherwise({redirectTo: '/'});
	
	//should check based on whether user is logged on or not
	$route.when('/',{template:'user_profile.html'});
	
	//header re-directs
	//institutions module
	$route.when('/institutions',{template:'institutions.html'});
	
	//projects module
	$route.when('/projects',{template:'project_index.html'});
	$route.when('/projects/create',{template:'project_create.html'});
	$route.when('/projects/viewtest',{template:'project_view.html'}); //temporary for testing.
	
	//developers module
	$route.when('/developers',{template:'developer_index.html'});
	
	//footer re-directs
	//sitemap page
	$route.when('/sitemap',{template:'sitemap.html'});
	
	//faq page
	$route.when('/faq',{template:'faq.html'});
	
	//termsofservice page
	$route.when('/termsofservice',{template:'termsofservice.html'});
	
	//contactus page
	$route.when('/contactus',{template:'contactus.html'});
	
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
