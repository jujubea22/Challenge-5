// // Display current date and time on Jumbotron on the mainpage
var date = new Date();
document.getElementById("currentDay").innerHTML = date;

let currentHour = date.getHours(); // setting variable of currentHour using JavaScript to use further down to color calendar textarea correctly


// Function that will be used for save button click event to save calendar text to localStorage
function saveToCalendar() {
    let eventText = []; // empty array to store the calendar information in for localStorage
    for(let i = 0; i < 9; i++) {
        let id = '#calendarTextarea' + i.toString(); // setting id variable for all of the text entered into the calendar for each hour
        let eventEl = $(id)[0]; // using JQUERY to set id for evenEl and set to start at the 0 index of the array and work through each one after that
        eventText.push(eventEl.value); // pushes the values s
    }
    let jsonString = JSON.stringify(eventText); // setting jsonString variable to the stringified evenText from the textarea on the calendar
    localStorage.setItem("eventText", jsonString); // saving text in textarea on calendar to localStorage 
    
}

let startHour = 9 //setting variable of startHour equal to value of 9 to represent 9am on calendar

// Function to load saved text onto calendar from localStorage
function reloadToCalendar() {
    let eventText = []; // array storing saved calendar data
    let text = localStorage.getItem("eventText"); // setting variable that retrieves data from localStorage

    // if statement to check if there is text in localStorage before loading to the calendar and use JSON to parse the information
    if(text !== undefined && text !== null && text !== ""){
    eventText = JSON.parse(text); 

    //for loop set to loop through each row of the calendar and color code it correctly as well as 
    for(let i = 0; i <= 9; i++) {
        let hour = startHour + i; // hour variable that will work through each time-block
        let id = '#calendarTextarea' + i.toString() // added id variable to call in the eventbox.
        let eventBox = $(id); // using jquery to call id and set variable 'evenBox' equal to it.
        eventBox[0].value = eventText[i]; 
        
        // if statement to change color of textarea on calendar based on current hour of the day
        if(hour < currentHour) {
            eventBox.addClass('past');
        } else if(hour == currentHour) {
            eventBox.addClass('present')
        } else {
            eventBox.addClass('future');
        }
        } 
    }
   
}

// Load calendar items on page load
window.onload = reloadToCalendar();


// event listener for cick to save text entered to calendar
$('Button.saveBtn').click(saveToCalendar);


