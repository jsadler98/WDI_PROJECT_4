const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Game      = require('../models/game');
const User      = require('../models/user');


Game.collection.drop();
User.collection.drop();

mongoose.connect( dbURI, { useMongoClient: true });

User
  .create([
    {
      username: 'josh',
      email: 'josh@josh.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'rane',
      email: 'rane@rane.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'kenny',
      email: 'kenny@kenny.com',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);

    return Game.create([
      {
        name: 'Contra',
        image: 'https://static.giantbomb.com/uploads/scale_small/9/93770/2361240-nes_contra.jpg',
        developers: 'Konami, Arc System Works',
        designers: 'Shigeharu Umezaki, Zoltán Györfi, Masato Misaki',
        description: 'In 2633, the evil Red Falcon Organization have set a base on the Galuga archipelago near New Zealand in a plot to conquer the world. Two commandos, Pfc. Bill Rizer and Pfc. Lance Bean of the Contra unit (an elite group of soldiers specializing in guerrilla warfare), are sent to the island to destroy the enemy forces and uncover the true nature of the alien entity controlling them.',
        releaseYear: '1987',
        createdBy: users[0].id,
        comments: [
          {
            createdBy: users[1].id,
            body: 'Played through this game twice now, really good!',
            rating: 5,
            upvote: [users[2].id]
          },
          {
            createdBy: users[0].id,
            body: 'Yes amazing',
            rating: 5,
            upvote: [users[1].id]
          }
        ]
      },
      {
        name: 'Pong',
        image: 'https://www.artfund.org/assets/news/2014/07/digital-revolution/digital-revolution-1.jpg',
        developers: 'Atari, Atari, inc.',
        designers: 'Allan Alcorn',
        description: 'Pong is one of the earliest arcade video games. It is a table tennis sports game  featuring simple two-dimensional graphics.',
        releaseYear: '1972'
      }
    ]);
  })
  .then(games => {
    console.log(`${games.length} games were created`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // body: { type: String },
  // rating: { type: Number },
  // upvote: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }]


  // username: { type: String, required: true },
  // email: { type: String, required: true, unique: true },
  // password: { type: String, required: true }

// const gameData = [{
//   name: 'Contra',
//   image: 'https://static.giantbomb.com/uploads/scale_small/9/93770/2361240-nes_contra.jpg',
//   developers: 'Konami, Arc System Works',
//   designers: 'Shigeharu Umezaki, Zoltán Györfi, Masato Misaki',
//   description: 'In 2633, the evil Red Falcon Organization have set a base on the Galuga archipelago near New Zealand in a plot to conquer the world. Two commandos, Pfc. Bill Rizer and Pfc. Lance Bean of the Contra unit (an elite group of soldiers specializing in guerrilla warfare), are sent to the island to destroy the enemy forces and uncover the true nature of the alien entity controlling them.',
//   releaseYear: '1987'
// },{
//   name: 'Pong',
//   image: 'https://www.artfund.org/assets/news/2014/07/digital-revolution/digital-revolution-1.jpg',
//   developers: 'Atari, Atari, inc.',
//   designers: 'Allan Alcorn',
//   description: 'Pong is one of the earliest arcade video games. It is a table tennis sports game featuring simple two-dimensional graphics.',
//   releaseYear: '1972'
// },{
//   name: 'Pacman',
//   image: 'http://www.mobygames.com/images/covers/l/253219-pac-man-nes-front-cover.png',
//   developers: 'Namco, Atari, Namco Networks, Interactive Brains',
//   designers: 'Toru Iwatani',
//   description: 'Pacman is a very basic arcade game that literally everybody has played',
//   releaseYear: '1980'
// },{
//   name: 'Joust',
//   image: 'https://static.giantbomb.com/uploads/original/9/93770/2365976-a7800_joust.jpg',
//   developers: 'WMS Industries, Atari, Williams Entertainment Inc., HAL Laboratory',
//   designers: 'John Newcomer',
//   description: 'Players will use a button and joystick to control a knight riding a flying ostrich. The point of the game is to progress through levels by defeating groups of enemy knights riding buzzards.',
//   releaseYear: '1982'
// },{
//   name: 'Tetris',
//   image: 'https://static.giantbomb.com/uploads/original/9/93770/2362305-nes_tengentetrisunlicenced.jpg',
//   developers: 'Sega, Philips, Ubisoft, Spectrum HoloByte, EA Mobile,',
//   designers: 'Alexey Pajitnov, Vladimir Pokhilko',
//   description: 'Tetris is a tile-matching puzzle video game that has literally been played by everybody for years and years.',
//   releaseYear: '1984'
// },{
//   name: 'Super Mario Bros',
//   image: 'https://vignette.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443',
//   developers: 'Sega, Philips, Ubisoft, Spectrum HoloByte, EA Mobile,',
//   designers: 'Alexey Pajitnov, Vladimir Pokhilko',
//   description: 'Super Marios Bros is a platform objective based video game where you must save princess Peach by grinding through loads of dificult levels and worlds and defeating multiple bady guys and villains',
//   releaseYear: '1984'
// },{
//   name: 'Doom',
//   image: 'https://vignette2.wikia.nocookie.net/doom/images/8/85/Doom.jpg/revision/latest?cb=20080913150951',
//   developers: 'Vicarious Visions, GT Interactive, id Software',
//   designers: ' John Romero, Tom Hall, id Software, American McGee, Tim Willits, Sandy Petersen, Shawn Green',
//   description: 'Doom, a science fiction/horror themed video game, the story is advanced with short messages displayed between each section of the game (called episodes), the action as the player character progresses through the levels, and some visual cues.',
//   releaseYear: '1993'
// },{
//   name: 'Q*bert',
//   image: 'https://static.giantbomb.com/uploads/scale_small/9/93770/2367804-a2600_qbert_none.jpg',
//   developers: ' Atari, Gottlieb, Parker Brothers, Hasbro Interactive',
//   designers: 'Warren Davis, Jeff Lee',
//   description: 'The game is played using a single, diagonally mounted four-way joystick. The player controls Q*bert, who starts each game at the top of a pyramid made of 28 cubes, and moves by hopping diagonally from cube to cube. Landing on a cube causes it to change color, and changing every cube to the target color allows the player to progress to the next stage.',
//   releaseYear: '1982'
// },{
//   name: 'Breakout',
//   image: 'https://i.pinimg.com/736x/9a/35/9f/9a359fb684be319bba30b9fba9dcf3b0--super-breakout-breakout-game.jpg',
//   developers: ' Atari, Atari, Inc.',
//   designers: ' Steve Wozniak, Nolan Bushnell',
//   description: 'In the game, a layer of bricks lines the top third of the screen. A ball travels across the screen, bouncing off the top and side walls of the screen. When a brick is hit, the ball bounces away and the brick is destroyed. The player loses a turn when the ball touches the bottom of the screen.',
//   releaseYear: '1976'
// },{
//   name: 'Space Invaders',
//   image: 'http://www.ocdgamer.dk/covers_full/space_invaders_a2600.jpg',
//   developers: 'Taito',
//   designers: 'Tomohiro Nishikado',
//   description: 'Space Invaders is a two-dimensional fixed shooter game in which the player controls a laser cannon by moving it horizontally across the bottom of the screen and firing at descending aliens. The player defeats an alien, and earns points, by shooting it with the laser cannon.',
//   releaseYear: '1978'
// },{
//   name: 'The Legend of Zelda',
//   image: 'https://s-media-cache-ak0.pinimg.com/originals/b9/7d/3c/b97d3ca2e10ba0264a4cc493a062dbf0.jpg',
//   developers: ' Nintendo Co., Ltd., Nintendo Entertainment Analysis & Development',
//   designers: 'Shigeru Miyamoto, Takashi Tezuka',
//   description: 'The Legend of Zelda incorporates elements of action, adventure, and role-playing games. The player controls Link from a flip-screen overhead perspective as he travels in the overworld.',
//   releaseYear: '1986'
// },{
//   name: 'Sonic the Hedgehog',
//   image: 'https://vignette.wikia.nocookie.net/sonic/images/b/b1/Sonic-the-Hedgehog-Cover.png/revision/latest?cb=20170801064505',
//   developers: 'Sega, Sonic Team, Backbone Entertainment',
//   designers: ' Yuji Naka, Hirokazu Yasuhara, Naoto Ohshima, Rieko Kodama',
//   description: 'The player controls Sonic, who aims to halt Robotniks plans by freeing his animal friends and collecting the emeralds himself.',
//   releaseYear: '1991'
// }];
//
// mongoose.connect(dbURI, { useMongoClient: true })
//   .then(db => db.dropDatabase())
//   .then(() => Game.create(gameData))
//   .then(games => console.log(`${games.length} games created!`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());
