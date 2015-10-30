$(document).ready(function(){
	var body = $('body'),
		avatar = $('.avatar'),
		login = $('#login'),
		name = $('#name'),
		location = $('#location'),
		created = $('#created'),
		followers = $('#followers'),
		starred = $('#starred'),
		following = $('#following'),
		organizations = $('#organizations');


	$.getJSON('https://api.github.com/users/lindseyemaddox').done(function(data) {
	  	avatar.attr({src: data.avatar_url}),
	  	login.html(data.login),
	  	name.html(data.name),
	  	location.html(data.location),
	  	created.html(moment(data.created_at).format('ll')),
	  	followers.html(data.followers),
	  	starred.attr({href: data.starred_url}),
	  	following.html(data.following)


	});	




	$.getJSON('https://api.github.com/users/lindseyemaddox/repos').done(function(data) {

		var arr = data;

		var textToInsert = [];
		var i = 0;
		var length = arr.length;
		for (var a = 0; a < length; a += 1) {
		    textToInsert[i++]  = '<div class="repo">';
		    textToInsert[i++] = JSON.stringify(arr[a]);
		    textToInsert[i++] = '</div>' ;
		 
		}
		$('main').append(textToInsert.join(''));




	});		

})





	// $.getJSON('https://api.github.com/users').done(function(data) {     // 5 hours later, still no icons. I surrender.
	//   	// organizations.attr({src: data.organizations_url})

	// 	$(function(){
	// 		firstLoad();
	// 	});

	// 	function firstLoad(){
	// 		myFunction();
	// 	}

	//   	function getData(icons) {
	//   		var data = [];

	//   		icons.forEach(function(orgs) {
	//   			data.push(orgs.organizations_url);
	//   		})
	  	
	//   		return data;
	//   	}

	// 	function myFunction() {
	// 	    data.push(data.organizations_url);
	// 	    $("#organizations").html = data;
	// 	}

	// });	

