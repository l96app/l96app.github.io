
//Red tree Conquest (UP)

var footmanConquestResistanceWithBothFlags = [[30, 2, 3], [31, 2, 3], [22, 2, 3], [5, 2, 5], [27, 2, 3], [28, 2, 3], [20, 2, 3], [10, 2, 5], [24, 2, 3], [25, 2, 3], [18, 2, 3], [15, 2, 5], [16, 2, 5]];
var footmanConquestMightWithBothFlags = [[30, 2, 3], [32, 2, 3], [22, 2, 3], [5, 2, 5], [27, 2, 3], [29, 2, 3], [20, 2, 3], [10, 2, 5], [24, 2, 3], [26, 2, 3], [18, 2, 3], [15, 2, 5], [16, 2, 5]];

var archerConquestResistanceWithBothFlags = [[1, 2, 3], [2, 2, 3], [4, 2, 3], [5, 2, 5], [6, 2, 3], [7, 2, 3], [9, 2, 3], [10, 2, 5], [11, 2, 3], [12, 2, 3], [14, 2, 3], [16, 2, 5], [15, 2, 5]];
var archerConquestMightWithBothFlags = [[1, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 5], [6, 2, 3], [8, 2, 3], [9, 2, 3], [10, 2, 5], [11, 2, 3], [13, 2, 3], [14, 2, 3], [16, 2, 5], [15, 2, 5]];

var cavalryConquestResistanceWithBothFlags = [[39, 2, 3], [40, 2, 3], [23, 2, 3], [5, 2, 5], [36, 2, 3], [37, 2, 3], [21, 2, 3], [10, 2, 5], [33, 2, 3], [34, 2, 3], [19, 2, 3], [16, 2, 5], [15, 2, 5]];
var cavalryConquestMightWithBothFlags = [[39, 2, 3], [41, 2, 3], [23, 2, 3], [5, 2, 5], [36, 2, 3], [38, 2, 3], [21, 2, 3], [10, 2, 5], [33, 2, 3], [35, 2, 3], [19, 2, 3], [16, 2, 5], [15, 2, 5]];


//Red tree Offense (RIGHT)
var footmanSiegeAttackResistance = [[71, 2, 3], [72, 2, 3], [63, 2, 3], [46, 2, 5], [68, 2, 3], [69, 2, 3], [61, 2, 3], [51, 2, 5], [65, 2, 3], [66, 2, 3]];
var footmanSiegeAttackMight = [[71, 2, 3], [73, 2, 3], [63, 2, 3], [46, 2, 5], [68, 2, 3], [70, 2, 3], [61, 2, 3], [51, 2, 5], [65, 2, 3], [67, 2, 3], [59, 2, 3]];

var archerSiegeAttackResistance = [[42, 2, 3], [43, 2, 3], [45, 2, 3], [46, 2, 5], [47, 2, 3], [48, 2, 3], [50, 2, 3], [51, 2, 5], [52, 2, 3], [53, 2, 3]];
var archerSiegeAttackMight = [[42, 2, 3], [44, 2, 3], [45, 2, 3], [46, 2, 5], [47, 2, 3], [49, 2, 3], [50, 2, 3], [51, 2, 5], [52, 2, 3], [54, 2, 3], [55, 2, 3]];

var cavalrySiegeAttackMight = [[80, 2, 3], [82, 2, 3], [64, 2, 3], [46, 2, 5], [77, 2, 3], [79, 2, 3], [62, 2, 3], [51, 2, 5], [74, 2, 3], [76, 2, 3], [60, 2, 3]];
var cavalrySiegeAttackResistance = [[80, 2, 3], [81, 2, 3], [64, 2, 3], [46, 2, 5], [77, 2, 3], [78, 2, 3], [62, 2, 3], [51, 2, 5], [74, 2, 3], [75, 2, 3]];

//Red tree Defense (LEFT)
var footmanSiegeDefenseResistance = [[112, 2, 3], [113, 2, 3], [104, 2, 3], [87, 2, 5], [109, 2, 3], [110, 2, 3], [102, 2, 3], [92, 2, 5], [106, 2, 3], [107, 2, 3]];//,[97,2,5],[98,2,5]];
var footmanSiegeDefenseMight = [[112, 2, 3], [114, 2, 3], [104, 2, 3], [87, 2, 5], [109, 2, 3], [111, 2, 3], [102, 2, 3], [92, 2, 5], [106, 2, 3], [108, 2, 3], [100, 2, 3]];//,[97,2,5],[98,2,5]];

var archerSiegeDefenseMight = [[83, 2, 3], [85, 2, 3], [86, 2, 3], [87, 2, 5], [88, 2, 3], [90, 2, 3], [91, 2, 3], [92, 2, 5], [93, 2, 3], [95, 2, 3], [96, 2, 3]];//,[97,2,5],[98,2,5]];
var archerSiegeDefenseResistance = [[83, 2, 3], [84, 2, 3], [86, 2, 3], [87, 2, 5], [88, 2, 3], [89, 2, 3], [91, 2, 3], [92, 2, 5], [93, 2, 3], [94, 2, 3]];//,[97,2,5],[98,2,5]];

var cavalrySiegeDefenseResistance = [[121, 2, 3], [122, 2, 3], [105, 2, 3], [87, 2, 5], [118, 2, 3], [119, 2, 3], [103, 2, 3], [92, 2, 5], [115, 2, 3], [116, 2, 3]];//,[98,2,5],[97,2,5]];
var cavalrySiegeDefenseMight = [[121, 2, 3], [123, 2, 3], [105, 2, 3], [87, 2, 5], [118, 2, 3], [120, 2, 3], [103, 2, 3], [92, 2, 5], [115, 2, 3], [117, 2, 3], [101, 2, 3]];//,[98,2,5],[97,2,5]];

var allDefense = footmanSiegeDefenseResistance.concat(footmanSiegeDefenseMight,
  cavalrySiegeDefenseMight,
  cavalrySiegeDefenseResistance,
  archerSiegeDefenseResistance,
  archerSiegeDefenseMight);

var allAttack = footmanSiegeAttackResistance.concat(footmanSiegeAttackMight,
  cavalrySiegeAttackMight,
  cavalrySiegeAttackResistance,
  archerSiegeAttackResistance,
  archerSiegeAttackMight);
//console.table(archerSiegeAttackResistance);

var allConquest = footmanConquestResistanceWithBothFlags.concat(
  footmanConquestMightWithBothFlags,
  archerConquestResistanceWithBothFlags,
  archerConquestMightWithBothFlags,
  cavalryConquestResistanceWithBothFlags,
  cavalryConquestMightWithBothFlags);
//console.table(allConquest);

var loyaltyFullSouth = [[26, 1, 3], [28, 1, 3], [30, 1, 3], [31, 1, 5], [34, 1, 3], [35, 1, 3], [36, 1, 5], [39, 1, 3], [40, 1, 3], [41, 1, 5], [44, 1, 3], [45, 1, 3], [46, 1, 5]];
var loyaltyFullNorth = [[26, 1, 3], [27, 1, 3], [29, 1, 3], [31, 1, 5], [32, 1, 3], [33, 1, 3], [36, 1, 5], [37, 1, 3], [38, 1, 3], [41, 1, 5], [42, 1, 3], [43, 1, 3], [46, 1, 5]];
var honorBuildingsRight = [[47, 1, 3], [50, 1, 3], [51, 1, 3], [52, 1, 1], [55, 1, 3], [56, 1, 3], [57, 1, 1], [60, 1, 3], [61, 1, 3], [62, 1, 1]];
var honorBuildingsLeft = [[47, 1, 3], [48, 1, 3], [49, 1, 3], [52, 1, 1], [53, 1, 3], [54, 1, 3], [57, 1, 1], [58, 1, 3], [59, 1, 3], [62, 1, 1]];
var processingPlantsSpeed = [[68, 1, 3], [69, 1, 3], [70, 1, 3], [73, 1, 1], [74, 1, 3], [75, 1, 3], [78, 1, 1], [79, 1, 3], [80, 1, 3], [83, 1, 1], [84, 1, 3], [85, 1, 3], [88, 1, 1]];
var processingPlantsCapacity = [[68, 1, 3], [71, 1, 3], [72, 1, 3], [73, 1, 1], [76, 1, 3], [77, 1, 3], [78, 1, 1], [81, 1, 3], [82, 1, 3], [83, 1, 1], [86, 1, 3], [87, 1, 3], [88, 1, 1]];
var maxDestruction = [[1, 1, 3], [2, 1, 3], [3, 1, 3], [4, 1, 5], [5, 1, 3], [6, 1, 3], [7, 1, 5], [8, 1, 3], [9, 1, 3], [10, 1, 5], [11, 1, 3], [12, 1, 3]];
var maxBuildingHonor = [[58, 0, 3], [59, 0, 3], [61, 0, 3], [55, 0, 5], [63, 0, 3], [57, 0, 3], [56, 0, 3], [54, 0, 3], [46, 0, 5], [47, 0, 3], [48, 0, 3], [49, 0, 3], [45, 0, 3], [44, 0, 3], [43, 0, 3]];
var maxTilingHonor = [[1, 0, 3], [4, 0, 3], [5, 0, 3], [6, 0, 5], [10, 0, 3], [12, 0, 5], [24, 0, 3], [25, 0, 3], [26, 0, 3], [20, 0, 3], [21, 0, 3], [22, 0, 3]];
var maxMarchingSpeed = [[1, 0, 3], [7, 0, 3], [8, 0, 3], [6, 0, 5], [11, 0, 3]];
var maxCompositeRss = [[28, 0, 3], [36, 0, 3], [37, 0, 3], [31, 0, 5], [39, 0, 3]];
var maxVirusRss = [[28, 0, 3], [34, 0, 3], [35, 0, 3], [31, 0, 5], [38, 0, 3]];

//console.debug(cavalryMightWithBothFlags);

//To Do: Land development 13-16 node has a minimum specialty level requirment as well
//       and need to figure out how to incorporate this or at least warn the user 
// 
//       Tooltip seems to be working on circles, but not circle text, ?????!!!!!
const comma = ",";
const empty = "";
const plus = "+";
const minus = "-";
const before = 0;
const after = 2;
const middle = 1;
const percent = "%";
const indStr = 0;
const indDesc = 1;
const indAggIndicator = 2;
const indPre = 3;
const indVal = 4;
const indPost = 5;
const indPos = 6;
const indDelim = 7;
const indAggTitle = 8;
var bonusLoyalty = 0;
var objClickDesc;
var clickDescs = [];
var nextNodes = [];
var valToAdd = 0;
var tempLevel = 0;
var tempDesc = [];
var tempGroup = "";
var summaryOutput = "";
var pointsRemaining = 50;

var objCircle;
var objText;
var c = 0;
var s = 0;
var tempS = 0;
var firstTrip = true;
var codeOutput = "<br/>circles[order,spwnFr,spwnAng,Multip,Radius,x1,y1,x2,y2];<br />";
var nodeDesc = [];
var nodeValue = [];
var skillDesc = [];
var nodeRequires = [];
const circleNumbers = false;
const specialties = ["resource", "construction", "combat"];
const specialtyColors = [[0, 150, 0], [0, 0, 150], [150, 0, 0]];
const specialtyGray = [[150, 150, 150], [150, 150, 150], [150, 150, 150]];
const specialtyContrast = [[255, 255, 255], [255, 255, 255], [255, 255, 255]];
const combatSpecialty = 2;
const resourceSpecialty = 0;
const constructionSpecialty = 1;

var thisDelim = "";
var specialtyCounts = [0, 0, 0];