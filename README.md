# Flag Memory Game
[Link to the live site](https://xhesjana1.github.io/flag-memory-game/)

<img src="docs/homepage-amiresponsive.JPG">

## INTRODUCTION
This game is my second project with Code Institute as part of my Full Stack Development Course.
The main purpose of this project is to build a fully functional game within a web application using JavaScript, HTML, and CSS.

The Flag Memory Game is a web application designed to provide users with a fun and interactive way to play a flag-themed memory game. It helps improve concentration and short-term memory while allowing players to learn and recognize flags from around the world. The game keeps users engaged as they absorb new information naturally, offering a quick and enjoyable way to challenge the brain and test focus.

## UX Design – The Five Planes of UX
My Flags Memory Game was designed and developed following The Five Planes of UX to ensure a user-friendly and engaging experience.

* The Strategy Plane
The purpose of the project is to create a fun, interactive memory game that also helps users learn and recognize world flags. The game is aimed at users who enjoy quick, challenging games with an educational twist. This game is for all type of users from kids to adults. The homepage includes an introduction explaining the purpose and benefits of the game.

* The Scope Plane. Based on the strategy, the following core features were defined:
    * A homepage with a site introduction and the benefits of playing the game.
    * A user form field in the homepage where players must enter their name before starting the game.
    * A playable memory game with randomly selected flag cards.
    * A 50-second countdown timer at the top of the game page that begins when the first card is flipped.
    * A score counter displayed at the top of the game page that tracks successful matches.
    * A flip counter displayed at the top of the game page that tracks how many flips you have done.
    * An option to restart the game at any time either after the game ends or even in the middle of the game if you're unhappy with how the flags are randomly displayed..

* The Structure Plane. The structure ensures a smooth user journey from start to finish:

    * Users are first introduced to the site and its purpose.

    * They are required to log their name to begin.

    * Upon clicking "Play Game," they are directed to the game screen where the timer and game play begin automatically after the first card flip.

    * Users can see their score, number of flips, and the remaining time while playing the game.

    * After the game ends, they can choose to restart and play again.

* The Skeleton Plane. The interface layout is intuitive and focused on ease of use:

    * A clean homepage with clear instructions and a "Play Game" button.

    * The game screen features a grid layout with flag cards.

    * The timer and score counter are prominently placed at the top of the game board.

    * Clear restart functionality is available for users to replay the game anytime.

* The Surface Plane. The visual design is engaging and consistent:

    * The Orbitron font is used to give the game a sleek, modern, and slightly futuristic look. The colour scheme is simple and clean, avoiding visual clutter ideal for users who are advised by their doctors to engage in cognitive activities. The white background helps minimize distractions, making it easier for players to focus on the game. It's also designed to be user-friendly and easy for kids to play.

    * Flag images are clear and easily recognizable.

    * Button, cards, and text are styled with consistency in spacing, colour, and responsiveness to make the experience enjoyable on all screen sizes.

# User Experience
A user experience introduces the game on the homepage, providing a brief explanation of how to play and the benefits of playing the game. Once user enter the game, the user should be able to click on the first card, and the timer should automatically start.

Key Features:

* Live Timer: Tracks the time taken to complete the game by counting down.

* Touch-Friendly: Optimized for mobile devices and IPad.

* Adaptability: Fully responsive design for seamless play on any device.

* Flip Count: Tracks the number of flips made during game play.

* Score Display: Shows the player's score at the end of the game.

* Easy to Start: The game begins immediately once the first card is clicked, without needing to press a separate play button.

* Reset Option: Users can easily reset the game whenever they wish.

# Creator Experience

As a creator, I aim to ensure that users have an engaging and seamless experience on the Flag Memory Game website. The following objectives outline the desired user interactions and features:

* Responsive and User-Friendly Design: Ensure the website is fully responsive.

* Functional Game Play: Develop a fully functional game that operates smoothly, with features such as tracking flipped cards, handling matches and mismatches: 
    * Match: Keep the cards face-up and updates the score tracker.​ 
    * Mismatch: Flip the cards back over after a brief delay, allowing the player to remember their positions and updates the flips score.​

* Time Management: Implement a countdown timer that starts when the first card is flipped, displaying the remaining time prominently. The game should automatically end when the timer reaches zero and presenting a message to inform the player that the game is over.​

## Features implemented upon webpage release:
The user is shown the homepage, which provides the title of the game, clearly indicating the purpose of the website. It also includes instructions on how to play the game and what to do in order to enter and start playing. Below this, the benefits of playing the game are displayed.

Once the user enters the game, the timer starts at 50 seconds and remains at 50 seconds until the user decides to flip a card. When the user flips a card, the timer will begin counting down. If the first and second cards do not match, they will flip back to their original positions, and the flip count will increase by 1. If the user flips more cards and matches a pair, the score will be updated accordingly.

If the user is struggling to remember the card positions or doesn't like the way the cards are shown, they can restart the game at any time. The timer will reset, and both the score and flip count will be set back to 0.

If the user does not manage to flip all the cards within the given time, a pop-up message will appear, notifying them that the game is over.

## Features planned to implement later:

In the future, I would like to add a high score tracker. This feature is not yet implemented but has been included in the user stories as a "could have" item. I hope to improve this in future updates. All other user stories and the decision-making board have been completed as outlined below.

User Stories                                    |   Priority                | Status     |
| --------------------------------------------  |:-------------------------:| ------------:|
| Instructions                                   | must have                | Done       |
| Game Navigation                                | must have                | Done       |
| Game Interface                                 | must have                | Done       |
| Responsive Design                              | must have                | Done       |
| Time, Correct Score, Flips and Reset Button Displayed| must have          | Done       |
| High Score Tracker                             | Could have              |Not Implemented|

# Colours used:

### Home Page.

Background colour - #2C2C2C;

Text - aliceblue - #F0F8FF 

Form text - black and white by default 

### Game Page

Background colour - white by default

cards background colour- #474747

Text - black and white by default

<img src="docs\all-color-theme-used.jpeg">

## Contrast Checker for colours

Contrast Checker passed all the checks.

Home Page

<img src="docs\contrast-checker-homepage.JPG">

Game Page

<img src="docs\contrast-checker-homepage.JPG">
<img src="docs\contrast -checker-gamepageone.JPG">

# Fonts

* Orbitron, sans-serif

I chose this font because it enhances the overall appearance of the game, giving it a more modern and futuristic look.

## Home Page

On the homepage, I intentionally chose a dark background with white text positioned in the center of the page to ensure readability and focus. The title is placed at the top, followed by a short paragraph explaining how to enter the game.

Below that, there's a quick and clear description of how to play explaining that the game starts by flipping a card to begin matching pairs. Users are required to enter their name in a form before accessing the game. If the name field is left empty, a message will appear prompting the user to fill it out, as it is a mandatory field.

Once the name is submitted, users can start playing the game. I’ve also included a section that highlights the benefits of playing the game, aimed at users who are interested in understanding the value of this activity.

For younger users or kids, the main instructions and form are placed at the top so they can quickly read how to start and begin playing. For adults or those interested in more details, the benefits section is available below the form. The layout is designed this way to cater to both types of users keeping it engaging and accessible for everyone.

#### On X Large Screen

<img src="docs\xl-monitor-homepage.JPG">

#### On Laptop Screen

<img src="docs\laptop-home-page.JPG">

#### On IPod Screen

<img src="docs/Ipad-home-page.JPG">

#### On Tablet Screen

<img src="docs/tablet-phone-home-page.JPG">


#### On Small Mobile Screen

<img src="docs\small-mobile-phone-home-page.JPG">



## Game Page

The game page uses very simple and clean colours to avoid distracting the user, allowing full attention to be focused on the game play. I kept the same font and style as the homepage for consistency, but preferred to keep the background white as it was by default because it provides a calm and clear interface, especially for users such as patients recovering in hospitals who may have been recommended memory games by doctors.

Each time the game starts, the cards appear in random positions, keeping the experience fresh and challenging. After finishing the game, users can simply click the Reset button to play again. I intentionally left the reset button red with white text so it stands out and easily catches the user's attention if needed to start a new game. I chose to include only one main button to keep the interface simple and user friendly.

All remaining text is styled in black to maintain good readability. The page also features a countdown timer so users can easily track how much time they have left to reveal all the cards. Additionally, there’s a live display of the current score and the number of flips it took to complete the game.

Overall, this game is simple, fun, and well received by my 7 and 9 year old nephews who enjoyed playing it on the phone and have had a great time with it!

This game was also played by my dad, who is 70 years old, as recommended by his doctor. He enjoyed it and confirmed that 50 seconds is a good amount of time. The more he plays, the more comfortable he gets, and he now finishes the game in less than 35 seconds.

#### On XX Large Screen

<img src="docs\xxl-monitors-game-page.JPG">

#### On Laptop Screen

<img src="docs\laptop-game-page.JPG">

#### On IPod Screen

<img src="docs\Ipad-game-page.JPG">

#### On Mobile Screen

<img src="docs\mobile-phone-game-page.JPG">

#### On Small Mobile Screen

<img src="docs\small-mobile-phone-game-page.JPG">

# Technologies used:

JS

HTML

CSS

Bootstrap

FontAwsome

Google Fonts

Favicons

Google Console Developer Tools

VS Code

JSHint

Github

The W3C for CSS

The W3C for HTML

Am I responsive

Contrast Checker

Balsamiq

## Balsamiq Wireframes

#### Home Page Balsamiq on Desktop

<img src="docs\flag-game-homepage.png">

#### Game Page Balsamiq on Desktop

<img src="docs\flag-game-page-desktop.png">

#### Game Page Balsamiq on Tablet

<img src="docs\flag-game-mobile-tablet.png">


# Testing

Home page button.

The button on the homepage is correctly linked to the game page, and this was tested manually. If a name is not entered, a pop-up message appears prompting the user to fill in the name field, as it is required. I made this field mandatory as I would like all users to enter their name first. 

<img src="docs\manual-testing-form.JPG">

Once the user enters their name and clicks "Play Game," they are taken to the game page where they can begin playing.

<img src="docs\manual-testing-homepage-enter-name.JPG">

## Automatic Testing

Home Page Validation W3C MarkUp: No errors or warnings found.

<img src="docs\validatorW3C-markup-homepage.JPG">


Game Page Validation W3C MarkUp: No errors or warnings found.

<img src="docs\validatorW3-html-gamepage.JPG">

Stylesheet W3C CSS Validation: No errors or warnings found.

<img src="docs\validatorW3C-CSS.JPG">


### JS testing with console

 This game was tested using the console developer tools and found no errors or warnings.


<img src="docs\console-JS-test.JPG">

### JS testing with JSHint

#### I tested all functions and was able to use JSHint for code validation no errors found. Additionally, I tested the JavaScript manually while building the code by using the browser console and by playing the game myself. This would be considered manual testing.

I was able to test the most important functions and game features, all of which are working as expected.

Test results are shown below:

<img src="docs/testing-with-JSHint.JPG">

### Checked lighthouse dev tool about the Accessibility for all two pages

Homepage

<img src="docs\lighthouse-homepage.JPG">

Gamepage

<img src="docs\lighthouse-gamepage.JPG">

### Manual Testing:

I have manually tested the game by playing it multiple times, and everything is working as intended with no errors found. I even tried to break the game by attempting to flip more than two cards at once, but the logic worked perfectly only two cards could be flipped at a time. This confirmed that the game is well-built and functions as expected.

I also tested the timer by measuring 50 seconds with my phone, and it was accurate the popup message appeared exactly when the time was up saying game over. I verified the scoring system and the flip counter by manually counting the number of flips, and both worked correctly. These tests were repeated several times manually.

In addition, I asked my boyfriend, my father, my nephews and a few friends to play the game, and they all gave the same feedback: the game is well-structured and easy to play and they could not break the game.

Gamepage

Once all the card are flips this is the pop up message you get "Game Over"  and the time automatically stops.

<img src="docs\testing-and-playing-the-game.JPG">

If you run out of time and don’t manage to flip all your cards, you will get again "Game Over" message. The timer will stop automatically, and you can no longer play the game. Once you click the ok button, the timer will reset to 0, the correct score will still be displayed on the screen along with flips, but to play the game again, you will need to reset it. Otherwise, the game cannot be played.

<img src="docs\game-over-message.JPG">
<img src="docs\once-press-ok-time-reset-to-zero.JPG">

### The screenshot below shows the game being tested by my father on a desktop.

<img src="docs/my-dad-testing-the-game.JPG">

#### Bootstrap

Bootstrap Grid system is working as intended successfully changing amount of columns on smaller devices making website fully responsive this.

### Devices used during testing:

Desktop Computer

Laptop

Iphone 13

Google Pixel 8

# Deployment

* The Code Institute student template was used to create this project.
* GitHub, navigate to my profile, and click on the repository (flag-memory-game). Then, go to Settings > Pages, set the Branch to Main, and click Save. Once saved, a link will appear with your live site on top of the github page

<img src="docs\github-deployment.JPG">

# Bugs and Fixes:

There were no bugs found, but in the future, I would like the cards to be displayed horizontally to make them look more like actual cards. I tried to complete this feature, but with the project submission approaching, I didn’t have enough time to focus on it as it may take a bit of time to do this. Additionally, I am currently taking a break from school due to health reasons. However, once I return, I will prioritize fixing this and ensuring the cards are displayed in a more card-like layout.


# Credits

The idea for the flag memory card game came from me. I love travelling and enjoy exploring new countries, so I thought it would be fun to create a game that features flags making it both entertaining and educational for kids and adults, helping users learn and memorize different flags. The memory game aspect was inspired by my dad, who was advised by his doctor to play memory card games to improve his focus and enhance his short-term memory.

Please note that a lot of the JavaScript code was taken from ChatGPT. I used it as a base and modified parts of it to fit the specific needs of my project.

The rest of the code used in this project is based on what I have learned through Code Institute.

Additionally, I want to acknowledge my mentor, Daniel, who has been a huge support and inspiration when it comes to JavaScript. He has helped and advised me three times, guiding me in the right direction when I was going wrong, and I am truly grateful for his support.

I would also like to mention that during this project (Project 2), I was not feeling well at all and was advised by my doctor to take some time away from the course. However, I tried my best to complete the project on time so that I could pass and then focus on my well-being.

Please note that all text in this project has been corrected by ChatGPT to ensure the grammar is displayed correctly.

* The text in home pages index.html was added by me but ChatGPT helped correct the grammar and refine the wording.

* The bootstrap section in index.html and game.html was created using Bootstrap, combined with elements from a Code Institute projects and my own content. (https://getbootstrap.com/)

* The idea for the form on the homepage was mine, but I was inspired by the lessons I completed in p1 with Code Institute.

* The colour on this project were chosen by me.

* The flag images for this project are taken from Wikipedia below links and picked by me: 

* [Flag of Portugal site ](https://en.wikipedia.org/wiki/Flag_of_Portugal)

* [Flag of Italy site ](https://en.wikipedia.org/wiki/Flag_of_Italy)

* [Flag of Kosovo site ](https://en.wikipedia.org/wiki/Flag_of_Kosovo#:~:text=The%20flag%20of%20Kosovo%20has,Ashkali%20and%20Egyptians)

* [Flag of Albania site ](https://en.wikipedia.org/wiki/Flag_of_Albania)

* [Flag of Spain site ](https://en.wikipedia.org/wiki/Flag_of_Spain)

* [Flag of Brazil site ](https://en.wikipedia.org/wiki/Flag_of_Brazil)

* [Flag of Cambodia site ](https://en.wikipedia.org/wiki/Flag_of_Cambodia)

* [Flag of Palestine site ](https://en.wikipedia.org/wiki/Flag_of_Palestine)

* [Fonts are taken here](https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Oswald:wght@200;300;400;500;600;700&display=swap)

* [Favicons are taken here](https://realfavicongenerator.net/)

* [The screenshot of the home page at the start was taken from Am I responsive  ](https://ui.dev/amiresponsive?url=https://xhesjana1.github.io/Jessy-s-Journeys/)


