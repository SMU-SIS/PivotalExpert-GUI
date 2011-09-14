$(document).ready(function() {
	
	
});


function tabSwitch(new_tab, new_content) {  
	document.getElementById('newsfeed_tab').className = '';  
	document.getElementById('projects_tab').className = '';  
	document.getElementById('returnontime_tab').className = '';  
	document.getElementById(new_tab).className = 'active';   
	
	document.getElementById('newsfeed_content').style.display = 'none';  
	document.getElementById('projects_content').style.display = 'none';  
	document.getElementById('returnontime_content').style.display = 'none';  
	document.getElementById(new_content).style.display = 'block';     
}  
