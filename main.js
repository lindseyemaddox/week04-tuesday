$(document).ready(function(){
	var body = $('body');
	var avatar = $('.avatar');
	var login = $('#login');
	var name = $('#name');
	var location = $('#location');
	var created = $('#created');


	$.getJSON('https://api.github.com/users/lindseyemaddox').done(function(data) {
	  	avatar.attr({src: data.avatar_url}),
	  	login.html(data.login),
	  	name.html(data.name),
	  	location.html(data.location),
	  	created.html(data.created)




	});	

})





