$(document).ready(function() {
    $("#currentDay").text(moment().format("mm, dd, yy"));
//adding function to save button on click//
    $('.saveBtn').on('click', function(){
      
        var time = $(this).parent().attr('id');
        var input = $(this).sibling('.details').val()
     
        localStorage.setItem(input, time);
    });
    //adding function//
function timeStop()   {
      
    var realTime = moment().hours()
    $('.time-block').each( function(){
    var blockHour = parseInt($(this).attr('id').split('hour-')[1])

        if (blockHour < realTime) {
            $(this).children('textDetails').addClass('past');
        }
        else if (blockHour === realTime) {
            $(this).children('textDetails').removeClass('past');
            $(this).children('textDetails').addClass('present');
        }
        else {
            $(this).children('textDetails').removeClass('past');
            $(this).children('textDetails').removeClass('present');
            $(this).children('textDetails').addClass('future');
        }
        }) 
    }
    setInterval(timeStop,1000);
    timeStop();
   
});
