// when opening the planner the cuurent day is displayed at the top of the page
// var currentDay ;
$("#currentDay").text(moment().format("MMM Do YY"));
// moment().format("MMM Do YY")             
// .text current day to <p>
// .append current day to <p>


// when viewing time blocks for a specific day each time block is color-coded to indicate whether it is past, present, or future

// var color for past ;
// var color for present ;
// var color for future ;
// if past { color past = grey} ;
// if present { color present = red} ;
// if future { color future = green} ;


// when clicking on a time block the user can enter an event

// on click = .text ;
// .append .text entered ;

// when clicking the save button for "that" time block the text is saved in the local storage

// on click = save button ;
// save to localStorage ;

// when the page is refreshed the saved events persist
