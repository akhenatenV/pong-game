const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");



//let x = 1;
//let y = 1;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

//obsticle 1
var bar1y = 0;
var bar1x = 700;
var b1y = 0;
var b1x = -2;

//obsticle 2
var bar2y = 100;
var bar2x = 1000;
var b2y = 0;
var b2x = -2;

//obsticle 3
var bar3y = 0;
var bar3x = 1300;
var b3y = 0;
var b3x = -2;


//ball
let radius = 20;
let speed = 10;


let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    drawBar1();
    drawBar2();
    drawBar3();
    inputs();
    boundryCheck();
    drawGreenBlob();

    // making the ball bounce off all walls
    // if(x + dx > canvas.width-radius || x + dx < radius) {
    //     dx = -dx;
    // }
    // if(y + dy > canvas.height-radius || y + dy < radius) {
    //     dy = -dy;
    // }
    //
    // x += dx;
    // y += dy;
    // move the bars accross the canvas
    bar1x += b1x;
    bar2x += b2x;
    bar3x += b3x;
}

function drawGreenBlob(){
	ctx.fillStyle = "#0f0";
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fill();
    ctx.closePath();
    // making the ball move ** UP **  on its own
    //x += dx;
    // making the ball move ** RIGHT ** on its own
    //y += dy;

}

function drawBar1(){
    ctx.fillStyle = "#f00";
    ctx.rect(bar1x, bar1y, 10, 450);
    ctx.fill();
    ctx.closePath();
}
function drawBar2(){
    ctx.fillStyle = "#00f";
    ctx.rect(bar2x, bar2y, 10, 450);
    ctx.fill();
    ctx.closePath();
}
function drawBar3(){
    ctx.fillStyle = "#000";
    ctx.rect(bar3x, bar3y, 10, 450);
    ctx.fill();
    ctx.closePath();
}

function inputs(){
    if(upPressed){
        y -= speed;
    }
    if(downPressed){
        y += speed;
    }
    if(leftPressed){
        x -= speed;
    }
    if(rightPressed){
        x += speed;
    }
}

function boundryCheck(){
    if(y < radius){
        y = radius;
    }
    if(y > canvas.height - radius){
        y = canvas.height - radius;
    }
    if(x < radius){
        x = radius;
    }
    if(x > canvas.width - radius){
        x = canvas.width - radius;
    }
}


function clearScreen(){
    ctx.fillStyle = "#555";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(event){
	//up
	if(event.keyCode == 38){
		upPressed = true;
	}
	//down
	if(event.keyCode == 40){
		downPressed = true;
	}
	//left
	if(event.keyCode == 37){
		leftPressed = true;
	}
	//right
	if(event.keyCode == 39){
		rightPressed = true;
	}
}

function keyUp(event){
	//up
	if(event.keyCode == 38){
		upPressed = false;
	}
	//down
	if(event.keyCode == 40){
		downPressed = false;
	}
	//left
	if(event.keyCode == 37){
		leftPressed = false;
	}
	//left
	if(event.keyCode == 39){
		rightPressed = false;
	}
}




drawGame();
