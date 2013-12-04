	
	// Initialize the plugin with no custom options
	$(document).ready(function () {
		//Bind a click to the anchors in the tab-bar, then prevent the default action of a link, store the href of the clicked link in a nextPage variable, remove			/		//the current class from the current page and finally add the class to the clicked page.
		//http://mobile.tutsplus.com/tutorials/phonegap/phonegap-from-scratch-app-template/
		$('#nav-bar a').on('click', function(e){
			e.preventDefault();
			var nextPage = $(e.target.hash);
			$("#pages .current").removeClass("current");
			nextPage.addClass("current");
		});
		
		// BEGIN SCROLLABLE FUNCTIONS
		$("div#make_me_scrollable").smoothDivScroll({
			touchScrolling: true,
			hotSpotScrolling: false
		});
		// END SCROLLABLE FUNCTIONS //
	
		
		//Full example of format  here --> you can see that we need a start time and and end time in this specific format. Declan you need to tack on the datetimes to the end of the url http://digitalinc.ie/ScreenSpace/get-tv-shows.php?tv_start_time=27-10-2013%2021:20:00&tv_end_time=27-10-2013%2023:40:00
		var counts = {};
		var scales = {};
		// BEGIN REFRESH FUNCTIONS
		//Beginning of the refresh funtion: This calculates the times, creates a new URL and gets the TV show data. 
		function refresh(){

		
			//This is Declan's code for calculating the current time
			// get the current time
			var now = new Date();
			// add an hour, for 30 min block use ( then.getMinutes() + 30 );  the amount of time makes a big deifference to what you get back and might need to change based on time of day, shorter in the morning?
			var then = new Date(now);
			then.setMinutes(then.getMinutes()+10);
			var url = 'http://screenspace-screenspace.rhcloud.com/get-tv-shows.php?tv_start_time=' + now.format("dd-mm-yyyy%20HH:MM:00") + '&tv_end_time=' + then.format("dd-mm-yyyy%20HH:MM:00");
			//End of Declan's code for calculating the time
			
			
			
			//get the TV shows based on the URL
			$.get(url, function(data){
				
				//This is an example of what we're going to output --> <li class="tv-show" data-id="1" data-name="Love/Hate" data-hashtag="#lovehate" data-channel="RTE1" data-start-time="27/10/2013 21:30:00" data-end-time="27/10/2013 22:30:00">Love/Hate</li>
					
				//clear the container and then append the TV shows to it. 		
					
				//Assigning of the 4 Channels its own div
				$('div.tv-shows-container').html('');
				$(data.tv_shows).each(function(show){
					if(isNaN(this.count) || this.count == null){
						this.count = 0;
					}
					
					$('div.tv-shows-container').append('<div id="' + this.station.toLowerCase() + '" class="tv-show" data-id="' + this.tv_show_id + '" data-name="' + this.name + '" data-hashtag="' + this.hashtag + '" data-channel="' + this.station + '" data-start-time="' + this.start_time + '" data-end-time="' + this.stop_time + '" data-count="' + this.count + '"><div class="circle"><p>'+ this.station + ' ' + this.hashtag + ': ' + this.count +'<a data-reveal-id="my_modal" data-animation="fade"></a></p></div></div>'); 
					
					// set the scale variable to 
					var scale = 0.5;
					
					if( scales[this.tv_show_id] === undefined ) {
						scales[this.tv_show_id] = 0.5;
					}
					
					scale = scales[this.tv_show_id];
					
					if( counts[this.station] === undefined ) {
						counts[this.station] = this.count;
					}
					
					if(this.count > counts[this.station] + 5) {
						scale = parseFloat(scale) + 0.2;
					}else if(this.count > counts[this.station] + 1) {
						scale = parseFloat(scale) + 0.1;
					}
									
					if(scale >= 2) {
						scale = 2;
					}
					
					$('#' + this.station.toLowerCase() + ' div.circle').css('transform', 'scale(' + scale + ')');  
					counts[this.station] = this.count;
					scales[this.tv_show_id] = scale;
	
					$('#' + this.station.toLowerCase() + ' div.circle p:first').click(function(){
						var p = $(this);
						var show = p.parents('div.tv-show:first');
						
						var hashtag = show.attr('data-hashtag');
						
						var url = 'http://digitalinc.ie/ScreenSpace/search.php';
						$.ajax({
							url: url,
							data: {
								q: hashtag,
								count: 10
							},
							success: function(data){
								//p.children('a:first').trigger('click');				
								// Display the results
								$('#search_results').html(data);
								//taken from jquery.reveal.js - Give me the element with the id my_modal. Append the data to the search result then call the reveal method to show it 
								$('#my_modal').reveal($(this).data());
								
							}
						})
						//return false;
					})
			
				});
				// END div.tv-shows-container
				
			});
		}
		
		
		//get the data

		refresh();
		//every minute go back and get the data about the TV shows from the database...
		setInterval(refresh, 3000); //here's where I'm setting the interval in miliseconds. 
		// END REFRESH FUNCTIONS
		
		
		
		//BEGIN TWITTER CLIENT FUNCTIONS
		// Run when Search button is clicked
		/*$('#search_button').click(function(){
			
			// Display a progress indicator
			$('#search_results').html(' Searching Twitter...');
			
			// Get the value of the input field
			// Encode it for use in a URL
			var search_value = encodeURIComponent($('input[name=search_terms]').val());
			
			// Send the search terms to the server in an Ajax request
			// This URL is for illustration only
			// You MUST change it to your server
		
			
			
			$.ajax({
				url: 'http://digitalinc.ie/ScreenSpace/search.php?q=' + search_value + '&count=10',
				success: function(data){
										
					// Display the results
					$('#search_results').html(data);
				}
			})
		})*/
		//END TWITTER CLIENT FUNCTIONS
		
		
		
		
		
		
	});
	//END DOCUMENT READY FUNCTION
	