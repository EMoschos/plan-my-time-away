//Display Day and Time in Heading - COMPLETED
setInterval(function(){
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

//Change display of tasks with reference to time of day
var hour = document.getElementById("hour");
console.log(currentDay.innerHTML)
//$("currentDay").text = moment().format("MMM Do YYYY");
//var currentHour = document.getElementById("test");
//currentHour.innerHTML = moment().format('H');
var hourObject = moment().format('H');
var correctHour = new Date().getHours();
var hourString = JSON.stringify(hourObject);
var hourInteger = parseInt(hourString);
console.log(parseInt(hourObject)===21);
console.log(correctHour)
console.log(typeof(hourString));
console.log(hourString);
console.log(typeof(hourInteger));
console.log(hourInteger==="21");
//if (hourInteger==9) {