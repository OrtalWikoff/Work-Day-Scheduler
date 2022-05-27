$(document).ready(function() {
    //The current day is displayed at the top of the calendar 
    var todayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    $("#currentDay").text(todayDate);
    //Added save butten event listener (on click) and set item in a local storage
    $(".saveBtn").on("click", function(){
    var textInput = $(this).siblings(".TextArea").val();
    var timeInput = $(this).parent().attr("id");
    localStorage.setItem(timeInput, textInput);
})

//Time block are color-coded to indicate whether it is in the past, present, or future

function pastPresenFuture(){
//Get the current number of hours
    var timeNow = moment().hour();
//Loop over time blocks (.each)
 $(".time-block").each(function() {
//The parseInt() function parses a string argument and returns an integer of the specified radix
//The attr() get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
     var blockOfTime = parseInt($(this).attr("id").split("-")[1])
//Check the time and add the classes for background colors.
if (blockOfTime<timeNow){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
} else if (blockOfTime===timeNow){
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");   
} else{
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future") ; 
    }
 })
}
    pastPresenFuture()
//get items from local storage back to TextArea
    $("#h-8 .TextArea").val(localStorage.getItem("h-8"));
    $("#h-9 .TextArea").val(localStorage.getItem("h-9"));
    $("#h-10 .TextArea").val(localStorage.getItem("h-10"));
    $("#h-11 .TextArea").val(localStorage.getItem("h-11"));
    $("#h-12 .TextArea").val(localStorage.getItem("h-12"));
    $("#h-13 .TextArea").val(localStorage.getItem("h-13"));
    $("#h-14 .TextArea").val(localStorage.getItem("h-14"));
    $("#h-15 .TextArea").val(localStorage.getItem("h-15"));
    $("#h-16 .TextArea").val(localStorage.getItem("h-16"));
    $("#h-17 .TextArea").val(localStorage.getItem("h-17"));
})


