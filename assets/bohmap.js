var svg = d3.select("#map")
  .append("svg")
  .attr("class", "svg-content-responsive")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "540 545 121 167")
  .style("background-color", "#aaffaa")

window.addEventListener('resize', updateMap)

var mapData = [
  { x: 600, y: 600, r: 1.5, h: 3, fill: "#fff", desc: "Santuary" },
  { x: 600, y: 611, r: 1, h: 2, fill: "#fff", desc: "Relay" },
  { x: 600, y: 623, r: 1, h: 2, fill: "#fff", desc: "Relay" },
  { x: 599, y: 588, r: 1, h: 2, fill: "#fff", desc: "Relay" },
  { x: 599, y: 576, r: 1, h: 2, fill: "#fff", desc: "Relay" },
  { x: 555, y: 600, r: 1, h: 2, fill: "#fff", desc: "Fortress of Honor" },
  { x: 646, y: 600, r: 1, h: 2, fill: "#fff", desc: "Fortress of Honor" },
  { x: 585, y: 649, r: 1, h: 2, fill: "#fff", desc: "Outpost" },
  { x: 614, y: 649, r: 1, h: 2, fill: "#fff", desc: "Outpost" },
  { x: 585, y: 550, r: 1, h: 2, fill: "#fff", desc: "Outpost" },
  { x: 614, y: 550, r: 1, h: 2, fill: "#fff", desc: "Outpost" },
  { x: 564, y: 635, r: 1, h: 2, fill: "#fff", desc: "Command Center" },
  { x: 635, y: 635, r: 1, h: 2, fill: "#fff", desc: "Command Center" },
  { x: 564, y: 564, r: 1, h: 2, fill: "#fff", desc: "Command Center" },
  { x: 635, y: 564, r: 1, h: 2, fill: "#fff", desc: "Command Center" },
  { x: 575, y: 620, r: 1, h: 2, fill: "#fff", desc: "Hospital" },
  { x: 626, y: 580, r: 1, h: 2, fill: "#fff", desc: "Hospital" },
  { x: 626, y: 620, r: 1, h: 2, fill: "#fff", desc: "Arsenal" },
  { x: 575, y: 580, r: 1, h: 2, fill: "#fff", desc: "Arsenal" },
  { x: 600, y: 539, r: 1.5, fill: "#f00", desc: "Red" },
  { x: 600, y: 661, r: 1.5, fill: "#00f", desc: "Blue" }
];

var mapLinesDb = [
  // lines
  { x1: 610, y1: 570, x2: 610, y2: 630, w: 3, fill: "#530" },
  { x1: 590, y1: 570, x2: 590, y2: 630, w: 3, fill: "#530" },
  { x1: 590, y1: 542.5, x2: 610, y2: 542.5, w: 0.2, fill: "#f00" },
  { x1: 590, y1: 535.5, x2: 610, y2: 535.5, w: 0.2, fill: "#f00" },
  { x1: 590, y1: 664.5, x2: 610, y2: 664.5, w: 0.2, fill: "#00f" },
  { x1: 590, y1: 657.5, x2: 610, y2: 657.5, w: 0.2, fill: "#00f" },
]

// Determine the minimum and maximum x and y values
var minX = d3.min(mapData, function (d) { return d.x; });
var maxX = d3.max(mapData, function (d) { return d.x; });
var minY = d3.min(mapData, function (d) { return d.y; });
var maxY = d3.max(mapData, function (d) { return d.y; });


// Add the map image
var mapImg = svg.append("image")
  .attr("xlink:href", "https://l96.app/wp-content/uploads/2021/11/LogoLouros.png")
  .attr("x", 640)
  .attr("y", 635)
  .attr("width", 18)
  .attr("height", 18)
// rotate the image 90 degrees on the same point


// function that will wrap texts according a width
function wrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1, // ems
      y = text.attr("y"),
      dy = 0,
      tspan = text.text(null)
        .append("tspan")
        .attr("x", 604)
        .attr("y", y)
        .attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan")
          .attr("x", 604)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
}






function color(i) {
  var colors = ["#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff", "#fff", "#b33", "#3b3", "#33b", "#bb3", "#b3b", "#3bb", "#bbb", "#800", "#080", "#008", "#880", "#808", "#088", "#888"];
  return colors[i];
}

function updateBlue() {
  document.getElementById("mapZones").value = "600:602:17:12:red:Strikers:S:Strikers Must Clear Castles and Guarantee the control of Sanctuary;560:602:20:12:red:West Wingers:WW:West Wingers(WW) must focus in protect 1) Fotress of Honor area as priority 2) harass enemy buildings near;640:602:20:12:red:East Wingers:EW:East Wingers(EW) must focus in protect  1) Fotress of Honor area as priority 2) harass enemy buildings near;600:618:60:20:yellow:Mid-Filders:MF:Mid-Filders priority is 1) control near buildings 2) protect sentry towers 3) Support wingers and strikers;600:650:35:15:green:Defenders:DF:Defenders priority is 1) repair nearby sentry towers 2) nearby buildings 3) gathering;600:564:10:10:#fff:North Sector:North:Sector North is the origin of red team;600:636:10:10:#fff:South Sector:South:Sector South is the origin of blue team;620:600:10:10:#fff:East Sector:East:Sector East is relevant for red team because of control of the Arsenal;580:600:10:10:#fff:West Sector:West:Sector West is relevant for blue team because of control of the Arsenal;",
    document.getElementById("castlesAvailables").value = "600:603:RuneTaker;597:603:BeserkerM1;603:603:BeserkerM2;556:603:BeserkerW1;560:603:BeserkerWF1;644:603:BeserkerE1;640:603:BeserkerEF1;600:608:TaticalM1;603:611:TaticalM2;597:611:TaticalM3;600:614:TaticalM4;597:620:TaticalMD1;603:620:TaticanMD2;630:617:WingerEM1;623:624:WingerEM1;570:617:WingerWM1;577:624:WingerWM2;584:631:DefenderW1;600:645:DefenderM1;616:631:DefenderE1",
    document.getElementById("stPath").value = "600:654:St1;600:647:St2;593:640:St3;593:626:St4;600:619:St5;600:612:St6;600:605:St7;586:633:St8;579:626:St9;572:619:St10;565:612:St11;558:605:St12;607:640:St13;614:633:St14;621:626:St15;628:619:St16;635:612:St17;642:605:St18",
    updateMap();
}

// create updateRed that will invert updateBlue Y position relative to 600:600
function updateRed() {
  document.getElementById("mapZones").value = "600:598:17:12:#f00:Strikers:S:Strikers Must Clear Castles and Guarantee the control of Sanctuary;560:598:20:12:#f00:West Wingers:WW:West Wingers(WW) must focus in protect 1) Fotress of Honor area as priority 2) harass enemy buildings near;640:598:20:12:#f00:East Wingers:EW:East Wingers(EW) must focus in protect  1) Fotress of Honor area as priority 2) harass enemy buildings near;600:582:60:20:#f80:Mid-Filders:MF:Mid-Filders priority is 1) control near buildings 2) protect sentry towers 3) Support wingers and strikers;600:550:35:15:#Ff0:Defenders:DF:Defenders priority is 1) repair nearby sentry towers 2) nearby buildings 3) gathering;600:564:10:10:#fff:North Sector:North:Sector North is the origin of red team;600:636:10:10:#fff:South Sector:South:Sector South is the origin of blue team;620:600:10:10:#fff:East Sector:East:Sector East is relevant for red team because of control of the Arsenal;580:600:10:10:#fff:West Sector:West:Sector West is relevant for blue team because of control of the Arsenal;",
    document.getElementById("castlesAvailables").value = "600:597:RuneTaker;597:597:BeserkerM1;603:597:BeserkerM2;556:597:BeserkerW1;560:597:BeserkerWF1;644:597:BeserkerE1;640:597:BeserkerEF1;600:592:TaticalM1;603:589:TaticalM2;597:589:TaticalM3;600:586:TaticalM4;597:580:TaticalMD1;603:580:TaticanMD2;630:583:WingerEM1;623:576:WingerEM1;570:583:WingerWM1;577:576:WingerWM2;584:569:DefenderW1;600:555:DefenderM1;616:569:DefenderE1"
  document.getElementById("stPath").value = "600:546:St1;600:553:St2;593:560:St3;586:567:St4;593:574:St5;600:581:St6;600:588:St7;600:595:St8;579:574:St9;572:581:St10;565:588:St11;558:595:St12;607:560:St13;614:567:St14;621:574:St15;628:581:St16;635:588:St17;642:595:St19",
    updateMap();
}

function updateClear() {
  document.getElementById("mapZones").value = "600:600:16:16:#f00:Strikers:S:Strikers Must Clear Castles and Guarantee the control of Sanctuary;560:600:20:16:#f00:West Wingers:WW:West Wingers(WW) must focus in protect 1) Fotress of Honor area as priority 2) harass enemy buildings near;640:600:20:15:#f00:East Wingers:EW:East Wingers(EW) must focus in protect  1) Fotress of Honor area as priority 2) harass enemy buildings near;600:582:60:20:#ff0:Mid-Filders:MF:Mid-Filders priority is 1) control near buildings 2) protect sentry towers 3) Support wingers and strikers;600:618:60:20:#ff0:Mid-Filders:MF:Mid-Filders priority is 1) control near buildings 2) protect sentry towers 3) Support wingers and strikers;600:650:35:15:#0f0:Defenders:DF:Defenders priority is 1) repair nearby sentry towers 2) nearby buildings 3) gathering;600:550:35:15:#0f0:Defenders:DF:Defenders priority is 1) repair nearby sentry towers 2) nearby buildings 3) gathering;600:564:10:10:#fff:North Sector:North:Sector North is the origin of red team;600:636:10:10:#fff:South Sector:South:Sector South is the origin of blue team;620:600:10:10:#fff:East Sector:East:Sector East is relevant for red team because of control of the Arsenal;580:600:10:10:#fff:West Sector:West:Sector West is relevant for blue team because of control of the Arsenal";
  document.getElementById("castlesAvailables").value = "634:588:PlayerName1:Brief Intruction Here about player main roles or activities or priorities;634:584:PlayerName2:Brief Intruction Here about player main roles or activities or priorities;634:580:PlayerName3:Brief Intruction Here about player main roles or activities or priorities;634:576:PlayerName4:Brief Intruction Here about player main roles or activities or priorities;634:572:PlayerName5:Brief Intruction Here about player main roles or activities or priorities;638:588:PlayerName6:Brief Intruction Here about player main roles or activities or priorities;638:584:PlayerName7:Brief Intruction Here about player main roles or activities or priorities;638:580:PlayerName8:Brief Intruction Here about player main roles or activities or priorities;638:576:PlayerName9:Brief Intruction Here about player main roles or activities or priorities;638:572:PlayerName10:Brief Intruction Here about player main roles or activities or priorities;642:588:PlayerName11:Brief Intruction Here about player main roles or activities or priorities;642:584:PlayerName12:Brief Intruction Here about player main roles or activities or priorities;642:580:PlayerName13:Brief Intruction Here about player main roles or activities or priorities;642:576:PlayerName14:Brief Intruction Here about player main roles or activities or priorities;642:572:PlayerName15:Brief Intruction Here about player main roles or activities or priorities;646:588:PlayerName16:Brief Intruction Here about player main roles or activities or priorities;646:584:PlayerName17:Brief Intruction Here about player main roles or activities or priorities;646:580:PlayerName18:Brief Intruction Here about player main roles or activities or priorities;646:576:PlayerName19:Brief Intruction Here about player main roles or activities or priorities;646:572:PlayerName20:Brief Intruction Here about player main roles or activities or priorities";
  document.getElementById("stPath").value = "600:661:St1;600:539:St2",
    updateMap();
}

function updateMap() {
  // remove stPathRect
  svg.selectAll(".stPath-rect").remove();
  svg.selectAll(".mapZones-rect").remove();
  svg.selectAll(".mapZones-text").remove();
  svg.selectAll(".map-line").remove();
  svg.selectAll(".map-circles").remove();
  svg.selectAll(".map-header").remove();
  svg.selectAll(".map-instruction").remove();
  svg.selectAll("castlesAvailable-instruction2-background").remove();
  svg.selectAll("castlesAvailable-instruction-background").remove();
  svg.selectAll(".castlesAvailable-rect").remove();
  svg.selectAll(".castlesAvailable-table").remove();
  svg.selectAll(".castlesAvailable-text").remove();

  // convert input mapZones values to array x:y:w:h:fill:desc
  var mapZones = document.getElementById("mapZones").value;
  var mapZonesArray = mapZones.split(";");
  var mapZonesArray2 = mapZonesArray.map(function (d) {
    var x = d.split(":")[0];
    var y = d.split(":")[1];
    var w = d.split(":")[2];
    var h = d.split(":")[3];
    var fill = d.split(":")[4];
    var desc = d.split(":")[5];
    var tag = d.split(":")[6];
    var role = d.split(":")[7];
    return { x: x, y: y, w: w, h: h, fill: fill, desc: desc, tag: tag, role: role };
  })

  // convert input values to array x:y for castlesAvailable
  var castlesAvailable = document.getElementById("castlesAvailables").value;
  var castlesAvailableArray = castlesAvailable.split(";");
  castlesAvailableArray = castlesAvailableArray.map(function (d) {
    var x = d.split(":")[0];
    var y = d.split(":")[1];
    var desc = d.split(":")[2];
    var role = d.split(":")[3];
    return { x: x, y: y, desc: desc, role: role };
  })

  // convert input values to array x:y 
  var stPath = document.getElementById("stPath").value;
  var stPathArray = stPath.split(";");
  var stPathArray2 = stPathArray.map(function (d) {
    var x = d.split(":")[0];
    var y = d.split(":")[1];
    var desc = d.split(":")[2];
    return { x: x, y: y, desc: desc };
  })

  function plotBackground() {
    // Add mapZones coordinates as rect
    var mapZonesRect = svg.selectAll(".mapZones-rect")
      .data(mapZonesArray2)
      .enter()
      .append("rect")
      .lower()
      .classed("mapZones-rect", true)
      .attr("x", function (d) { return d.x - d.w / 2; })
      .attr("y", function (d) { return d.y - d.h / 2; })
      .attr("width", function (d) { return d.w; })
      .attr("height", function (d) { return d.h; })
      .attr("fill", function (d) { return d.fill; })
      .attr("fill-opacity", 0.2)
      .attr("stroke", "black")
      .attr("stroke-width", 0)
      .attr("transform", "rotate(45,600, 600)")
      .on("mouseover", function (d) {
        d3.select("#subheaderSVG").text("Zone: " + d.desc + " (" + d.x + ":" + d.y + ")")
        d3.select("#instructionsSVG").text(d.role).call(wrap, 54)
        d3.select(this).attr("fill-opacity", 0.4);
      })
      .on("mouseout", function (d) {
        d3.select("#instructionsSVG").text("Instructions: Mouse over a castle name on the botton to check instructions.").call(wrap, 54)
        d3.select(this).attr("fill-opacity", 0.2);
      })
      // function that will promt a window to edit rect roles in dataset and update map when double click
      .on("dblclick", function (d) {
        var role = prompt("Please enter the role of this zone:", d.role);
        if (role != null) {
          d.role = role;
          updateMap();
        }
      })
      ;


    // Add stPath coordinates as rect
    var stPathRect = svg.selectAll(".stPath-rect")
      .data(stPathArray2)
      .enter()
      .append("rect")
      .classed("stPath-rect", true)
      .attr("x", function (d) { return d.x - 3.5; })
      .attr("y", function (d) { return d.y - 3.5; })
      .attr("width", 7)
      .attr("height", 7)
      .attr("fill", "#000")
      .attr("fill-opacity", 0.3)
      .attr("stroke", "black")
      .attr("stroke-width", 0.3)
      .attr("transform", "rotate(45,600, 600)")
      .on("mouseover", function (d) {
        d3.select("#subheaderSVG").text("Sentry Tower: " + d.desc + " (" + d.x + ":" + d.y + ")");
      });
    var castlesInst2Background = svg.selectAll(".castlesAvailable-instruction2-background")
      .data(castlesAvailableArray)
      .enter()
      .append("rect")
      .classed("castlesAvailable-instruction2-background", true)
      .attr("x", 544)
      .attr("y", 654)
      .attr("width", 56)
      .attr("height", 55)
      .attr("fill", "#fff")
      .attr("stroke", "black")
      .attr("stroke-width", 0);

    var castlesInstBackground = svg.selectAll(".castlesAvailable-instruction-background")
      .data(castlesAvailableArray)
      .enter()
      .append("rect")
      .classed("castlesAvailable-instruction-background", true)
      .attr("x", 602)
      .attr("y", 654)
      .attr("width", 56)
      .attr("height", 55)
      .attr("fill", "#fff")
      .attr("stroke", "black")
      .attr("stroke-width", 0.1);
  }
  plotBackground()

  function plotStructures() {
    // Add the map locations
    var mapElements = svg.selectAll(".map-circles")
      .data(mapData)
      .enter()
      .append("circle")
      .classed("map-circles", true)
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; })
      .attr("r", function (d) { return d.r; })
      .attr("fill", function (d) { return d.fill; })
      .attr("stroke", "black")
      .attr("stroke-width", 0.3)
      .attr("transform", "rotate(45,600, 600)")
      .on("mouseover", function (d) {
        d3.select("#subheaderSVG").text("Building: " + d.desc + " (" + d.x + ":" + d.y + ")");
      });
    // Add the map lines
    var mapLines = svg.selectAll(".map-line")
      .data(mapLinesDb)
      .enter()
      .append("line")
      .classed("map-line", true)
      .attr("x1", function (d) { return d.x1; })
      .attr("y1", function (d) { return d.y1; })
      .attr("x2", function (d) { return d.x2; })
      .attr("y2", function (d) { return d.y2; })
      .attr("stroke-width", function (d) { return d.w; })
      .attr("stroke", function (d) { return d.fill; })
      .attr("transform", "rotate(45,600, 600)");
  }
  plotStructures()

  function plotTexts() {
    var mapZonesText = svg.selectAll(".mapZones-text")
      .data(mapZonesArray2)
      .enter()
      .append("text")
      .raise()
      .classed("mapZones-text", true)
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y; })
      .attr("transform", function (d) { return "rotate(45,600,600)"; })
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("font-size", 3)
      .attr("fill", "black")
      .text(function (d) { return d.tag; });

    // Add a subheader that upddate when mouse over for more details
    svg.append("text")
      .attr("x", 544)
      .attr("y", 554)
      .classed("map-header", true)
      .text("Mouse over to see details")
      .attr("font-size", 4)
      .attr("text-anchor", "right")
      .attr("dominant-baseline", "middle")
      .attr("id", "subheaderSVG");

    // Add a header with the map title
    svg.append("text")
      .attr("x", 544)
      .attr("y", 549)
      .classed("map-header", true)
      .text("Battlefield of Honor")
      .attr("font-size", 5)
      .attr("text-anchor", "right")
      .attr("dominant-baseline", "middle")
      .attr("id", "header");

    svg.append("text")
      .attr("x", 603)
      .attr("y", 658)
      .classed("map-instruction", true)
      .text("Instructions: Mouse over a castle name on the botton to check instructions.")
      .attr("font-size", 4)
      .attr("text-anchor", "right")
      .attr("dominant-baseline", "middle")
      .attr("id", "instructionsSVG")
      .call(wrap, 54)













    
    // Castle table on the botton
    var castlesAvailableTable = svg.selectAll(".castlesAvailable-table")
      .data(castlesAvailableArray)
      .enter()
      .append("text")
      .classed("castlesAvailable-table", true)
      .attr("x", function (d, i) { return 548.5 + Math.floor(i / 10) * 28; })
      .attr("y", function (d, i) { return 656.5 + i * 5.5 - Math.floor(i / 10) * 10 * 5.5; })
      .text(function (d) { return d.desc; })
      .attr("font-size", 3.5)
      .attr("text-anchor", "right")
      .attr("dominant-baseline", "middle")
      .attr("id", function (d) { return "ca" + d.desc; })
      .on("mouseover", function (d) {
        d3.select("#subheaderSVG").text("Castle: " + d.desc);
        d3.select("#instructionsSVG").text(d.role).call(wrap, 54);
        d3.select("#ca" + d.desc).attr("font-weight", "bold");
        d3.select("#cs" + d.desc).attr("stroke-width", 0.3);
        d3.select("#ct" + d.desc).attr("stroke-width", 0.5);
      })
      .on("mouseout", function (d) {
        d3.select("#subheaderSVG").text("Castle: " + d.desc);
        d3.select("#instructionsSVG").text("Instructions: Mouse over a castle name on the botton to check instructions.").call(wrap, 54);
        d3.select("#ca" + d.desc).attr("font-weight", "normal");
        d3.select("#cs" + d.desc).attr("stroke-width", 0.1);
        d3.select("#ct" + d.desc).attr("stroke-width", 0.1);
      });
  }
  plotTexts()

  function plotCastles() {
    // Add castlesAvailable coordinates as rect
    var castlesAvailableRect = svg.selectAll(".castlesAvailable-rect")
      .data(castlesAvailableArray)
      .enter()
      .append("rect")
      .classed("castlesAvailable-rect", true)
      .attr("x", function (d) { return d.x - 1; })
      .attr("y", function (d) { return d.y - 1; })
      .attr("width", 2)
      .attr("height", 2)
      .attr("fill", function (d, i) { return color(i); })
      .attr("stroke", "black")
      .attr("stroke-width", 0.1)
      .attr("id", function (d) { return "ct" + d.desc; })
      .attr("transform", "rotate(45,600, 600)")
      .on("mouseover", function (d) {
        d3.select("#subheaderSVG").text("Castle: " + d.desc);
        d3.select("#instructionsSVG").text(d.role).call(wrap, 54);
        d3.select("#ca" + d.desc).attr("font-weight", "bold");
        d3.select("#cs" + d.desc).attr("stroke-width", 0.3);
        d3.select("#ct" + d.desc).attr("stroke-width", 0.5);
      })
      .on("mouseout", function (d) {
        d3.select("#subheaderSVG").text("Castle: " + d.desc);
        d3.select("#instructionsSVG").text("Instructions: Mouse over a castle name on the botton to check instructions.").call(wrap, 54);
        d3.select("#ca" + d.desc).attr("font-weight", "normal");
        d3.select("#cs" + d.desc).attr("stroke-width", 0.1);
        d3.select("#ct" + d.desc).attr("stroke-width", 0.1);
      })

    // Add a rect as background for the castlesAvailableTable
    var castlesAvailableTableBackground = svg.selectAll(".castlesAvailable-table-background")
      .data(castlesAvailableArray)
      .enter()
      .append("rect")
      .classed("castlesAvailable-table-background", true)
      .attr("x", function (d, i) { return 544 + Math.floor(i / 10) * 28; })
      .attr("y", function (d, i) { return 654 + i * 5.5 - Math.floor(i / 10) * 10 * 5.5; })
      .attr("width", 4)
      .attr("height", 5)
      // each rect must have individual different 5 colors
      .attr("fill", function (d, i) { return color(i); })
      .attr("stroke", "black")
      .attr("id", function (d) { return "cs" + d.desc; })
      .attr("stroke-width", 0.1)
      .on("mouseover", function (d) {
        d3.select("#subheaderSVG").text("Castle: " + d.desc);
        d3.select("#instructionsSVG").text(d.role).call(wrap, 54)
        d3.select("#ca" + d.desc).attr("font-weight", "bold");
        d3.select("#cs" + d.desc).attr("stroke-width", 0.3);
        d3.select("#ct" + d.desc).attr("stroke-width", 0.5);

      })
      .on("mouseout", function (d) {
        d3.select("#subheaderSVG").text("Castle: " + d.desc);
        d3.select("#instructionsSVG").text("Instructions: Mouse over a castle name on the botton to check instructions.").call(wrap, 54);
        d3.select("#ca" + d.desc).attr("font-weight", "regular");
        d3.select("#cs" + d.desc).attr("stroke-width", 0.1);
        d3.select("#ct" + d.desc).attr("stroke-width", 0.1);
      })

  };
  plotCastles();

  var mousex = 600;
  var mousey = 600;
  // Add a footer with actual map coordinates relative to the mousex and mousey
  svg.append("text")
    .attr("x", 544)
    .attr("y", 652)
    .classed("map-header", true)
    .text(mousex + ":" + mousey)
    .attr("font-size", 3)
    .attr("text-anchor", "right")
    .attr("dominant-baseline", "middle")
    .attr("id", "footer");
  // define mousex and mouse y according mouse position over the canvas
  svg.on("mousemove", function () {
    var coords = d3.mouse(this);
    mousex = coords[0];
    mousey = coords[1];
    // turn the mousex and mousey 45 degrees
    var x = mousex - 600;
    var y = mousey - 600;
    mousex = x * Math.cos(-Math.PI / 4) - y * Math.sin(-Math.PI / 4) + 600;
    mousey = x * Math.sin(-Math.PI / 4) + y * Math.cos(-Math.PI / 4) + 600;
    mousex = Math.round(mousex);
    mousey = Math.round(mousey);
    d3.select("#footer").text(mousex + ":" + mousey);
  });

}
// when the user take any action, updateMap
d3.selectAll("textarea").on("change", updateMap);

// Create a link that pre-populate the castlesAvailables, stPath, mapMsgs and mapZones textareas with actual values
function copyLink() {
  var castlesAvailables = document.getElementById("castlesAvailables").value;
  var stPath = document.getElementById("stPath").value;
  var mapZones = document.getElementById("mapZones").value;
  var link = document.getElementById("link");
  //link.value = window.location.href + '?castlesAvailables="' + castlesAvailables + '"&stPath="' + stPath + '"&mapZones="' + mapZones;
  link.value = 'Castles Availables= ' + castlesAvailables + '|  Sentry Path= ' + stPath + '| Map Zones= ' + mapZones;
  link.select();
  document.execCommand("copy");
}

// Take the values from the window.location.href and put them in the textareas
function pasteLink() {
  var url = new URL(window.location.href);
  var castlesAvailables = url.searchParams.get("castlesAvailables");
  var stPath = url.searchParams.get("stPath");
  var mapZones = url.searchParams.get("mapZones");
  document.getElementById("castlesAvailables").value = castlesAvailables;
  document.getElementById("stPath").value = stPath;
  document.getElementById("mapZones").value = mapZones;
}


updateClear()