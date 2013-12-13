// jQuery script for search request with server
jQuery(document).ready(function($) {

	// Run when Search button is clicked
	$('#search_button4').click(function(){
		
		// Display a progress indicator
		$('#search_results4').html('<img src="ajax_loader.gif"> Searching Twitter...');
		
		// Get the value of the input field
		// Encode it for use in a URL
		var user_timeline = encodeURIComponent($('input[name=search_terms4]').val());
		
		// Send the search terms to the server in an Ajax request
		// This URL is for illustration only
		// You MUST change it to your server
		$.ajax({
			url: 'http://dechasamediablog.com/140mult/timeline_response.php?q=' + user_timeline,
			success: function(data){
				
				// Display the results
				$('#search_results4').html(data);
			}
		})
	})
});