$(document).ready(function(){
	var body = $('body');
	var name = $('#name');
	var avatar = $('.avatar');


	$.getJSON('https://api.github.com/users/lindseyemaddox').done(function(data) {
	  	name.html(data.login),
	  	avatar.attr({
	  		src: data.avatar_url
	  	})



	});	

})





