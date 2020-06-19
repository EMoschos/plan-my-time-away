//Display Day and Time in Heading
setInterval(function () {
    $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

// Store hour input text
var currentHour = moment().hour();
console.log(currentHour);
console.log(typeof(currentHour));
console.log($("textarea").data("value"))
console.log(typeof($("textarea").data("value")));

//Change display of tasks with reference to time of day
function timeTasks() {
    $("textarea").each(function() {
    if ( $(this).data("value") === currentHour) {
        $(this).addClass("present")
    }
    if ( $(this).data("value") < currentHour) {
        $(this).addClass("past")
    }
    if ( $(this).data("value") > currentHour) {
        $(this).addClass("future")
    }
    consle.log("Updated Colors")
})};

// Function for saving and storing input text to local storage.
$("button").on("click", function (event) {
    var task = $(this).prev().val().trim();
    console.log(task)
    
    var btnClick = $(this).attr("id");
    console.log(btnClick)
    
    localStorage.setItem(btnClick, task);
})

//Function for displaying tasks restored from local storage.
function showList() {
    $("#0").text(localStorage.getItem("save0"));
    $("#1").text(localStorage.getItem("save1"));
    $("#2").text(localStorage.getItem("save2"));
    $("#3").text(localStorage.getItem("save3"));
    $("#4").text(localStorage.getItem("save4"));
    $("#5").text(localStorage.getItem("save5"));
    $("#6").text(localStorage.getItem("save6"));
    $("#7").text(localStorage.getItem("save7"));
    $("#8").text(localStorage.getItem("save8"));
}

//Initialise the app
showList();
timeTasks();

//Function to update background colors every 5 mins based on current time.
setInterval(timeTasks, 300000); //300000 milliseconds = 5 Mins 
