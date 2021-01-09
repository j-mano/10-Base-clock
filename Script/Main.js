// To store witch 12/24 clockdate
window.clocktranslation = 0;

// Implement timecalculation values
window.CalculatedHours;
window.CalculatedMinutes;
var Hoursmodulus;
window.totaltime;

$(document).ready(function(){
	setTextpoints();

	/*
		Checking 12 or 24 hour system and initalase main loop of the aplication.
	*/
	var date1 = getRegularClockTime();
	
	if(is24HoureDate(date1) || is12HoureDate(date1)){
		Update();
	}
	else{
		window.alert("Reading systemclock error! Neigher 24 or 12 houer system is used, Please check systemclock is correct and refresh the website by pressing F5");
	}
	
	/*
		Main update function in the aplication. This is for updating functions in the aplication. Todo: make update function async to make it better
	*/
	async function Update(){
		canvasCleaner();
		writedate();
		animationUpdate();
		updateCalcUpdate();

		// Function update for this update function.
		setTimeout(function () {
        	Update();
		}, 180);
		
		validateTimne();
	}
});