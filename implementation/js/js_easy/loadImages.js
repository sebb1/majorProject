var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var numberOfImages = 0;
var easyImages = [];
var easyLoadedRow = 0;


function loadEasyImages(paths){
	numberOfImages = paths.length;
	for(i in paths){
		var imag = new Image();
		imag.src = paths[i];
		easyImages[i] = imag;
		easyImages[i].onload = function(){
			loadedRow++;
			console.log(easyLoadedRow);
		}

	}
}

loadEasyImages(["images/tripletImages/alanine_1.png","images/tripletImages/alanine_2.png","images/tripletImages/alanine_3.png","images/tripletImages/alanine_4.png","images/tripletImages/arginine_1.png","images/tripletImages/arginine_2.png","images/tripletImages/arginine_3.png","images/tripletImages/arginine_4.png","images/tripletImages/arginine_5.png","images/tripletImages/arginine_6.png","images/tripletImages/asparagine_1.png","images/tripletImages/asparagine_2.png","images/tripletImages/aspartic_acid_1.png","images/tripletImages/aspartic_acid_2.png","images/tripletImages/cysteine_1.png","images/tripletImages/cysteine_2.png","images/tripletImages/glutamic_acid_1.png","images/tripletImages/glutamic_acid_2.png","images/tripletImages/glutamine_1.png","images/tripletImages/glutamine_2.png","images/tripletImages/glycine_1.png","images/tripletImages/glycine_2.png","images/tripletImages/glycine_3.png","images/tripletImages/glycine_4.png","images/tripletImages/histidine_1.png","images/tripletImages/histidine_2.png","images/tripletImages/isoleucine_1.png","images/tripletImages/isoleucine_2.png","images/tripletImages/leucine_1.png","images/tripletImages/leucine_2.png","images/tripletImages/leucine_3.png","images/tripletImages/leucine_4.png","images/tripletImages/leucine_5.png","images/tripletImages/leucine_6.png","images/tripletImages/lysine_1.png","images/tripletImages/lysine_2.png","images/tripletImages/phenylalanine_1.png","images/tripletImages/phenylalanine_2.png","images/tripletImages/proline_1.png","images/tripletImages/proline_2.png","images/tripletImages/proline_3.png","images/tripletImages/proline_4.png","images/tripletImages/serine_1.png","images/tripletImages/serine_2.png","images/tripletImages/serine_3.png","images/tripletImages/serine_4.png","images/tripletImages/serine_5.png","images/tripletImages/serine_6.png","images/tripletImages/threonine_1.png","images/tripletImages/threonine_2.png","images/tripletImages/threonine_3.png","images/tripletImages/threonine_4.png","images/tripletImages/tryptophan_1.png","images/tripletImages/tyrosine_1.png","images/tripletImages/tyrosine_2.png","images/tripletImages/valine_1.png","images/tripletImages/valine_2.png","images/tripletImages/valine_3.png","images/tripletImages/valine_4.png","images/tripletImages/bullet.png"]);




