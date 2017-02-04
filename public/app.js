$(document).ready(function() {

$("#chat-screen").hide();
var username = "";

$("#welcome-screen button").click(function() {
    username = $("#welcome-screen input").val();

	// This code should work only if user logged in
	$.get("api/messages?count=10", function(messages) {

	    for (var i = 0; i < messages.length; i++) {
			/*
			I will comment out this block and rewrite it correctly, so that you can see the difference

	        var $div = document.createElement("div");
	        var user = document.createElement("div");
	        user.append("<p>" + data.user[i] + "</p>");
	        var messages = document.createElement("div");
	        messages.test(data.content[i]);
	        var userdate = document.createElement("div");
	        userdate.append(data.date[i]);
			*/

			var message = messages[i];

			// Create a container for chat message
			$chatMessage = $('<div class="chat-message">');

			// Create the part that contains username and date
			$div = $('<div>');
			$username = $('<strong class="user-name">').text(message.user);
			// I will leave the date as a timestamp. You can format it later so that users can read it.
			$date = $('<span class="date">').text(message.date);

			$div.append($username).append(' ').append($date);

			// Create message content container
			$messageContent = $('<div class="message-content">').text(message.content);

			// Combine them
			$chatMessage.append($div).append($messageContent);

			// Append chat message to chat message list
			$('#chat-message-list').append($chatMessage);
	    }
	});

    $("#welcome-screen").hide();
    $("#chat-screen").show();
});


$("#new-message-box button").click(function() {
    var newMessage = $("#new-message-box input").val();

	// TODO Here you send the message to server. But you should also append new message to chat message list as done above. But do not copy that code. Instead put them inside a function that takes the message object as parameter and call that function in both places.
    $.post("api/messages", {
        user: "username",
        content: "newMessage"
    });

});
});
