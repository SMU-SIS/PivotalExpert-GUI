$(document).ready(function() {
	$("#left_panel").load("user_panel.html");
	$("#right_panel").load("user_info.html");
	
	$("#user_profile_edit_link").click(function() {
		$("#right_panel").load("user_edit.html");
	});
});
