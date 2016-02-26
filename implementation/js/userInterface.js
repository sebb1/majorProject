var dnaBubbleShooter = window.dnaBubbleShooter || {};
dnaBubbleShooter.userInterface = (function($){
	var userInterface = {
		init: function(){

		},
		hideDialog : function(){
			$(".mainBox").slideUp(300);
		}
	};
	return userInterface;
})(jQuery);