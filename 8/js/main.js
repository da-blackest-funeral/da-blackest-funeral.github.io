$(document).ready(function() {

	$('#change').on('click', function(e) {

		window.history.pushState('', '', "/login");
		
	});

	$('#cancel').on('click', function(e) {
		
		console.log(window.history.state);
		window.history.back();

	});

});