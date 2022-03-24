// Shows display for current date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// value for save button
$(".saveBtn").on("click", function(){
    var saveSched = $(this).siblings(".description").val()
    var saveHour = $(this).parent().attr("id")
    localStorage.setItem(saveHour, saveSched)
})

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

