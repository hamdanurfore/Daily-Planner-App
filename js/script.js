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