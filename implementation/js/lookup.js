var canvas2 = document.getElementById("lookupCanvas");
var context = canvas2.getContext("2d");

var aminoAcid = ["lysine", "asparagine", "threonine", "arginine", "serine", "methionine", "isoleucine", "glutamine", "histidine", "proline", "leucine", "glutamic acid", "aspartic acid", "alanine", "glycine", "valine", "tyrosine", "cysteine", "tryptophan", "phenylalanine"];
var randomAminoAcid = aminoAcid[Math.floor(Math.random()*aminoAcid.length)];


context.font = "30px verdana";
context.fillStyle = "white";
//context.textAlign = "center";
context.fillText("Amino-Acid Creation", 5, 30);

context.beginPath();
context.moveTo(0,33);
context.lineTo(canvas2.width,33);
context.stroke();




context.beginPath();
context.moveTo(canvas2.width/2, 60);
context.lineTo(canvas2.width/2, canvas2.height);
context.stroke();

function drawLysineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Lysine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("AAA", 50, 120);
	context.fillText ("AAG", 200, 120);


}

function drawAsparagineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Asparagine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("AAC", 50, 120);
	context.fillText ("AAU", 200, 120);


}
function drawThreonineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Threonine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("ACA", 50, 120);
	context.fillText ("ACC", 200, 120);
	context.fillText ("ACG", 50, 200);
	context.fillText ("ACU", 200, 200);

}

function drawArginineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Agrinine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("AGA", 50, 120);
	context.fillText ("AGG", 200, 120);
	context.fillText ("CGA", 50, 170);
	context.fillText ("CGC", 200, 170);
	context.fillText ("CGG", 50, 230);
	context.fillText ("CGU", 200, 230);

}

function drawSerineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Serine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("AGC", 50, 120);
	context.fillText ("AGU", 200, 120);
	context.fillText ("UCA", 50, 170);
	context.fillText ("UCC", 200, 170);
	context.fillText ("UCG", 50, 230);
	context.fillText ("UCU", 200, 230);
}

function drawMethionineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Methionine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("AUA", 50, 120);
	context.fillText ("AUG", 200, 120);
	

}

function drawIsoleucineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Isoleucine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("AUC", 50, 120);
	context.fillText ("AUU", 200, 120);
	
}

function drawGlutamineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Glutamine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("CAA", 50, 120);
	context.fillText ("CAG", 200, 120);
	
}

function drawHistidineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Histidine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("CAC", 50, 120);
	context.fillText ("CAU", 200, 120);
	
}

function drawProlineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Proline", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("CCA", 50, 120);
	context.fillText ("CCC", 200, 120);
	context.fillText ("CCG", 50, 200);
	context.fillText ("CCU", 200, 200);
	
}

function drawLeucineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Leucine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("CUA", 50, 120);
	context.fillText ("CUC", 200, 120);
	context.fillText ("CUG", 50, 200);
	context.fillText ("CUU", 200, 200);
	
}

function drawGlutamicAcidTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Glutamic Acid", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("GAA", 50, 120);
	context.fillText ("GAG", 200, 120);
	
}

function drawAsparticAcidTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Aspartic Acid", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("GAC", 50, 120);
	context.fillText ("GAU", 200, 120);
	
}

function drawAlanineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Alanine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("GCA", 50, 120);
	context.fillText ("GCC", 200, 120);
	context.fillText ("GCG", 50, 200);
	context.fillText ("GCU", 200, 200);
	
}

function drawGlycineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Glycine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("GGA", 50, 120);
	context.fillText ("GGC", 200, 120);
	context.fillText ("GGG", 50, 200);
	context.fillText ("GGU", 200, 200);
	
}

function drawValineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Valine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("GUA", 50, 120);
	context.fillText ("GUC", 200, 120);
	context.fillText ("GUG", 50, 200);
	context.fillText ("GUU", 200, 200);
	
}

function drawTyrosineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Tyrosine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("UAC", 50, 120);
	context.fillText ("UAU", 200, 120);
	
}

function drawCysteineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Cysteine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("UGC", 50, 120);
	context.fillText ("UGU", 200, 120);

}

function drawTryptophanTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Tryptophan", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("UGG", 50, 120);
	
}

function drawPhenylalanineTable(){
	context.font = "25px verdana";
	context.fillStyle = "white";
	context.fillText ("Amino-Acid: Phenylalanine", 20, 57);

	context.font = "v25px verdana";
	context.fillStyle = "white";
	context.fillText ("UUC", 50, 120);
	context.fillText ("UUU", 200, 120);
	
	
}

function drawTable(){
		if(randomAminoAcid == "lysine"){
			drawLysineTable();
	}else if (randomAminoAcid == "asparagine"){
		drawAsparagineTable();
	}else if(randomAminoAcid == "threonine"){
		drawThreonineTable();
	}else if(randomAminoAcid == "arginine"){
		drawArginineTable();
	}else if(randomAminoAcid == "serine"){
		drawSerineTable();
	}else if(randomAminoAcid == "methionine"){
		drawMethionineTable();
	}else if(randomAminoAcid == "isoleucine"){
		drawIsoleucineTable();
	}else if(randomAminoAcid == "glutamine"){
		drawGlutamineTable();
	}else if(randomAminoAcid == "histidine"){
		drawHistidineTable();
	}else if(randomAminoAcid == "proline"){
		drawProlineTable();
	}else if(randomAminoAcid == "leucine"){
		drawLeucineTable();
	}else if(randomAminoAcid == "glutamic acid"){
		drawGlutamicAcidTable();
	}else if(randomAminoAcid == "aspartic acid"){
		drawAsparticAcidTable();
	}else if(randomAminoAcid == "alanine"){
		drawAlanineTable();
	}else if(randomAminoAcid == "glycine"){
		drawGlycineTable();
	}else if(randomAminoAcid == "valine"){
		drawValineTable();
	}else if(randomAminoAcid == "tyrosine"){
		drawTyrosineTable();
	}else if(randomAminoAcid == "cysteine"){
		drawCysteineTable();
	}else if(randomAminoAcid == "tryptophan"){
		drawTryptophanTable();
	}else if(randomAminoAcid == "phenylalanine"){
		drawPhenylalanineTable();
	}else{
		alert("Table not available!");
	}
}