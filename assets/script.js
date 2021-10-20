// Current date at top of page using moment.js
$(document).ready(function () {
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);

    
    // Get current hour.
    var currentHour = moment().hour();

    // Updating colors in time blocks using jquery
    var updateBlock = function() {
        $(".time-block").each(function () {

            var timeBlockHourTime = parseInt($(this).attr("id").split("-")[1]);

            // If time period is before current time add class 'past'
            // If time period is at current time add class 'present'
            // If time period is  in the future add class 'future'
            if (timeBlockHourTime < currentHour) {
                $(this).addClass("past");
            } else if (timeBlockHourTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    };

    updateBlock();
    var timeBlockUpdated = setInterval(updateBlock, 30000);

    $(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, description);
    });

     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
     $("#hour-10 .description").val(localStorage.getItem("hour-10"));
     $("#hour-11 .description").val(localStorage.getItem("hour-11"));
     $("#hour-12 .description").val(localStorage.getItem("hour-12"));
     $("#hour-13 .description").val(localStorage.getItem("hour-13"));
     $("#hour-14 .description").val(localStorage.getItem("hour-14"));
     $("#hour-15 .description").val(localStorage.getItem("hour-15"));
     $("#hour-16 .description").val(localStorage.getItem("hour-16"));
     $("#hour-17 .description").val(localStorage.getItem("hour-17"));
 

});


