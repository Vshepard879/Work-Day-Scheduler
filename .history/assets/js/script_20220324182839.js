// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// value for save button
$(".saveBtn").on("click", function(){
    var saveSched = $(this).siblings(".description").val()
    var saveHour = $(this).parent().attr("id")
    localStorage.setItem(saveHour, saveSched)
})

