var intEndpoint;
var endNode;

var objectID; //This node number
var spawnNode; //Spawn from node number
var spawnAngle; //Spawn at this angle
var distanceMultiplier; //line multiplier value
var thisNodeRadius; //This node radius
var thisNodeX; //This node x value
var thisNodeY; //This node y value

var spawnNodeRadius; //Span node radius value
var spawnNodeX; //Span node x value
var spawnNodeY; //Spawn node y value
var order = 0;

//For nodes[] and lines[]
const indID = 0;
const indSpecialty = 1;

//connectors[] only
const indEndpoints = 0;

//nodes[] only
const indOrder = 0;
const indSpawnFromNodeNumber = 1;
const indSpawnAngle = 2;
const indDistanceMultiplier = 3;
const indRadius = 4;
const indNodeCenterX = 5;
const indNodeCenterY = 6;
const indNodeMaxLevel = 7;

var orderMin = [];
var orderMax = [];
for (s = 0; s < specialties.length; s++) {
  orderMin[s] = 99999999999;
  orderMax[s] = -1;
}
var eval = 0;

// build circles array from nodes array

circles = reorgArray(nodes).slice();//slice makes the new array independent of its conversion source
prereqs = reorgArray(requires).slice();//slice makes the new array independent of its conversion source
descvals = reorgArray(descval).slice();//slice makes the new array independent of its conversion source

//Fills specialtyCounts with the number of each specialty found 
//so we don't have to keep testing testing testing to see what exists.
getSpecialtyCounts();


//console.table(descval);
//build the order array - needed if the tree is built in non-sequential order (i.e. safety net)
for (c = 0; c < circles.length; c++) {
  //pull out the ID and specialty
  for (s = 0; s < specialties.length; s++) {
    //create the base array item
    if (typeof circles[c] === 'undefined') {
      // does not exist, can't capture order of an undefined array element
    } else if (typeof circles[c][s] === 'undefined') {
      // does not exist, can't capture order of an undefined array element
    } else if (typeof circles[c][s][0] === 'undefined') {
      //expected an order value, got nothing
    } else {
      o = circles[c][s][0];
      if (typeof orders[o] === 'undefined') {
        orders[o] = [];
      }
      orders[o][s] = c;
    }
  }
}


connectors = reorgArray(lines).slice();//slice makes the new array independent of its conversion source


var boostSize;
//var circleContent="";
var circleText = ""
var zx = 0; //PLAYTIME WITH TRUCK CRANES
var zy = 0; //PLAYTIME WITH TRUCK CRANES
var zh = 0; //PLAYTIME WITH TRUCK CRANES
var zw = 0; //PLAYTIME WITH TRUCK CRANES

var imgHouse = "&#127967;";
var imgBell = "&#128276;";
var imgBiohazard = "&#9763;";
var imgReset = "&#8634;";
var imgUpArrow = "&#9651;";
var imgDownArrow = "&#9661;";
//var imgRightArrow = "&#9655;"; //more of a right triangle
var imgRightArrow = "&#10145;";


//var imgLeftArrow = "&#9665;"; //more of a right triangle
var imgLeftArrow = "&#11013;";

var imgNorthEastArrow = "&#8599;";
var imgNorthWestArrow = "&#8598;";
var imgSouthEastArrow = "&#8600;";
var imgSouthWestArrow = "&#8601;";

var skillImage = [];
var sc = "";
var circlesBlockingReset = [];

//skillImage[31] = [imgBiohazard];
//skillImage[36] = [imgBiohazard];
//skillImage[41] = [imgBiohazard];
//skillImage[46] = [imgBiohazard];
//skillImage[52] = [imgHouse];
//skillImage[57] = [imgHouse];
//skillImage[62] = [imgHouse];
//skillImage[67] = [imgHouse];
//Build all the circles in the order they appear in the nodes input file


for (o in orders) {
  if (typeof orders[o] === 'undefined') {
    //oops
  } else {
    //orders[o] exists, now lets see if orders[o][s] exists...
    for (s = 0; s < specialties.length; s++) {
      if (typeof orders[o][s] === 'undefined') {
        //oops
      } else {
        //orders[o][s] is good, now lets do some work
        c = orders[o][s];
        if (circles[c][s][indSpawnFromNodeNumber] === 'undefined') {
          //Isn't necessarily an error, there may not be a [c][s] node is all
        } else {
          //Set spawnNode value
          spawnNode = circles[c][s][indSpawnFromNodeNumber];
          //Check to see if the node spawnNode points to exists
          if (typeof circles[spawnNode][s] === 'undefined') {
            //skip - spawn node exists, but not in this specialty, aka missing node in input file
          } else {
            //All systems go, node/specialty & its spawn node records all exist
            //that gives us enough info to draw the circle.
            codeOutput += "<br/>circles[" + c + "][" + s + "] = [" + circles[c][s] + "];<br />";
            spawnAngle = circles[c][s][indSpawnAngle];
            distanceMultiplier = circles[c][s][indDistanceMultiplier];
            thisNodeRadius = circles[c][s][indRadius];
            thisNodeDistance = lineLength * distanceMultiplier;

            spawnNodeRadius = circles[spawnNode][s][indRadius];
            spawnNodeX = circles[spawnNode][s][indNodeCenterX];
            spawnNodeY = circles[spawnNode][s][indNodeCenterY];
            if (c === spawnNode) {
              thisNodeX = circles[c][s][indNodeCenterX];
              thisNodeY = circles[c][s][indNodeCenterY];
            } else {
              thisNodeX = Math.trunc(spawnNodeX + (spawnNodeRadius + thisNodeDistance) * Math.cos(Math.PI * 2 * spawnAngle / 360));
              thisNodeY = Math.trunc(spawnNodeY + (spawnNodeRadius + thisNodeDistance) * Math.sin(Math.PI * 2 * spawnAngle / 360));
            }

            /* Update circles with the x,y coordinates computed above */
            circles[c][s][indNodeCenterX] = thisNodeX; //thisNodeX needs to be calculated first
            circles[c][s][indNodeCenterY] = thisNodeY; //thisNodeY needs to be calculated first

            /* Compute and store the beginning and ending x,y pairs for the line connecting the spawn from node to this node */
            codeOutput += "specialties[s]=" + specialties[s] + "<br />";
            codeOutput += "<br/>circles[" + c + "][" + s + "] = [" + circles[c][s] + "];<br /><hr />";
            if (thisNodeRadius == mediumRadius) { boostSize = 1.2; } else { boostSize = 1; }
            //if(typeof skillImage[c] === 'undefined') { circleText = c + ""; } else { circleText = skillImage[c];}
            if (firstTrip === true) {
              svgContent[s] = '<circle  ';
              firstTrip = false;
            } else {
              svgContent[s] += '<circle  ';
            }
            sc = specialtyColors[s];
            svgContent[s] += '    cx="' + Math.trunc(thisNodeX) + '" ';
            svgContent[s] += '    cy="' + Math.trunc(thisNodeY) + '" ';
            svgContent[s] += '     r="' + thisNodeRadius + '" ';
            svgContent[s] += ' style="';
            svgContent[s] += '           stroke:rgb(' + sc + ');';
            svgContent[s] += '           stroke-width:2;                           ';
            svgContent[s] += '           fill:rgb(255,255,255);';
            svgContent[s] += '       "';//End Style
            svgContent[s] += 'id="n' + c + "s" + s + '" onclick="myFunction(' + c + ',' + s + ')" value=0 ';
            svgContent[s] += 'class="selectable"';
            svgContent[s] += '><title id="nt' + c + "s" + s + '">' + descvals[c][s] + '</title></circle>';

            svgContent[s] += '<text ';
            if (c == 0) {
              svgContent[s] += '      x="' + Math.trunc(thisNodeX - ((thisNodeRadius * .9) / 1.3)) + '"';

            } else {
              svgContent[s] += '      x="' + Math.trunc(thisNodeX - ((thisNodeRadius * .6) / 1.3)) + '"';

            }
            svgContent[s] += '      y="' + Math.trunc(thisNodeY + (thisNodeRadius * 1.2) / 2 * boostSize) + '"';
            svgContent[s] += 'style="';
            //if (c == 0) {console.log(sc);}
            svgContent[s] += 'stroke:rgb(' + sc + ');';
            svgContent[s] += 'fill:rgb(' + sc + ');';
            svgContent[s] += 'stroke-width:0.5;';
            svgContent[s] += 'font-family:arial;';
            svgContent[s] += 'font-size: ' + (thisNodeRadius * 1.2 * boostSize) + 'pt;';
            svgContent[s] += '"';
            svgContent[s] += 'onclick="myFunction(' + c + ',' + s + ')" ';
            svgContent[s] += 'id="t' + c + "s" + s + '" ';
            svgContent[s] += 'class="selectable"';
            svgContent[s] += '><title id="tt' + c + "s" + s + '">' + descvals[c][s] + '</title>';

            if (circleNumbers) { svgContent[s] += c; } else if (c == 0) { svgContent[s] += imgReset; }

            svgContent[s] += '</text>';
            codeOutput += escapeHtml(svgContent[s]);
            /* PLAYTIME WITH TRUCK CRANES - images loading okay, wonky updates to counts which maybe due to id not in place
            zx=circles[x][intSpecialty][indNodeCenterX] + (circles[x][intSpecialty][indRadius]*boostSize)*Math.cos(Math.PI * 2 * 225 / 360);     
            zy=circles[x][intSpecialty][indNodeCenterY] + (circles[x][intSpecialty][indRadius]*boostSize)*Math.sin(Math.PI * 2 * 225 / 360);     
            
            zw=(circles[x][intSpecialty][indRadius]*boostSize);
            zh=zw;
            svgContent[specialty] = svgContent[specialty] + '<image x="'+zx+'" y="'+zy+'" width="'+zw+'pt" height="'+zh+'pt" href="Crane-Truck.svg" onclick="myFunction('+x+')"><title>My image</title></image>';
            svgContent[specialty] = svgContent[specialty] + '</a>';
            */

          }
        }
      }
    }
  }
}

for (s = 0; s < specialties.length; s++) {
  chrSpecialty = specialties[s];
  var clickTextX = cX + (centerRadius * 28.5) * Math.cos(Math.PI * 2 * 200 / 360);
  var clickTextY = cY + (centerRadius * 30) * Math.sin(Math.PI * 2 * 200 / 360);
  svgContent[s] += '<text x="' + centerRadius + '"y="' + centerRadius * 1.5 + '"  style="font-family:arial; font-size: ' + (centerRadius * .8) + 'pt; stroke:rgb(' + specialtyGray[s] + ');" id="svgPointsRemaining' + s + '">Points remaining: ' + pointsRemaining + '</text>';
  svgContent[s] += '<text x="' + centerRadius + '" y="' + centerRadius * 3 + '"  style="font-family:arial; font-size: ' + (centerRadius * .8) + 'pt; stroke:rgb(' + specialtyGray[s] + ');" id="clickText' + s + '">Points used here: 0</text>';
  svgContent[s] += '<text x="' + centerRadius + '"  y="' + centerRadius * 4.5 + '" style="font-family:arial; font-size: ' + (centerRadius * .8) + 'pt; stroke:rgb(' + specialtyGray[s] + ');" id="clickText' + 't' + s + '">Points used (total): 0</text>';
  svgContent[s] += '<text x="' + centerRadius + '" y="' + centerRadius * 6 + '"  style="font-family:arial; font-size: ' + (centerRadius * .5) + 'pt; stroke:rgb(' + specialtyGray[s] + ');" id="clickDesc0s' + s + '" >When you click/tap a circle, a summary of the circle will appear here</text>';
  svgContent[s] += '<text x="' + centerRadius + '" y="' + centerRadius * 7.5 + '"  style="font-family:arial; font-size: ' + (centerRadius * .5) + 'pt; stroke:rgb(' + specialtyGray[s] + ');" id="clickDesc1s' + s + '"  ></text>';
  svgContent[s] += '<text x="' + centerRadius + '" y="' + centerRadius * 9 + '"  style="font-family:arial; font-size: ' + (centerRadius * .5) + 'pt; stroke:rgb(' + specialtyGray[s] + ');" id="clickDesc2s' + s + '"  ></text>';
}



thisNodeX = (circles[13][1][indNodeCenterX] + (circles[13][1][indRadius] * 6.3) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[13][1][indNodeCenterY] + (circles[13][1][indRadius] * 2.3) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(maxDestruction)">Maximum&nbsp;' + imgUpArrow + "&nbsp;Destruction</text>";



thisNodeX = (circles[46][1][indNodeCenterX] + (circles[46][1][indRadius] * 3.5) * Math.cos(Math.PI * 2 * 90 / 360));
thisNodeY = (circles[46][1][indNodeCenterY] + (circles[46][1][indRadius] * 3.5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(loyaltyFullSouth)">' + imgDownArrow + "&nbsp;+ Healing Speed</text>";

thisNodeX = (circles[46][1][indNodeCenterX] + (circles[46][1][indRadius] * 2.3) * Math.cos(Math.PI * 2 * 270 / 360));
thisNodeY = (circles[46][1][indNodeCenterY] + (circles[46][1][indRadius] * 2.3) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(loyaltyFullNorth)">' + imgUpArrow + "&nbsp;- Healing RSS</text>";


thisNodeX = (circles[85][1][indNodeCenterX] + (circles[85][1][indRadius] * 17) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[85][1][indNodeCenterY] + (circles[85][1][indRadius] * .5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(processingPlantsSpeed)">' + "Increased Speed&nbsp;" + imgUpArrow + "</text>";

thisNodeX = (circles[87][1][indNodeCenterX] + (circles[87][1][indRadius] * 19) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[87][1][indNodeCenterY] + (circles[87][1][indRadius] * .5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(processingPlantsCapacity)">' + "Increased Capacity&nbsp;" + imgDownArrow + "</text>";


thisNodeX = (circles[88][1][indNodeCenterX] + (circles[88][1][indRadius] * 13) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[88][1][indNodeCenterY] + (circles[88][1][indRadius] * .5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" >' + "+Processing Plants</text>";


thisNodeX = (circles[46][1][indNodeCenterX] + (circles[46][1][indRadius] * 3) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[46][1][indNodeCenterY] + (circles[46][1][indRadius] * .5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" >' + "Max Loyalty</text>";

//    <rect x="20" y="20" width="80" height="80" visibility="visible" />
//    <rect x="120" y="20" width="80" height="80" visibility="hidden"/>
thisNodeX = (circles[27][1][indNodeCenterX] + (circles[27][1][indRadius] * 1) * Math.cos(Math.PI * 2 * 270 / 360));
thisNodeY = (circles[27][1][indNodeCenterY] + (circles[27][1][indRadius] * 3) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" id="bonusLoyalty" visibility="visible" class="mediumFont">Bonus Loyalty 0 of 1200</text>';



thisNodeX = (circles[0][2][indNodeCenterX] + (circles[19][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[19][2][indRadius] * 44) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(allConquest)">' + imgLeftArrow + "&nbsp;CONQUEST (Tiles etc.)" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[19][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[19][2][indRadius] * 41) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(cavalryConquestMightWithBothFlags)">' + imgLeftArrow + "&nbsp;Both Flags - Cavalry Might</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[18][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[18][2][indRadius] * 35) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(archerConquestMightWithBothFlags)">' + imgLeftArrow + "&nbsp;Both Flags - Archer Might" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[18][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[18][2][indRadius] * 29) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(footmanConquestMightWithBothFlags)">' + imgLeftArrow + "&nbsp;Both Flags - Footman Might" + "</text>";

// thisNodeX = (circles[0][2][indNodeCenterX] + (circles[19][2][indRadius] *44) * Math.cos(Math.PI * 2 * 180 / 360));
// thisNodeY = (circles[0][2][indNodeCenterY] + (circles[19][2][indRadius] *44) * Math.sin(Math.PI * 2 * 270 / 360));
// svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(allConquest)">' +  "CONQUEST (Tiles etc.)&nbsp;" + imgRightArrow + "</text>";


thisNodeX = (circles[0][2][indNodeCenterX] + (circles[19][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[19][2][indRadius] * 38) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(cavalryConquestResistanceWithBothFlags)">' + imgLeftArrow + "&nbsp;Both Flags - Cavalry Resistance" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[18][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[18][2][indRadius] * 32) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(archerConquestResistanceWithBothFlags)">' + imgLeftArrow + "&nbsp;Both Flags - Archer Resistance" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[18][2][indRadius] * 22) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[18][2][indRadius] * 26) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(footmanConquestResistanceWithBothFlags)">' + imgLeftArrow + "&nbsp;Both Flags - Footman Resistance" + "</text>";


thisNodeX = (circles[24][0][indNodeCenterX] + (circles[24][0][indRadius] * 3) * Math.cos(Math.PI * 2 * 3 / 360));
thisNodeY = (circles[24][0][indNodeCenterY] + (circles[24][0][indRadius] * 3) * Math.sin(Math.PI * 2 * 3 / 360));
svgContent[0] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(maxTilingHonor)">' + imgLeftArrow + "&nbsp;Maximum Tiling Honor</text>";

//Red tree - Siege Defense Might
thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 24.5) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 2.4) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(cavalrySiegeDefenseMight)">' + "Cavalry Might&nbsp;" + imgSouthEastArrow + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 24.5) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 1) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(archerSiegeDefenseMight)">' + "Archer Might&nbsp;" + imgSouthEastArrow + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 24.5) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * .4) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(footmanSiegeDefenseMight)">' + "Footman Might&nbsp;" + imgSouthEastArrow + "</text>";

//Red tree - Siege Defense Resistance
thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 24.5) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 14) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(cavalrySiegeDefenseResistance)">' + "Cavalry Resistance&nbsp;" + imgNorthEastArrow + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 24.5) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 15.5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(archerSiegeDefenseResistance)">' + "Archer Resistance&nbsp;" + imgNorthEastArrow + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 24.5) * Math.cos(Math.PI * 2 * 180 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 17) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(footmanSiegeDefenseResistance)">' + "Footman Resistance&nbsp;" + imgNorthEastArrow + "</text>";

//Red tree - Siege Attack Resistance
thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 17.5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 14) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(cavalrySiegeAttackResistance)">' + imgNorthWestArrow + "&nbsp;Cavalry Resistance" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 17.5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 15.5) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(archerSiegeAttackResistance)">' + imgNorthWestArrow + "&nbsp;Archer Resistance" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 17.5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 17) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(footmanSiegeAttackResistance)">' + imgNorthWestArrow + "&nbsp;Footman Resistance" + "</text>";

//Red Tree OFFENSE MIGHT
thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 18.5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 2.4) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(cavalrySiegeAttackMight)">' + imgSouthWestArrow + "&nbsp;Cavalry Might" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 18.5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 1) * Math.sin(Math.PI * 2 * 270 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(archerSiegeAttackMight)">' + imgSouthWestArrow + "&nbsp;Archer Might" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 18.5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * .4) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(footmanSiegeAttackMight)">' + imgSouthWestArrow + "&nbsp;Footman Might" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 4) * Math.cos(Math.PI * 2 * 179 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 13) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '">' + "CASTLE ATTACKS ONLY" + "</text>";

thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 9.5) * Math.cos(Math.PI * 2 * 179 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 15) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(allDefense)">' + imgNorthWestArrow + "&nbsp;DEFENSE" + "</text>";

//svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '">' +imgNorthWestArrow+ "&nbsp;" + "DEFENSE"+"</text>";


thisNodeX = (circles[0][2][indNodeCenterX] + (circles[0][2][indRadius] * 5) * Math.cos(Math.PI * 2 * 0 / 360));
thisNodeY = (circles[0][2][indNodeCenterY] + (circles[0][2][indRadius] * 15) * Math.sin(Math.PI * 2 * 90 / 360));
svgContent[2] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(allAttack)">' + "OFFENSE&nbsp;" + imgNorthEastArrow + "</text>";



thisNodeX = (circles[62][1][indNodeCenterX] + (circles[62][1][indRadius] * 5) * Math.cos(Math.PI * 2 * 3 / 360));
thisNodeY = (circles[62][1][indNodeCenterY] + (circles[62][1][indRadius] * 3) * Math.sin(Math.PI * 2 * 3 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(honorBuildingsRight)">' + imgRightArrow + "&nbsp;All honor buildings +build speed</text>";

thisNodeX = (circles[62][1][indNodeCenterX] + (circles[62][1][indRadius] * 23.5) * Math.cos(Math.PI * 2 * 179 / 360));
thisNodeY = (circles[62][1][indNodeCenterY] + (circles[62][1][indRadius] * 20.5) * Math.sin(Math.PI * 2 * 179 / 360));
svgContent[1] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(honorBuildingsLeft)">' + "All honor buildings +Durability&nbsp;" + imgLeftArrow + "</text>";


thisNodeX = (circles[34][0][indNodeCenterX] + (circles[34][0][indRadius] * 12.5) * Math.cos(Math.PI * 2 * 179 / 360));
thisNodeY = (circles[34][0][indNodeCenterY] + (circles[34][0][indRadius] * 20.5) * Math.sin(Math.PI * 2 * 179 / 360));
svgContent[0] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(maxVirusRss)">' + "+Virus RSS&nbsp;" + imgLeftArrow + "</text>";

thisNodeX = (circles[36][0][indNodeCenterX] + (circles[36][0][indRadius] * 2.5) * Math.cos(Math.PI * 2 * 3 / 360));
thisNodeY = (circles[36][0][indNodeCenterY] + (circles[36][0][indRadius] * 3) * Math.sin(Math.PI * 2 * 3 / 360));
svgContent[0] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(maxCompositeRss)">' + imgRightArrow + "&nbsp;+Construction RSS</text>";


thisNodeX = (circles[46][0][indNodeCenterX] + (circles[46][0][indRadius] * 22) * Math.cos(Math.PI * 2 * 179 / 360));
thisNodeY = (circles[46][0][indNodeCenterY] + (circles[46][0][indRadius] * 20.5) * Math.sin(Math.PI * 2 * 179 / 360));
svgContent[0] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(maxBuildingHonor)">' + "Building/Upgrade Max Honor&nbsp;" + imgRightArrow + "</text>";

thisNodeX = (circles[11][0][indNodeCenterX] + (circles[11][0][indRadius] * 21) * Math.cos(Math.PI * 2 * 179 / 360));
thisNodeY = (circles[11][0][indNodeCenterY] + (circles[11][0][indRadius] * 20.5) * Math.sin(Math.PI * 2 * 179 / 360));
svgContent[0] += '<text x="' + thisNodeX + '" y="' + thisNodeY + '" class="selectable" onclick="quickFill(maxMarchingSpeed)">' + "Max Marching Speed&nbsp;" + imgRightArrow + "</text>";

var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;
for (c in connectors) {
  for (s = 0; s < specialties.length; s++) {
    chrSpecialty = specialties[s];

    if (typeof connectors[c][s] != 'undefined') {
      for (intEndpoint = 0; intEndpoint < connectors[c][s][indEndpoints].length; intEndpoint++) {
        endNode = connectors[c][s][indEndpoints][intEndpoint];


        if (typeof circles[endNode][s] === 'undefined') {
          // does not exist
        }
        else if (typeof circles[c][s] === 'undefined') {
          console.log("Attempted to access circles*S[" + c + "][" + s + "] +  which doesn't exist.");
        } else {
          var angleDeg = Math.atan2(circles[endNode][s][indNodeCenterY] - circles[c][s][indNodeCenterY], circles[endNode][s][indNodeCenterX] - circles[c][s][indNodeCenterX]) * 180 / Math.PI;
          x1 = circles[c][s][indNodeCenterX] + circles[c][s][indRadius] * Math.cos(Math.PI * 2 * angleDeg / 360);
          y1 = circles[c][s][indNodeCenterY] + circles[c][s][indRadius] * Math.sin(Math.PI * 2 * angleDeg / 360);
          x2 = circles[endNode][s][indNodeCenterX] - circles[endNode][s][indRadius] * Math.cos(Math.PI * 2 * angleDeg / 360);
          y2 = circles[endNode][s][indNodeCenterY] - circles[endNode][s][indRadius] * Math.sin(Math.PI * 2 * angleDeg / 360);
          svgContent[s] += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" style="stroke:rgb(' + specialtyGray[s] + ');stroke-width:2" />';
        }
      }
    }
  }
}

for (s = 0; s < specialties.length; s++) {
  document.getElementById(specialties[s]).innerHTML = svgContent[s];
}

function quickFill(quickFillParameters) {
  //To Do: Don't invoke myFunction if the value that exists is already what we want it to be.
  var warningIssued = false;
  var node = 0;
  var s = 0;
  var newValue = 0;
  var currentValue = 0;
  for (key in quickFillParameters) {
    //console.log("Quick filling: " + quickFillParameters[key]);
    node = quickFillParameters[key][0];
    s = quickFillParameters[key][1];
    newValue = quickFillParameters[key][2];
    //console.log("node="+node+", s="+s+", newValue="+newValue);
    for (x = 1; x <= newValue; x++) {
      //console.log("Invoking myFunction("+node+","+s+")");
      if (pointsRemaining > 0) {
        currentValue = parseInt(document.getElementById("n" + node + "s" + s).getAttribute("value"));
        if (currentValue < newValue) {
          myFunction(node, s);
        }
      } else {
        if (warningIssued == false) {
          alert("Ran out of points, quick filled as much as possible.");
          warningIssued = true;
        } else {
          //don't hassle the user with multiple pop-ups, one is enough
        }
      }
    }
    //newValue = quickFillParameters[2];

    //document.getElementById("n" + node + "s" + s).setAttribute("value",newValue)
    //document.getElementById("t" + node + "s" + s).innerHTML = newValue;

  }
}


function myFunction(node, s, excludeThisNodeInEval) {
  //console.log("myFunction received ("+node+","+s+")");
  circlesBlockingReset = [];
  var preNode = 0;
  var preNodeVal = 0;
  var preIdVal = 0;
  var enabled;
  //Reset this tree if the center node is tapped
  //console.debug(specialtyCounts);
  if (circles[node][s][indRadius] == centerRadius) {
    for (row = 0; row < specialtyCounts[s]; row++) {
      //console.log("["+row+","+s+"]=");
      //console.log(parseInt(document.getElementById("n" + row + "s" + s).getAttribute("value")));
      nodeVal = parseInt(document.getElementById("n" + row + "s" + s).getAttribute("value"));
      resetToZero(row, s);
    }
  } else {
    clickDescs = [];
    clickDescs = splitStringBySizeByDelim(oneLineDescription(node, s), 60, " ", false);
    //3 lines/array elements currently allowed, if it spills into 4 or more lines, the circle will not fill
    while (clickDescs.length > 3) {
      clickDescs.pop();
      console.log("clickDescs exceeded allowed number of elements, description truncated so script wouldn't fail.");
    }
    //console.table(clickDescs);
    //Someone tapped a circle, display the info at bottom of svg frame regardless if we can (or need to) make any changes
    //Cleanse the HTML before populating it so remnents don't hang around like dingleberries
    for (j = 0; j <= 2; j++) {
      objClickDesc = document.getElementById("clickDesc" + j + "s" + s);
      objClickDesc.innerHTML = "";
    }
    for (cd in clickDescs) {
      objClickDesc = document.getElementById("clickDesc" + cd + "s" + s);
      objClickDesc.innerHTML = clickDescs[cd];
      objClickDesc.style.lineLength = objClickDesc.innerHTML.length;
    }
    if (clickDescs.length < 2) {
      objClickDesc = document.getElementById("clickDesc" + 1 + "s" + s);
      objClickDesc.innerHTML = "";
      objClickDesc.style.lineLength = objClickDesc.innerHTML.length;
    }
    //splitStringBySizeByDelim(str,maxSegmentSize,delimiter,includeDelimiter)


    //objClickDesc2 = document.getElementById("clickDesc2"+s);
    //objClickDesc2.innerHTML = oneLineDescription(node,s);
    //objClickDesc2.style.lineLength = objClickDesc2.innerHTML;
    //console.log(oneLineDescription(node,s));
    nodeVal = parseInt(document.getElementById("n" + node + "s" + s).getAttribute("value"));

    enabled = false; //Assume it is locked until proven otherwise
    //console.log("BEFORE pointsRemaining:"+pointsRemaining+" clickTotal:"+clickTotal);

    //Execute this block if we are at the max value for this node and the player taps on it again
    if (nodeVal === circles[node][s][indNodeMaxLevel]) {
      //console.log("");
      //console.log("Player tapped node "+node+" which is maxed.");
      //Do a pre-check to see if ANY nodes after this (meaning where this node is a prerequisite) have any values, if not, we can reset this node to zero.
      nextNodes = []; //This will store any node numbers that use this node as a prerequisite
      canReset = true;
      //console.log("Scanning prereqs...");

      for (p in prereqs) {
        //if node is required by p we can't cycle
        if (typeof prereqs[p] === 'undefined') {
          //oops
        } else {
          //this prereqs has something in it, investigate further
          for (tempS in prereqs[p]) {
            if (tempS == s) {
              //Specialty matches

              for (matchValue in prereqs[p][s][0]) {
                //console.log("Checking prereqs["+p+"]["+s+"][0]["+matchValue+"]..."+prereqs[p][s][0][matchValue]);
                //if (p < 3) {console.log("Match value "+prereqs[p][s][0][matchValue] + " comparing to " + node);}
                if (prereqs[p][s][0][matchValue] == node) {
                  //This node is a prerequisite for another node (i.e. p)
                  //Check to see if the other node has a value
                  tempVal = parseInt(document.getElementById("n" + p + "s" + s).getAttribute("value"));
                  //console.log("MATCH: Node "+p+" with value("+tempVal+") requires this node "+node);
                  if (tempVal > 0) {
                    //Can't reset this node, it is a prerequisite for another node and the other node has a value
                    //console.log("Negative Ghost Rider this node " + node + " is a prerequisite for node " + p );
                    circlesBlockingReset.push(p);
                    //console.debug(circlesBlockingReset);
                    if (isEnabledWithoutExclusion(p, s, node)) {
                      //Still may be able to reset, this prereq is enabled from another path than this node 
                    } else {
                      canReset = false;
                    }
                  } else {
                    //Do nothing, we defaulted to can't reset.  No reason to change here.
                  }

                }
              }
            } else {
              //console.log("tempS="+tempS+" doesn't match s="+s);
            }
          }
        }
      }



      if (canReset) {
        resetToZero(node, s);

      } else {
        //console.log("Looks like it can't be cycled.");
      }
    } else {
      //not maxed. can we do some work?
      if (pointsRemaining > 0) {
        //Not maxed
        //Determine if this node is enabled or locked
        for (p in prereqs[node][s][0]) {
          preNode = prereqs[node][s][0][p];
          preNodeVal = prereqs[node][s][1][p];
          //console.log('Clicked on ['+node+'] which requires node ['+preNode+'] to be at value '+preNodeVal+' to be enabled.');
          preIdVal = parseInt(document.getElementById("n" + preNode + "s" + s).getAttribute("value"));
          if (preIdVal < preNodeVal) {
            //console.log("requirement not met");
          } else {
            //console.log("requirement met");
            enabled = true;
          }
        }




        //when enabled all prerequisites have been met and we can do some work
        if (enabled) {
          newValue = nodeVal + 1;
          //console.log("nodeVal=" + nodeVal + ' and circles[node][s][indNodeMaxLevel]='+ circles[node][s][indNodeMaxLevel]);
          //Enabled and not maxed, increment and update
          document.getElementById("n" + node + "s" + s).setAttribute("value", newValue)
          document.getElementById("t" + node + "s" + s).innerHTML = newValue;
          if (newValue == circles[node][s][indNodeMaxLevel]) {
            objCircle = document.getElementById("n" + node + "s" + s); objCircle.style.fill = "rgb(" + specialtyColors[s] + ")";//objCircle.style.stroke = "rgb("+specialtyColors[s]+")";
            //objCircle = document.getElementById("t" + node + "s" + s); objCircle.style.fill = "rgb("+specialtyColors[s]+")";objCircle.style.stroke = "rgb("+specialtyColors[s]+")";
            //document.getElementById("t" + node + "s" + s).innerHTML = "";
            objText = document.getElementById("t" + node + "s" + s);
            objText.style.stroke = "rgb(" + specialtyContrast[s] + ")";
            objText.style.fill = "rgb(" + specialtyContrast[s] + ")";
          }
          clicks[s]++;
          clickTotal++;
          pointsRemaining--;
          document.getElementById("clickText" + s).innerHTML = "Points used here: " + clicks[s];
          //Update all trees with new total points used from all trees
          for (sp = 0; sp < specialties.length; sp++) {
            document.getElementById("clickText" + "t" + sp).innerHTML = "Points used (total): " + clickTotal;
            document.getElementById("svgPointsRemaining" + sp).innerHTML = "Points remaining: " + pointsRemaining;
          }
        } else {
          //Alert the user, requirement not met to interact with this node
          //or display something about the node, or both.
        }
      } else {
        alert("Unable to complete request.  All points have been used.");
      }
    }
  }
  //console.log("Executing displaySummary now...");
  displaySummary();
  //console.log("AFTER pointsRemaining:"+pointsRemaining+" clickTotal:"+clickTotal);
}

function isEnabledWithoutExclusion(node, s, exclusion) {
  var tempResult = false;
  for (p in prereqs[node][s][0]) {
    preNode = prereqs[node][s][0][p];
    preNodeVal = prereqs[node][s][1][p];
    //console.log('Clicked on ['+node+'] which requires node ['+preNode+'] to be at value '+preNodeVal+' to be enabled.');
    preIdVal = parseInt(document.getElementById("n" + preNode + "s" + s).getAttribute("value"));
    if (preNode != exclusion) {
      if (preIdVal < preNodeVal) {
        //console.log("requirement not met");
      } else {
        //console.log("requirement met");
        tempResult = true;
      }
    }
  }
  return tempResult;
}

function reorgArray(oldArray) {
  //usage & syntax:connectors=reorgArray(lines).slice();//slice makes the new array independent of its conversion source

  //newArray will consume/devour the contents of oldArray in the conversion process
  var val = "";
  var newArray = [];
  for (i in oldArray) {
    c = oldArray[i].shift();
    chrSpecialty = oldArray[i].shift();
    s = specialties.indexOf(chrSpecialty);
    if (typeof newArray[c] === 'undefined') {
      // does not exist
      newArray[c] = [];
    }
    else {
      //does exist, nothing to do here though, at least not that I cn think of
    }
    //initialize the new two-key array
    newArray[c][s] = [];
    //swoop (i.e. shift) the rest of the elements from the original array to the new array
    while (oldArray[i].length > 0) {
      val = oldArray[i].shift()
      newArray[c][s].push(val)
    }
  }
  return newArray;
}

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

function oneLineDescription(c, s) {
  var onlyDigits = "";
  if (c == 0) {
    //skip
  } else if (typeof descvals[c] === 'undefined') {
    //oops
  } else {
    if (typeof descvals[c][s] === 'undefined') {
      //nothing to do
    } else {
      numDescriptions = descvals[c][s][indDesc].length;
      levels = descvals[c][s][indVal][0].length;
      //debug += "levels=" + levels + lb;
      title = descvals[c][s][indStr];
      oneLine = "";
      for (d = 0; d < numDescriptions; d++) {
        thisDesc = descvals[c][s][indDesc][d];
        thisPos = descvals[c][s][indPos][d];
        thisPre = descvals[c][s][indPre][d];
        thisVal = descvals[c][s][indVal][d];
        thisPost = descvals[c][s][indPost][d];
        thisDelim = descvals[c][s][indDelim];
        valString = thisPre + "(" + thisVal.join().replace(/,/g, "/") + ")" + thisPost;
        onlyDigits = valString.match(/\d+/);
        //console.log("onlyDigits="+onlyDigits);
        if (onlyDigits === null) {
          valString = "";
          //console.log("is null");
        } else {
          //console.log("is NOT null");
        }
        if (thisPos === after) {
          oneLine += thisDesc + " " + valString;
        } else if (thisPos === before) {
          oneLine += valString + " " + thisDesc;
        } else if (thisPos === middle) {
          //oneLine+=thisDesc.split(thisDelim).join(valString);
          oneLine += thisDesc.replace(new RegExp(thisDelim, 'g'), valString);
          //oneLine+=thisDesc.replace(/{thisDelim}/g,thisVal);

        }
        else {
          //oops shouldn't be here
          oneLine += "***&#*&#*&#*#*&#*& OOPS (*#(*#@*(**&#*#(*" + lb;
        }
      }
      return oneLine;
    }
  }
}



for (n = 0; n < connectors.length; n++) {
  for (s = 0; s < specialties.length; s++) {
    if (typeof connectors[n] === 'undefined') {
      //do nothing
    } else if (typeof connectors[n][s] === 'undefined') {
    } else {
      //codeOutput += "connectors[" + n + "]["+s+"] = [" + connectors[n][s] + "];<br />";
    }

  }
}
//console.table(circles);
//document.getElementById("oops").innerHTML="";

function displaySummary() {
  var groups = [];
  var descs = [];
  var descsGroup = [];
  var delims = [];
  var vals = [];
  var valsPre = [];
  var valsPost = [];
  var valsPos = [];
  //console.clear();

  for (c in circles) {
    for (s in specialties) {
      if (typeof descvals[c][s] === 'undefined') {
        //oops
      } else {
        tempLevel = parseInt(document.getElementById("n" + c + "s" + s).getAttribute("value"));
        if (tempLevel > 0) {
          for (seg in descvals[c][s][indDesc]) {

            tempGroup = descvals[c][s][indAggTitle]
            tempDesc = descvals[c][s][indDesc][seg];  //????????
            if (tempDesc == ",") {
              //Let's not summarize a delimiter
            } else {
              tempPre = descvals[c][s][indPre][seg];    //????????
              tempPost = descvals[c][s][indPost][seg];  //????????
              tempPos = descvals[c][s][indPos][seg];    //????????
              tempDelim = descvals[c][s][indDelim][seg];//????????
              if (groups.indexOf(tempGroup) === -1) {
                groups.push(tempGroup);
                //console.log("Added group '"+tempGroup+"' .");
              }
              if (descs.indexOf(tempDesc) === -1) {
                descs.push(tempDesc);
                //console.log("Added descs '"+tempDesc+"'.");
                descsGroup.push(tempGroup);
                valsPre.push(tempPre);
                valsPost.push(tempPost);
                valsPos.push(tempPos);
                delims.push(tempDelim);
                //console.log("Added descsGroup '"+tempGroup+"'.");
                //console.log("Level "+(tempLevel));
                //console.table(descvals[c][s][indVal]);
                vals.push(descvals[c][s][indVal][seg][(tempLevel - 1)]);//????????
                //console.log("Added value of '"+descvals[c][s][indVal][seg][(tempLevel - 1)]+"' to vals array.");//????????
              } else {
                vals[descs.indexOf(tempDesc)] += descvals[c][s][indVal][seg][(tempLevel - 1)];//????????
              }
            }
          }

        }
      }
    }
  }
  //console.table(groups);
  //console.table(descs);
  //console.table(descsGroup);
  //console.table(vals);
  //document.getElementById("summaries").innerHTML = "<H1>A Benefit Summary will appear here once you allocate points in one or more trees</H1>";
  summaryOutput = "";
  for (g in groups) {
    summaryOutput += "<h3>" + groups[g] + "</h3><ul>";
    for (d in descs) {
      if (descsGroup[d] == groups[g]) {
        if (valsPos[d] == after) {
          summaryOutput += "<li>";
          summaryOutput += descs[d];
          summaryOutput += "&nbsp<b>" + valsPre[d];
          summaryOutput += vals[d];
          summaryOutput += valsPost[d] + "</b>";
          summaryOutput += "</li>";

        } else if (valsPos[d] == before) {
          summaryOutput += "<li>";
          summaryOutput += "<b>" + valsPre[d];
          summaryOutput += vals[d];
          summaryOutput += valsPost[d] + "</b>&nbsp";
          summaryOutput += descs[d];
          summaryOutput += "</li>";
        } else {
          valString = " " + valsPre[d] + vals[d] + valsPost[d] + " ";
          summaryOutput += "<li>";
          summaryOutput += descs[d].replace(new RegExp(delims[d], 'g'), "<b>" + valString + "</b>");

          summaryOutput += "</li>";
        }
      }

    }
    summaryOutput += "</ul>";
  }
  if (summaryOutput === '') {
    document.getElementById("summaries").innerHTML = "<H1>A Benefit Summary will appear here once you allocate points in one or more trees</H1>";
  } else {
    document.getElementById("summaries").innerHTML = "<H1>Benefit Summary</H1>" + summaryOutput;
  }
  document.getElementById("bonusLoyalty").innerHTML = "Bonus Loyalty " + (valueOfTheseCells([31, 36, 41, 46], constructionSpecialty) * 4) + " of 1200";


}
function valueOfTheseCells(nodeNumberArray, s) {
  var tempLevel = 0;
  var tempVal = 0;
  var functionVal = 0;
  for (node = 0; node < nodeNumberArray.length; node++) {
    n = nodeNumberArray[node];
    tempLevel = parseInt(document.getElementById("n" + n + "s" + s).getAttribute("value"));
    if (tempLevel > 0) {

      tempVal = parseInt(descvals[n][s][indVal][0][tempLevel - 1]);
      if (tempVal > 0) {
        functionVal += tempVal;

      }
    }

  }
  return functionVal;
}
function splitStringBySizeByDelim(str, maxSegmentSize, delimiter, includeDelimiter) {
  //Return value is an array of smaller strings
  var segments = [];
  var tempString = str;
  var stringSize = str.length;
  var breakPoint = 0;
  while (tempString.length > maxSegmentSize) {
    stringSize = tempString.length;
    breakPoint = tempString.lastIndexOf(delimiter, maxSegmentSize);
    if (breakPoint == -1) {
      //No delimiter break found, do hard break
      segments.push(tempString.substring(0, maxSegmentSize));
      tempString = tempString.substring(maxSegmentSize, tempString.length);
    } else {
      //We have a breakpoint less than max segment size, push this
      if (typeof includeDelimiter === 'undefined') {
        //includeDelimiter omitted, we will be safe and include it
        segments.push(tempString.substring(0, breakPoint + 1));
        tempString = tempString.substring(breakPoint + 1, tempString.length);

      } else if (includeDelimiter === true) {
        //include delimiter at the end of the line
        segments.push(tempString.substring(0, breakPoint + 1));
        tempString = tempString.substring(breakPoint + 1, tempString.length);
      } else if (includeDelimiter === false) {
        //exclude the delimiter from the output
        segments.push(tempString.substring(0, breakPoint));
        tempString = tempString.substring(breakPoint + 1, tempString.length);
      } else {
        //include delimiter at the end of the line
        segments.push(tempString.substring(0, breakPoint + 1));
        tempString = tempString.substring(breakPoint + 1, tempString.length);

      }
    }
  }
  if (tempString.length === 0) {
    //do nothing, string exhausted
  } else {
    //While loop ended so string length must be within range
    //so just push what remains into the array.
    segments.push(tempString);
  }
  return segments;
}

function updatePlayerPoints() {
  if (document.getElementById("playerPoints").value < clickTotal) {
    alert("Player Points not updated.  Points used would exceed points available.");
  } else {
    pointsRemaining = document.getElementById("playerPoints").value - clickTotal;
    for (sp = 0; sp < specialties.length; sp++) {
      document.getElementById("svgPointsRemaining" + sp).innerHTML = 'Spec points remaining: ' + pointsRemaining
    }
  }
}
function resetToZero(node, s) {
  //console.log("Looks like it can be cycled.");
  //This code removed because it would leave holes in the tree
  //Replace this commented out code with a recursive removal instead
  pointsRemaining = pointsRemaining + nodeVal;
  clickTotal = clickTotal - nodeVal;
  clicks[s] = clicks[s] - nodeVal;
  document.getElementById("clickText" + s).innerHTML = "Points used here: " + clicks[s];
  //if (node == 46) {console.log("Resetting node 46 to zero");}
  document.getElementById("n" + node + "s" + s).setAttribute("value", 0);


  if (node != 0) {
    document.getElementById("t" + node + "s" + s).innerHTML = "";
  }
  objCircle = document.getElementById("n" + node + "s" + s);
  objCircle.style.fill = "rgb(" + specialtyContrast[s] + ")";
  //objCircle.style.stroke = "rgb("+specialtyColors[s]+")";
  objText = document.getElementById("t" + node + "s" + s);
  if (node != 0) {

    objText.style.stroke = "rgb(0,0,0)";
    objText.style.fill = "rgb(0,0,0)";
  }
  for (sp = 0; sp < specialties.length; sp++) {
    document.getElementById("svgPointsRemaining" + sp).innerHTML = "Points remaining: " + pointsRemaining;
    document.getElementById("clickText" + "t" + sp).innerHTML = "Points used (total): " + clickTotal;
  }
}

function getSpecialtyCounts() {
  var nodeNumber = 0;
  var specialtyNumber = 0;
  for (nodeNumber in circles) {
    for (specialtyNumber = 0; specialtyNumber < specialties.length; specialtyNumber++) {
      if (typeof circles[nodeNumber][specialtyNumber] == 'undefined') {
        //don't increment, we've exhausted this specialty and have the number we want
      } else {
        specialtyCounts[specialtyNumber]++;
      }
    }
  }
  //console.table(specialtyCounts);
}

function generateURL() {
  var nodeNumber = 0;
  var specialtyNumber = 0;
  for (nodeNumber in circles) {
    for (specialtyNumber in specialties) {
      if (specialtyNumber <= specialtyCounts[specialtyNumber]) {

      } else {

      }
    }
  }
}