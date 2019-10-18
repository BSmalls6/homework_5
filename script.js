$(document).ready(function () {


    // Create function that displays current date
    var today = new Date();
    var date = (today.getMonth() + 1) + '/' + today.getDate(); +'/' + today.getFullYear();
    // show the date
    $(".today").html(date);
    // create function that displays current time
    function time() {

        var t = new Date();
        var s = t.getSeconds();
        var m = t.getMinutes();
        var h = t.getHours();

        $(".rightNow").html(h + ":" + m + ":" + s);

    }
    setInterval(time, 1000);
    // set the background color of the event div based on the time - function call at bottom
    function colorTime() {
        $(".event").each(function (el, element) {
            // console.log(el , element);
            // turn the value of the time slot into a numer
            // var timeSlot = parseInt($(this).text());
            var currentId = parseInt($(this).attr("id"));
            // console.log(currentId);
            // grab the current time
            var curTime = parseInt(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
            // console.log(timeSlot);
            // console.log(curTime);
            // console.log($(this).text());
            // turn the current time into a number
            // compares the two numbers (the current time vs. the value of the time slot)
            if (currentId === curTime) {
                $(this).addClass('present');
            }
            if (currentId < curTime) {
                $(this).addClass('past');
            }
            if (currentId > curTime) {
                $(this).addClass('future');
            }

        });
    };


    // Add click event to each timeslot, that allows user to add a new text to the time slot with custom text.
    $(".event").each(function (el, element) {
        $(".lock").on("click", function () {
                var task = $(".input").val();
                console.log($(".input").val());
                $(".event").append(" " + "*" + task + " ");
            });
        });
        // clicking save button saves the content of the event div to local storage
        // if there is no content, button does not fire


        console.log($(".input").val)
        colorTime();
    });
