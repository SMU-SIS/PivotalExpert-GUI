$(document).ready(function() {
	$("#right_panel").load("user_info.html");
	
	$("#user_profile_edit_link").click(function() {
		$("#right_panel").load("user_edit.html");
	});
});
