$( document ).ready(function() {

$("#chat-screen").hide();
username ="";

$( "#welcome-screen button" ).click(function() {
    username=$("#welcome-screen input").val();
    $("#welcome-screen").hide();
    $("#chat-screen").show();
});

$.get( "api/messages?count=10" , function( data ) {

    for(var i=0;i++;i<10){

    var $div = document.createElement("div");
    var user = document.createElement("div");
        user.append( "<p>"+ data.user[i] +"</p>" );
    var messages = document.createElement("div");
        messages.test(data.content[i]);
    var userdate = document.createElement("div");
        userdate.append(data.date[i]);

    }
$div.append(user);
$div.append(messages);
$div.append(userdate);

$div.append("#chat-screen");
});

newMessage="";
$("#new-message-box button").click(function(){
newMessage=$("#new-message-box").val();

$.post( "api/messages",{ user: "username", content: "newMessage" } );

});
});
