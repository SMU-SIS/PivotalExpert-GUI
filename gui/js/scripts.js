$(document).ready(function() {
	
	
});


function tabSwitch_dashboard(new_tab, new_content) {  
	document.getElementById('newsfeed_tab').className = '';  
	document.getElementById('projectsmgt_tab').className = '';  
	document.getElementById('returnontime_tab').className = '';  
	document.getElementById(new_tab).className = 'active';   
	
	document.getElementById('newsfeed_content').style.display = 'none';  
	document.getElementById('projectsmgt_content').style.display = 'none';  
	document.getElementById('returnontime_content').style.display = 'none';  
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

function HighlightRow(tableRow, highLight) {
	if (highLight) { tableRow.style.backgroundColor = '#FFFF00';	}
	else { tableRow.style.backgroundColor = '#E1E1E1'; }
}

function GoToURL(theUrl) {
	document.location.href = theUrl;
}
