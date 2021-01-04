// To store witch 12/24 clockdate
window.clocktranslation = 0;

// Time Varibales
var date1 = new Date();
var Hours = date1.getHours();
var Minutes = date1.getMinutes();
var dString = date1.toLocaleTimeString();

function getRegularClockTime(){
    
    return Date;
}

function get10baseClockTime(){
    
    return Date;
}

/*
    updating the aplications internalclock
*/
function setInternalSystemclock(){

}

function getis24HoureTime(){

    return false;
}

function getis12HoureTime(){
    
    return false;
}

function timeupdater(){
    /*
        Getting systemtime from operatingsystem.
    */

    date1 = new Date();
    Hours = date1.getHours();
    Minutes = date1.getMinutes();
}

function updateAplicationTime(){
    timeupdater();
    setInternalSystemclock();
}