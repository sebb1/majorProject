var tripletSize = 75;
var tripletX = 10;
var tripletY = 5;
var dropSpeedEasy = 0.2;

var bulletX = canvas.width/2;
var bulletY = 500;
var bulletSpeed = 10;
var bulletSize = 30;

var scoreEasy = 0;

var collisionEasy = false;


var aminoAcidEasy = ["lysine", "asparagine", "threonine", "arginine", "serine", "methionine", "isoleucine", "glutamine", "histidine", "proline", "leucine", "glutamic acid", "aspartic acid", "alanine", "glycine", "valine", "tyrosine", "cysteine", "tryptophan", "phenylalanine"];
var randomAminoAcidEasy = aminoAcidEasy[Math.floor(Math.random()*aminoAcidEasy.length)];
console.log(randomAminoAcidEasy);


var requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame || 
 window.webkitRequestAnimationFrame || 
 window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
var requestID;



function initEasy(){

	window.addEventListener("keydown", keyDownHandler, false);
	getAminoAcid();
	getScore();
	renderFrameEasy();
}

function renderFrameEasy(){
	refershEasy();
	drawAminoRowsEasy();
	dropRowEasy();
	requestAnimationFrame(renderFrameEasy);
}

function keyDownHandler(event){
	var key = event.which;
	console.log(key);
	switch (key){
		case 37:
			moveLeft();
			break;

		case 39:
			moveRight();
			break;

		case 32:
			shootBullet();
			break;

	}

	refershEasy();
}

function drawBullet(){
	ctx.drawImage(easyImages[59], bulletX, bulletY, bulletSize,bulletSize);

}
function moveLeft(){
	bulletX -= 10;

	var bulletLeft = bulletX - bulletSize;

	if(bulletLeft <= canvas.width-canvas.width){
		bulletX = (0);
	}
}

function moveRight(){
	bulletX += 10;

	var bulletRight = bulletX + bulletSize;

	if(bulletRight >= canvas.width){
		bulletX = canvas.width - bulletSize;
	}
}

function shootBullet(){
	bulletY -=  bulletSpeed;
	refershEasy();
	requestAnimationFrame(shootBullet);

	if ((bulletY + bulletSize) < (tripletY+tripletSize)) {
		bulletSpeed = 0;
		collisionEasy = true;
		easyCollision();
		stopEasy();		
	}
		// cancelAnimationFrame(renderFrameEasy);



}

function refershEasy(){
	ctx.clearRect(0,0, canvas.width,canvas.height);
	drawAminoRowsEasy();
	drawBullet();
}

function getAminoAcid(){
	document.getElementById("triplet").innerHTML = "Amino Acid: " + randomAminoAcidEasy;
}


function getScore(){
	document.getElementById("points").innerHTML = ("Score: " + scoreEasy);
}


function dropRowEasy(){
	setTimeout(function(){
	refershEasy();
	tripletY += dropSpeedEasy;


	if((tripletY+tripletSize) > canvas.height-100){
			tripletY = canvas.height - 100 - tripletSize;
			
		}

	if((tripletY+tripletSize)>(bulletY+bulletSize)){
		tripletY = bulletY - bulletSize;
	}
	},100);

}

(function(){
	var lastTime = 0;
	var vendors=['ms', 'moz', 'webkit', 'o'];
	for (var x=0; x<vendors.length && !window.requestAnimationFrame; ++x){
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if(!window.requestAnimationFrame){
		window.requestAnimationFrame = function(callback, element){
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0,16 - (currTime - lastTime));
			var id = window.setTimeout(function(){callback(currTime + timeToCall);},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	}

	if(!window.cancelAnimationFrame){
		window.cancelAnimationFrame = function(id){

		};
	}
}());


function easyCollision(){
	if (collisionEasy = true) {
		ctx.clearRect(0,0,canvas.width,canvas.height);
		changeScoreEasy();
	}
}


function stopEasy(){
	cancelAnimationFrame(renderFrameEasy);
}

function changeScoreEasy(){
	if (collision = true) {
		scoreEasy += 1;
		console.log(scoreEasy);
	}
}

