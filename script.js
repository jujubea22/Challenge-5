$(document).ready(function() {
    $("#currentDay").text(moment().format("mm, dd, yy"));

    $('.saveBtn').on('click', function(){
      
        var time = $(this).parent().attr('id');
        var input = $(this).siblings('.description').val()
     
        localStorage.setItem(input, time);
    });
   
function timeStop()   {
