var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var centerWidth = canvas.width/2;
var centerHeight = canvas.height/2;

console.log(randomAminoAcid);

var Images = [];
var numberInRow = 0;
var loadedRow = 0;

var score = 0;

var rowTop = 1;
var dropSpeed = 2;

var startingPosY = 480;
var startingPosX = centerWidth-30;
var bubbleSize = 50;
var shootSpeed = 10;


var startPointerPointX = centerWidth;
var startPointerPointY = canvas.height;
var angle = 0;
var playerAngle = 0;
var bubbleAngle = 0;

var canvasOffset = $("#gameCanvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;


var points;

var shot = false;
var match = false;


var over = false;


var requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame || 
 window.webkitRequestAnimationFrame || 
 window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;





function radToDeg(angle){
	return angle * (180/Math.PI);
}

function degToRad(angle){
	return angle * (Math.PI/180);
}





function loadRow(paths){
	numberInRow = paths.length;
	for(i in paths){
		var imag = new Image();
		imag.src = paths[i];
		Images[i] = imag;
		Images[i].onload = function(){
			loadedRow++;
			console.log(loadedRow);
		}

	}

}
loadRow(["images/singleImages/uracil.png","images/singleImages/adenine.png", "images/singleImages/cytosine.png","images/singleImages/guanine.png"]);



function init(){
document.getElementById("triplet").innerHTML = "Amino-Acid: " + randomAminoAcid;
document.getElementById("points").innerHTML = "Score: " + score;
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
(function renderFrame(){
	refresh();
	dropRow();
	requestAnimationFrame(renderFrame);

}());
		
}
function refresh(){
	ctx.clearRect(0,0, canvas.width,canvas.height);		
	drawPlayersBubble();
	drawAminoRows();
	drawPointer();

}


function drawLevel(){
	ctx.clearRect(0,0, canvas.width,canvas.height);		
	drawPlayersBubble();
	drawAminoRows();
	drawPointer();



}

function onMouseMove(e){
	var pos = getMousePos(canvas, e);

	var mouseAngle = radToDeg(Math.atan2((startingPosY+bubbleSize/2) - pos.y, pos.x - (startingPosX + bubbleSize/2)));

	if (mouseAngle < 0){
		mouseAngle = 180 + (180 + mouseAngle);
	}

	var lbound = 25;
	var ubound = 155;

	if (mouseAngle > 90 && mouseAngle < 270){
		if (mouseAngle > ubound){
			mouseAngle = ubound;
		}
		
	}else {
		if (mouseAngle < lbound ||mouseAngle >=270){
			mouseAngle = lbound;
		}
	}

	playerAngle = mouseAngle;

	//console.log(playerAngle);
	
	
}
function drawPointer(){
	ctx.lineWidth  = 10;
	ctx.lineCap = "round";
	ctx.strokeStyle ="#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(startingPosX + (bubbleSize/2), startingPosY-5);
	if (shot == true) {
		ctx.lineTo(startingPosX + (bubbleSize/2), startingPosY-5);
	}else{

	ctx.lineTo(centerWidth + 1.5 * bubbleSize * Math.cos(degToRad(playerAngle)), centerWidth - 1.5*bubbleSize * Math.sin(degToRad(playerAngle)));
	}
	ctx.stroke();
}


function getMousePos(canvas, e){
	
	var rect = canvas.getBoundingClientRect();

	return{
		x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
		y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
	};
}

function onMouseDown(evt){
	var pos = getMousePos(canvas, evt);
	shootBubble();
}
function shootBubble(){
	bubbleAngle = playerAngle;
	var dtx = shootSpeed * Math.cos(degToRad(playerAngle));
	var dty = -shootSpeed * Math.sin(degToRad(playerAngle));
	startingPosX +=dtx;
	startingPosY +=dty;

	if (startingPosX <= canvas.width - canvas.width) {
		bubbleAngle = 180 - bubbleAngle;
		startingPosX = canvas.width - canvas.width;
	}else if (startingPosX + bubbleSize >= canvas.width) {
		bubbleAngle = 180 - bubbleAngle;
		startingPosX = canvas.width - bubbleSize;
	}

	if(startingPosY  < rowTop+bubbleSize){
		//startingPosY = rowTop + bubbleSize;
		//startingPosX = startingPosY;
		
		
		startingPosY = rowTop + bubbleSize;
		//startingPosX = startingPosY;

		collision();
	}
	shot = true;
	//console.log(startingPosX);
	//console.log(startingPosY);
	requestAnimationFrame(shootBubble);

	
}


function dropRow(){
	rowTop += dropSpeed;

	if((rowTop+bubbleSize) > canvas.height-100){
			rowTop = canvas.height - 100 - bubbleSize;
			over = true;
			gameOver();
		}
	if (startingPosY < rowTop + bubbleSize) {
		dropSpeed = 0;
	}
}

function collision(){
	match = true
	if (match == true) {
		console.log("collision");
		
		document.getElementById("points").innerHTML = "Score: " + 10

		}

}

function gameOver(){
	//gameOver = true;
	if (over == true) {
		console.log("game over!");
	}
}