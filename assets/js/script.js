// Wait for the DOM to finish loading before running the game
// Add event listeners 

document.addEventListener("DOMContentLoaded", () => {
    const cardsArea = document.getElementById("cards-area");
    const scoreDisplay = document.getElementById("score");
    const resetButton = document.getElementById("reset-button");
    const flipsDisplay = document.getElementById("flips");

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

    // Duplicate flags to create pairs
    let cards = [];

    function shuffle(cards) {
        for (let allCards = cards.length - 1; allCards > 0; allCards--) {
            const card = Math.floor(Math.random() * (allCards + 1));
            [cards[allCards], cards[card]] = [cards[card], cards[allCards]];
        }
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

    cards = shuffle([...flagImages, ...flagImages]);

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let score = 0;

    function createBoard() {
        cardsArea.innerHTML = '';
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        score = 0;
        scoreDisplay.textContent = score;
        cards = shuffle([...flagImages, ...flagImages]);

        // Loop through the cards array and create image elements
        cards.forEach(flag => {
            if (!flag) {
                console.warn("Warning: A flag entry is missing.");
                return;
            }
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

            // Check if images are being appended correctly
            // if (cardsArea) {
            //     cardsArea.appendChild(imgElement);
            //     console.log(`Flag added successfully: ${flag}`);
            // } else {
            //     console.error("Error: cardsArea is null. Cannot append images.");
            // }

            const back = document.createElement("div");
            back.classList.add("back-face");
            back.innerText = "?";

            card.appendChild(imgElement);
            card.appendChild(back);
            cardContainer.appendChild(card);
            cardsArea.appendChild(cardContainer);

            card.addEventListener("click", () => flipCard(card));


        });
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
    resetButton.addEventListener("click", createBoard);

    createBoard();

});