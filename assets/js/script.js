// Wait for the DOM to finish loading before running the game
// Add event listeners 

document.addEventListener("DOMContentLoaded", () => {
    const cardsArea = document.getElementById("cards-area");
    const scoreDisplay = document.getElementById("score");
    const resetButton = document.getElementById("reset-button");
    const flipsDisplay = document.getElementById("flips");
    const flipsStream = document.querySelector("#flips");
    let flips = 0;
    let countdownTimerId;

    if (!cardsArea) {
        console.error("Error: 'cards-area' element not found in the DOM!");
        return;
    } else {
        console.log("Success: 'cards-area' found!");
    }

    // 8 Unique Flags
    const flagImages = [
        "albania.jpg", "newzealand.png", "australia.png", "cambodia.png",
        "palestine.webp", "ireland.png", "italy.png", "kosovo.png"
    ];

    let cards = [];

    // Loop through the array from the last element to the first
    function shuffle(cards) {
        for (let allCards = cards.length - 1; allCards > 0; allCards--) {
            const card = Math.floor(Math.random() * (allCards + 1));
            [cards[allCards], cards[card]] = [cards[card], cards[allCards]];
        }

        // Return the shuffled array
        return cards;
    }

    // Manually add alt text for each flag
    const altTextMap = {
        "albania.jpg": "Flag of Albania",
        "newzealand.png": "Flag of New Zealand",
        "australia.png": "Flag of Australia",
        "cambodia.png": "Flag of Cambodia",
        "palestine.webp": "Flag of Palestine",
        "ireland.png": "Flag of Ireland",
        "italy.png": "Flag of Italy",
        "kosovo.png": "Flag of Kosovo",
    };

    //duplicates the flagImages array ensuring each flag appears twice
    cards = shuffle([...flagImages, ...flagImages]);

    // Variables to track the first and second selected cards
    let firstCard = null;
    let secondCard = null;

    // Prevents more than two cards from being flipped at the same time
    let lockBoard = false;

    // Keeps track of the player's score
    let score = 0;

    /**
* Clear the game board before creating new cards
* Reset game state variables
* Shuffle the flag images to randomize the game board
*/
    function createBoard() {
        cardsArea.innerHTML = '';
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        score = 0;
        scoreDisplay.textContent = score;
        cards = shuffle([...flagImages, ...flagImages]);

        // This function iterates through the cards array to ensure all flag entries are valid.
        cards.forEach(flag => {
            if (!flag) {
                console.warn("Warning: A flag entry is missing.");
                return;
            }
            // Creates a memory card container, adds classes, sets a flag image, and associates the flag data with the card element.
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("col", "position-relative");
            const card = document.createElement("div");
            card.classList.add("memory-card");
            card.dataset.flag = flag;

            const imgElement = document.createElement('img');
            imgElement.src = `assets/images/${flag}`;

            if (!altTextMap[flag]) {
                console.warn(`Warning: No alt text found for ${flag}`);
            }

            imgElement.alt = altTextMap[flag] || "Unknown Flag";
            imgElement.classList.add('front-face');

            console.log(`Adding flag: ${flag} with alt: ${imgElement.alt}`);

            const back = document.createElement("div");
            back.classList.add("back-face");
            back.innerText = "?";

            card.appendChild(imgElement);
            card.appendChild(back);
            cardContainer.appendChild(card);
            cardsArea.appendChild(cardContainer);

            card.addEventListener("click", () => flipCard(card));


        });

        startCountdown();
    }

    function flipCard(card) {
        if (lockBoard || card === firstCard || card.classList.contains("matched")) return;

        card.classList.add("flipped");

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            lockBoard = true;
            flips++;
            flipsDisplay.textContent = flips;

            checkForMatch();
        }
    }

    // Increases number of flips every time a user flips the cards
    const increaseFlips = () => {
        flips++;
        flipsStream.innerText = flips;

        increaseFlips();
    };

    //Unlocking the board 
    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 1000);
    }

    function disableCards() {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        score++;
        scoreDisplay.textContent = score;

        resetBoard();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.flag === secondCard.dataset.flag;

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function resetGame() {
        createBoard();
        lockBoard = false;
        flips = 0;
        clearInterval(countdownTimerId);
    }

    resetButton.addEventListener("click", resetGame);

    createBoard();

    // Starts a countdown timer that decreases every second. Ends the game when time runs out
    function startCountdown() {
        let timerElement = document.getElementById('timer');
        let count = parseInt(timerElement.innerText);
        countdownTimerId = setInterval(function () {
            count--;
            timerElement.innerText = count;
            if (count === 0 || score === 8) {
                clearInterval(countdownTimerId);
                GameOver();
            }
        }, 1000);
    }

    // Function to handle Game Over state
    function GameOver() {
        lockBoard = true;
        alert("Game Over!");
    }

});