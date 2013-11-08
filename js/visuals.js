$(document).ready(function(){
    $('#rte1').jsMovie({
        sequence : "#.png",     //the # will be replaced with 1.
        folder   : "images/img/1/",       //this is the path where the script can find the image sequence
        from     : 1,               //start frame
        to       : 400,              //end frame
        width    : 350,             
        height   : 350,             
        showPreLoader : false,       //if we want to see a preloader animation
        playOnLoad : false,         //we don't want to have the movie play after the images have been loaded automatically
   
        loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}
        
    });
  
 
   $('#rte1').jsMovie("addClip","Hello",1,400);
  
   $('#rte1').jsMovie("playClips"); 
   
   
   
      $('#rte2').jsMovie({
        sequence : "#.png",     
        folder   : "images/img/4/",      
        from     : 1,               
        to       : 400,             
        width    : 350,             
        height   : 350,             
        showPreLoader : true,       
        playOnLoad : false,
		
       
    });
  
    // make frame 1 to frame 20 to a clip an call it Hello. Pause the animation for 2 seconds before the next clip is being played
   $('#rte2').jsMovie("addClip","Hello",1,400);
    // add additional clips as we need
    // play  the clips
   $('#rte2').jsMovie("playClips"); 
    
    
      $('#tv3').jsMovie({
        sequence : "#.png",    //the # will be replaced with 1.
        folder   : "images/img/3/",       //this is the path where the script can find the image sequence
        from     : 1,               //start frame
        to       : 400,              //end frame
        width    : 350,             
        height   : 350,           		
        showPreLoader : false,       
        playOnLoad : false,         //we don't want to have the movie play after the images have been loaded automatically
     
    });
  
    // make frame 1 to frame 20 to a clip an call it Hello. Pause the animation for 2 seconds before the next clip is being played
   $('#tv3').jsMovie("addClip","Hello",1,400);
  
   $('#tv3').jsMovie("playClips"); 
    	
	
	
	
	
});