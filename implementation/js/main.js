$(document).ready(function (){
	$("#buttonPlayGame").click(function(){
		$(".mainBox").fadeToggle();
	init();
	drawTable();
	});

	$("#easyButton").click(function(){
		$(".mainBox").fadeToggle();
		drawTableEasy();
		initEasy();
	});

	$("#mediumButton").click(function(){
		$(".mainBox").fadeToggle();
	});

	$("#instructionButton").click(function(){
		$(".mainBox").fadeToggle();
	});


});








/*--------CODE TO BE USED LATER------------
$(document).keydown(function (e){

	console.log(e.keyCode);
	switch(e.keyCode){
		case 39:
		circle.angle += ball.speed;

		break;
	}
	switch(e.keyCode){
		case 37:
		circle.angle -= ball.speed;
	}
	switch(e.keyCode){
		case 32:
		shootBubble();
	}
});
function shootBubble() {
	console.log(playerAngle);


	var shootX = playerAngle;
	var shootY = playerAngle;


	shootX ++;
	shootY --;
	startingPosX = shootX;
	startingPosY = shootY;
	
	//requestAnimationFrame(shootBubble);

	if (startingPosX < 0 || startingPosX+bubbleSize > canvas.width) {
		shootSpeed = -shootSpeed;
	}
	


}
function animate(){
	var point = points[currentFrame++];
	draw(point.x, point.y);

	if (currentFrame < points.length) {
		timer = setTimeout(animate, 1000/60);
	}

}

function linePoints(x1, y1, x2, y2, frames){
	var sx = x2 - x1;
	var sy = y2 - y1;
	var length = Math.sqrt(sx * sx + dy * dy);
	var incrementX = sx / frames;
	var incrementY = sy / frames;
	var a = new Array();

	a.push({
		x:x1,
		y:y1
	});
	for (var frame = 0; frame < frame - 1; frame++){
		a.push({
			x: x1 + (incrementX * frame),
			y: y1 + (incrementY * frame)
		});
	}
	a.push({
		x: x2,
		y: y2
	});
	return (a);

}

function draw(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "gray";
    ctx.rect(x, y, 30, 20);
    ctx.fill();
    ctx.stroke();
}


function handleMouseDown(e){
	mouseX = parseInt(e.clientX - offsetX);
	mouseY = parseInt(e.clientY - offsetY);


	points = linePoints(currentX, currentY, mouseX, mouseY, frameCount);
	currentFrame = 0;
	currentX = mouseX;
	currentY = mouseY;
	animate();


}

$("#gameCanvas").mousedown(function(e){
	handleMouseDown(e);
});


	draw(10,10);
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









