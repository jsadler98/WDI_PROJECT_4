const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Game      = require('../models/game');

const gameData = [{
  name: 'Contra',
  image: 'https://i.ytimg.com/vi/9zc_NjedRq8/hqdefault.jpg',
  developers: 'Konami, Arc System Works',
  designers: 'Shigeharu Umezaki, Zoltán Györfi, Masato Misaki',
  description: 'In 2633, the evil Red Falcon Organization have set a base on the Galuga archipelago near New Zealand in a plot to conquer the world. Two commandos, Pfc. Bill Rizer and Pfc. Lance Bean of the Contra unit (an elite group of soldiers specializing in guerrilla warfare), are sent to the island to destroy the enemy forces and uncover the true nature of the alien entity controlling them.',
  releaseYear: '1987'
},{
  name: 'Pong',
  image: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/01/1452785857main.pngf',
  developers: 'Atari, Atari, inc.',
  designers: 'Allan Alcorn',
  description: 'Pong is one of the earliest arcade video games. It is a table tennis sports game featuring simple two-dimensional graphics.',
  releaseYear: '1972'
},{
  name: 'Pacman',
  image: 'http://www.consoleclassix.com/info_img/Pac-Man_SGG_ScreenShot1.jpg',
  developers: 'Namco, Atari, Namco Networks, Interactive Brains',
  designers: 'Toru Iwatani',
  description: 'Pacman is a very basic arcade game that literally everybody has played',
  releaseYear: '1980'
},{
  name: 'Joust',
  image: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/01/1452785857main.pngf',
  developers: 'WMS Industries, Atari, Williams Entertainment Inc., HAL Laboratory',
  designers: 'John Newcomer',
  description: 'Players will use a button and joystick to control a knight riding a flying ostrich. The point of the game is to progress through levels by defeating groups of enemy knights riding buzzards.',
  releaseYear: '1982'
},{
  name: 'Tetris',
  image: 'http://meatfighter.com/nintendotetrisai/75.png',
  developers: 'Sega, Philips, Ubisoft, Spectrum HoloByte, EA Mobile,',
  designers: 'Alexey Pajitnov, Vladimir Pokhilko',
  description: 'Tetris is a tile-matching puzzle video game that has literally been played by everybody for years and years.',
  releaseYear: '1984'
},{
  name: 'Super Mario Bros',
  image: 'https://gamificationplus.uk/wp-content/uploads/2016/10/super-mario-bros.png',
  developers: 'Sega, Philips, Ubisoft, Spectrum HoloByte, EA Mobile,',
  designers: 'Alexey Pajitnov, Vladimir Pokhilko',
  description: 'Super Marios Bros is a platform objective based video game where you must save princess Peach by grinding through loads of dificult levels and worlds and defeating multiple bady guys and villains',
  releaseYear: '1984'
},{
  name: 'Doom',
  image: 'https://www.dosbox.com/wiki/images/1/1b/GAME_Doom_Title.pnge',
  developers: 'Vicarious Visions, GT Interactive, id Software',
  designers: ' John Romero, Tom Hall, id Software, American McGee, Tim Willits, Sandy Petersen, Shawn Green',
  description: 'Doom, a science fiction/horror themed video game, the story is advanced with short messages displayed between each section of the game (called episodes), the action as the player character progresses through the levels, and some visual cues.',
  releaseYear: '1993'
},{
  name: 'Q*bert',
  image: 'https://www.arcade-museum.com/images/118/1181242154222.png',
  developers: ' Atari, Gottlieb, Parker Brothers, Hasbro Interactive',
  designers: 'Warren Davis, Jeff Lee',
  description: 'The game is played using a single, diagonally mounted four-way joystick. The player controls Q*bert, who starts each game at the top of a pyramid made of 28 cubes, and moves by hopping diagonally from cube to cube. Landing on a cube causes it to change color, and changing every cube to the target color allows the player to progress to the next stage.',
  releaseYear: '1982'
},{
  name: 'Breakout',
  image: 'http://thematboard.com/media/mat-photos/full/052013/4313_HnaUO5yikmVfUffAG09SIYrdk.png',
  developers: ' Atari, Atari, Inc.',
  designers: ' Steve Wozniak, Nolan Bushnell',
  description: 'In the game, a layer of bricks lines the top third of the screen. A ball travels across the screen, bouncing off the top and side walls of the screen. When a brick is hit, the ball bounces away and the brick is destroyed. The player loses a turn when the ball touches the bottom of the screen. To prevent this from happening, the player has a movable paddle to bounce the ball upward, keeping it in play.',
  releaseYear: '1976'
},{
  name: 'Space Invaders',
  image: 'https://upload.wikimedia.org/wikipedia/en/2/20/SpaceInvaders-Gameplay.gif',
  developers: 'Taito',
  designers: 'Tomohiro Nishikado',
  description: 'Space Invaders is a two-dimensional fixed shooter game in which the player controls a laser cannon by moving it horizontally across the bottom of the screen and firing at descending aliens. The aim is to defeat five rows of eleven aliens—some versions feature different numbers—that move horizontally back and forth across the screen as they advance toward the bottom of the screen. The player defeats an alien, and earns points, by shooting it with the laser cannon.',
  releaseYear: '1978'
},{
  name: 'The Legend of Zelda',
  image: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Legend_of_Zelda_NES.PNG',
  developers: ' Nintendo Co., Ltd., Nintendo Entertainment Analysis & Development',
  designers: 'Shigeru Miyamoto, Takashi Tezuka',
  description: 'The Legend of Zelda incorporates elements of action, adventure, and role-playing games. The player controls Link from a flip-screen overhead perspective as he travels in the overworld, a large outdoor map with varied environments.[9] Link begins the game armed only with a small shield, but a sword becomes available to Link after he ventures into a cave that is accessible from the game first map screen. Throughout the game, various characters aid Link by giving or selling equipment and clues.',
  releaseYear: '1986'
},{
  name: 'Sonic the Hedgehog',
  image: 'https://thewellredmage.files.wordpress.com/2017/09/title-screen.jpg?w=788',
  developers: 'Sega, Sonic Team, Backbone Entertainment',
  designers: ' Yuji Naka, Hirokazu Yasuhara, Naoto Ohshima, Rieko Kodama',
  description: 'In an attempt to steal the six Chaos Emeralds and harness their power, the game antagonist, Dr. Ivo Robotnik has trapped the animal inhabitants of South Island in aggressive robots and stationary metal capsules. The player controls Sonic, who aims to halt Robotniks plans by freeing his animal friends and collecting the emeralds himself. If the player collects all the Chaos Emeralds and completes the game, an ending sequence is shown. If all the emeralds are not collected, Robotnik taunts the player while juggling any of the Chaos Emeralds not collected by the player.',
  releaseYear: '1991'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Game.create(gameData))
  .then(games => console.log(`${games.length} games created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());