// Implement timecalculation values
window.CalculatedHours;
window.CalculatedMinutes;
var Hoursmodulus;
window.totaltime;

// To store witch 12/24 clockdate
window.clocktranslation = 0;

function getRegularClockTime(){
    return new Date();
}

function getRegularClockTimeString(){
    date1 = getRegularClockTime();
    return date1.toLocaleTimeString();
}

function getRegularHoure(){
    date1 = getRegularClockTime();
    return date1.getHours();
}

function getRegularMinute(){
    date1 = getRegularClockTime();
    return date1.getMinutes();
}

function get10baseClockTime(){
    return get10hourebase();
}

function getDate10baseHoure(){
    this.num    = get10baseClockTime();

    var parts   = this.num.toString().split('.');
    this.whole  = parts[0];
    this.dec    = Number("."+parts[1]).toFixed(2).replace('0','');

    var Hours = parts[0];

    return Hours;
}

function getDate10baseMinute(){
    this.num    = get10baseClockTime();

    var parts   = this.num.toString().split('.');
    this.whole  = parts[0];
    this.dec    = Number("."+parts[1]).toFixed(2).replace('0','');

    var Minutes = Number("."+parts[1]).toFixed(2).replace('0','');
    
    return Minutes;
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