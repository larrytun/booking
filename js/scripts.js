$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    $("#info").toggle();
    $("ul#confirmation").before("<h2>Your appointment has been booked! Here's the details: </h2>");
    $("ul#confirmation").append("<li>Your name: " + $("#name").val() + "</li>");
    $("ul#confirmation").append("<li>Date of appointment: " + $("#date").val() + "</li>");
    $("ul#confirmation").append("<li>Check-in time: " + $("#check-in").val() + "</li>");
    $("ul#confirmation").append("<li>Check-out time: " + $("#check-out").val() + "</li>");
  });
});
