/*

    Simple Notification System : jQuery Plugin
    Developed by John Koht
    Verison 1.0
    Updated on 02/03/2012



    ### USAGE

    $('#notification_container').koh_notification({
    	type : 'success',
    	title : "Title goes here",
    	message : "Message goes here",
    	timeout : 3000
    });


    Notification Types:
    - success
    - error
    - alert
    - globe
    - info
    - star
    - trash
    - upload
    - user
    
    # Obviously, you can add your own, see the css file
      to make these updates

*/


(function($) {

	$.fn.koh_notification = function(options) {
		
		//variables
		var t;
		var timeout = 3000;
		var element = this;
		var type = options.type;
		var title = options.title;
		var message = options.message;
		var notice_id = new Date().getTime();
		var isStaticNotice = options.noticeType;
		
		// Check if the notification temlate exists
		if (!$('#notification_container').length) {
		  //console.log('appending th notificaiton container');
		  $('body').append('<div id="notification_container"></div>')
		}
		
		// Notification Template		
		var notification_template = 
			'<div class="koh_notification" id="koh_notification_' + notice_id + '">' + 
			  '<div class="notification_type ' + type + '">' +
				  '<span class="notification_title ' + type + '">' + title + '</span>' + 
				  '<span class="notification_message ' + type + '">' + message + '</span>' + 
				'</div>' +
			'</div>';

    // Append the notification to the notification container
		$('#notification_container').append(notification_template, function() {
			$('.koh_notification_' + notice_id).hide().fadeIn('slow');
		});
		
		if (isStaticNotice != "loading") {
			t = setTimeout('$("#koh_notification_' + notice_id + '").closeNotification()', timeout);
		}
		
		// Click to close handler	
		$('#koh_notification_' + notice_id).live('click', function(e) {
			e.preventDefault();
			$(this).closeNotification();
		});
	}
	
	
	
	// Close the Notification
	$.fn. closeNotification = function() {
		$(this).fadeOut('slow', function() {
			$(this).remove();
		});
	}
	
	
})(jQuery);