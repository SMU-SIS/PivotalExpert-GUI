$(document).ready(function(){
	$(".workroomTrigger").click(function(){
		$(this).parent().next().slideToggle("fast");
		$(this).toggleClass("active");
		return false;
	});
	
	$("#dashboardTabs").tabs();
	
});


function tabSwitch_dashboard(new_tab, new_content) {  
	document.getElementById('newsfeed_tab').className = '';  
	document.getElementById('projectsmgt_tab').className = '';  
	//document.getElementById('returnontime_tab').className = '';  
	document.getElementById(new_tab).className = 'active';   
	
	document.getElementById('newsfeed_content').style.display = 'none';  
	document.getElementById('projectsmgt_content').style.display = 'none';  
	//document.getElementById('returnontime_content').style.display = 'none';  
	document.getElementById(new_content).style.display = 'block';     
}  
function tabSwitch_projectmgt(new_tab, new_content) {  
	document.getElementById('workroom_tab').className = '';  
	document.getElementById('projects_tab').className = '';  
	document.getElementById('bids_tab').className = '';  
	document.getElementById(new_tab).className = 'active';   
	
	document.getElementById('workroom_content').style.display = 'none';  
	document.getElementById('projects_content').style.display = 'none';  
	document.getElementById('bids_content').style.display = 'none';  
	document.getElementById(new_content).style.display = 'block';     
}  

function HighlightProjectRow(tableRow, highLight) {
	if (highLight) { tableRow.style.backgroundColor = '#FFFF00';	}
	else { tableRow.style.backgroundColor = '#E1E1E1'; }
}
function HighlightWorkroomRow(tableRow, highLight) {
	if (highLight) { tableRow.style.backgroundColor = '#0097FE'; }
	else { tableRow.style.backgroundColor = '#FFFFFF'; }
}
function HighlightProjectsRow(tableRow, highLight) {
	if (highLight) { tableRow.style.backgroundColor = '#0097FE'; }
	else { tableRow.style.backgroundColor = '#FFFFFF'; }
}
function HighlightBidsRow(tableRow, highLight) {
	if (highLight) { tableRow.style.backgroundColor = '#0097FE'; }
	else { tableRow.style.backgroundColor = '#FFFFFF'; }
}
function GoToURL(theUrl) {
	document.location.href = theUrl;
}
