// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// value for save button
$(".saveBtn").on("click", function(){
    var saveSched = $(this).siblings(".description").val()
    var saveHour = $(this).parent().attr("id")
    localStorage.setItem(saveHour, saveSched)
})

// styling update
function blockUpdate () {
    var actualTime = moment().hours()
    $(".time-block").each(function(){
    var hourId = parseInt($(this).attr("id").replace("hour", ""))
    if(actualTime === hourId){
        $(this).removeClass("future")
        $(this).addClass("present")
    }    
    else if(actualTime > hourId){
        $(this).addClass("past")
    } else {
        $(this).addClass("future")
    }
    })
}

// grab local storage for hour ID
$("#hour8 .description").val(localStorage.getItem("hour8"))
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))

blockUpdate()