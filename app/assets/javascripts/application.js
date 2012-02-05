//= require jquery.base
//= require koh_notifications


$(document).ready(function(e){
  
  // Notification Listener
  $('.boob').click(function(e) {
    e.preventDefault();
    $('#notification_container').koh_notification({
    	type : 'error',
    	title : '#winrar!',
    	message : 'you win'
    });
  });
  
  
});