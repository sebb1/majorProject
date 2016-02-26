/**var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");


var mousePos = {
	x:0,
	y:0
};

var mousePressed = false;



canvas.addEventListener('mousemove', function(event){
	mousePos.x = event.offsetX || event.layerX;
	mousePos.y = event.offsetY || event.layerY;
});


canvas.addEventListener('mousedown', function(event){
	mousePressed = true;
});

canvas.addEventListener('mouseup', function(event){
	mousePressed = false;
});

function Button(x,y,w,h,text,colors,clickCB){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.colors = colors;
	this.text = text;

	this.state = 'default';

	var isClicking = false;

	this.update = function(){
		if (mousePos.x >= this.x && mousePos.x <= this.x + this.width && mousePos.y >= this.y && mousePos.y <= this.y +this.height){
			this.state = "hover";

			if (mousePressed){
				this.state = 'active';

				if (typeof clickCB === "function" && !isClicking) {
					clickCB();
					isClicking = true;
				}
			}
			else{
				isClicking = false;
			}
		}
		else{
			this.state = "default";
		}
	};

	this.draw = function(){
		ctx.save();

		var colors = this.colors[this.state];
		var halfH = this.height/2;

		ctx.fillStyle = colors.top;
		ctx.fillRect(this.x, this.y, this.width, halfH);
		ctx.fillStyle = colors.bottom;
		ctx.fillRect(this.x, this.y + halfH, this.width, halfH);

		var size = ctx.measureText(this.text);
		var x = this.x + (this.width - size.width) / 2;
		var y = this.y + (this.height - 15) / 2 +12;

		ctx.fillStyle = "#FFF";
		ctx.fillText(this.text, x,y);

		ctx.restore();
	};

}

var playButton = new Button ((canvas.width/2)-50, canvas.height/3, 100, 50, "Play", {
	"default":{
		top: "#1879BD",
		bottom: "#084D79"
	},
	"hover":{
		top: "#678834",
		bottom: "#093905"
	},
	"active":{
		top:"#EB7723",
		bottom: "#A80000"
	}
}, 
function(){
	console.log("Button clicked");
});

function animate(){
	requestAnimationFrame(animate);

	playButton.update();
	playButton.draw();
	instructionButton.update();
	instructionButton.draw();
}

var instructionButton = new Button((canvas.width/2)-50,canvas.height/2, 100,50, "Instructions",{
	"default":{
		top: "#1879BD",
		bottom: "#084D79"
	},
	"hover":{
		top: "#678834",
		bottom: "#093905"
	},
	"active":{
		top:"#EB7723",
		bottom: "#A80000"
	}
}, 
function(){
	console.log("Another button clicked");
});
requestAnimationFrame(animate);
var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
	var Game = function(){
		this.init = function(){
			$(".buttonPlayGame").bind("click",startGame);
		};
		var startGame = function(){
			$(".buttonPlayGame").unbind("click");
			BubbleShoot.ui.hideDialog();
		};
	};
	return Game;
})(jQuery);
*/

var dnaBubbleShooter = window.dnaBubbleShooter || {};
dnaBubbleShooter.playing = (function($){
	var playing = function(){
		this.init = function(){
			$(".buttonPlayGame").bind("click",playGame);
		};
		var playGame = function(){
			$("buttonPlayGame").unbind("click");
			dnaBubbleShooter.userInterface.hideDialog();
		};
	};
	return playing;
})(jQuery);