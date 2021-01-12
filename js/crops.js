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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 150,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 80,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": [

      ]
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
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 3000,
      "type": "Gem Berry",
      "typeSpec": [

      ]
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 290,
      "type": "Flower",
      "typeSpec": [

      ]
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 30,
      "type": "Flower",
      "typeSpec": [

      ]
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 50,
      "type": "Flower",
      "typeSpec": [

      ]
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 80,
      "type": "Flower",
      "typeSpec": []
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
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "minimum": 4,
      "maximum": 5,
      "extraPerc": 0.2,
      "raw": 15,
      "type": "Coffee",
      "typeSpec": [

      ]
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 140,
      "type": "Flower",
      "typeSpec": [

      ]
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  summerspangle = {
    "name": "Summer Spangle",
    "url": "http://stardewvalleywiki.com/Summer_Spangle",
    "img": "summerspangle.png",
    "seeds": {
      "pierre": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 90,
      "type": "Flower",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 40,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 175,
      "type": "Vegetable",
      "typeSpec": [

      ]
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 4,
      "extraPerc": 0.2,
      "raw": 80,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 60,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 110,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 220,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 250,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.05,
      "raw": 60,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "minimum": 3,
      "maximum": 4,
      "extraPerc": 0.02,
      "raw": 50,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.03,
      "raw": 40,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "mininum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 90,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 260,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 400,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 750,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 50,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.002,
      "raw": 60,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 160,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 320,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 80,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 160,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "minimum": 2,
      "maximum": 5,
      "extraPerc": 0.1,
      "raw": 75,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 100,
      "type": "Vegetable",
      "typeSpec": []
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
      "special": 450,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 550,
      "type": "Fruit",
      "typeSpec": []
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
      "special": 100,
      "specialLoc": "Egg Festival",
      "specialUrl": "http://stardewvalleywiki.com/Egg_Festival"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.02,
      "raw": 120,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  adzukibean = {
    "name": "Adzuki Bean",
    "url": "",
    "img": "adzukibean.png",
    "seeds": {
      "pierre": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 90,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  aloe = {
    "name": "Aloe",
    "url": "",
    "img": "aloe.png",
    "seeds": {
      "pierre": 0,
      "special": 100,
      "specialLoc": "Harvey",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 140,
      "type": "Vegetable",
      "typeSpec": ["Succulent"]
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, */
  asparagus = {
    "name": "Asparagus",
    "url": "",
    "img": "asparagus.png",
    "seeds": {
      "pierre": 20,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, 
  bamboo = {
    "name": "Bamboo",
    "url": "",
    "img": "bamboo.png",
    "seeds": {
      "pierre": 150,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "minimum": 2,
      "maximum": 4,
      "extraPerc": 0,
      "raw": 55,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Summer",
      "Greenhouse"
    ]
  },
  barley = {
    "name": "Barley",
    "url": "",
    "img": "barley.png",
    "seeds": {
      "pierre": 10,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  basil = {
    "name": "Basil",
    "url": "",
    "img": "basil.png",
    "seeds": {
      "pierre": 20,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }, /*
  bellpepper = {
    "name": "Bell Pepper",
    "url": "",
    "img": "bellpepper.png",
    "seeds": {
      "pierre": 130,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 70,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  blueagave = {
    "name": "Blue Agave",
    "url": "",
    "img": "blueagave.png",
    "seeds": {
      "pierre": 200,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 300,
      "type": "Vegetable",
      "typeSpec": ["Succulent"]
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  broccoli = {
    "name": "Broccoli",
    "url": "",
    "img": "broccoli.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 120,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  buckwheat = {
    "name": "Buckwheat",
    "url": "",
    "img": "buckwheat.png",
    "seeds": {
      "pierre": 10,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  butternutsquash = {
    "name": "Butternut Squash",
    "url": "",
    "img": "butternutsquash.png",
    "seeds": {
      "pierre": 180,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0.2,
      "raw": 440,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  cabbage = {
    "name": "Cabbage",
    "url": "",
    "img": "cabbage.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 120,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Fall",
      "Greenhouse"
    ]
  }, /*
  cactusflower = {
    "name": "Cactus Flower",
    "url": "",
    "img": "cactusflower.png",
    "seeds": {
      "pierre": 0,
      "special": 1300,
      "specialLoc": "Sandy",
      "specialUrl": ""
    },
    "growth": {
      "initial": 24,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0.2,
      "raw": 600,
      "type": "Flower",
      "typeSpec": ["Succulent"]
    },
    "seasons": [
      "Spring",
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  carrot = {
    "name": "Carrot",
    "url": "",
    "img": "carrot.png",
    "seeds": {
      "pierre": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 65,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  cassava = {
    "name": "Cassava",
    "url": "",
    "img": "cassava.png",
    "seeds": {
      "pierre": 60,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 80,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  celery = {
    "name": "Celery",
    "url": "",
    "img": "celery.png",
    "seeds": {
      "pierre": 55,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 70,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  chickpea = {
    "name": "Chickpea",
    "url": "",
    "img": "chickpea.png",
    "seeds": {
      "pierre": 200,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 5
    },
    "produce": {
      "minimum": 2,
      "maximum": 2,
      "extraPerc": 0,
      "raw": 55,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  chives = {
    "name": "Chives",
    "url": "",
    "img": "chives.png",
    "seeds": {
      "pierre": 20,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  cotton = {
    "name": "Cotton",
    "url": "",
    "img": "cottonball.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 3
    },
    "produce": {
      "minimum": 2,
      "maximum": 2,
      "extraPerc": 0,
      "raw": 65,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  cucumber = {
    "name": "Cucumber",
    "url": "",
    "img": "cucumber.png",
    "seeds": {
      "pierre": 65,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 3
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 90,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  durum = {
    "name": "Durum",
    "url": "",
    "img": "durum.png",
    "seeds": {
      "pierre": 10,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  elderberry = {
    "name": "Elderberry",
    "url": "",
    "img": "elderberry.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 20,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Winter",
      "Greenhouse"
    ]
  },
  fennel = {
    "name": "Fennel",
    "url": "",
    "img": "fennel.png",
    "seeds": {
      "pierre": 20,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  ginseng = {
    "name": "Ginseng",
    "url": "",
    "img": "ginseng.png",
    "seeds": {
      "pierre": 0,
      "special": 1000,
      "specialLoc": "Dwarf",
      "specialUrl": ""
    },
    "growth": {
      "initial": 30,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.2,
      "raw": 2000,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Summer",
      "Fall",
      "Winter",
      "Greenhouse"
    ]
  }, */
  gooseberry = {
    "name": "Gooseberry",
    "url": "",
    "img": "gooseberry.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 3
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 20,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  greenpea = {
    "name": "Grean Pea",
    "url": "",
    "img": "greenpea.png",
    "seeds": {
      "pierre": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 3
    },
    "produce": {
      "minimum": 2,
      "maximum": 5,
      "extraPerc": 0.2,
      "raw": 30,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  habenero = {
    "name": "Habenero",
    "url": "",
    "img": "habenero.png",
    "seeds": {
      "pierre": 130,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 120,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  jalapeno = {
    "name": "Jalapeno",
    "url": "",
    "img": "jalapeno.png",
    "seeds": {
      "pierre": 130,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 40,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  juniper = {
    "name": "Juniper",
    "url": "",
    "img": "juniperberry.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 3
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 15,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Winter",
      "Greenhouse"
    ]
  },
  kidneybean = {
    "name": "Kidney Bean",
    "url": "",
    "img": "kidneybean.png",
    "seeds": {
      "pierre": 180,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  kiwi = {
    "name": "Kiwi",
    "url": "",
    "img": "kiwi.png",
    "seeds": {
      "pierre": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 21,
      "regrow": 3
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.1,
      "raw": 100,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  lettuce = {
    "name": "Lettuce",
    "url": "",
    "img": "lettuce.png",
    "seeds": {
      "pierre": 55,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 65,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  licoriceroot = {
    "name": "Licorice Root",
    "url": "",
    "img": "licoriceroot.png",
    "seeds": {
      "pierre": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 135,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  maguey = {
    "name": "Maguey",
    "url": "",
    "img": "maguey.png",
    "seeds": {
      "pierre": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 170,
      "type": "Vegetable",
      "typeSpec": ["Succulent"]
    },
    "seasons": [
      "Spring",
      "Summer",
      "Greenhouse"
    ]
  }, /*
  mint = {
    "name": "Mint",
    "url": "",
    "img": "mint.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 2,
      "maximum": 2,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Winter",
      "Greenhouse"
    ]
  }, */
  muskmelon = {
    "name": "Muskmelon",
    "url": "",
    "img": "muskmelon.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 180,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  navybean = {
    "name": "Navy Bean",
    "url": "",
    "img": "navybean.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 15,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  oat = {
    "name": "Oat",
    "url": "",
    "img": "oat.png",
    "seeds": {
      "pierre": 10,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 25,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, /*
  okra = {
    "name": "Okra",
    "url": "",
    "img": "okra.png",
    "seeds": {
      "pierre": 160,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0.2,
      "raw": 60,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  }, */
  onion = {
    "name": "Onion",
    "url": "",
    "img": "onion.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 115,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  oregano = {
    "name": "Oregano",
    "url": "",
    "img": "oregano.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 50,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  parsley = {
    "name": "Parsley",
    "url": "",
    "img": "parsley.png",
    "seeds": {
      "pierre": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 45,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }, /*
  passionfruit = {
    "name": "Passion Fruit",
    "url": "",
    "img": "passionfruit.png",
    "seeds": {
      "pierre": 130,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 95,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  peanut = {
    "name": "Peanut",
    "url": "",
    "img": "peanut.png",
    "seeds": {
      "pierre": 60,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.3,
      "raw": 75,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  perilla = {
    "name": "Perilla",
    "url": "",
    "img": "perillaleaf.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 50,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  quinoa = {
    "name": "Quinoa",
    "url": "",
    "img": "quinoa.png",
    "seeds": {
      "pierre": 20,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 30,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  rapeseed = {
    "name": "Rapseed Flower",
    "url": "",
    "img": "rapeseedflower.png",
    "seeds": {
      "pierre": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 2,
      "maximum": 2,
      "extraPerc": 0,
      "raw": 50,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Summer",
      "Greenhouse"
    ]
  },
  raspberry = {
    "name": "Raspberry",
    "url": "",
    "img": "raspberry.png",
    "seeds": {
      "pierre": 60,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 3,
      "maximum": 5,
      "extraPerc": 0.2,
      "raw": 30,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  redonion = {
    "name": "Red Onion",
    "url": "",
    "img": "redonion.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 115,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }, /*
  rosemary = {
    "name": "Rosemary",
    "url": "",
    "img": "rosemary.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 75,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  sage = {
    "name": "Sage",
    "url": "",
    "img": "sage.png",
    "seeds": {
      "pierre": 40,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 70,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  shallot = {
    "name": "Shallot",
    "url": "",
    "img": "shallot.png",
    "seeds": {
      "pierre": 80,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 115,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  shiitakemushroom = {
    "name": "Shiitake Mushroom",
    "url": "",
    "img": "shiitakemushroom.png",
    "seeds": {
      "pierre": 500,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 180,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Fall",
      "Greenhouse"
    ]
  }, /*
  soybean = {
    "name": "Soybean",
    "url": "",
    "img": "soybean.png",
    "seeds": {
      "pierre": 120,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 80,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  spinach = {
    "name": "Spinach",
    "url": "",
    "img": "spinach.png",
    "seeds": {
      "pierre": 15,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 3,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Fall",
      "Greenhouse"
    ]
  },
  sugarbeet = {
    "name": "Sugar Beet",
    "url": "",
    "img": "sugarbeet.png",
    "seeds": {
      "pierre": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 180,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }, /*
  sugarcane = {
    "name": "Sugar Cane",
    "url": "",
    "img": "sugarcane.png",
    "seeds": {
      "pierre": 0,
      "special": 110,
      "specialLoc": "Sandy",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 230,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, */
  sulfurshelfmushroom = {
    "name": "Sulfur Shelf Mushroom",
    "url": "",
    "img": "sulfurshelfmushroom.png",
    "seeds": {
      "pierre": 500,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "minimum": 2,
      "maximum": 3,
      "extraPerc": 0.1,
      "raw": 180,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  }, /*
  sweetcanarymelon = {
    "name": "Sweet Canary Melon",
    "url": "",
    "img": "sweetcanarymelon.png",
    "seeds": {
      "pierre": 450,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 225,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  sweetpotato = {
    "name": "Sweet Potato",
    "url": "",
    "img": "sweetpotato.png",
    "seeds": {
      "pierre": 90,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 120,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  tabascopepper = {
    "name": "Tabasco Pepper",
    "url": "",
    "img": "tabascopepper.png",
    "seeds": {
      "pierre": 130,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0.2,
      "raw": 80,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  thyme = {
    "name": "Thyme",
    "url": "",
    "img": "thyme.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 55,
      "type": "Vegetable",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  wasabiroot = {
    "name": "Wasabi Root",
    "url": "",
    "img": "wasabiroot.png",
    "seeds": {
      "pierre": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 165,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  watermelonmizu = {
    "name": "Watermelon",
    "url": "",
    "img": "watermelonmizu.png",
    "seeds": {
      "pierre": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 175,
      "type": "Fruit",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  zucchini = {
    "name": "Zucchini",
    "url": "",
    "img": "zucchini.png",
    "seeds": {
      "pierre": 225,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 2
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 175,
      "type": "Vegetable",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  beebalm = {
    "name": "Bee Balm",
    "url": "",
    "img": "beebalm.png",
    "seeds": {
      "pierre": 0,
      "special": 60,
      "specialLoc": "Marnie",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 115,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  bluemist = {
    "name": "Blue Mist",
    "url": "",
    "img": "bluemist.png",
    "seeds": {
      "pierre": 180,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 250,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  chamomile = {
    "name": "Chamomile",
    "url": "",
    "img": "chamomile.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 45,
      "type": "Flower",
      "typeSpec": ["Herb"]
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  clarysage = {
    "name": "Clary Sage",
    "url": "",
    "img": "clarysage.png",
    "seeds": {
      "pierre": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0,
      "raw": 130,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  fairyduster = {
    "name": "Fairy Duster",
    "url": "",
    "img": "fairyduster.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 50,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  fallrose = {
    "name": "Fall Rose",
    "url": "",
    "img": "fallrose.png",
    "seeds": {
      "pierre": 175,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.2,
      "raw": 55,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  }, */
  fragrantlilac = {
    "name": "Fragrant Lilac",
    "url": "",
    "img": "fragrantlilac.png",
    "seeds": {
      "pierre": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 40,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  herballavender = {
    "name": "Herbal Lavender",
    "url": "",
    "img": "herballavender.png",
    "seeds": {
      "pierre": 20,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 30,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  },
  honeysuckle = {
    "name": "Honeysuckle",
    "url": "",
    "img": "honeysuckle.png",
    "seeds": {
      "pierre": 0,
      "special": 200,
      "specialLoc": "Marnie",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 3
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.1,
      "raw": 65,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Summer",
      "Greenhouse"
    ]
  },
  passionflower = {
    "name": "Passion Flower",
    "url": "",
    "img": "passionflower.png",
    "seeds": {
      "pierre": 90,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 160,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  pinkcat = {
    "name": "Pink Cat",
    "url": "",
    "img": "pinkcat.png",
    "seeds": {
      "pierre": 0,
      "special": 20,
      "specialLoc": "Marnie",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 35,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  pitcherplant = {
    "name": "Pitcher Plant",
    "url": "",
    "img": "pitcherplant.png",
    "seeds": {
      "pierre": 500,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 15,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 350,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  },
  purpleconeflower = {
    "name": "Purple Coneflower",
    "url": "",
    "img": "purpleconeflower.png",
    "seeds": {
      "pierre": 40,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 75,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  },
  rafflesia = {
    "name": "Rafflesia",
    "url": "",
    "img": "rafflesia.png",
    "seeds": {
      "pierre": 3000,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 56,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 13000,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  }, */
  rose = {
    "name": "Rose",
    "url": "",
    "img": "rose.png",
    "seeds": {
      "pierre": 175,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.2,
      "raw": 55,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Summer",
      "Fall",
      "Greenhouse"
    ]
  },
  shadedviolet = {
    "name": "Shaded Violet",
    "url": "",
    "img": "shadedviolet.png",
    "seeds": {
      "pierre": 30,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 45,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }, /*
  springrose = {
    "name": "Spring Rose",
    "url": "",
    "img": "springrose.png",
    "seeds": {
      "pierre": 175,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.2,
      "raw": 55,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Spring",
      "Greenhouse"
    ]
  }, */
  summerrose = {
    "name": "Summer Rose",
    "url": "",
    "img": "summerrose.png",
    "seeds": {
      "pierre": 175,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "minimum": 1,
      "maximum": 2,
      "extraPerc": 0.2,
      "raw": 55,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Summer",
      "Greenhouse"
    ]
  }, /*
  sweetjasmine = {
    "name": "Sweet Jasmine",
    "url": "",
    "img": "sweetjasmine.png",
    "seeds": {
      "pierre": 40,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 3,
      "extraPerc": 0,
      "raw": 95,
      "type": "Flower",
      "typeSpec": []
    },
    "seasons": [
      "Fall",
      "Greenhouse"
    ]
  } */
];


/*
,
  b = {
    "name": "",
    "url": "",
    "img": "",
    "seeds": {
      "pierre": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 0,
      "regrow": 0
    },
    "produce": {
      "minimum": 1,
      "maximum": 1,
      "extraPerc": 0,
      "raw": 0,
      "type": "",
      "typeSpec": []
    },
    "seasons": [
      "Greenhouse"
    ]
  }
*/


  /*springseeds = {
    "name": "Spring Seeds",
    "url": "http://stardewvalleywiki.com/Spring_Seeds",
    "img": "springseeds.png",
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
      "raw": (50 + 30 + 60 + 40) / 4,
      "rawS": (62 + 37 + 75 + 50) / 4,
      "rawG": (75 + 45 + 90 + 60) / 4,
      "type": "",
      "typeSpec": [

      ]
    },
    "seasons": [
      "Spring"
    ]
  },*/
  /*summerseeds = {
    "name": "Summer Seeds",
    "url": "http://stardewvalleywiki.com/Summer_Seeds",
    "img": "summerseeds.png",
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
      "raw": (80 + 80 + 50) / 3,
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
  },*/
  /*fallseeds = {
    "name": "Fall Seeds",
    "url": "http://stardewvalleywiki.com/Fall_Seeds",
    "img": "fallseeds.png",
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
      "raw": (20 + 40 + 90 + 80) / 4,
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
  },*/
  /*winterseeds = {
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
      "raw": (60 + 150 + 100 + 70) / 4,
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
  },*/