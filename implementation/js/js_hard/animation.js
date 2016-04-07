var canvas3 = document.getElementById("animationCanvas");
var contx = canvas3.getContext("2d");

contx.font = "15px verdana";
contx.fillStyle = "white";
contx.textAlign = "center";
contx.fillText("THIS CANVAS WILL BE USED", canvas3.width/2, (canvas3.height/2)-10);
contx.fillText("TO DISPLAY THE CREATION OF PROTEIN ", canvas3.width/2, (canvas3.height/2)+10);
contx.fillText("THROUGH AMINO-ACID CHAINS", canvas3.width/2, (canvas3.height/2)+30);