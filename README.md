# Flag Memory Game
[Link to the live site](https://xhesjana1.github.io/flag-memory-game/)

## INTRODUCTION
This game is my second project with Code Institute as part of my Full Stack Development Course.
The main purpose of this project is to build a fully functional game within a web application using JavaScript, HTML, and CSS.

The Flag Memory Game is a web application designed to provide users with a fun and interactive way to play a flag-themed memory game. It helps improve concentration and short-term memory while allowing players to learn and recognize flags from around the world. The game keeps users engaged as they absorb new information naturally, offering a quick and enjoyable way to challenge the brain and test focus.

# User Experience
A user experience introduces the game on the homepage, providing a brief explanation of how to play and the benefits of playing the game. Once user enter the game, the user should be able to click on the first card, and the timer should automatically start.

Key Features:

* Live Timer: Tracks the time taken to complete the game by counting down.

* Touch-Friendly: Optimized for mobile devices and Ipad.

* Adaptability: Fully responsive design for seamless play on any device.

* Flip Count: Tracks the number of flips made during gameplay.

* Score Display: Shows the player's score at the end of the game.

* Easy to Start: The game begins immediately once the first card is clicked, without needing to press a separate play button.

* Reset Option: Users can easily reset the game whenever they wish.


# Creator Experience

As a creator, I aim to ensure that users have an engaging and seamless experience on the Flag Memory Game website. The following objectives outline the desired user interactions and features:

* Responsive and User-Friendly Design: Ensure the website is fully responsive.

* Functional Gameplay: Develop a fully functional game that operates smoothly, with features such as tracking flipped cards, handling matches and mismatches: 
    * Match: Keep the cards face-up and updates the score tracker.​ 
    * Mismatch: Flip the cards back over after a brief delay, allowing the player to remember their positions and updates the flips score.​


* Time Management: Implement a countdown timer that starts when the first card is flipped, displaying the remaining time prominently. The game should automatically end when the timer reaches zero and presenting a message to inform the player that the game is over.​



 
## Features implemented upon webpage release:
The user is shown the homepage, which provides the title of the game, clearly indicating the purpose of the website. It also includes instructions on how to play the game and what to do in order to enter and start playing. Below this, the benefits of playing the game are displayed.

Once the user enters the game, the timer starts at 50 seconds and remains at 50 seconds until the user decides to flip a card. When the user flips a card, the timer will begin counting down. If the first and second cards do not match, they will flip back to their original positions, and the flip count will increase by 1. If the user flips more cards and matches a pair, the score will be updated accordingly.

If the user is struggling to remember the card positions or doesn't like the way the cards are shown, they can restart the game at any time. The timer will reset, and both the score and flip count will be set back to 0.

If the user does not manage to flip all the cards within the given time, a pop-up message will appear, notifying them that the game is over.

## Fatures planned to implement later:

In the future, I would like to add a high score tracker. This feature is not yet implemented but has been included in the user stories as a "could have" item. I hope to improve this in future updates. All other user stories and the decision-making board have been completed as outlined below.

User Stories                                   | MoSCoW priority          | Status     |
| --------------------------------------------|:-------------------------:| ------------:|
| Instructions                                   | must have                | Done       |
| Game Navigation                                | must have                | Done       |
| Game Interface                                 | must have                | Done       |
| Responsive Design                              | must have                | Done       |
| Time, Correct Score, Flips and Reset Button Displayed| must have          | Done       |
| High Score Tracker                             | Could have              |Not Implemented|

# Colours used:

### Home Page.

Background color - #2C2C2C;

Text - aliceblue - #F0F8FF 

Form text - black and white by default 

### Game Page

Background color - white by default

cards background color- #474747

Text - black and white by default

<img src="docs\all-color-theme-used.jpeg">

## Contrast Checker for colours

Home Page

<img src="docs\contrast -checker-homepage.JPG">

Game Page

<img src="docs\contrast-checker-homepage.JPG">
<img src="docs\contrast -checker-gamepageone.JPG">

# Fonts

* Orbitron, sans-serif

# Testing

### JS testing with JSHint

#### I tested all functions and was able to use JSHint for code validation. Additionally, I tested the JavaScript manually while building the code by using the browser console and by playing the game myself. This would be considered manual testing.

I was able to test the most important functions and game features, all of which are working as expected.

Test results are shown below:

<img src="docs/testing-with-JSHint.JPG">