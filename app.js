// declaring DOM variables
let player1Deck = document.querySelector('.player1Deck');
let player1CardsWon = document.querySelector('.player1CardsWon');
let player1Cards = document.querySelector('.player1DCards');
let player2Deck = document.querySelector('.player2Deck');
let player2CardsWon = document.querySelector('.player2CardsWon');
let player2Cards = document.querySelector('.player2Cards');

// creating suits and ranks
const suits = ['♣', '♦', '♥', '♠'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];

// creating new deck function so we can eventually just create new deck
function newDeck() {
    ranks.forEach(function (rank) {
        suits.forEach(function (suit) {
            let card = {
                rank: rank,
                suit: suit,
            }
            deck.push(card);
        })
    })
}

newDeck();

// shuffling the deck we made above^^
function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let random = deck[i];
        deck[i] = deck[j];
        deck[j] = random;
    }
}

// 
function splitShuffle() {
    const deckSplit = Math.ceil(deck.length / 2)
    const player1Deck = 
}