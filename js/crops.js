/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
 */

// Crop List
var crops = [
  amaranth = {
    "name": "Amaranth",
    "url": "http://stardewvalleywiki.com/Amaranth",
    "img": "amaranth.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 150,
      "rawS": 187,
      "rawG": 225,
      "jar": 350,
      "keg": 337,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  grape = {
    "name": "Grape",
    "url": "http://stardewvalleywiki.com/Grape",
    "img": "grape.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 210,
      "keg": 240,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  hops = {
    "name": "Hops",
    "url": "http://stardewvalleywiki.com/Hops",
    "img": "hops.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 25,
      "rawS": 31,
      "rawG": 37,
      "jar": 100,
      "keg": 300,
      "jarType": "Pickles",
      "kegType": "Pale Ale"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  sweetgemberry = {
    "name": "Sweet Gem Berry",
    "url": "http://stardewvalleywiki.com/Sweet_Gem_Berry",
    "img": "sweetgemberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 3000,
      "rawS": 3750,
      "rawG": 4500,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  fairyrose = {
    "name": "Fairy Rose",
    "url": "http://stardewvalleywiki.com/Fairy_Rose",
    "img": "fairyrose.png",
    "seeds": {
      "pierre": 200,
      "joja": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 290,
      "rawS": 362,
      "rawG": 435,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  tulip = {
    "name": "Tulip",
    "url": "http://stardewvalleywiki.com/Tulip",
    "img": "tulip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 30,
      "rawS": 37,
      "rawG": 45,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  bluejazz = {
    "name": "Blue Jazz",
    "url": "http://stardewvalleywiki.com/Blue_Jazz",
    "img": "bluejazz.png",
    "seeds": {
      "pierre": 30,
      "joja": 37,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 50,
      "rawS": 62,
      "rawG": 75,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  sunflower = {
    "name": "Sunflower",
    "url": "http://stardewvalleywiki.com/Sunflower",
    "img": "sunflower.png",
    "seeds": {
      "pierre": 200,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  coffeebean = {
    "name": "Coffee Bean",
    "url": "http://stardewvalleywiki.com/Coffee_Bean",
    "img": "coffeebean.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "extra": 3,
      "extraPerc": 1,
      "rawN": 15,
      "rawS": 18,
      "rawG": 22,
      "jar": 0,
      "keg": 30,
      "jarType": "",
      "kegType": "Coffee"
    },
    "seasons": [
      "Spring",
      "Summer",
      "Greenhouse"
    ]
  },
  poppy = {
    "name": "Poppy",
    "url": "http://stardewvalleywiki.com/Poppy",
    "img": "poppy.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 140,
      "rawS": 175,
      "rawG": 210,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  summerspangle = {
    "name": "Summer Spangle",
    "url": "http://stardewvalleywiki.com/Summer_Spangle",
    "img": "Summerspangle.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 90,
      "rawS": 112,
      "rawG": 135,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  parsnip = {
    "name": "Parsnip",
    "url": "http://stardewvalleywiki.com/Parsnip",
    "img": "parsnip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 35,
      "rawS": 43,
      "rawG": 52,
      "jar": 120,
      "keg": 78,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  greenbean = {
    "name": "Green Bean",
    "url": "http://stardewvalleywiki.com/Green_Bean",
    "img": "greenbean.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 40,
      "rawS": 50,
      "rawG": 60,
      "jar": 130,
      "keg": 90,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Spring",
      "greenbean"
    ]
  },
  cauliflower = {
    "name": "Cauliflower",
    "url": "http://stardewvalleywiki.com/Cauliflower",
    "img": "cauliflower.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 175,
      "rawS": 218,
      "rawG": 262,
      "jar": 400,
      "keg": 393,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  potato = {
    "name": "Potato",
    "url": "http://stardewvalleywiki.com/Potato",
    "img": "potato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 210,
      "keg": 180,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  garlic = {
    "name": "Garlic",
    "url": "http://stardewvalleywiki.com/Garlic",
    "img": "garlic.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 60,
      "rawS": 75,
      "rawG": 90,
      "jar": 170,
      "keg": 135,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  kale = {
    "name": "Kale",
    "url": "http://stardewvalleywiki.com/Kale",
    "img": "kale.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 110,
      "rawS": 137,
      "rawG": 165,
      "jar": 270,
      "keg": 247,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  rhubarb = {
    "name": "Rhubarb",
    "url": "http://stardewvalleywiki.com/Rhubarb",
    "img": "rhubarb.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 220,
      "rawS": 275,
      "rawG": 330,
      "jar": 490,
      "keg": 660,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  melon = {
    "name": "Melon",
    "url": "http://stardewvalleywiki.com/Melon",
    "img": "melon.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 250,
      "rawS": 312,
      "rawG": 375,
      "jar": 550,
      "keg": 750,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  tomato = {
    "name": "Tomato",
    "url": "http://stardewvalleywiki.com/Tomato",
    "img": "tomato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.05,
      "rawN": 60,
      "rawS": 75,
      "rawG": 90,
      "jar": 170,
      "keg": 135,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  blueberry = {
    "name": "Blueberry",
    "url": "http://stardewvalleywiki.com/Blueberry",
    "img": "blueberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 2,
      "extraPerc": 1,
      "rawN": 50,
      "rawS": 62,
      "rawG": 75,
      "jar": 150,
      "keg": 150,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  hotpepper = {
    "name": "Hot Pepper",
    "url": "http://stardewvalleywiki.com/Hot_Pepper",
    "img": "hotpepper.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.03,
      "rawN": 40,
      "rawS": 50,
      "rawG": 60,
      "jar": 130,
      "keg": 120,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  wheat = {
    "name": "Wheat",
    "url": "http://stardewvalleywiki.com/Wheat",
    "img": "wheat.png",
    "seeds": {
      "pierre": 10,
      "joja": 12,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 25,
      "rawS": 31,
      "rawG": 37,
      "jar": 100,
      "keg": 200,
      "jarType": "Pickles",
      "kegType": "Beer"
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  radish = {
    "name": "Radish",
    "url": "http://stardewvalleywiki.com/Radish",
    "img": "radish.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 90,
      "rawS": 112,
      "rawG": 135,
      "jar": 230,
      "keg": 202,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  redcabbage = {
    "name": "Red Cabbage",
    "url": "http://stardewvalleywiki.com/Red_Cabbage",
    "img": "redcabbage.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 260,
      "rawS": 325,
      "rawG": 390,
      "jar": 570,
      "keg": 585,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  starfruit = {
    "name": "Starfruit",
    "url": "http://stardewvalleywiki.com/Starfruit",
    "img": "starfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 750,
      "rawS": 937,
      "rawG": 1125,
      "jar": 1550,
      "keg": 2250,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  corn = {
    "name": "Corn",
    "url": "http://stardewvalleywiki.com/Corn",
    "img": "corn.png",
    "seeds": {
      "pierre": 150,
      "joja": 187,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 50,
      "rawS": 62,
      "rawG": 75,
      "jar": 150,
      "keg": 112,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  eggplant = {
    "name": "Eggplant",
    "url": "http://stardewvalleywiki.com/Eggplant",
    "img": "eggplant.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.002,
      "rawN": 60,
      "rawS": 75,
      "rawG": 90,
      "jar": 170,
      "keg": 135,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  artichoke = {
    "name": "Artichoke",
    "url": "http://stardewvalleywiki.com/Artichoke",
    "img": "artichoke.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 160,
      "rawS": 200,
      "rawG": 240,
      "jar": 370,
      "keg": 360,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  pumpkin = {
    "name": "Pumpkin",
    "url": "http://stardewvalleywiki.com/Pumpkin",
    "img": "pumpkin.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 320,
      "rawS": 400,
      "rawG": 480,
      "jar": 690,
      "keg": 720,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  bokchoy = {
    "name": "Bok Choy",
    "url": "http://stardewvalleywiki.com/Bok_Choy",
    "img": "bokchoy.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 210,
      "keg": 180,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  yam = {
    "name": "Yam",
    "url": "http://stardewvalleywiki.com/Yam",
    "img": "yam.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 160,
      "rawS": 200,
      "rawG": 240,
      "jar": 370,
      "keg": 360,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  cranberries = {
    "name": "Cranberries",
    "url": "http://stardewvalleywiki.com/Cranberries",
    "img": "cranberries.png",
    "seeds": {
      "pierre": 240,
      "joja": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "rawN": 75,
      "rawS": 93,
      "rawG": 112,
      "jar": 200,
      "keg": 225,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  beet = {
    "name": "Beet",
    "url": "http://stardewvalleywiki.com/Beet",
    "img": "beet.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 100,
      "rawS": 125,
      "rawG": 150,
      "jar": 250,
      "keg": 225,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  ancientfruit = {
    "name": "Ancient Fruit",
    "url": "http://stardewvalleywiki.com/Ancient_Fruit",
    "img": "ancientfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 450,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 550,
      "rawS": 687,
      "rawG": 825,
      "jar": 1150,
      "keg": 1650,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Spring",
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  strawberry = {
    "name": "Strawberry",
    "url": "http://stardewvalleywiki.com/Strawberry",
    "img": "strawberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Egg Festival",
      "specialUrl": "http://stardewvalleywiki.com/Egg_Festival"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.02,
      "rawN": 120,
      "rawS": 150,
      "rawG": 180,
      "jar": 290,
      "keg": 360,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  springseeds = {
    "name": "Spring Seeds",
    "url": "http://stardewvalleywiki.com/Spring_Seeds",
    "img": "Springseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Wild Horseradish + Daffodil + Leek + Dandelion) / 4
      "rawN": (50 + 30 + 60 + 40) / 4,
      "rawS": (62 + 37 + 75 + 50) / 4,
      "rawG": (75 + 45 + 90 + 60) / 4,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Spring"
    ]
  },
  summerseeds = {
    "name": "Summer Seeds",
    "url": "http://stardewvalleywiki.com/Summer_Seeds",
    "img": "Summerseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Spice Berry + Grape + Sweet Pea) / 3
      "rawN": (80 + 80 + 50) / 3,
      "rawS": (100 + 100 + 62) / 3,
      "rawG": (120 + 120 + 75) / 3,
      "jar": (210 + 210 + 0) / 3,
      "keg": (240 + 240 + 0) / 3,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Summer"
    ]
  },
  fallseeds = {
    "name": "Fall Seeds",
    "url": "http://stardewvalleywiki.com/Fall_Seeds",
    "img": "Fallseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Blackberry + Common Mushroom + Hazelnut + Wild Plum) / 4
      "rawN": (20 + 40 + 90 + 80) / 4,
      "rawS": (25 + 50 + 112 + 100) / 4,
      "rawG": (30 + 60 + 135 + 120) / 4,
      "jar": (90 + 0 + 0 + 210) / 4,
      "keg": (60 + 0 + 0 + 240) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Fall"
    ]
  },
  winterseeds = {
    "name": "Winter Seeds",
    "url": "http://stardewvalleywiki.com/Winter_Seeds",
    "img": "winterseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Crocus + Crystal Fruit + Snow Yam + Winter Root) / 4
      "rawN": (60 + 150 + 100 + 70) / 4,
      "rawS": (75 + 187 + 125 + 87) / 4,
      "rawG": (90 + 225 + 150 + 105) / 4,
      "jar": (0 + 350 + 0 + 0) / 4,
      "keg": (0 + 450 + 0 + 0) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "seasons": [
      "Winter"
    ]
  },
  basil = {
    "name": "Basil",
    "url": "",
    "img": "basil.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 38,
      "rawS": 38,
      "rawG": 38,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }
];