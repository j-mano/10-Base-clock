// To store witch 12/24 clockdate
window.clocktranslation = 0;

// Implement timecalculation values
window.CalculatedHours;
window.CalculatedMinutes;
var Hoursmodulus;
window.totaltime;

$(document).ready(function(){
	/*
		 Setting and getting the inital date and time. This is getting time from the operating system.
	*/
	var date1 = new Date();
	var Hours = date1.getHours();
	var Minutes = date1.getMinutes();
	var dString = date1.toLocaleTimeString();

	/*
		Graphicspoints for setting the graphics in canvas. This is for setting textline for the canvas.
	*/
	window.TextXPoint = c.width/25;

	window.TextRow1 = c.height/25;
	window.TextRow2 = TextRow1 + (c.height/25);
	window.TextRow3 = TextRow2 + (c.height/25);
	window.TextRow4 = TextRow3 + (c.height/25);
	window.TextRow5 = TextRow4 + (c.height/25);
	window.TextRow6 = TextRow5 + (c.height/25);
	window.TextRow7 = TextRow6 + (c.height/25);
	window.TextRow8 = TextRow7 + (c.height/25);

	/*
		Checking 12 or 24 hour system and initalase main loop of the aplication.
	*/
	Check24clock();
	Update();
	
	/*
		Main update function in the aplication. This is for updating functions in the aplication.
	*/
	function Update(){
		canvasCleaner();
		timeupdater();
		writedate();
		AnimationClock();

		// Timeloop coode
		setTimeout(function () {
        Update();
		}, 180);
		errorcheker();
	}
});

	/*
		Checking 12 or 24 hour system.
	*/
	function Check24clock(){
		if (dString.match(/am|pm/i) || date1.toString().match(/am|pm/i))
		{
			clocktranslation = 12;
		}
		else
		{
			clocktranslation = 24;

			ctx.fillText("Translated from the local 24hour clock, The software do not support 12hour clock in this version",TextXPoint,TextRow1);
			ctx.stroke();

			return true;
		}

		return false;
	}

	function timeupdater(){
		/*
			Getting systemtime from operatingsystem.
		*/

		date1 = new Date();
		Hours = date1.getHours();
		Minutes = date1.getMinutes();

		calculate10hourebase();
	}

	function calculate10hourebase(){
		/* 
			Calculation of 10 base clock 
		*/
		if(clocktranslation == 24){
			CalculatedHours   = Hours / 2.4;
			CalculatedMinutes = Minutes * 1.6666;
			Hoursmodulus 	  = Hours % 2.4;
			totaltime = CalculatedHours + (CalculatedMinutes / 100.0);
		}

		if(clocktranslation == 12){
			CalculatedHours   = Hours / 1.2;
			CalculatedMinutes = Minutes * 1.6666;
			Hoursmodulus      = Hours % 1.2;
			totaltime = CalculatedHours + (CalculatedMinutes / 100.0);
		}
	}

	function errorcheker(){
		// Error code for valus
		if(totaltime > 10.0001 || totaltime < 0){
			errorbool = 1;
			ErrorCode = 409;
		}

		// Error code can't read local clock.
		if(clocktranslation != 24){
			if(clocktranslation != 12){
				errorbool = 1;
				ErrorCode = "Don't know if to use 12 or 24 hour clock";
			}
		}
	}