$(document).ready(function () {


    // Create function that displays current date
    var today = new Date();
    var date = (today.getMonth() + 1) + '/' + today.getDate(); +'//' + today.getFullYear();
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

 function showEvents() {
var savedTasks = localStorage.getItem("task")
var savedTime = localStorage.getItem("timeoftask")
console.log(savedTasks);
console.log(savedTime);

 };
    // Add click event to each timeslot, that allows user to add a new text to the time slot with custom text.
    // $(".rounded").each(function (el, element) {
    
    $(".lock").on("click", function () {
        var storeTask = (taskTime , task);
        console.log(storeTask);
        var task = $(this).prev().find(".input").val();
        var taskTime = $(this).prev("id");
                console.log(storeTask);
                $(this).prev().append(" " + "task:" +" "+ task + " ");
                localStorage.setItem( 1, storeTask) 
                // console.log(localStorage);
                // console.log(localStorage.getItem("task"));          
                $(".input").val("");
            });
        // clicking save button saves the content of the event div to local storage
        // if there is no content, button does not fire
        // });

        $(".newDay").on("click" , function(){
            localStorage.clear();
            location.reload();
        });
        colorTime();
        showEvents();
    });
