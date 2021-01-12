// Prepare variables.
var cropList;
var tempList;

var svgWidth = 1080;
var svgHeight = 480;

var width = svgWidth - 64;
var height = (svgHeight - 56) / 2;
var barPadding = 4;
var barWidth = width / 40 - barPadding;
var miniBar = 8;
var barOffsetX = 56;
var barOffsetY = 40;

// Prepare web elements.
var svg = d3.select("div.graph")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight)
	.style("background-color", "#333333")
	.style("border-radius", "8px");

svg.append("g")
	.append("text")
		.attr("class", "axis")
		.attr("x", 48)
		.attr("y", 24)
 		.style("text-anchor", "end")
		.text("Profit");

var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", 10)
	.style("visibility", "hidden")
	.style("background", "rgb(0, 0, 0)")
	.style("background", "rgba(0, 0, 0, 0.75)")
	.style("padding", "8px")
	.style("border-radius", "8px")
	.style("border", "2px solid black");

var gAxis = svg.append("g");
var gProfit = svg.append("g");
var gSeedLoss = svg.append("g");
var gFertLoss = svg.append("g");
var gIcons = svg.append("g");
var gTooltips = svg.append("g");

var axisY;
var barsProfit;
var barsSeed;
var barsFert;
var imgIcons;
var barsTooltips;
var options;
options.produce = {};
var MAX_INT = Number.MAX_SAFE_INTEGER || Number.MAX_VALUE;

/*
 * Formats a specified number, adding separators for thousands.
 * @param num The number to format.
 * @return Formatted string.
 */
function formatNumber(num) {
    num = num.toFixed(2) + '';
    x = num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

/*
 * Sorts out the available crops for a season based on an input season
 */
function seasonSorter(season) {
	let seasonList = [];
	for (let i = 0; i < crops.length; i++) {
		if (crops[i].seasons.includes(season)) {
			seasonList.push(crops[i]);
		}
	}
	//console.log(seasonList);
	return seasonList;
}

/*
 * Determines if an input crop can be used in an input machine;
 */
 function artisanSorter(crop) {
	let produce = options.produce;
	let type = crop.produce.type;
	let special = crop.produce.typeSpec;
	let name = crop.name;
	let artisanList = [];
	let full = ["Raw", crop.produce.raw, "Raw crops"];
	let machineList = [];
	var tool;

	for (artisan in produce) {
		if (produce[artisan]) {
			artisanList.push(artisan);
		}
	}

	for (machine in artisanList) {
		switch(artisanList[machine]) {
			case "keg":
				tool = "Keg";
				machineList = [
					["Wheat", "Beer", 8, 0],
					["Coffee Bean", "Coffee", 2, 0],
					["Hops", "Pale Ale", 12, 0],
					["Cassava", "Cauim", 3.75, 0],
					["Durum", "Dark Ale", 16, 0],
					["Maguey", "Pulque", 1, 130],
					["Vegetable", "Juice", 2.25, 0],
					["Fruit", "Wine", 3, 0]
				]; break;
			case "jar":
				tool = "Jar";
				machineList = [
					["Vegetable", "Pickles", 2, 50],
					["Fruit", "Jelly", 2, 50]
				]; break;
			case "alembic":
				tool = "Alembic";
				machineList = [
					["Flower", "Essential Oil", 2, 0],
					["Vegetable", "Essential Oil", 2, 0],
					["Vegetable", "Essential Oil", 2, 0]
				]; break;
			case "butterchurn":
				tool = "Butter Churn";
				machineList = [
					["Peanut", "Peanut Butter", 1, 100],
					["Soybean", "Soynut Butter", 1, 95],
					["Sunflower", "Sunflower Butter", 1, 40]
				]; break;
			case "dehydrator":
				tool = "Dehydrator";
				machineList = [
					["Grape", "Raisins", 1, 70],
					["Fruit", "Dried Fruit", 2, 0]
				]; break;
			case "dryingrack":
				tool = "Drying Rack";
				machineList = [
					["Barley", "Malt", 6, 0],
					["Wheat", "Malt", 6, 0],
					["Corn", "Malt", 3, 0],
					["Herb", "Dried Herb", 1.75, 0],
					["Vegetable", "Dried Vegetable", 2, 0],
					["Mushroom", "Dried Mushroom", 1.75, 0]
				]; break;
			case "extruder":
				tool = "Extruder";
				machineList = [
					["Cassava", "Tapioca", 1, 95]
				]; break;
			case "foreigncask":
				tool = "Foreign Cask";
				machineList = [
					["Soybean", "Soy Sauce", 1, 20]
				]; break;
			case "oilmaker":
				tool = "Oil Maker";
				machineList = [
					["Peanut", "Peanut Oil", 1, 45]
				]; break;
			case "loom":
				tool = "Loom";
				machineList = [
					["Cotton", "Thread", 1, 60]
				]; break;
			case "grinder":
				tool = "Grinder";
				machineList = [
					["Beet", "Sugar", 1, -130],
					["Sugar Beet", "Sugar", 1, -50],
					["Sugar Cane", "Sugar", 1, -180],
					["Wasabi Root", "Wasabi Paste", 1, -85],
					["Corn", "Corn Flour", 3, 0],
					["Unmilled Rice", "Rice Flour", 5, 0],
					["Buckwheat", "Buckwheat Flour", 10, 0],
					["Herb", "Ground Herb", 1.5, 0],
					["Vegetable", "Ground Vegetable", 1.5, 0]
				]; break;
			case "vinegarcask":
				tool = "Vinegar Cask";
				machineList = [
					["Grape", "Vinegar", 1, 20],
					["Unmilled Rice", "Vinegar", 1, 70]
				]; break;
			case "infuser":
				tool = "Infuser";
				machineList = [
					["Mint", "Schnapps", 24, 0],
					["Fruit", "Schnapps", 2, 0]
				]; break;
			case "juicer":
				tool = "Juicer";
				machineList = [
					["Fruit", "Juice", 2, 0]
				]; break;
			case "pepperblender":
				tool = "Pepper Blender";
				machineList = [
					["Habenero", "Extract", 1, 530],
					["Jalapeno", "Extract", 12.5, 0]
				]; break;
			case "still":
				tool = "Still";
				machineList = [
					["Juniper Berry", "Gin", 1, 385],
					["Maguey", "Mezcal", 1, 30],
					["Corn", "Moonshine", 3, 0],
					["Sugar Cane", "Rum", 1, 70],
					["Sweet Potato", "Shochu", 1, 180],
					["Blue Agave", "Tequila", 1, 100],
					["Grape", "Vermouth", 5, 0],
					["Potato", "Vodka", 1, 220],
					["Raspberry", "Chambord", 1, 245],
					["Flower", "Bitter", 2, 0]
				]; break;
		}

		if (machineList) {
			let good = [];

			for (let i = 0; i < machineList.length; i++) {
				if (machineList[i][0] == name) {
					good.push(machineList[i][1]);
					good.push(Math.floor(crop.produce.raw * machineList[i][2]) + machineList[i][3]);
					break;
				} else if (machineList[i][0] == special) {
					good.push(machineList[i][1]);
					good.push(Math.floor(crop.produce.raw * machineList[i][2]) + machineList[i][3]);
					break;
				} else if (machineList[i][0] == type) {
					good.push(machineList[i][1]);
					good.push(Math.floor(crop.produce.raw * machineList[i][2]) + machineList[i][3]);
					break;
				}
			}

			if (good.length != 0) {
				good.push(tool);
				if (full[1] < good[1]) {
					full = good;
				}
			}
		}
	}

	return full;
 }

/*
 * Calculates the maximum number of harvests for a crop, specified days, season, etc.
 * @param cropID The ID of the crop to calculate. This corresponds to the crop number of the selected season.
 * @return Number of harvests for the specified crop.
 */
function harvests(cropID) {
	let crop;
	if (options.greenhouse) {
		crop = seasonSorter("Greenhouse")[cropID];
	} else {
		crop = seasonSorter(seasons[options.season].name)[cropID];
	}
	let fertilizer = fertilizers[options.fertilizer];

	// if the crop is cross season, add 28 extra days for each extra season
	let current = options.current;
	let harvest = options.harvest;
	let remainingDays = harvest - current + 1;
	//if (options.crossSeason && options.season < 2) {
	//	for (let i = options.season + 1; i < 3; i++) {
	//		let seasonList = seasonSorter(seasons[options.season].name);
	//		for (let j = 0; j < seasonList.length; j++) {
	//			let seasonCrop = seasonList[j];
	//			if (crop.name == seasonCrop.name) {
	//				remainingDays += 28;
	//				break;
	//			}
	//		}
	//	}
	//}

	// console.log("=== " + crop.name + " ===");

	let harvests = 0;
	let day = 1;

	if (options.skills.agri)
		day += Math.floor(crop.growth.initial * (fertilizer.growth - 0.1));
	else
		day += Math.floor(crop.growth.initial * fertilizer.growth);

	if (day <= remainingDays)
		harvests++;

	while (day <= remainingDays) {
		if (crop.growth.regrow > 0) {
			// console.log("Harvest on day: " + day);
			day += crop.growth.regrow;
		}
		else {
			// console.log("Harvest on day: " + day);
			day += Math.floor(crop.growth.initial * fertilizer.growth);
		}

		if (day <= remainingDays)
			harvests++;
	}

	// console.log("Harvests: " + harvests);
	return harvests;
}

/*
 * Calculates the minimum cost of a single packet of seeds.
 * @param crop The crop object, containing all the crop data.
 * @return The minimum cost of a packet of seeds, taking options into account.
 */
function minSeedCost(crop) {
	let minSeedCost = Infinity;

	if (crop.seeds.pierre != 0 && options.seeds.pierre && crop.seeds.pierre < minSeedCost)
		minSeedCost = crop.seeds.pierre;
	if (crop.seeds.special != 0 && options.seeds.special && crop.seeds.special < minSeedCost)
		minSeedCost = crop.seeds.special;
	
	return minSeedCost;
}

/*
 * Calculates the number of crops planted.
 * @param crop The crop object, containing all the crop data.
 * @return The number of crops planted, taking the desired number planted and the max seed money into account.
 */
function planted(crop) {
	let crops = 1;
	if (options.buySeed && options.maxSeedMoney !== 0) {
		return Math.min(options.maxPlants, Math.floor(options.maxSeedMoney / minSeedCost(crop)));
	} else {
		return crops;
	}
}

/*
 * Calculates the profit for a specified crop.
 * @param crop The crop object, containing all the crop data.
 * @return The total profit.
 */
function profit(crop) {
	let num_planted = planted(crop);
	let harvestsTotal = crop.harvests * num_planted;
	let profit = 0;
	let item = artisanSorter(crop);

	//Skip keg/jar calculations for ineligible crops (where crop.produce.jar or crop.produce.keg = 0)
	
	profit += valueHarvest(item, harvestsTotal, crop);
	
	//console.log("Calculating raw produce value for: " + crop.name);

	if (options.buySeed) {
		if (crop.name != "Coffee Bean") {
			profit += crop.seedLoss;
		}
		// console.log("Profit (After seeds): " + profit);
	}
	
	if (options.buyFert) {
		profit += crop.fertLoss;
		// console.log("Profit (After fertilizer): " + profit);
	}

	// console.log("Profit: " + profit);
	return profit;
}

/*
 * A function that calculates the value of each type of produce based on quality
 */
function valueHarvest(item, harvests, crop) {
	const fertilizer = fertilizers[options.fertilizer];
	const ratioN = ratios[fertilizer.ratio][options.level].ratioN;
	const ratioS = ratios[fertilizer.ratio][options.level].ratioS;
	const ratioG = ratios[fertilizer.ratio][options.level].ratioG;
	let produce = crop.produce;
	let normal = item[1];
	let silver = Math.floor(item[1] * 1.25);
	let gold = Math.floor(item[1] * 1.5);

	if (item[0] == "Raw" && options.skills.till) {
		bonus = 1.1;
	} else if (item[0] != "Raw" && options.skills.arti) {
		bonus = 1.4;
	} else {
		bonus = 1;
	}

	let value = 0;
	
	value += Math.floor(normal * bonus) * ratioN * harvests;
	value += Math.floor(silver * bonus) * ratioS * harvests;
	value += Math.floor(gold * bonus) * ratioG * harvests;

	if (produce.minimum > 1) {
		value += Math.floor(normal * bonus) * (produce.minimum - 1) * harvests;
	}
	if (produce.maximum > produce.minimum) {
		let possible = produce.maximum - produce.minimum;
		let extra = 0;
		let current = produce.extraPerc;
		for (let i = possible; i > 0; i--) {
			extra += current;
			current *= produce.extraPerc;
		}
		value += Math.floor(normal * bonus) * extra * harvests;
	}

	return value;
}

/*
 * Calculates the loss to profit when seeds are bought.
 * @param crop The crop object, containing all the crop data.
 * @return The total loss.
 */
function seedLoss(crop) {
	let harvests = crop.harvests;
	let noProcess = [
		"Coffee Bean",
		"Blackberry",
		"Coconut",
		"Crocus",
		"Crystal Fruit",
		"Fiddlehead Fern",
		"Salmonberry",
		"Sweet Pea",
		"Tea Leaves",
		"Wild Plum"
	]
	let loss;
	let result;

	if (options.buySeed) {
		if (crop.name == "Coffee Bean") {
			loss = 15;
		} else {
			loss = -minSeedCost(crop);
		}
		if (crop.growth.regrow == 0 && harvests > 0) loss = loss * harvests;
		result = loss * planted(crop);
	}

	return result
}

/*
 * Calculates the loss to profit when fertilizer is bought.
 *
 * Note that harvesting does not destroy fertilizer, so this is
 * independent of the number of harvests.
 *
 * @param crop The crop object, containing all the crop data.
 * @return The total loss.
 */
function fertLoss(crop) {
	let crops = 1;
	let loss;
	if(options.fertilizer == 4 && options.fertilizerSource == 1)
		loss = -fertilizers[options.fertilizer].alternate_cost;
	else
		loss = -fertilizers[options.fertilizer].cost;
	return loss * crops;
}

/*
 * Converts any value to the average per day value.
 * @param value The value to convert.
 * @return Value per day.
 */
function perDay(value) {
	let current = options.current;
	let harvest = options.harvest;
	let remaining = harvest - current + 1;
	return value / remaining;
}

/*
 * Performs filtering on a season's crop list, saving the new list to the cropList array.
 */
function fetchCrops() {
	tempList = [];
	let season;
	if (options.greenhouse) {
		season = "Greenhouse"
	} else {
		season = seasons[options.season].name;
	}
	let seasonList = seasonSorter(season);

	for (let i = 0; i < seasonList.length; i++) {
	    if ((options.seeds.pierre && seasonList[i].seeds.pierre != 0) ||
	    	(options.seeds.special && seasonList[i].seeds.special != 0)) {
	    	tempList.push(seasonList[i]);
	    	tempList[tempList.length - 1].id = i;
		}
	}
}

/*
 * Calculates all profits and losses for all crops in the cropList array.
 */
function valueCrops() {
	for (let i = 0; i < tempList.length; i++) {
		tempList[i].planted = planted(tempList[i]);
		tempList[i].harvests = harvests(tempList[i].id);
		tempList[i].seedLoss = seedLoss(tempList[i]);
		tempList[i].fertLoss = fertLoss(tempList[i]);
		tempList[i].profit = profit(tempList[i]);
		tempList[i].averageProfit = perDay(tempList[i].profit);
		tempList[i].averageSeedLoss = perDay(tempList[i].seedLoss);
		tempList[i].averageFertLoss = perDay(tempList[i].fertLoss);
		if (options.average) {
			tempList[i].drawProfit = tempList[i].averageProfit;
			tempList[i].drawSeedLoss = tempList[i].averageSeedLoss;
			tempList[i].drawFertLoss = tempList[i].averageFertLoss;
		}
		else {
			tempList[i].drawProfit = tempList[i].profit;
			tempList[i].drawSeedLoss = tempList[i].seedLoss;
			tempList[i].drawFertLoss = tempList[i].fertLoss;
		}
	}
}

/*
 * Sorts the cropList array, so that the most profitable crop is the first one.
 */
function sortCrops() {
	let swapped;
    do {
        swapped = false;
        for (let i = 0; i < tempList.length - 1; i++) {
            if (tempList[i].drawProfit < tempList[i + 1].drawProfit) {
                let temp = tempList[i];
                tempList[i] = tempList[i + 1];
				tempList[i + 1] = temp;
				cropList = tempList.slice(0,25);
				swapped = true;
            }
        }
    } while (swapped);


	// console.log("==== SORTED ====");
	for (let i = 0; i < tempList.length; i++) {
		// console.log(cropList[i].drawProfit.toFixed(2) + "  " + cropList[i].name);
	}
}

/*
 * Updates the X D3 scale.
 * @return The new scale.
 */
function updateScaleX() {
	return d3.scale.ordinal()
		.domain(d3.range(40))
		.rangeRoundBands([0, width]);
}

/*
 * Updates the Y D3 scale.
 * @return The new scale.
 */
function updateScaleY() {
	return d3.scale.linear()
		.domain([0, d3.max(cropList, function(d) {
			if (d.drawProfit >= 0) {
				return (~~((d.drawProfit + 99) / 100) * 100);
			}
			else {
				let profit = d.drawProfit;
				if (options.buySeed) {
					if (d.seedLoss < profit)
						profit = d.drawSeedLoss;
				}
				if (options.buyFert) {
					if (d.fertLoss < profit)
						profit = d.drawFertLoss;
				}
				return (~~((-profit + 99) / 100) * 100);
			}
		})])
		.range([height, 0]);
}

/*
 * Updates the axis D3 scale.
 * @return The new scale.
 */
function updateScaleAxis() {
	return d3.scale.linear()
		.domain([
			-d3.max(cropList, function(d) {
				if (d.drawProfit >= 0) {
					return (~~((d.drawProfit + 99) / 100) * 100);
				}
				else {
					let profit = d.drawProfit;
					if (options.buySeed) {
						if (d.seedLoss < profit)
							profit = d.drawSeedLoss;
					}
					if (options.buyFert) {
						if (d.fertLoss < profit)
							profit = d.drawFertLoss;
					}
					return (~~((-profit + 99) / 100) * 100);
				}
			}),
			d3.max(cropList, function(d) {
				if (d.drawProfit >= 0) {
					return (~~((d.drawProfit + 99) / 100) * 100);
				}
				else {
					let profit = d.drawProfit;
					if (options.buySeed) {
						if (d.seedLoss < profit)
							profit = d.drawSeedLoss;
					}
					if (options.buyFert) {
						if (d.fertLoss < profit)
							profit = d.drawFertLoss;
					}
					return (~~((-profit + 99) / 100) * 100);
				}
			})])
		.range([height*2, 0]);
}

/*
 * Renders the graph.
 * This is called only when opening for the first time or when changing seasons/seeds.
 */
function renderGraph() {

	let x = updateScaleX();
	let y = updateScaleY();
	let ax = updateScaleAxis();

	svg.attr("width", barOffsetX + barPadding * 2 + (barWidth + barPadding) * cropList.length);
	d3.select(".graph").attr("width", barOffsetX + barPadding * 2 + (barWidth + barPadding) * cropList.length);

	let yAxis = d3.svg.axis()
		.scale(ax)
		.orient("left")
		.tickFormat(d3.format(",s"))
		.ticks(16);

	axisY = gAxis.attr("class", "axis")
		.call(yAxis)
		.attr("transform", "translate(48, " + barOffsetY + ")");

	barsProfit = gProfit.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
			.attr("x", function(d, i) {
				if (d.drawProfit < 0 && options.buySeed && options.buyFert)
					return x(i) + barOffsetX + (barWidth / miniBar) * 2;
				else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
					return x(i) + barOffsetX + barWidth / miniBar;
				else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
					return x(i) + barOffsetX + barWidth / miniBar;
				else
					return x(i) + barOffsetX;
			})
			.attr("y", function(d) {
				if (d.drawProfit >= 0)
					return y(d.drawProfit) + barOffsetY;
				else
					return height + barOffsetY;
			})
			.attr("height", function(d) {
				if (d.drawProfit >= 0)
					return height - y(d.drawProfit);
				else
					return height - y(-d.drawProfit);
			})
			.attr("width", function(d) {
				if (d.drawProfit < 0 && options.buySeed && options.buyFert)
					return barWidth - (barWidth / miniBar) * 2;
				else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
					return barWidth - barWidth / miniBar;
				else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
					return barWidth - barWidth / miniBar;
				else
					return barWidth;
			})
 			.attr("fill", function (d) {
 				if (d.drawProfit >= 0)
 					return "lime";
 				else
 					return "red";
 			});

	barsSeed = gSeedLoss.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
			.attr("x", function(d, i) { return x(i) + barOffsetX; })
			.attr("y", height + barOffsetY)
			.attr("height", function(d) {
				if (options.buySeed)
					return height - y(-d.drawSeedLoss);
				else
					return 0;
			})
			.attr("width", barWidth / miniBar)
 			.attr("fill", "orange");

	barsFert = gFertLoss.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
			.attr("x", function(d, i) {
				if (options.buySeed)
					return x(i) + barOffsetX + barWidth / miniBar;
				else
					return x(i) + barOffsetX;
			})
			.attr("y", height + barOffsetY)
			.attr("height", function(d) {
				if (options.buyFert)
					return height - y(-d.drawFertLoss);
				else
					return 0;
			})
			.attr("width", barWidth / miniBar)
 			.attr("fill", "brown");

 	imgIcons = gIcons.selectAll("image")
		.data(cropList)
		.enter()
		.append("svg:image")
			.attr("x", function(d, i) { return x(i) + barOffsetX; })
			.attr("y", function(d) {
				if (d.drawProfit >= 0)
					return y(d.drawProfit) + barOffsetY - barWidth - barPadding;
				else
					return height + barOffsetY - barWidth - barPadding;
			})
		    .attr('width', barWidth)
		    .attr('height', barWidth)
		    .attr("xlink:href", function(d) { return "img/" + d.img; });

	barsTooltips = gTooltips.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
			.attr("x", function(d, i) { return x(i) + barOffsetX - barPadding/2; })
			.attr("y", function(d) {
				if (d.drawProfit >= 0)
					return y(d.drawProfit) + barOffsetY - barWidth - barPadding;
				else
					return height + barOffsetY - barWidth - barPadding;
			})
			.attr("height", function(d) {
				let topHeight = 0;

				if (d.drawProfit >= 0)
					topHeight = height + barWidth + barPadding - y(d.drawProfit);
				else
					topHeight = barWidth + barPadding;

				let lossArray = [0];

				if (options.buySeed)
					lossArray.push(d.drawSeedLoss);
				if (options.buyFert)
					lossArray.push(d.drawFertLoss);
				if (d.drawProfit < 0)
					lossArray.push(d.drawProfit);

				let swapped;
			    do {
			        swapped = false;
			        for (let i = 0; i < lossArray.length - 1; i++) {
			            if (lossArray[i] > lossArray[i + 1]) {
			                let temp = lossArray[i];
			                lossArray[i] = lossArray[i + 1];
			                lossArray[i + 1] = temp;
			                swapped = true;
			            }
			        }
			    } while (swapped);

			    return topHeight + (height - y(-lossArray[0]));
			})
			.attr("width", barWidth + barPadding)
 			.attr("opacity", "0")
 			.attr("cursor", "pointer")
			.on("mouseover", function(d) {
				tooltip.selectAll("*").remove();
				tooltip.style("visibility", "visible");

				tooltip.append("h3").attr("class", "tooltipTitle").text(d.name);

				let tooltipTable = tooltip.append("table")
					.attr("class", "tooltipTable")
					.attr("cellspacing", 0);
				let tooltipTr;


				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Total profit:");
				if (d.profit > 0)
					tooltipTr.append("td").attr("class", "tooltipTdRightPos").text("+" + formatNumber(d.profit))
						.append("div").attr("class", "gold");
				else
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.profit))
						.append("div").attr("class", "gold");

				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Profit per day:");
				if (d.averageProfit > 0)
					tooltipTr.append("td").attr("class", "tooltipTdRightPos").text("+" + formatNumber(d.averageProfit))
						.append("div").attr("class", "gold");
				else
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.averageProfit))
						.append("div").attr("class", "gold");

				if (options.buySeed) {
					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeftSpace").text("Total seed loss:");
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.seedLoss))
						.append("div").attr("class", "gold");

					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Seed loss per day:");
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.averageSeedLoss))
						.append("div").attr("class", "gold");
				}

				if (options.buyFert) {
					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeftSpace").text("Total fertilizer loss:");
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.fertLoss))
						.append("div").attr("class", "gold");

					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Fertilizer loss per day:");
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.averageFertLoss))
						.append("div").attr("class", "gold");
				}

				let artisan = artisanSorter(d);
				let current = options.current;
				let harvest = options.harvest;
				let remaining = harvest - current;

				//Ineligible crops are sold raw.
				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeftSpace").text("Produce sold:");
				if (!artisan) {
					tooltipTr.append("td").attr("class", "tooltipTdRight").text("Raw crops");
				} else {
					tooltipTr.append("td").attr("class", "tooltipTdRight").text(artisan[0] + " (" + artisan[2] + ")");
				}

				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Duration:");
				tooltipTr.append("td").attr("class", "tooltipTdRight").text(remaining + " days");
				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Planted:");
				tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.planted);
				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Harvests:");
				tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.harvests);

				if (options.extra) {

					tooltip.append("h3").attr("class", "tooltipTitleExtra").text("Crop info");
					tooltipTable = tooltip.append("table")
						.attr("class", "tooltipTable")
						.attr("cellspacing", 0);

					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Value (Raw):");
					tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.produce.raw)
						.append("div").attr("class", "gold");
					tooltipTr = tooltipTable.append("tr");
/*					if (jar != false) {
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Value (" + jar[0] + "):");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(jar[1])
						.append("div").attr("class", "gold");
					}
					else {
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Value (Jar):");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text("None");
					}
					tooltipTr = tooltipTable.append("tr");
					if (keg != false) {
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Value (" + keg[0] + "):");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(keg[1])
						.append("div").attr("class", "gold");
					}
					else {
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Value (Keg):");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text("None");
					} */


					let first = true;
					if (d.seeds.pierre > 0) {
						tooltipTr = tooltipTable.append("tr");
						tooltipTr.append("td").attr("class", "tooltipTdLeftSpace").text("Seeds (Pierre):");
						first = false;
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.seeds.pierre)
						.append("div").attr("class", "gold");
					}
					if (d.seeds.special > 0) {
						tooltipTr = tooltipTable.append("tr");
						if (first) {
							tooltipTr.append("td").attr("class", "tooltipTdLeftSpace").text("Seeds (Special):");
							first = false;
						}
						else
							tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Seeds (Special):");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.seeds.special)
						.append("div").attr("class", "gold");
						tooltipTr = tooltipTable.append("tr");
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.seeds.specialLoc);
					}

					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeftSpace").text("Time to grow:");
					tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.growth.initial + " days");
					tooltipTr = tooltipTable.append("tr");
					tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Time to regrow:");
					if (d.growth.regrow > 0)
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.growth.regrow + " days");
					else
						tooltipTr.append("td").attr("class", "tooltipTdRight").text("N/A");
					if (d.produce.extra > 0) {
						tooltipTr = tooltipTable.append("tr");
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Extra produce:");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text(d.produce.extra);
						tooltipTr = tooltipTable.append("tr");
						tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Extra chance:");
						tooltipTr.append("td").attr("class", "tooltipTdRight").text((d.produce.extraPerc * 100) + "%");
					}



				}
			})
			.on("mousemove", function() {
				tooltip.style("top", (d3.event.pageY - 16) + "px").style("left",(d3.event.pageX + 20) + "px");
			})
			.on("mouseout", function() { tooltip.style("visibility", "hidden"); })
			.on("click", function(d) { window.open(d.url, "_blank"); });


}

/*
 * Updates the already rendered graph, showing animations.
 */
function updateGraph() {
	let x = updateScaleX();
	let y = updateScaleY();
	let ax = updateScaleAxis();

	let yAxis = d3.svg.axis()
		.scale(ax)
		.orient("left")
		.tickFormat(d3.format(",s"))
		.ticks(16);

	axisY.transition()
		.call(yAxis);

	barsProfit.data(cropList)
		.transition()
			.attr("x", function(d, i) {
				if (d.drawProfit < 0 && options.buySeed && options.buyFert)
					return x(i) + barOffsetX + (barWidth / miniBar) * 2;
				else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
					return x(i) + barOffsetX + barWidth / miniBar;
				else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
					return x(i) + barOffsetX + barWidth / miniBar;
				else
					return x(i) + barOffsetX;
			})
			.attr("y", function(d) {
				if (d.drawProfit >= 0)
					return y(d.drawProfit) + barOffsetY;
				else
					return height + barOffsetY;
			})
			.attr("height", function(d) {
				if (d.drawProfit >= 0)
					return height - y(d.drawProfit);
				else
					return height - y(-d.drawProfit);
			})
			.attr("width", function(d) {
				if (d.drawProfit < 0 && options.buySeed && options.buyFert)
					return barWidth - (barWidth / miniBar) * 2;
				else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
					return barWidth - barWidth / miniBar;
				else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
					return barWidth - barWidth / miniBar;
				else
					return barWidth;
			})
 			.attr("fill", function (d) {
 				if (d.drawProfit >= 0)
 					return "lime";
 				else
 					return "red";
 			});

	barsSeed.data(cropList)
		.transition()
			.attr("x", function(d, i) { return x(i) + barOffsetX; })
			.attr("y", height + barOffsetY)
			.attr("height", function(d) {
				if (options.buySeed)
					return height - y(-d.drawSeedLoss);
				else
					return 0;
			})
			.attr("width", barWidth / miniBar)
 			.attr("fill", "orange");

	barsFert.data(cropList)
		.transition()
			.attr("x", function(d, i) {
				if (options.buySeed)
					return x(i) + barOffsetX + barWidth / miniBar;
				else
					return x(i) + barOffsetX;
			})
			.attr("y", height + barOffsetY)
			.attr("height", function(d) {
				if (options.buyFert)
					return height - y(-d.drawFertLoss);
				else
					return 0;
			})
			.attr("width", barWidth / miniBar)
 			.attr("fill", "brown");

 	imgIcons.data(cropList)
		.transition()
			.attr("x", function(d, i) { return x(i) + barOffsetX; })
			.attr("y", function(d) {
				if (d.drawProfit >= 0)
					return y(d.drawProfit) + barOffsetY - barWidth - barPadding;
				else
					return height + barOffsetY - barWidth - barPadding;
			})
		    .attr('width', barWidth)
		    .attr('height', barWidth)
		    .attr("xlink:href", function(d) { return "img/" + d.img; });

	barsTooltips.data(cropList)
		.transition()
			.attr("x", function(d, i) { return x(i) + barOffsetX - barPadding/2; })
			.attr("y", function(d) {
				if (d.drawProfit >= 0)
					return y(d.drawProfit) + barOffsetY - barWidth - barPadding;
				else
					return height + barOffsetY - barWidth - barPadding;
			})
			.attr("height", function(d) {
				let topHeight = 0;

				if (d.drawProfit >= 0)
					topHeight = height + barWidth + barPadding - y(d.drawProfit);
				else
					topHeight = barWidth + barPadding;

				let lossArray = [0];

				if (options.buySeed)
					lossArray.push(d.drawSeedLoss);
				if (options.buyFert)
					lossArray.push(d.drawFertLoss);
				if (d.drawProfit < 0)
					lossArray.push(d.drawProfit);

				let swapped;
			    do {
			        swapped = false;
			        for (let i = 0; i < lossArray.length - 1; i++) {
			            if (lossArray[i] > lossArray[i + 1]) {
			                let temp = lossArray[i];
			                lossArray[i] = lossArray[i + 1];
			                lossArray[i + 1] = temp;
			                swapped = true;
			            }
			        }
			    } while (swapped);

			    return topHeight + (height - y(-lossArray[0]));
			})
			.attr("width", barWidth + barPadding);
}

/*
 * Updates all options and data, based on the options set in the HTML.
 * After that, filters, values and sorts all the crops again.
 */
function updateData() {

	options.greenhouse = document.getElementById('greenhouse').checked;
	options.season = parseInt(document.getElementById('select_season').value);

	const isGreenhouse = options.greenhouse === true;

	if (document.getElementById('current_day').value <= 0)
		document.getElementById('current_day').value = 1;
	if (document.getElementById('current_day').value > 28)
		document.getElementById('current_day').value = 28;
	if (document.getElementById('harvest_day').value <= 0)
		document.getElementById('harvest_day').value = 1;
	if (document.getElementById('harvest_day').value > 28)
		document.getElementById('harvest_day').value = 28;

	options.current = document.getElementById('current_day').value;
	options.harvest = document.getElementById('harvest_day').value;
	options.maxPlants = document.getElementById('max_planted').value;

	if (!isGreenhouse) {
		//document.getElementById('current_day_row').style.display = 'table-row';
		//document.getElementById('harvest_day_row').style.display = 'none';
		document.getElementById('season_row').style.display = 'table-row';
		//document.getElementById('cross_season_row').style.display = 'table-row';
	} else {
		//document.getElementById('current_day_row').style.display = 'none';
		document.getElementById('season_row').style.display = 'none';
		//document.getElementById('harvest_day_row').style.display = 'table-row';
		//document.getElementById('cross_season_row').style.display = 'none';
	}

	options.produce.jar = document.getElementById('machine_jar').checked;
	options.produce.keg = document.getElementById('machine_keg').checked;
	options.produce.alembic = document.getElementById('machine_alembic').checked;
	options.produce.butterchurn = document.getElementById('machine_churn').checked;
	options.produce.dehydrator = document.getElementById('machine_dehydrator').checked;
	options.produce.dryingrack = document.getElementById('machine_rack').checked;
	options.produce.extruder = document.getElementById('machine_extruder').checked;
	options.produce.foreigncask = document.getElementById('machine_foreign').checked;
	options.produce.oilmaker = document.getElementById('machine_oil').checked;
	options.produce.loom = document.getElementById('machine_loom').checked;
	options.produce.grinder = document.getElementById('machine_grinder').checked;
	options.produce.vinegarcask = document.getElementById('machine_vinegar').checked;
	options.produce.infuser = document.getElementById('machine_infuser').checked;
	options.produce.juicer = document.getElementById('machine_juicer').checked;
	options.produce.pepperblender = document.getElementById('machine_blender').checked;
	options.produce.still = document.getElementById('machine_still').checked;

	//if (document.getElementById('number_planted').value <= 0)
		//document.getElementById('number_planted').value = 1;
	//options.planted = document.getElementById('number_planted').value;

	if (document.getElementById('max_seed_money').value < 0)
		document.getElementById('max_seed_money').value = '0';
	options.maxSeedMoney = parseInt(document.getElementById('max_seed_money').value);
	if (isNaN(options.maxSeedMoney)) {
		options.maxSeedMoney = 0;
	}

	options.average = document.getElementById('check_average').checked;

	//options.crossSeason = document.getElementById('cross_season').checked;

	options.seeds.pierre = document.getElementById('check_seedsPierre').checked;
	options.seeds.special = document.getElementById('check_seedsSpecial').checked;

	options.buySeed = document.getElementById('check_buySeed').checked;

	options.fertilizer = parseInt(document.getElementById('select_fertilizer').value);

	options.buyFert = document.getElementById('check_buyFert').checked;
	
	options.fertilizerSource = parseInt(document.getElementById('speed_gro_source').value);

	if (document.getElementById('number_level').value < 0)
		document.getElementById('number_level').value = 0;
	if (document.getElementById('number_level').value > 10)
		document.getElementById('number_level').value = 10;
	options.level = document.getElementById('number_level').value;

	if (options.level >= 5) {
		document.getElementById('check_skillsTill').disabled = false;
		document.getElementById('check_skillsTill').style.cursor = "pointer";
		options.skills.till = document.getElementById('check_skillsTill').checked;
	}
	else {
		document.getElementById('check_skillsTill').disabled = true;
		document.getElementById('check_skillsTill').style.cursor = "default";
		document.getElementById('check_skillsTill').checked = false;
	}

	if (options.level == 10 && options.skills.till) {
		document.getElementById('select_skills').disabled = false;
		document.getElementById('select_skills').style.cursor = "pointer";
	}
	else {
		document.getElementById('select_skills').disabled = true;
		document.getElementById('select_skills').style.cursor = "default";
		document.getElementById('select_skills').value = 0;
	}
	if (document.getElementById('select_skills').value == 1) {
		options.skills.agri = true;
		options.skills.arti = false;
	}
	else if (document.getElementById('select_skills').value == 2) {
		options.skills.agri = false;
		options.skills.arti = true;
	}
	else {
		options.skills.agri = false;
		options.skills.arti = false;
	}
	if (options.buyFert && options.fertilizer == 4)
		document.getElementById('speed_gro_source').disabled = false;
	else
		document.getElementById('speed_gro_source').disabled = true;

	options.extra = document.getElementById('check_extra').checked;

	// Persist the options object into the URL hash.
	window.location.hash = encodeURIComponent(serialize(options));

	fetchCrops();
	valueCrops();
	sortCrops();
}

/*
 * Called once on startup to draw the UI.
 */
function initial() {
	optionsLoad();
	updateData();
	renderGraph();
}

/*
 * Called on every option change to animate the graph.
 */
function refresh() {
	updateData();
	updateGraph();
}

/*
 * Parse out and validate the options from the URL hash.
 */
function optionsLoad() {
	if (!window.location.hash) return;

	options = deserialize(window.location.hash.slice(1));

	function validBoolean(q) {

		return q == 1;
	}

	function validIntRange(min, max, num) {

		return num < min ? min : num > max ? max : parseInt(num, 10);
	}

	options.greenhouse = validBoolean(options.greenhouse);
	document.getElementById('greenhouse').checked = options.greenhouse;

	options.season = validIntRange(0, 3, options.season);
	document.getElementById('select_season').value = options.season;

	options.maxPlants = validIntRange(1, MAX_INT, options.maxPlants);
	document.getElementById('max_planted').value = options.maxPlants;

  // ensure the number is between 1 - 28 inclusive; MAX_INT for greenhouse
	const daysMax = 28;
	options.harvest = validIntRange(1, daysMax, options.harvest);
	document.getElementById('harvest_day').value = options.harvest;

	options.current = validIntRange(1, daysMax, options.current);
	document.getElementById('current_day').value = options.current;

	options.produce.jar = validBoolean(options.produce.jar);
	document.getElementById('machine_jar').checked = options.produce.jar;

	options.produce.keg = validBoolean(options.produce.keg);
	document.getElementById('machine_keg').checked = options.produce.keg;

	options.produce.alembic = validBoolean(options.produce.alembic);
	document.getElementById('machine_alembic').checked = options.produce.alembic;

	options.produce.butterchurn = validBoolean(options.produce.butterchurn);
	document.getElementById('machine_churn').checked = options.produce.butterchurn;

	options.produce.dehydrator = validBoolean(options.produce.dehydrator);
	document.getElementById('machine_dehydrator').checked = options.produce.dehydrator;

	options.produce.dryingrack = validBoolean(options.produce.dryingrack);
	document.getElementById('machine_rack').checked = options.produce.dryingrack;

	options.produce.extruder = validBoolean(options.produce.extruder);
	document.getElementById('machine_extruder').checked = options.produce.extruder;

	options.produce.foreigncask = validBoolean(options.produce.foreigncask);
	document.getElementById('machine_foreign').checked = options.produce.foreigncask;

	options.produce.oilmaker = validBoolean(options.produce.oilmaker);
	document.getElementById('machine_oil').checked = options.produce.oilmaker;

	options.produce.loom = validBoolean(options.produce.loom);
	document.getElementById('machine_loom').checked = options.produce.loom;

	options.produce.grinder = validBoolean(options.produce.grinder);
	document.getElementById('machine_grinder').checked = options.produce.grinder;

	options.produce.vinegarcask = validBoolean(options.produce.vinegarcask);
	document.getElementById('machine_vinegar').checked = options.produce.vinegarcask;

	options.produce.infuser = validBoolean(options.produce.infuser);
	document.getElementById('machine_infuser').checked = options.produce.infuser;

	options.produce.juicer = validBoolean(options.produce.juicer);
	document.getElementById('machine_juicer').checked = options.produce.juicer;

	options.produce.pepperblender = validBoolean(options.produce.pepperblender);
	document.getElementById('machine_blender').checked = options.produce.pepperblender;

	options.produce.still = validBoolean(options.produce.still);
	document.getElementById('machine_still').checked = options.produce.still;

	//options.planted = validIntRange(1, MAX_INT, options.planted);
	//document.getElementById('number_planted').value = options.planted;

    options.maxSeedMoney = validIntRange(0, MAX_INT, options.maxSeedMoney);
    document.getElementById('max_seed_money').value = options.maxSeedMoney;

	options.average = validBoolean(options.average);
	document.getElementById('check_average').checked = options.average;

	//options.crossSeason = validBoolean(options.crossSeason);
	//document.getElementById('cross_season').checked = options.crossSeason;

	options.seeds.pierre = validBoolean(options.seeds.pierre);
	document.getElementById('check_seedsPierre').checked = options.seeds.pierre;

	options.seeds.special = validBoolean(options.seeds.special);
	document.getElementById('check_seedsSpecial').checked = options.seeds.special;

	options.buySeed = validBoolean(options.buySeed);
	document.getElementById('check_buySeed').checked = options.buySeed;

	options.fertilizer = validIntRange(0, 6, options.fertilizer);
	document.getElementById('select_fertilizer').value = options.fertilizer;

    options.fertilizerSource = validIntRange(0, 1, options.fertilizerSource);
    document.getElementById('speed_gro_source').value = options.fertilizerSource;

	options.buyFert = validBoolean(options.buyFert);
	document.getElementById('check_buyFert').checked = options.buyFert;

	options.level = validIntRange(0, MAX_INT, options.level);
	document.getElementById('number_level').value = options.level;

	options.skills.till = validBoolean(options.skills.till);
	document.getElementById('check_skillsTill').checked = options.skills.till;

	options.skills.agri = validBoolean(options.skills.agri);
	options.skills.arti = validBoolean(options.skills.arti);
	const binaryFlags = options.skills.agri + options.skills.arti * 2;
	document.getElementById('select_skills').value = binaryFlags;

	options.extra = validBoolean(options.extra);
	document.getElementById('check_extra').checked = options.extra;
}

function deserialize(str) {
    let json = `(${str})`
        .replace(/_/g, ' ')
        .replace(/-/g, ',')
        .replace(/\(/g, '{')
        .replace(/\)/g, '}')
        .replace(/([a-z]+)/gi, '"$1":')
        .replace(/"(true|false)":/gi, '$1');

    //console.log(json);

	return JSON.parse(json);
}

function serialize(obj) {

	return Object.keys(obj)
		.reduce((acc, key) => {
			return /^(?:true|false|\d+)$/i.test('' + obj[key])
				? `${acc}-${key}_${obj[key]}`
				: `${acc}-${key}_(${serialize(obj[key])})`;
		}, '')
		.slice(1);
}

/*
 * Called when changing season/seeds, to redraw the graph.
 */
function rebuild() {
	gAxis.selectAll("*").remove();
	gProfit.selectAll("*").remove();
	gSeedLoss.selectAll("*").remove();
	gFertLoss.selectAll("*").remove();
	gIcons.selectAll("*").remove();
	gTooltips.selectAll("*").remove();

	updateData();
	renderGraph();
}

document.addEventListener('DOMContentLoaded', initial);
document.addEventListener('click', function (event) {
	if (event.target.id === 'reset') window.location = 'index.html';
});
