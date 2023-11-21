// current day
var today = dayjs();
$("#currentDay").text(today.format("D MMM YYYY"));
// 9am todo1
$("#9am").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "9am";
    localStorage.setItem(hour, todo)

})
var todo1 = localStorage.getItem('9am')
$("#9am").children('.description').val(todo1)

// 10am todo2
$("#10am").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "10am";
    localStorage.setItem(hour, todo)

})
var todo2 = localStorage.getItem('10am')
$("#10am").children('.description').val(todo2)

// 11am todo3
$("#11am").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "11am";
    localStorage.setItem(hour, todo)

})
var todo3 = localStorage.getItem('11am')
$("#11am").children('.description').val(todo3)

// 12pm todo4
$("#12pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "12pm";
    localStorage.setItem(hour, todo)

})
var todo4 = localStorage.getItem('12pm')
$("#12pm").children('.description').val(todo4)

// 1pm todo5
$("#13pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "13pm";
    localStorage.setItem(hour, todo)

})
var todo5 = localStorage.getItem('13pm')
$("#13pm").children('.description').val(todo5)

// 2pm todo6
$("#14pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "14pm";
    localStorage.setItem(hour, todo)

})
var todo6 = localStorage.getItem('14pm')
$("#14pm").children('.description').val(todo6)

// 3pm todo7
$("#15pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "15pm";
    localStorage.setItem(hour, todo)

})
var todo7 = localStorage.getItem('15pm')
$("#15pm").children('.description').val(todo7)

// 4pm todo8
$("#16pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "16pm";
    localStorage.setItem(hour, todo)

})
var todo8 = localStorage.getItem('16pm')
$("#16pm").children('.description').val(todo8)

// 5pm todo9
$("#17pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "17pm";
    localStorage.setItem(hour, todo)

})
var todo9 = localStorage.getItem('17pm')
$("#17pm").children('.description').val(todo9)

// timeblock colours
// Function to update time block colors
function updateTimeBlockColors() {
    var currentHour = today.hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        var timeBlock = $(this).children(".description");

        if (blockHour < currentHour) {
            timeBlock.addClass("past");
            timeBlock.removeClass("present");
            timeBlock.removeClass("future");
        } else if (blockHour === currentHour) {
            timeBlock.addClass("present");
            timeBlock.removeClass("past");
            timeBlock.removeClass("fututre");
        } else {
            timeBlock.addClass("future");
            timeBlock.removeClass("present");
            timeBlock.removeClass("past");
        }
    });
}

// Call the function to update colors initially
updateTimeBlockColors();

// Update colors every minute (optional)
setInterval(updateTimeBlockColors, 60000);