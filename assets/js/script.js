// Wait for the DOM to finish loading before running the game
// Add event listeners 

document.addEventListener("DOMContentLoaded", () => {
    const cardsArea = document.getElementById("cards-area");

    // 8 Unique Flags 
    const flagImages = [
        "albania.jpg", "newzealand.png", "australia.png", "cambodia.png",
        "palestine.webp", "ireland.png", "italy.png", "kosovo.png",
    ];

    // Duplicating flags to create pairs
    let cards = [...flagImages, ...flagImages]
    console.log(cards);
});