# WDI30 Project 4: Gametastic

## Introduction

Gametastic was the app I created for project 4 during the Web Development Immersive course at General Assembly London, This is a MERN Stack app and it also uses the youtube API. It is another game based app but this concentrates more on creating a community in the whole of the gaming world and not just in certain aspects of it.

## The Idea

I wanted to create a MERN Stack app that would help bring together the gaming community and also help to get more people into gaming. I also wanted to do a MERN stack app on games because its something I am very interested in and because I am very interested in games I was always excited to work on the app and therfor really enjoyed working with React. I took some influence off Redit as I wanted all of the users to broadcast their certain opinions on certain games and I also gave the users the option to vote the games out of 5. It as simple as registering, logging in and then posting a game, I wanted to make the site very simple and basic like the old school video game machines.

## App Link

https://gametastic.herokuapp.com/

## Screenshots

Title: 

![Imgur](https://i.imgur.com/swSWVEr.png)

Games index: 

![Imgur](https://i.imgur.com/87oHFcM.png)

Games show:

![Imgur](https://i.imgur.com/n1KMHj6.png)

Comment/Youtube field (Logged Out):

![Imgur](https://i.imgur.com/vPgH5iW.png)

Comment/Youtube field (Logged In):

![Imgur](https://i.imgur.com/b0pbOGq.png)

## What was a success?

I had alot of success with understanding the youtube API and how awesome it is, It wasn't the easiest thing to get going but after some help from my colleagues I got it to pull videos down from youtube depending on the name of the game, for example if I went to add the game "Pokemon Blue" then it would pull down "Pokemon Blue" videos and show them on the GamesShow page. As I said it wasn't the easiest thing to do but once it was done I was very happy as It looked awesome.

Example code:

This code is the Axios request to the youtube API, the 'q' is telling it to find the videos through whatever the game name is hence the ``` gameRes.data.name ```. "Video Catergory" helped alot as it only brought gaming videos back and not IRL videos etc because we selected catergory '20' which is the gaming catergory on youtube.

```
    Axios
      .get(`/api/games/${this.props.match.params.id}`)
      .then( gameRes => {
        return Axios
          .get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              q: gameRes.data.name,
              part: 'snippet',
              maxResults: 3,
              videoCategoryId: 20,
              key: 'AIzaSyD0A_FNlw-7B7MF8vEyi6LWR5GqNDHs1gc',
              type: 'video'
            }
          })
```

## Challenges

My biggest hurdle on this project was probably the Youtube API as it was something I had never touched before and something that was completely new to me, the axios request was difficult to structure but after reading the Youtube documentation I got the hang of it. I enjoyed the challenge it offered and it helped me to understand that reading documentation is crucial as it can be the difference between code working or code throwing back errors. In my spare time I would love to work on the styling a bit more as there are a few things that need cleaning up like the forms and little features(buttons etc), styling was challenging as I didn't have enough time as I would of liked to because I got tunnel visioned working on the apps functionality and purpose.

## Conclusion

This was a great project for me as I really enjoyed using React for the first time to create a MERN stack app, it was great to explore the React libary and documentation to construct my Gametastic app and was also great to practise what I had already studied. I think if you look at how much I have progressed from project 1 to now its amazing, but it took alot of hard work and the hard work will continue.

## Currently

Working on improvements and trying to fix the buttons so I can get authentication back up and running.
