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
            console.log("This is the time block hour: " + timeBlockHourTime);

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
});


