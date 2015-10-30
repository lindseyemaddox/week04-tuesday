$(document).ready(function(){
	var body = $('body'),
		avatar = $('.avatar'),
		login = $('#login a'),
		name = $('#name a'),
		location = $('#location'),
		created = $('#created'),
		followers = $('#followers'),
		starred = $('#starred'),
		following = $('#following'),
		organizations = $('#organizations');


	$.getJSON('https://api.github.com/users/lindseyemaddox').done(function(data) {
	  	avatar.attr({src: data.avatar_url}),
	  	login.html(data.login),
	  	login.attr({href: data.html_url}),
	  	name.html(data.name),
	  	name.attr({href: data.html_url}),
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

			var updated = moment(arr[a].updated_at).toNow(true);

			function getDescription() {
				if (arr[a].description === null) {
				   return ('');
				} else {
				   return (arr[a].description);
				};
			}; 
				
		    textToInsert[i++] = '<div class="repo"><div class="left"><a href=" ' + arr[a].html_url + '">' + arr[a].name + '</a>';

			textToInsert[i++] = '<p class="description">' + getDescription(); + '</p>';

		    textToInsert[i++] = '<p class="updated">Updated ' + updated + ' ago</p></div><div class="right">' + arr[a].language + '<a href="' + arr[a].stargazers_url + '"><i class="octicon octicon-star"> ' + arr[a].stargazers_count + '</i></a>' + '<a href="' + arr[a].branches_url + '"><i class="octicon octicon-git-branch"> ' + arr[a].forks_count + '</i></a></div><div style="clear:both;"></div></div>' ;     // hack alert - can't figure out why omega isn't clearing my neat floats...
		}

		$('main').append(textToInsert.join(''));

	});		

})





	// $.getJSON('https://api.github.com/user/orgs').done(function(data) {     						// 5 hours later, still no icon. I surrender.

	// 	var arr = data;
	// 	var textToInsert = [];
	// 	var i = 0;
	// 	var length = arr.length;
	// 	for (var a = 0; a < length; a += 1) {
	// 	    textToInsert[i++] = '<img src="' + arr[a].organizations_url + '" alt="organization">';
	// 	}

	// 	organizations.append(textToInsert.join(''));

	// });	

