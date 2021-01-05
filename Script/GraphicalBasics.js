$(document).ready(function(){
    window.c = document.getElementById("ClockCanvas");
    window.ctx = c.getContext("2d");

    function Updateg(){
		//canvasCleaner();
        WindowsSizeChecker();
        // Timeloop coode
		setTimeout(function () {
            Updateg();
            }, 90);
        }
    
    // window size
	var WindowWidth     = getWindowWidth();
	var WindowsHeigt    = getWindowHeight();
	var screenWidth     = getScreenWidth();
    var screenHeigt     = getScreenHeight();

    // set canvas inner resolution. This 
    switch(HighRes,isWideScreen) {
        case HighRes == true, isWideScreen == true:
            c.height = 900;
            c.width  = 1000;
            break;
        case HighRes == false, isWideScreen == true:
            c.height = 450;
            c.width  = 500;
            break;
        case HighRes == true, isWideScreen == false:
            c.height = 1000;
            c.width  = 900;
            break;
        case HighRes == false, isWideScreen == false:
            c.height = 500;
            c.width  = 450;
            break;
        default:
            c.height = 500;
            c.width  = 450;
    }

    // HighRes checker, cheking if the screen is an regular 1080p screen. width of an 1080p ekvevelent 4:3 is 1600px.
	if(screenWidth > 1590){
			HighRes  = true;
    }
	else{
			HighRes  = false;
    }       
}); 

/*
    Cleaning the canvas after each update.
*/
function canvasCleaner(){
    var blocks = [];
    ctx.clearRect(0, 0, c.width, c.height);
    for(var i in blocks){
        blocks[i].draw(ctx);
    }
}

/*
    Returning the height of the aplication window.
*/
function getWindowHeight(){
    return window.innerHeight;
}

/*
    Returning the width of the aplication window.
*/
function getWindowWidth(){
    return window.innerWidth;
}

/*
    Returning the height of the Screen.
*/
function getScreenHeight(){
    return screen.height;
}

/*
    Returning the width of the Screen.
*/
function getScreenWidth(){
    return screen.width;
}