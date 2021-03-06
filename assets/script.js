//Display Day and Time in Heading
setInterval(function () {
    $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, HH:mm:ss"));
}, 1000);

//Change color display of tasks with reference to time of day
function timeTasks() {
    // Store hour input text
    var currentHour = moment().hour();
    console.log(currentHour);
    console.log(typeof(currentHour));
    console.log($("textarea").data("value"))
    console.log(typeof($("textarea").data("value")));
    
    // Changes background Color in Textarea
    $("textarea").each(function() {
    if ( $(this).data("value") === currentHour) {
        $(this).addClass("present")
        $(this).removeClass("past future")
    }
    if ( $(this).data("value") < currentHour) {
        $(this).addClass("past")
        $(this).removeClass("present future")
    }
    if ( $(this).data("value") > currentHour) {
        $(this).addClass("future")
        $(this).removeClass("past present")
    }
    console.log("Updated Colors")
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

//Function to update background colors every min based on current time but colors will only change when the hour changes.
setInterval(timeTasks, 60000); //60000 milliseconds = 1 Min 
