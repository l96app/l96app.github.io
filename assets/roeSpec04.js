//Filling the node array below must be done in such a way as
//to not put a circle before the circle it spawns from.
//Meaning, order is important.  Just having all the elements
//will not fill the tree.
//Dependencies must be in place before you can build from them.
//Red tree up 270 degrees
nodes.push([0, "combat", count++, 0, 0, 1, centerRadius, cX, cY, 0]);
lines.push([0, "combat", []]);
nodes.push([1, "combat", count++, 0, 270, 1.5, smallRadius, cX, cY, 3]);
lines.push([1, "combat", [0]]);
nodes.push([2, "combat", count++, 1, 210, 1, smallRadius, cX, cY, 3]);
lines.push([2, "combat", [1]]);
nodes.push([3, "combat", count++, 1, 330, 1, smallRadius, cX, cY, 3]);
lines.push([3, "combat", [1]]);
nodes.push([4, "combat", count++, 1, 270, 3, smallRadius, cX, cY, 3]);
lines.push([4, "combat", [2, 3]]);
nodes.push([5, "combat", count++, 4, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([5, "combat", [4]]);
nodes.push([6, "combat", count++, 5, 270, 1, smallRadius, cX, cY, 3]);
lines.push([6, "combat", [5]]);
nodes.push([7, "combat", count++, 6, 210, 1, smallRadius, cX, cY, 3]);
lines.push([7, "combat", [6]]);
nodes.push([8, "combat", count++, 6, 330, 1, smallRadius, cX, cY, 3]);
lines.push([8, "combat", [6]]);
nodes.push([9, "combat", count++, 6, 270, 3, smallRadius, cX, cY, 3]);
lines.push([9, "combat", [7, 8]]);
nodes.push([10, "combat", count++, 9, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([10, "combat", [9]]);
nodes.push([11, "combat", count++, 10, 270, 1, smallRadius, cX, cY, 3]);
lines.push([11, "combat", [10]]);
nodes.push([12, "combat", count++, 11, 210, 1, smallRadius, cX, cY, 3]);
lines.push([12, "combat", [11]]);
nodes.push([13, "combat", count++, 11, 330, 1, smallRadius, cX, cY, 3]);
lines.push([13, "combat", [11]]);
nodes.push([14, "combat", count++, 11, 270, 3, smallRadius, cX, cY, 3]);
lines.push([14, "combat", [12, 13]]);
nodes.push([15, "combat", count++, 14, 205, 3, mediumRadius, cX, cY, 5]);
lines.push([15, "combat", [14]]);
nodes.push([16, "combat", count++, 14, 340, 3, mediumRadius, cX, cY, 5]);
lines.push([16, "combat", [14, 15]]);
nodes.push([17, "combat", count++, 14, 270, 3, mediumRadius, cX, cY, 1]);
lines.push([17, "combat", [16, 15]]);
nodes.push([18, "combat", count++, 15, 180, 2, smallRadius, cX, cY, 3]);
lines.push([18, "combat", [15]]);
nodes.push([19, "combat", count++, 16, 0, 2, smallRadius, cX, cY, 3]);
lines.push([19, "combat", [16]]);
nodes.push([20, "combat", count++, 10, 180, 5, smallRadius, cX, cY, 3]);
lines.push([20, "combat", [10]]);
nodes.push([21, "combat", count++, 10, 0, 5, smallRadius, cX, cY, 3]);
lines.push([21, "combat", [10]]);
nodes.push([22, "combat", count++, 5, 180, 4, smallRadius, cX, cY, 3]);
lines.push([22, "combat", [5]]);
nodes.push([23, "combat", count++, 5, 0, 4, smallRadius, cX, cY, 3]);
lines.push([23, "combat", [5]]);
nodes.push([24, "combat", count++, 18, 90, 3, smallRadius, cX, cY, 3]);
lines.push([24, "combat", [10]]);
nodes.push([25, "combat", count++, 24, 210, 1, smallRadius, cX, cY, 3]);
lines.push([25, "combat", [24, 18]]);
nodes.push([26, "combat", count++, 24, 330, 1, smallRadius, cX, cY, 3]);
lines.push([26, "combat", [24, 18]]);
nodes.push([27, "combat", count++, 20, 90, 3, smallRadius, cX, cY, 3]);
lines.push([27, "combat", [5]]);
nodes.push([28, "combat", count++, 27, 210, 1, smallRadius, cX, cY, 3]);
lines.push([28, "combat", [20, 27]]);
nodes.push([29, "combat", count++, 27, 330, 1, smallRadius, cX, cY, 3]);
lines.push([29, "combat", [20, 27]]);
nodes.push([30, "combat", count++, 22, 90, 3, smallRadius, cX, cY, 3]);
lines.push([30, "combat", [0]]);
nodes.push([31, "combat", count++, 30, 210, 1, smallRadius, cX, cY, 3]);
lines.push([31, "combat", [22, 30]]);
nodes.push([32, "combat", count++, 30, 330, 1, smallRadius, cX, cY, 3]);
lines.push([32, "combat", [22, 30]]);
nodes.push([33, "combat", count++, 19, 90, 3, smallRadius, cX, cY, 3]);
lines.push([33, "combat", [10]]);
nodes.push([34, "combat", count++, 33, 210, 1, smallRadius, cX, cY, 3]);
lines.push([34, "combat", [33, 19]]);
nodes.push([35, "combat", count++, 33, 330, 1, smallRadius, cX, cY, 3]);
lines.push([35, "combat", [33, 19]]);
nodes.push([36, "combat", count++, 21, 90, 3, smallRadius, cX, cY, 3]);
lines.push([36, "combat", [5]]);
nodes.push([37, "combat", count++, 36, 210, 1, smallRadius, cX, cY, 3]);
lines.push([37, "combat", [21, 36]]);
nodes.push([38, "combat", count++, 36, 330, 1, smallRadius, cX, cY, 3]);
lines.push([38, "combat", [21, 36]]);
nodes.push([39, "combat", count++, 23, 90, 3, smallRadius, cX, cY, 3]);
lines.push([39, "combat", [0]]);
nodes.push([40, "combat", count++, 39, 210, 1, smallRadius, cX, cY, 3]);
lines.push([40, "combat", [23, 39]]);
nodes.push([41, "combat", count++, 39, 330, 1, smallRadius, cX, cY, 3]);
lines.push([41, "combat", [23, 39]]);
nodes.push([42, "combat", count++, 0, 390, 1.5, smallRadius, cX, cY, 3]);
lines.push([42, "combat", [0]]);
nodes.push([43, "combat", count++, 42, 330, 1, smallRadius, cX, cY, 3]);
lines.push([43, "combat", [42]]);
nodes.push([44, "combat", count++, 42, 450, 1, smallRadius, cX, cY, 3]);
lines.push([44, "combat", [42]]);
nodes.push([45, "combat", count++, 42, 390, 3, smallRadius, cX, cY, 3]);
lines.push([45, "combat", [43, 44]]);
nodes.push([46, "combat", count++, 45, 390, 1, mediumRadius, cX, cY, 5]);
lines.push([46, "combat", [45]]);
nodes.push([47, "combat", count++, 46, 390, 1, smallRadius, cX, cY, 3]);
lines.push([47, "combat", [46]]);
nodes.push([48, "combat", count++, 47, 330, 1, smallRadius, cX, cY, 3]);
lines.push([48, "combat", [47]]);
nodes.push([49, "combat", count++, 47, 450, 1, smallRadius, cX, cY, 3]);
lines.push([49, "combat", [47]]);
nodes.push([50, "combat", count++, 47, 390, 3, smallRadius, cX, cY, 3]);
lines.push([50, "combat", [48, 49]]);
nodes.push([51, "combat", count++, 50, 390, 1, mediumRadius, cX, cY, 5]);
lines.push([51, "combat", [50]]);
nodes.push([52, "combat", count++, 51, 390, 1, smallRadius, cX, cY, 3]);
lines.push([52, "combat", [51]]);
nodes.push([53, "combat", count++, 52, 330, 1, smallRadius, cX, cY, 3]);
lines.push([53, "combat", [52]]);
nodes.push([54, "combat", count++, 52, 450, 1, smallRadius, cX, cY, 3]);
lines.push([54, "combat", [52]]);
nodes.push([55, "combat", count++, 52, 390, 3, smallRadius, cX, cY, 3]);
lines.push([55, "combat", [53, 54]]);
nodes.push([56, "combat", count++, 55, 325, 3, mediumRadius, cX, cY, 5]);
lines.push([56, "combat", [55]]);
nodes.push([57, "combat", count++, 55, 460, 3, mediumRadius, cX, cY, 5]);
lines.push([57, "combat", [55, 56]]);
nodes.push([58, "combat", count++, 55, 390, 3, mediumRadius, cX, cY, 5]);
lines.push([58, "combat", [57, 56]]);
nodes.push([59, "combat", count++, 56, 300, 2, smallRadius, cX, cY, 3]);
lines.push([59, "combat", [56]]);
nodes.push([60, "combat", count++, 57, 120, 2, smallRadius, cX, cY, 3]);
lines.push([60, "combat", [57]]);
nodes.push([61, "combat", count++, 51, 300, 5, smallRadius, cX, cY, 3]);
lines.push([61, "combat", [51]]);
nodes.push([62, "combat", count++, 51, 120, 5, smallRadius, cX, cY, 3]);
lines.push([62, "combat", [51]]);
nodes.push([63, "combat", count++, 46, 300, 4, smallRadius, cX, cY, 3]);
lines.push([63, "combat", [46]]);
nodes.push([64, "combat", count++, 46, 120, 4, smallRadius, cX, cY, 3]);
lines.push([64, "combat", [46]]);
nodes.push([65, "combat", count++, 59, 210, 3, smallRadius, cX, cY, 3]);
lines.push([65, "combat", [51]]);
nodes.push([66, "combat", count++, 65, 330, 1, smallRadius, cX, cY, 3]);
lines.push([66, "combat", [65, 59]]);
nodes.push([67, "combat", count++, 65, 450, 1, smallRadius, cX, cY, 3]);
lines.push([67, "combat", [65, 59]]);
nodes.push([68, "combat", count++, 61, 210, 3, smallRadius, cX, cY, 3]);
lines.push([68, "combat", [46]]);
nodes.push([69, "combat", count++, 68, 330, 1, smallRadius, cX, cY, 3]);
lines.push([69, "combat", [61, 68]]);
nodes.push([70, "combat", count++, 68, 450, 1, smallRadius, cX, cY, 3]);
lines.push([70, "combat", [61, 68]]);
nodes.push([71, "combat", count++, 63, 210, 3, smallRadius, cX, cY, 3]);
lines.push([71, "combat", [0]]);
nodes.push([72, "combat", count++, 71, 330, 1, smallRadius, cX, cY, 3]);
lines.push([72, "combat", [63, 71]]);
nodes.push([73, "combat", count++, 71, 450, 1, smallRadius, cX, cY, 3]);
lines.push([73, "combat", [63, 71]]);
nodes.push([74, "combat", count++, 60, 210, 3, smallRadius, cX, cY, 3]);
lines.push([74, "combat", [51]]);
nodes.push([75, "combat", count++, 74, 330, 1, smallRadius, cX, cY, 3]);
lines.push([75, "combat", [74, 60]]);
nodes.push([76, "combat", count++, 74, 450, 1, smallRadius, cX, cY, 3]);
lines.push([76, "combat", [74, 60]]);
nodes.push([77, "combat", count++, 62, 210, 3, smallRadius, cX, cY, 3]);
lines.push([77, "combat", [46]]);
nodes.push([78, "combat", count++, 77, 330, 1, smallRadius, cX, cY, 3]);
lines.push([78, "combat", [62, 77]]);
nodes.push([79, "combat", count++, 77, 450, 1, smallRadius, cX, cY, 3]);
lines.push([79, "combat", [62, 77]]);
nodes.push([80, "combat", count++, 64, 210, 3, smallRadius, cX, cY, 3]);
lines.push([80, "combat", [0]]);
nodes.push([81, "combat", count++, 80, 330, 1, smallRadius, cX, cY, 3]);
lines.push([81, "combat", [64, 80]]);
nodes.push([82, "combat", count++, 80, 450, 1, smallRadius, cX, cY, 3]);
lines.push([82, "combat", [64, 80]]);
nodes.push([83, "combat", count++, 0, 510, 1.5, smallRadius, cX, cY, 3]);
lines.push([83, "combat", [0]]);
nodes.push([84, "combat", count++, 83, 450, 1, smallRadius, cX, cY, 3]);
lines.push([84, "combat", [83]]);
nodes.push([85, "combat", count++, 83, 570, 1, smallRadius, cX, cY, 3]);
lines.push([85, "combat", [83]]);
nodes.push([86, "combat", count++, 83, 510, 3, smallRadius, cX, cY, 3]);
lines.push([86, "combat", [84, 85]]);
nodes.push([87, "combat", count++, 86, 510, 1, mediumRadius, cX, cY, 5]);
lines.push([87, "combat", [86]]);
nodes.push([88, "combat", count++, 87, 510, 1, smallRadius, cX, cY, 3]);
lines.push([88, "combat", [87]]);
nodes.push([89, "combat", count++, 88, 450, 1, smallRadius, cX, cY, 3]);
lines.push([89, "combat", [88]]);
nodes.push([90, "combat", count++, 88, 570, 1, smallRadius, cX, cY, 3]);
lines.push([90, "combat", [88]]);
nodes.push([91, "combat", count++, 88, 510, 3, smallRadius, cX, cY, 3]);
lines.push([91, "combat", [89, 90]]);
nodes.push([92, "combat", count++, 91, 510, 1, mediumRadius, cX, cY, 5]);
lines.push([92, "combat", [91]]);
nodes.push([93, "combat", count++, 92, 510, 1, smallRadius, cX, cY, 3]);
lines.push([93, "combat", [92]]);
nodes.push([94, "combat", count++, 93, 450, 1, smallRadius, cX, cY, 3]);
lines.push([94, "combat", [93]]);
nodes.push([95, "combat", count++, 93, 570, 1, smallRadius, cX, cY, 3]);
lines.push([95, "combat", [93]]);
nodes.push([96, "combat", count++, 93, 510, 3, smallRadius, cX, cY, 3]);
lines.push([96, "combat", [94, 95]]);
nodes.push([97, "combat", count++, 96, 445, 3, mediumRadius, cX, cY, 5]);
lines.push([97, "combat", [96]]);
nodes.push([98, "combat", count++, 96, 580, 3, mediumRadius, cX, cY, 5]);
lines.push([98, "combat", [96, 97]]);
nodes.push([99, "combat", count++, 96, 510, 3, mediumRadius, cX, cY, 5]);
lines.push([99, "combat", [98, 97]]);
nodes.push([100, "combat", count++, 97, 420, 2, smallRadius, cX, cY, 3]);
lines.push([100, "combat", [97]]);
nodes.push([101, "combat", count++, 98, 240, 2, smallRadius, cX, cY, 3]);
lines.push([101, "combat", [98]]);
nodes.push([102, "combat", count++, 92, 420, 5, smallRadius, cX, cY, 3]);
lines.push([102, "combat", [92]]);
nodes.push([103, "combat", count++, 92, 240, 5, smallRadius, cX, cY, 3]);
lines.push([103, "combat", [92]]);
nodes.push([104, "combat", count++, 87, 420, 4, smallRadius, cX, cY, 3]);
lines.push([104, "combat", [87]]);
nodes.push([105, "combat", count++, 87, 240, 4, smallRadius, cX, cY, 3]);
lines.push([105, "combat", [87]]);
nodes.push([106, "combat", count++, 100, 330, 3, smallRadius, cX, cY, 3]);
lines.push([106, "combat", [92]]);
nodes.push([107, "combat", count++, 106, 450, 1, smallRadius, cX, cY, 3]);
lines.push([107, "combat", [106, 100]]);
nodes.push([108, "combat", count++, 106, 570, 1, smallRadius, cX, cY, 3]);
lines.push([108, "combat", [106, 100]]);
nodes.push([109, "combat", count++, 102, 330, 3, smallRadius, cX, cY, 3]);
lines.push([109, "combat", [87]]);
nodes.push([110, "combat", count++, 109, 450, 1, smallRadius, cX, cY, 3]);
lines.push([110, "combat", [102, 109]]);
nodes.push([111, "combat", count++, 109, 570, 1, smallRadius, cX, cY, 3]);
lines.push([111, "combat", [102, 109]]);
nodes.push([112, "combat", count++, 104, 330, 3, smallRadius, cX, cY, 3]);
lines.push([112, "combat", [0]]);
nodes.push([113, "combat", count++, 112, 450, 1, smallRadius, cX, cY, 3]);
lines.push([113, "combat", [104, 112]]);
nodes.push([114, "combat", count++, 112, 570, 1, smallRadius, cX, cY, 3]);
lines.push([114, "combat", [104, 112]]);
nodes.push([115, "combat", count++, 101, 330, 3, smallRadius, cX, cY, 3]);
lines.push([115, "combat", [92]]);
nodes.push([116, "combat", count++, 115, 450, 1, smallRadius, cX, cY, 3]);
lines.push([116, "combat", [115, 101]]);
nodes.push([117, "combat", count++, 115, 570, 1, smallRadius, cX, cY, 3]);
lines.push([117, "combat", [115, 101]]);
nodes.push([118, "combat", count++, 103, 330, 3, smallRadius, cX, cY, 3]);
lines.push([118, "combat", [87]]);
nodes.push([119, "combat", count++, 118, 450, 1, smallRadius, cX, cY, 3]);
lines.push([119, "combat", [103, 118]]);
nodes.push([120, "combat", count++, 118, 570, 1, smallRadius, cX, cY, 3]);
lines.push([120, "combat", [103, 118]]);
nodes.push([121, "combat", count++, 105, 330, 3, smallRadius, cX, cY, 3]);
lines.push([121, "combat", [0]]);
nodes.push([122, "combat", count++, 121, 450, 1, smallRadius, cX, cY, 3]);
lines.push([122, "combat", [105, 121]]);
nodes.push([123, "combat", count++, 121, 570, 1, smallRadius, cX, cY, 3]);
lines.push([123, "combat", [105, 121]]);

nodes.push([0, "resource", count++, 0, 0, 1, centerRadius, cX, cY * .6, 0]);
lines.push([0, "resource", []]);

nodes.push([40, "resource", count++, 0, 285, 9, smallRadius, cX, cY, 3]);
lines.push([40, "resource", [33]]);

nodes.push([41, "resource", count++, 0, 300, 9, smallRadius, cX, cY, 3]);
lines.push([41, "resource", [40]]);

nodes.push([42, "resource", count++, 0, 315, 9, smallRadius, cX, cY, 3]);
lines.push([42, "resource", [41, 27]]);

nodes.push([28, "resource", count++, 0, 270, 1, smallRadius, cX, cY, 3]);
lines.push([28, "resource", [0]]);

nodes.push([29, "resource", count++, 28, 270, 1, smallRadius, cX, cY, 3]);
lines.push([29, "resource", [28]]);

nodes.push([36, "resource", count++, 29, 0, 1, smallRadius, cX, cY, 3]);
lines.push([36, "resource", [28]]);

nodes.push([34, "resource", count++, 29, 180, 1, smallRadius, cX, cY, 3]);
lines.push([34, "resource", [28]]);

nodes.push([30, "resource", count++, 29, 270, 1, smallRadius, cX, cY, 3]);
lines.push([30, "resource", [29]]);

nodes.push([35, "resource", count++, 30, 180, 1, smallRadius, cX, cY, 3]);
lines.push([35, "resource", [34, 31]]);

nodes.push([37, "resource", count++, 30, 0, 1, smallRadius, cX, cY, 3]);
lines.push([37, "resource", [31, 36]]);

nodes.push([31, "resource", count++, 30, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([31, "resource", [30]]);

nodes.push([32, "resource", count++, 31, 270, 1, smallRadius, cX, cY, 3]);
lines.push([32, "resource", [31]]);

nodes.push([38, "resource", count++, 32, 180, 1, smallRadius, cX, cY, 3]);
lines.push([38, "resource", [31, 33]]);

nodes.push([39, "resource", count++, 32, 0, 1, smallRadius, cX, cY, 3]);
lines.push([39, "resource", [31, 33]]);

nodes.push([33, "resource", count++, 0, 270, 9, mediumRadius, cX, cY, 5]);
lines.push([33, "resource", [32]]);

nodes.push([27, "resource", count++, 0, 330, 9, mediumRadius, cX, cY, 5]);
lines.push([27, "resource", [26]]);

nodes.push([26, "resource", count++, 0, 345, 9, smallRadius, cX, cY, 3]);
lines.push([26, "resource", [25]]);

nodes.push([25, "resource", count++, 0, 0, 9, smallRadius, cX, cY, 3]);
lines.push([25, "resource", [24]]);

nodes.push([24, "resource", count++, 0, 15, 9, smallRadius, cX, cY, 3]);
lines.push([24, "resource", [12]]);

nodes.push([20, "resource", count++, 0, 45, 9, smallRadius, cX, cY, 3]);
lines.push([20, "resource", [12]]);

nodes.push([21, "resource", count++, 0, 60, 9, smallRadius, cX, cY, 3]);
lines.push([21, "resource", [20]]);

nodes.push([22, "resource", count++, 0, 75, 9, smallRadius, cX, cY, 3]);
lines.push([22, "resource", [21]]);

nodes.push([23, "resource", count++, 0, 90, 9, mediumRadius, cX, cY, 5]);
lines.push([23, "resource", [22]]);

nodes.push([43, "resource", count++, 0, 105, 9, smallRadius, cX, cY, 3]);
lines.push([43, "resource", [23]]);

nodes.push([44, "resource", count++, 0, 120, 9, smallRadius, cX, cY, 3]);
lines.push([44, "resource", [43]]);

nodes.push([45, "resource", count++, 0, 135, 9, smallRadius, cX, cY, 3]);
lines.push([45, "resource", [44]]);

nodes.push([46, "resource", count++, 0, 150, 9, mediumRadius, cX, cY, 5]);
lines.push([46, "resource", [45]]);

nodes.push([47, "resource", count++, 0, 165, 9, smallRadius, cX, cY, 3]);
lines.push([47, "resource", [46]]);

nodes.push([48, "resource", count++, 0, 180, 9, smallRadius, cX, cY, 3]);
lines.push([48, "resource", [47]]);

nodes.push([49, "resource", count++, 0, 195, 9, smallRadius, cX, cY, 3]);
lines.push([49, "resource", [48]]);

nodes.push([50, "resource", count++, 0, 210, 9, mediumRadius, cX, cY, 5]);
lines.push([50, "resource", [49]]);

nodes.push([58, "resource", count++, 0, 150, 1, smallRadius, cX, cY, 3]);
lines.push([58, "resource", [0, 57, 59, 60]]);

nodes.push([57, "resource", count++, 58, 150, 1, smallRadius, cX, cY, 3]);
lines.push([57, "resource", [56]]);

nodes.push([60, "resource", count++, 57, 240, 1, smallRadius, cX, cY, 3]);
lines.push([60, "resource", [58]]);

nodes.push([59, "resource", count++, 57, 60, 1, smallRadius, cX, cY, 3]);
lines.push([59, "resource", [58]]);

nodes.push([56, "resource", count++, 57, 150, 1, smallRadius, cX, cY, 3]);
lines.push([56, "resource", [55]]);

nodes.push([61, "resource", count++, 56, 60, 1, smallRadius, cX, cY, 3]);
lines.push([61, "resource", [55, 59]]);

nodes.push([62, "resource", count++, 56, 240, 1, smallRadius, cX, cY, 3]);
lines.push([62, "resource", [55, 60]]);

nodes.push([55, "resource", count++, 56, 150, 1, mediumRadius, cX, cY, 5]);
lines.push([55, "resource", [54]]);

nodes.push([54, "resource", count++, 55, 150, 1, smallRadius, cX, cY, 3]);
lines.push([54, "resource", [55, 46]]);

nodes.push([63, "resource", count++, 54, 60, 1, smallRadius, cX, cY, 3]);
lines.push([63, "resource", [55, 46]]);

nodes.push([64, "resource", count++, 54, 240, 1, smallRadius, cX, cY, 3]);
lines.push([64, "resource", [55, 46]]);

nodes.push([51, "resource", count++, 0, 225, 9, smallRadius, cX, cY, 3]);
lines.push([51, "resource", [50]]);

nodes.push([52, "resource", count++, 0, 240, 9, smallRadius, cX, cY, 3]);
lines.push([52, "resource", [51]]);

nodes.push([53, "resource", count++, 0, 255, 9, smallRadius, cX, cY, 3]);
lines.push([53, "resource", [52, 33]]);

nodes.push([1, "resource", count++, 0, 30, 1, smallRadius, cX, cY, 3]);
lines.push([1, "resource", [0]]);

nodes.push([4, "resource", count++, 1, 30, 1, smallRadius, cX, cY, 3]);
lines.push([4, "resource", [1]]);

nodes.push([5, "resource", count++, 4, 30, 1, smallRadius, cX, cY, 3]);
lines.push([5, "resource", [4]]);

nodes.push([6, "resource", count++, 5, 30, 1, mediumRadius, cX, cY, 5]);
lines.push([6, "resource", [3, 5, 8]]);

nodes.push([10, "resource", count++, 6, 30, 1, smallRadius, cX, cY, 3]);
lines.push([10, "resource", [6]]);

nodes.push([12, "resource", count++, 0, 30, 9, mediumRadius, cX, cY, 5]);
lines.push([12, "resource", [9, 10, 11]]);

nodes.push([17, "resource", count++, 12, 75, 1, smallRadius, cX, cY, 3]);
lines.push([17, "resource", [12]]);

nodes.push([18, "resource", count++, 17, 45, 1.2, smallRadius, cX, cY, 3]);
lines.push([18, "resource", [17]]);

nodes.push([7, "resource", count++, 4, 120, 1, smallRadius, cX, cY, 3]);
lines.push([7, "resource", [1]]);

nodes.push([8, "resource", count++, 5, 120, 1, smallRadius, cX, cY, 3]);
lines.push([8, "resource", [7]]);

nodes.push([2, "resource", count++, 4, 300, 1, smallRadius, cX, cY, 3]);
lines.push([2, "resource", [1]]);

nodes.push([3, "resource", count++, 5, 300, 1, smallRadius, cX, cY, 3]);
lines.push([3, "resource", [2]]);

nodes.push([9, "resource", count++, 10, 300, 1, smallRadius, cX, cY, 3]);
lines.push([9, "resource", [6]]);

nodes.push([11, "resource", count++, 10, 120, 1, smallRadius, cX, cY, 3]);
lines.push([11, "resource", [6]]);

nodes.push([13, "resource", count++, 12, 345, 1, smallRadius, cX, cY, 3]);
lines.push([13, "resource", [12]]);

nodes.push([14, "resource", count++, 13, 15, 1.2, smallRadius, cX, cY, 3]);
lines.push([14, "resource", [13]]);

nodes.push([15, "resource", count++, 14, 60, 1, smallRadius, cX, cY, 3]);
lines.push([15, "resource", [14]]);

nodes.push([19, "resource", count++, 18, 15, 1, smallRadius, cX, cY, 3]);
lines.push([19, "resource", [18]]);

nodes.push([16, "resource", count++, 19, 345, 1, mediumRadius, cX, cY, 4]);
lines.push([16, "resource", [19, 15, 12]]);


nodes.push([0, "construction", count++, 0, 0, 1, centerRadius, cX, cY, 0]);
lines.push([0, "construction", []]);

nodes.push([1, "construction", count++, 0, 270, 1, smallRadius, cX, cY, 3]);
lines.push([1, "construction", [0]]);

nodes.push([2, "construction", count++, 1, 270, 1, smallRadius, cX, cY, 3]);
lines.push([2, "construction", [1]]);

nodes.push([3, "construction", count++, 2, 270, 1, smallRadius, cX, cY, 3]);
lines.push([3, "construction", [2]]);

nodes.push([4, "construction", count++, 3, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([4, "construction", [3]]);

nodes.push([5, "construction", count++, 4, 270, 1, smallRadius, cX, cY, 3]);
lines.push([5, "construction", [4]]);

nodes.push([6, "construction", count++, 5, 270, 1, smallRadius, cX, cY, 3]);
lines.push([6, "construction", [5]]);

nodes.push([7, "construction", count++, 6, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([7, "construction", [6]]);

nodes.push([8, "construction", count++, 7, 270, 1, smallRadius, cX, cY, 3]);
lines.push([8, "construction", [7]]);

nodes.push([9, "construction", count++, 8, 270, 1, smallRadius, cX, cY, 3]);
lines.push([9, "construction", [8]]);

nodes.push([10, "construction", count++, 9, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([10, "construction", [9]]);

nodes.push([11, "construction", count++, 10, 270, 1, smallRadius, cX, cY, 3]);
lines.push([11, "construction", [10]]);

nodes.push([12, "construction", count++, 11, 270, 1, smallRadius, cX, cY, 3]);
lines.push([12, "construction", [11]]);

nodes.push([13, "construction", count++, 12, 270, 1, mediumRadius, cX, cY, 5]);
lines.push([13, "construction", [12]]);

nodes.push([14, "construction", count++, 5, 180, 1.5, smallRadius, cX, cY, 3]);
lines.push([14, "construction", [4]]);

nodes.push([15, "construction", count++, 6, 180, 1.5, smallRadius, cX, cY, 3]);
lines.push([15, "construction", [7, 14]]);

nodes.push([16, "construction", count++, 8, 180, 1.5, smallRadius, cX, cY, 3]);
lines.push([16, "construction", [7]]);

nodes.push([17, "construction", count++, 9, 180, 1.5, smallRadius, cX, cY, 3]);
lines.push([17, "construction", [10, 16]]);

nodes.push([18, "construction", count++, 11, 180, 1.5, smallRadius, cX, cY, 3]);
lines.push([18, "construction", [10]]);

nodes.push([19, "construction", count++, 12, 180, 1.5, smallRadius, cX, cY, 3]);
lines.push([19, "construction", [18, 13]]);

nodes.push([20, "construction", count++, 5, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([20, "construction", [4]]);

nodes.push([21, "construction", count++, 6, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([21, "construction", [7, 20]]);

nodes.push([22, "construction", count++, 8, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([22, "construction", [7]]);

nodes.push([23, "construction", count++, 9, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([23, "construction", [10, 22]]);

nodes.push([24, "construction", count++, 11, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([24, "construction", [10]]);

nodes.push([25, "construction", count++, 12, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([25, "construction", [24, 13]]);

nodes.push([26, "construction", count++, 0, 0, 1.5, smallRadius, cX, cY, 3]);
lines.push([26, "construction", [0]]);

nodes.push([27, "construction", count++, 26, 315, 1.5, smallRadius, cX, cY, 3]);
lines.push([27, "construction", [26]]);

nodes.push([28, "construction", count++, 26, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([28, "construction", [26]]);

nodes.push([29, "construction", count++, 27, 0, 1, smallRadius, cX, cY, 3]);
lines.push([29, "construction", [27]]);

nodes.push([30, "construction", count++, 28, 0, 1, smallRadius, cX, cY, 3]);
lines.push([30, "construction", [28]]);

nodes.push([31, "construction", count++, 29, 45, 1.5, mediumRadius, cX, cY, 5]);
lines.push([31, "construction", [29, 30]]);

nodes.push([32, "construction", count++, 31, 315, 1.5, smallRadius, cX, cY, 3]);
lines.push([32, "construction", [31]]);

nodes.push([33, "construction", count++, 32, 0, 1, smallRadius, cX, cY, 3]);
lines.push([33, "construction", [32]]);

nodes.push([34, "construction", count++, 31, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([34, "construction", [31]]);

nodes.push([35, "construction", count++, 34, 0, 1, smallRadius, cX, cY, 3]);
lines.push([35, "construction", [34]]);

nodes.push([36, "construction", count++, 33, 45, 1.5, mediumRadius, cX, cY, 5]);
lines.push([36, "construction", [35, 33]]);

nodes.push([37, "construction", count++, 36, 315, 1.5, smallRadius, cX, cY, 3]);
lines.push([37, "construction", [36]]);

nodes.push([38, "construction", count++, 37, 0, 1, smallRadius, cX, cY, 3]);
lines.push([38, "construction", [37]]);

nodes.push([39, "construction", count++, 36, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([39, "construction", [36]]);

nodes.push([40, "construction", count++, 39, 0, 1, smallRadius, cX, cY, 3]);
lines.push([40, "construction", [39]]);

nodes.push([41, "construction", count++, 38, 45, 1.5, mediumRadius, cX, cY, 5]);
lines.push([41, "construction", [38, 40]]);

nodes.push([42, "construction", count++, 41, 315, 1.5, smallRadius, cX, cY, 3]);
lines.push([42, "construction", [41]]);

nodes.push([43, "construction", count++, 42, 0, 1, smallRadius, cX, cY, 3]);
lines.push([43, "construction", [42]]);

nodes.push([44, "construction", count++, 41, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([44, "construction", [41]]);

nodes.push([45, "construction", count++, 44, 0, 1, smallRadius, cX, cY, 3]);
lines.push([45, "construction", [44]]);

nodes.push([46, "construction", count++, 43, 45, 1.5, mediumRadius, cX, cY, 5]);
lines.push([46, "construction", [43, 45]]);

nodes.push([47, "construction", count++, 0, 90, 1, smallRadius, cX, cY, 3]);
lines.push([47, "construction", [0]]);

nodes.push([48, "construction", count++, 47, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([48, "construction", [47]]);

nodes.push([49, "construction", count++, 48, 90, 1, smallRadius, cX, cY, 3]);
lines.push([49, "construction", [48]]);

nodes.push([50, "construction", count++, 47, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([50, "construction", [47]]);

nodes.push([51, "construction", count++, 50, 90, 1, smallRadius, cX, cY, 3]);
lines.push([51, "construction", [50]]);

nodes.push([52, "construction", count++, 51, 135, 1.5, mediumRadius, cX, cY, 1]);
lines.push([52, "construction", [49, 51]]);

nodes.push([53, "construction", count++, 52, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([53, "construction", [52]]);

nodes.push([54, "construction", count++, 53, 90, 1, smallRadius, cX, cY, 3]);
lines.push([54, "construction", [53]]);

nodes.push([55, "construction", count++, 52, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([55, "construction", [52]]);

nodes.push([56, "construction", count++, 55, 90, 1, smallRadius, cX, cY, 3]);
lines.push([56, "construction", [55]]);

nodes.push([57, "construction", count++, 56, 135, 1.5, mediumRadius, cX, cY, 1]);
lines.push([57, "construction", [54, 56]]);

nodes.push([58, "construction", count++, 57, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([58, "construction", [57]]);

nodes.push([59, "construction", count++, 58, 90, 1, smallRadius, cX, cY, 3]);
lines.push([59, "construction", [58]]);

nodes.push([60, "construction", count++, 57, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([60, "construction", [57]]);

nodes.push([61, "construction", count++, 60, 90, 1, smallRadius, cX, cY, 3]);
lines.push([61, "construction", [60]]);

nodes.push([62, "construction", count++, 61, 135, 1.5, mediumRadius, cX, cY, 1]);
lines.push([62, "construction", [59, 61]]);

nodes.push([63, "construction", count++, 62, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([63, "construction", [62]]);

nodes.push([64, "construction", count++, 63, 90, 1, smallRadius, cX, cY, 3]);
lines.push([64, "construction", [63]]);

nodes.push([65, "construction", count++, 62, 45, 1.5, smallRadius, cX, cY, 3]);
lines.push([65, "construction", [62]]);

nodes.push([66, "construction", count++, 65, 90, 1, smallRadius, cX, cY, 3]);
lines.push([66, "construction", [65]]);

nodes.push([67, "construction", count++, 66, 135, 1.5, mediumRadius, cX, cY, 5]);
lines.push([67, "construction", [64, 66]]);

nodes.push([68, "construction", count++, 0, 180, 1, smallRadius, cX, cY, 3]);
lines.push([68, "construction", [0]]);

nodes.push([69, "construction", count++, 68, 225, 1.5, smallRadius, cX, cY, 3]);
lines.push([69, "construction", [68]]);

nodes.push([70, "construction", count++, 69, 180, 1, smallRadius, cX, cY, 3]);
lines.push([70, "construction", [69]]);

nodes.push([71, "construction", count++, 68, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([71, "construction", [68]]);

nodes.push([72, "construction", count++, 71, 180, 1, smallRadius, cX, cY, 3]);
lines.push([72, "construction", [71]]);

nodes.push([73, "construction", count++, 72, 225, 1.5, mediumRadius, cX, cY, 1]);
lines.push([73, "construction", [70, 72]]);

nodes.push([74, "construction", count++, 73, 225, 1.5, smallRadius, cX, cY, 3]);
lines.push([74, "construction", [73]]);

nodes.push([75, "construction", count++, 74, 180, 1, smallRadius, cX, cY, 3]);
lines.push([75, "construction", [74]]);

nodes.push([76, "construction", count++, 73, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([76, "construction", [73]]);

nodes.push([77, "construction", count++, 76, 180, 1, smallRadius, cX, cY, 3]);
lines.push([77, "construction", [76]]);

nodes.push([78, "construction", count++, 77, 225, 1.5, mediumRadius, cX, cY, 1]);
lines.push([78, "construction", [75, 77]]);

nodes.push([79, "construction", count++, 78, 225, 1.5, smallRadius, cX, cY, 3]);
lines.push([79, "construction", [78]]);

nodes.push([80, "construction", count++, 79, 180, 1, smallRadius, cX, cY, 3]);
lines.push([80, "construction", [79]]);

nodes.push([81, "construction", count++, 78, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([81, "construction", [78]]);

nodes.push([82, "construction", count++, 81, 180, 1, smallRadius, cX, cY, 3]);
lines.push([82, "construction", [81]]);

nodes.push([83, "construction", count++, 82, 225, 1.5, mediumRadius, cX, cY, 1]);
lines.push([83, "construction", [80, 82]]);

nodes.push([84, "construction", count++, 83, 225, 1.5, smallRadius, cX, cY, 3]);
lines.push([84, "construction", [83]]);

nodes.push([85, "construction", count++, 84, 180, 1, smallRadius, cX, cY, 3]);
lines.push([85, "construction", [84]]);

nodes.push([86, "construction", count++, 83, 135, 1.5, smallRadius, cX, cY, 3]);
lines.push([86, "construction", [83]]);

nodes.push([87, "construction", count++, 86, 180, 1, smallRadius, cX, cY, 3]);
lines.push([87, "construction", [86]]);

nodes.push([88, "construction", count++, 87, 225, 1.5, mediumRadius, cX, cY, 1]);
lines.push([88, "construction", [85, 87]]);