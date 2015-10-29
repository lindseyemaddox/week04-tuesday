$(document).ready(function(){
	var body = $('body');
	var name = $('#name');

	$.getJSON('https://api.github.com/users/lindseyemaddox').done(function(data) {
	  name.html(data.login)
	});	
})

