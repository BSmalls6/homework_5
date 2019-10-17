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
// grab the value of the timeslot on the table:
var str = $("#timeSlot").text();
// turn the value of the time slot into a numer
var timeSlot = parseInt(str);
// grab the current time
var curTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// turn the current time into a number
var timeValue = parseInt(curTime);

console.log(timeSlot);
console.log(curTime);
console.log(timeValue);
console.log(str);

// set the background color of the event div based on the time - function call at bottom
function colorTime() {
    $("#timeSlot").each(function () {
        // compares the two numbers (the current time vs. the value of the time slot)
        if (timeSlot === timeValue) {
            $(".event").css('background-color', '#0099cc');
        }
        else if (timeSlot < timeValue) {
            $(".event").css('background-color', '#cccccc');
        }
        else if (timeSlot > timeValue) {
            $(".event").css('background-color', 'white');
        }
    })
};
// get the position of the click







// Add click event to each timeslot, that allows user to add a new text to the time slot with custom text.
$(".event").on("click", createEvent);

function createEvent() {
    

};

// clicking save button saves the content of the event div to local storage
// if there is no content, button does not fire



colorTime();
