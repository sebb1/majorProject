var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var centerWidth = canvas.width/2;
var centerHeight = canvas.height/2;

var aminoAcid = ["lysine", "asparagine", "threonine", "arginine", "serine", "methionine", "isoleucine", "glutamine"];//, "histidine", "proline", "leucine", "glutaminc acid", "aspartic acid", "alanine", "glycine", "valine", "tyrosine", "serine", "cysteine", "tryptophan", "leucine", "phenylalanine"];
var randomAminoAcid = aminoAcid[Math.floor(Math.random()*aminoAcid.length)];
console.log(randomAminoAcid);

var Images = [];
var numberInRow = 0;
var loadedRow = 0;

var score = 0;

var rowTop = 1;
var dropSpeed = 0.5;

var startingPosY = 480;
var startingPosX = centerWidth-30;
var bubbleSize = 50;
var dx = 5;
var dy = -5;

//var speed = 5;

var startPointerPointX = centerWidth;
var startPointerPointY = canvas.height;
var endPointerPointX = centerWidth;
var endPointerPointY = canvas.height-100;


var pointer = true;
/*
var x = 500;
var y =480;
var endX = 75;
var endY = 75;
var angle = 270;
var dlt = 2;
*/

var bubbleShot = false;



var gameOver = false;

var aimX;
var aimY;

var xSpeed = 5;
var ySpeed = 3;

var rect = canvas.getBoundingClientRect();

var requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame || 
 window.webkitRequestAnimationFrame || 
 window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;



function radToDeg(){
	return angle *= (180/Math.PI);
}

function degToRad(){
	return angle *= (Math.PI/180);
}



$(document).ready(function (){
	$("button").click(function(){
		$(".mainBox").fadeToggle();
		//refresh();	
		

		

	init();


	});
});




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
loadRow(["images/uracil.png","images/adenine.png", "images/cytosine.png","images/guanine.png"]);

function drawLysineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawAspargineRow(){
	ctx.drawImage(Images[2], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
	
}

function drawThreonineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawArginineRow(){
	ctx.drawImage(Images[2], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawSerineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawMethionineRow(){
	ctx.drawImage(Images[3], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawIsoleucineRow(){
	ctx.drawImage(Images[2], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawGlutamineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawAminoRows(image,x,y,width,height){
	if(randomAminoAcid == "lysine"){
		console.log("WORKING FOR lysine");
		drawLysineRow();
	}else if (randomAminoAcid == "asparagine"){
		console.log("WORKING FOR asparagine");
		drawAspargineRow();
	}else if(randomAminoAcid == "threonine"){
		console.log("WORKING FOR threonine");
		drawThreonineRow();
	}else if(randomAminoAcid == "arginine"){
		console.log("WORKING FOR arginine");
		drawArginineRow();
	}else if(randomAminoAcid == "serine"){
		console.log("WORKING FOR serine");
		drawSerineRow();
	}else if(randomAminoAcid == "methionine"){
		console.log("WORKING FOR methionine");
		drawMethionineRow();
	}else if(randomAminoAcid == "isoleucine"){
		console.log("WORKING FOR isoleucine");
		drawIsoleucineRow();
	}else if(randomAminoAcid == "glutamine"){
		console.log("WORKING FOR glutamine");
		drawGlutamineRow();
	}else{
		console.log("row not available!");
	}

	
}

function drawLysinePlayer(image,x,y,width,height){
	ctx.drawImage(Images[1],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawAsparaginePlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);
}

function drawThreoninePlayer(){
	ctx.drawImage(Images[0],startingPosX,startingPosY,bubbleSize,bubbleSize);
}

function drawArgininePlayer(){
	ctx.drawImage(Images[3],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawSerinePlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawMethioninePlayer(){
	ctx.drawImage(Images[1],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawIsoleucinePlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawGlutaminePlayer(){
	ctx.drawImage(Images[1],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawPlayersBubble(image,x,y,width,height){
	if(randomAminoAcid == "lysine"){
		console.log("ALSO WORKING FOR lysine");
		drawLysinePlayer();
	}else if(randomAminoAcid == "asparagine"){
		console.log("ALSO WOKRING FOR asparagine");
		drawAsparaginePlayer();
	}else if(randomAminoAcid == "threonine"){
		console.log("ALSO WOKRING FOR threonine");
		drawThreoninePlayer();
	}else if(randomAminoAcid == "arginine"){
		console.log("ALSO WOKRING FOR arginine");
		drawArgininePlayer();
	}else if(randomAminoAcid == "serine"){
		console.log("ALSO WOKRING FOR serine");
		drawSerinePlayer();
	}else if(randomAminoAcid == "methionine"){
		console.log("ALSO WOKRING FOR methionine");
		drawMethioninePlayer();
	}else if(randomAminoAcid == "isoleucine"){
		console.log("ALSO WOKRING FOR isoleucine");
		drawIsoleucinePlayer();
	}else if(randomAminoAcid == "glutamine"){
		console.log("ALSO WOKRING FOR glutamine");
		drawGlutaminePlayer();
	}else{
		console.log("player not available");
	}

}
/*
function drawBubble(image,x,y,width,height){
	//ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(Images[0],startingPosX,startingPosY,bubbleSize,bubbleSize);
}
*/

function init(){
document.getElementById("triplet").innerHTML = "Amino-Acid: " + randomAminoAcid;
document.getElementById("points").innerHTML = "Score: " + score;
	

(function renderFrame(){
	refresh();
	dropRow();
	requestAnimationFrame(renderFrame);

		
}());
$(document).keydown(function (e){

	console.log(e.keyCode);
	switch(e.keyCode){
		case 32:
		shootBubble();

		break;
	}
});

function refresh(){
	ctx.clearRect(0,0, canvas.width,canvas.height);		
	//drawRow();
	drawPlayersBubble();
	drawAminoRows();
	
}

function dropRow(){
	rowTop += dropSpeed;

	if((rowTop+bubbleSize) > canvas.height){
			rowTop = canvas.height - bubbleSize;
		}
}

}

function shootBubble(){
	

	startingPosX += xSpeed;
	startingPosY -= ySpeed;
	

	if ((startingPosX+bubbleSize) > canvas.width || startingPosX < canvas.width-canvas.width) {
		xSpeed = -xSpeed;
	}
	

	if(startingPosY < canvas.height-canvas.height || (startingPosY+bubbleSize)>canvas.height){
		ySpeed = -ySpeed;
	}

	requestAnimationFrame(shootBubble);
	
}

 
function getMousePos(canvas, evt) {
return {
  x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
  y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
};
}


canvas.addEventListener('mousemove', function(evt) {
var mousePos = getMousePos(canvas, evt);
var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//console.log(getMousePos(canvas,evt));
}, false);

/*--------CODE TO BE USED LATER------------
var randomImage1 = Math.floor(Math.random() * 4);
var randomImage2 = Math.floor(Math.random() * 4);
var randomImage3 = Math.floor(Math.random() * 4);
var randomImage4 = Math.floor(Math.random() * 4);
var randomImage5 = Math.floor(Math.random() * 4);
var randomImage6 = Math.floor(Math.random() * 4);
var randomImage7 = Math.floor(Math.random() * 4);
var randomImage8 = Math.floor(Math.random() * 4);
var randomImage9 = Math.floor(Math.random() * 4);
var randomImage10 = Math.floor(Math.random() * 4);
var randomImage11 = Math.floor(Math.random() * 4);
var randomImage12 = Math.floor(Math.random() * 4);
var randomImage13 = Math.floor(Math.random() * 4);
var randomImage14 = Math.floor(Math.random() * 4);
var randomImage15 = Math.floor(Math.random() * 4);
var randomImage16 = Math.floor(Math.random() * 4);
var randomImage17 = Math.floor(Math.random() * 4);
var randomImage18 = Math.floor(Math.random() * 4);
var randomImage19 = Math.floor(Math.random() * 4);
var randomImage20 = Math.floor(Math.random() * 4);

function drawRow(image, x, y, width, height){
	ctx.drawImage(Images[randomImage1], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage2], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage3], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage4], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage5], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage6], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage7], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage8], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage9], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage10], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage11], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage12], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage13], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage14], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage15], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage16], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage17], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage18], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage19], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[randomImage20], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);

}




document.onmousemove = function(e){

	aimX = e.offsetX;
	aimY = e.offsetY;

	var angle = Math.atan2(aimY - startPointerPointY, aimX - startPointerPointX) * 180 / Math.PI;
	angle += 90;
	if(angle <0 ) {angle = 360 +angle;}
	refresh();
}

function aimer(){
	ctx.beginPath();
	ctx.strokeStyle = 'blue';
	ctx.moveTo(startPointerPointX,startPointerPointY);
	ctx.lineTo(aimX,aimY);
	ctx.stroke();
}


$(document).keydown(function(e){
	
		console.log(e.keyCode);
		switch(e.keyCode){
			case 32:
			bubbleShoot();

			break;
		}
		switch(e.keyCode){
			case 37:
			aimLeft();
			break;
		}
		switch(e.keyCode){
			case 39:
			aimRight();
			break;
		}

	

});



function bubbleShoot(){
			refresh();
			angle *= Math.PI/180;
			var x2 = endX,// += Math.cos(angle),
				y2 = endY; //+= Math.sin(angle);



			drawBubble(Images[0], x2,y2,bubbleSize,bubbleSize);
			
			console.log("shooting");
		
			if(startingPosX > canvas.width - bubbleSize || startingPosX  < canvas.width-canvas.width){
				dx  = -dx;
			}
			if(startingPosY  > canvas.height - bubbleSize || startingPosY  < canvas.height-canvas.height){
				dy = -dy;
			}
			startingPosX += dx;
			startingPosY += dy;

			requestAnimationFrame(bubbleShoot);
		
			bubbleShot = true;
}




function shot(){
	if(bubbleShot){
		//cancelAnimationFrame(animate);
		console.log("Shooting");
	}
}


function aimLeft() {
    
	    refresh();
	    
	    //drawPointer();
	    ctx.beginPath();
	    lineToAngle(x, y, endX,endY, angle);
	    ctx.lineWidth = 10;
	    ctx.lineCap="round";
	    ctx.stroke();

	    angle -= dlt;
	    //if (angle < 180 || angle > 0) dlt = -dlt;
		
	    //requestAnimationFrame(animate);

}
function aimRight() {
    
	    refresh();
	    
	    //drawPointer();
	    ctx.beginPath();
	    lineToAngle(x, y, endX,endY, angle);
	    ctx.lineWidth = 10;
	    ctx.lineCap="round";
	    ctx.stroke();

	    angle += dlt;
	   // if (angle < 180 || angle > 0) dlt = -dlt;
		
	    //requestAnimationFrame(animate);

}


function drawPointer(){
		ctx.beginPath();
	    //lineToAngle(centerWidth, y, endX,endY, angle);
	    ctx.moveTo(centerWidth,100);
	    ctx.lineTo(centerWidth,200);
	    ctx.lineWidth = 10;
	    ctx.lineCap="round";
	    ctx.stroke();

}




function refresh(){
	ctx.clearRect(0,0, canvas.width,canvas.height);
	
	aimer();
	drawBubble();
	drawRow();
	//dropRow();

	
}



function lineToAngle(x1, y1, endX, endY, angle) {

    angle *= Math.PI / 180;
    
    var x2 = x1 + endX * Math.cos(angle),
        y2 = y1 + endY * Math.sin(angle);
    
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    return {x: x2, y: y2};
}


function collision(){
	if (drawBubble == drawRow) {
		console.log("collision!")
	}
}




document.getElementById("playButton").onclick = working;
document.getElementById("instructionButton").onclick = alsoWorking;
function working(){

	console.log("clicked!");


}

function alsoWorking(){
	console.log("also clicked");
}
*/









