var clicks = [0, 0, 0]; //needs to be outside all loops
var clickTotal = 0;
var cX = 600;
var cY = 650;
var lfn = 0;
var canReset;

var centerRadius = 23;
var lineLength = centerRadius;
var smallRadius = centerRadius * 10 / centerRadius;
var labelSize = smallRadius * .8;
var mediumRadius = centerRadius * 13 / centerRadius;


var svgSource = "";

var svgContent = [];




//NOTE: nodes provides enough data to place the nodes on the screen with the proper size
//      lines connects the dots
//      descriptions provides the wordy descriptions of each node level (including skills)
//      requires provides the requirements for a node to be active or not
//      aggregate supplies the aggregate descriptions, values and symbols (i.e. %)

var nodes = [];
var lines = [];
var descval = [];
var requires = []; //Elements are [0]: Node Number, [1]:Specialty, [2]: Requires which node(s), [3]: at these level(s)

var circles = [];
var connectors = [];
var prereqs = [];
var descvals = [];

var orders = [];
var descriptions = [];
var aggregate = [];
var count = 0; //used in include files to preserve node order