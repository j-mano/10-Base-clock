$(document).ready(function(){
    //var c = document.getElementById("ClockCanvas");
    //var ctx = c.getContext("2d");
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
	var WindowWidth = window.innerWidth;
	var WindowsHeigt = window.innerHeight;
	var screenWidth = screen.width;
    var screenHeigt = screen.height;

    //set canvas inner resolution.
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

    //HighRes checker
	if(screenWidth > 1670){
			HighRes  = true;
			c.height = 900;
			c.width  = 1000;
    }
	else{
			HighRes  = false;
			c.height = 450;
			c.width  = 500;
    }       
}); 

function canvasCleaner(){
    var blocks = [];
    ctx.clearRect(0, 0, c.width, c.height);
    for(var i in blocks){
        blocks[i].draw(ctx);
    }
}