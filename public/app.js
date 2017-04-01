$(document).ready(function(){

var username;

$('#login-button').click(function(e){
	// Save user name in a variable
	username = $('#login-form input').val();
	if(!username){
		return;
	}

	// Hide welcome screen
	$('#welcome-screen').hide();

	// Show chat screen
	$('#chat-screen').show();

	// Show last messages
	showLastMessages();
});

/**
 * Shows last messages on screen
 */
function showLastMessages(){
	getMessages(5, function(messages){
		var $chatList = $('#chat-list');

		// Show on screen
		for(var i = 0; i < messages.length; i++){
			var message = messages[i];

			var $chatMessage = $(
				'<div class="chat-message">'+
					'<div>' +
						'<strong class="user-name">' + message.user + '</strong> <span class="date">' + message.date + '</span>' +
					'</div>' +
					'<div class="message-content">' +
						message.content +
					'</div>' +
				'</div>'
			);

			$chatMessage.appendTo($chatList);
		}
	});
}

/**
 * Gets messages from server
 *
 * @param  {Number}   numberOfMessages    Number of messages to get from server
 * @param  {Function} callback This is called with array of messages
 */
function getMessages(numberOfMessages, callback){
	$.get('/api/messages', {count : numberOfMessages}, callback);
}

});
