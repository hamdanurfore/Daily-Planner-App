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
$("#1pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "1pm";
    localStorage.setItem(hour, todo)

})

var todo5 = localStorage.getItem('1pm')
$("#1pm").children('.description').val(todo5)

// 2pm todo6
$("#2pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "2pm";
    localStorage.setItem(hour, todo)

})
var todo6 = localStorage.getItem('2pm')
$("#2pm").children('.description').val(todo6)

// 3pm todo7
$("#3pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "3pm";
    localStorage.setItem(hour, todo)

})
var todo7 = localStorage.getItem('3pm')
$("#3pm").children('.description').val(todo7)

// 4pm todo8
$("#4pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "4pm";
    localStorage.setItem(hour, todo)

})
var todo8 = localStorage.getItem('4pm')
$("#4pm").children('.description').val(todo8)

// 5pm todo9
$("#5pm").children(".btn").on("click", function (e) {
    e.preventDefault();
    var todo = $(this).siblings('.description').val();
    var hour = "5pm";
    localStorage.setItem(hour, todo)

})
var todo9 = localStorage.getItem('5pm')
$("#5pm").children('.description').val(todo9)

// timeblock colours
// Function to update time block colors
function updateTimeBlockColors() {
    var currentHour = today.hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        var timeBlock = $(this).children(".description");

        if (blockHour < currentHour) {
            timeBlock.addClass("past");
        } else if (blockHour === currentHour) {
            timeBlock.addClass("present");
        } else {
            timeBlock.addClass("future");
        }
    });
}

// Call the function to update colors initially
updateTimeBlockColors();

// Update colors every minute (optional)
setInterval(updateTimeBlockColors, 60000);