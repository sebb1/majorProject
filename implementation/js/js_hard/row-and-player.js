
var aminoAcid = ["lysine", "asparagine", "threonine", "arginine", "serine", "methionine", "isoleucine", "glutamine", "histidine", "proline", "leucine", "glutamic acid", "aspartic acid", "alanine", "glycine", "valine", "tyrosine", "cysteine", "tryptophan", "phenylalanine"];
var randomAminoAcid = aminoAcid[Math.floor(Math.random()*aminoAcid.length)];

var shootSpeed = 2;






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


function drawHistidineRow(){
	ctx.drawImage(Images[3], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawProlineRow(){
	ctx.drawImage(Images[1], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawLeucineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawGlutamicAcidRow(){
	ctx.drawImage(Images[2], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawAsparticAcidRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawAlanineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawGlycineRow(){
	ctx.drawImage(Images[2], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawValineRow(){
	ctx.drawImage(Images[1], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawTyrosineRow(){
	ctx.drawImage(Images[0], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawCysteineRow(){
	ctx.drawImage(Images[3], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawTryptophanRow(){
	ctx.drawImage(Images[1], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}

function drawPhenylalanineRow(){
	ctx.drawImage(Images[1], 1,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 1+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 51+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 101+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 151+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 201+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 251+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 301+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 351+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 401+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 451+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 501+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 551+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 601+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[2], 651+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 701+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[1], 751+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 801+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[0], 851+bubbleSize,rowTop,bubbleSize,bubbleSize);
	ctx.drawImage(Images[3], 901+bubbleSize,rowTop,bubbleSize,bubbleSize);
}
function drawAminoRows(image,x,y,width,height){
	if(randomAminoAcid == "lysine"){
		//console.log("WORKING FOR lysine");
		drawLysineRow();
	}else if (randomAminoAcid == "asparagine"){
		//console.log("WORKING FOR asparagine");
		drawAspargineRow();
	}else if(randomAminoAcid == "threonine"){
		//console.log("WORKING FOR threonine");
		drawThreonineRow();
	}else if(randomAminoAcid == "arginine"){
		//console.log("WORKING FOR arginine");
		drawArginineRow();
	}else if(randomAminoAcid == "serine"){
		//console.log("WORKING FOR serine");
		drawSerineRow();
	}else if(randomAminoAcid == "methionine"){
		//console.log("WORKING FOR methionine");
		drawMethionineRow();
	}else if(randomAminoAcid == "isoleucine"){
		//console.log("WORKING FOR isoleucine");
		drawIsoleucineRow();
	}else if(randomAminoAcid == "glutamine"){
		//console.log("WORKING FOR glutamine");
		drawGlutamineRow();
	}else if(randomAminoAcid == "histidine"){
		//console.log("WORKING FOR histidine");
		drawHistidineRow();
	}else if(randomAminoAcid == "proline"){
		//console.log("WORKING FOR proline");
		drawProlineRow();
	}else if(randomAminoAcid == "leucine"){
		//console.log("WORKING FOR leucine");
		drawLeucineRow();
	}else if(randomAminoAcid == "glutamic acid"){
		//console.log("WORKING FOR glutamic acid");
		drawGlutamicAcidRow();
	}else if(randomAminoAcid == "aspartic acid"){
		//console.log("WORKING FOR aspartic acid");
		drawAsparticAcidRow();
	}else if(randomAminoAcid == "alanine"){
		//console.log("WORKING FOR alanine");
		drawAlanineRow();
	}else if(randomAminoAcid == "glycine"){
		//console.log("WORKING FOR glycine");
		drawGlycineRow();
	}else if(randomAminoAcid == "valine"){
		//console.log("WORKING FOR valine");
		drawValineRow();
	}else if(randomAminoAcid == "tyrosine"){
		//console.log("WORKING FOR tyrosine");
		drawTyrosineRow();
	}else if(randomAminoAcid == "cysteine"){
		//console.log("WORKING FOR cysteine");
		drawCysteineRow();
	}else if(randomAminoAcid == "tryptophan"){
		//console.log("WORKING FOR tryptophan");
		drawTryptophanRow();
	}else if(randomAminoAcid == "phenylalanine"){
		//console.log("WORKING FOR phenylalanine");
		drawPhenylalanineRow();
	}else{
		alert("row not available!");
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

function drawHistidinePlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawProlinePlayer(){
	ctx.drawImage(Images[1],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawLeucinePlayer(){
	ctx.drawImage(Images[1],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawGlutamicAcidPlayer(){
	ctx.drawImage(Images[3],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawAsparticAcidPlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawAlaninePlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawGlycinePlayer(){
	ctx.drawImage(Images[3],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawValinePlayer(){
	ctx.drawImage(Images[1],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawTyrosinePlayer(){
	ctx.drawImage(Images[0],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawCysteinePlayer(){
	ctx.drawImage(Images[2],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawTryptophanPlayer(){
	ctx.drawImage(Images[3],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawPhenylalaninePlayer(){
	ctx.drawImage(Images[0],startingPosX,startingPosY,bubbleSize,bubbleSize);

}

function drawPlayersBubble(image,x,y,width,height, mouseX, mouseY){
	if(randomAminoAcid == "lysine"){
		//console.log("ALSO WORKING FOR lysine");
		drawLysinePlayer();
	}else if(randomAminoAcid == "asparagine"){
		//console.log("ALSO WOKRING FOR asparagine");
		drawAsparaginePlayer();
	}else if(randomAminoAcid == "threonine"){
		//console.log("ALSO WOKRING FOR threonine");
		drawThreoninePlayer();
	}else if(randomAminoAcid == "arginine"){
		//console.log("ALSO WOKRING FOR arginine");
		drawArgininePlayer();
	}else if(randomAminoAcid == "serine"){
		//console.log("ALSO WOKRING FOR serine");
		drawSerinePlayer();
	}else if(randomAminoAcid == "methionine"){
		//console.log("ALSO WOKRING FOR methionine");
		drawMethioninePlayer();
	}else if(randomAminoAcid == "isoleucine"){
		//console.log("ALSO WOKRING FOR isoleucine");
		drawIsoleucinePlayer();
	}else if(randomAminoAcid == "glutamine"){
		//console.log("ALSO WOKRING FOR glutamine");
		drawGlutaminePlayer();
	}else if(randomAminoAcid == "histidine"){
		//console.log("ALSO WOKRING FOR histidine");
		drawHistidinePlayer();
	}else if(randomAminoAcid == "proline"){
		//console.log("ALSO WOKRING FOR proline");
		drawProlinePlayer();
	}else if(randomAminoAcid == "leucine"){
		//console.log("ALSO WOKRING FOR leucine");
		drawLeucinePlayer();
	}else if(randomAminoAcid == "glutamic acid"){
		//console.log("ALSO WOKRING FOR glutamic acid");
		drawGlutamicAcidPlayer();
	}else if(randomAminoAcid == "aspartic acid"){
		//console.log("ALSO WOKRING FOR aspartic acid");
		drawAsparticAcidPlayer();
	}else if(randomAminoAcid == "alanine"){
		//console.log("ALSO WOKRING FOR alanine");
		drawAlaninePlayer();
	}else if(randomAminoAcid == "glycine"){
		//console.log("ALSO WOKRING FOR glycine");
		drawGlycinePlayer();
	}else if(randomAminoAcid == "valine"){
		//console.log("ALSO WOKRING FOR valine");
		drawValinePlayer();
	}else if(randomAminoAcid == "tyrosine"){
		//console.log("ALSO WOKRING FOR tyrosine");
		drawTyrosinePlayer();
	}else if(randomAminoAcid == "cysteine"){
		//console.log("ALSO WOKRING FOR cysteine");
		drawCysteinePlayer();
	}else if(randomAminoAcid == "tryptophan"){
		//console.log("ALSO WOKRING FOR tryptophan");
		drawTryptophanPlayer();
	}else if(randomAminoAcid == "phenylalanine"){
		//console.log("ALSO WOKRING FOR phenylalanine");
		drawPhenylalaninePlayer();
	}else{
		alert("player not available");
	}

	

}







