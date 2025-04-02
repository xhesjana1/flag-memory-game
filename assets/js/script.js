// Wait for the DOM to finish loading before running the game
// Add event listeners 

document.addEventListener("DOMContentLoaded", () => {
    const cardsArea = document.getElementById("cards-area");

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
    let cards = [...flagImages, ...flagImages];

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

    // Loop through the cards array and create image elements
    cards.forEach(flag => {
        if (!flag) {
            console.warn("Warning: A flag entry is missing.");
            return;
        }

        const imgElement = document.createElement('img');
        imgElement.src = `assets/images/${flag}`;

        if (!altTextMap[flag]) {
            console.warn(`Warning: No alt text found for ${flag}`);
        }

        imgElement.alt = altTextMap[flag] || "Unknown Flag";
        imgElement.classList.add('card');

        console.log(`Adding flag: ${flag} with alt: ${imgElement.alt}`);
        
        // Check if images are being appended correctly
        if (cardsArea) {
            cardsArea.appendChild(imgElement);
            console.log(`Flag added successfully: ${flag}`);
        } else {
            console.error("Error: cardsArea is null. Cannot append images.");
        }
    });

let firstCard, secondCard;
    let lockBoard = false;
    let score = 0;

    document.querySelector(".score"). textContent = score;

    function flipCard(card) {
        if (lockBoard || card === firstCard) return;

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
});