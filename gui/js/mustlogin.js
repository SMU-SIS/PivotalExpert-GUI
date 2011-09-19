//Script that forces a user to the index page if they're not logged in
var userCheck = $.parseJSON($.ajax({url:'rest/action/get_current_user',dataType: 'json',async:false}).responseText);

if(!userCheck.nickname){
	window.location.replace("/");
}