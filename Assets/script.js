//Current Date tracker
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
 
//variable that updates the planner every 5 minutes
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "textarea"
    var timeBlockElements = $(".textarea");

    //loop through textarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

//

