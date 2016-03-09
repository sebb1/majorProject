var canvas = document.getElementById("gameCanvas");

var ctx = canvas.getContext("2d");
var centerWidth = canvas.width/2;
var centerHeight = canvas.height/2;


var Images = [];
var numberInRow = 0;
var loadedRow = 0;


var rowTop = 1;

var startingPosY = 480;
var startingPosX = centerWidth-25;
var bubbleSize = 50;

var speed = 100;

var arrowEnd = centerWidth;


var x = centerWidth;
var y =475;
var length = 75;
var angle = 0;
var dlt = -2;

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

var gameOver = false;

function drawBubble(x,y,width,height){
	ctx.drawImage(Images[0],startingPosX,startingPosY,bubbleSize,bubbleSize);
};



function drawRow(){
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
	dropRow();
}

function dropRow() {
    setInterval(function(){ 
    	rowTop += 0.05;
    	if(rowTop == canvas.height-200){
    		console.log("Game Over");

    		gameOver = true;
    		
    	}

    }, 500);
}



$(document).keydown(function(e){
	console.log(e.keyCode)
	switch(e.keyCode){
		case 32:
		bubbleShoot();
		break;
	}
});

function bubbleShoot(){
	console.log("Shooting bubble");
}

$(document).ready(function(){
	$("button").click(function(){
		$(".mainBox").fadeToggle();
		drawBubble();
		//drawArrow();
		drawRow();	
		
		(function animate() {
		    
		    refresh();
		    
		    ctx.beginPath();
		    lineToAngle(x, y, length, angle);
		    ctx.lineWidth = 10;
		    ctx.lineCap="round";
		    ctx.stroke();

		    angle += dlt;
		    if (angle < -180 || angle > 0) dlt = -dlt;
			

		    requestAnimationFrame(animate);

		})();
	


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
loadRow(["images/thymine.png","images/adenine.png", "images/cytosine.png","images/guanine.png"]);


function refresh(){
	ctx.clearRect(0,0, canvas.width,canvas.height);
	//drawArrow();
	drawBubble();
	drawRow();

	if (gameOver) {
		ctx.font = "bold 50px Arial";
		ctx.fillStyle = "white";
		ctx.fillText = "Game Over!"
	}
}

function moveToPoint(){
	ctx.drawImage(Images[0], 50,50,50,50);

}

	

function lineToAngle(x1, y1, length, angle) {

    angle *= Math.PI / 180;
    
    var x2 = x1 + length * Math.cos(angle),
        y2 = y1 + length * Math.sin(angle);
    
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    return {x: x2, y: y2};
}




document.getElementById("playButton").onclick = working;
document.getElementById("instructionButton").onclick = alsoWorking;
function working(){

	console.log("clicked!");


}

function alsoWorking(){
	console.log("also clicked");
}

