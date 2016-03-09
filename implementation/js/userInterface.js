var dnaBubbleShooter = window.dnaBubbleShooter || {};
dnaBubbleShooter.userInterface = (function($){
	var userInterface = {
		bubbleSize : 100,
		init: function(){

		},
		hideDialog : function(){
			$(".mainBox").slideUp(300);
		},
		getMouseCoordinates : function(e){
			var coordinates = {
				x: e.pageX,
				y: e.pageY
			};
			return coordinates;
		},
		getBubbleCoordinates: function(bubble){
			var bubbleCoordinates = bubble.position();
			bubbleCoordinates.left += userInterface.bubbleSize/2;
			bubbleCoordinates.top += userInterface.bubbleSize/2;
			return bubbleCoordinates;
		},
		getBubbleAngle: function(bubble, e){
			var mouseCoordinates = userInterface.getMouseCoordinates(e);
			var bubbleCoordinates = userInterface.getBubbleCoordinates(bubble);
			var gameCoordinates = $("mainGame").position();
			var boardLeft = 120;
			var angle = Math.atan((mouseCoordinates.x - bubbleCoordinates.left - boardLeft)/(bubbleCoordinates.top + gameCoordinates.top - mouseCoordinates.y));
			if(mouseCoordinates.y> bubbleCoordinates.top + gameCoordinates.top){
				angle += Math.PI;
			}
			return angle;
		},
		fireBubble: function(bubble, coordinates, duration){
			bubble.getSprite().aniimate({
				left: coordinates.x - userInterface.bubbleSize/2,
				top: coordinates.y - userInterface.bubbleSize/2,

			},
			{
				duration:duration,
				easing:"linear"
			});
		}
	};
	return userInterface;
})(jQuery);