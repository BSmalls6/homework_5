// Create function that displays current date
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate();+'/'+today.getFullYear();
$(".today").html(date);
// create function that displays current time
function time(){
    var t = new Date();
    var s = t.getSeconds();
    var m = t.getMinutes();
    var h = t.getHours();
    $(".rightNow").html(h + ":" + m + ":" + s);
}
setInterval(time,1000);
// create function with a countdown effect, that changes the color of a box based on the time
// Add click event to each timeslot, that allows user to add a new box to the time slot with custom text.
$(".event").on("click" , createEvent);

function createEvent(){
    var newEvent = document.createElement("<div class = newEvent>");
    var task = prompt("Type here to create a new event")
    newEvent.innerHTML= task;
    $(".event").prepend(newEvent);
};
