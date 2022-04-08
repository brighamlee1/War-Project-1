// declaring DOM variables
let player1Deck = document.querySelector('.player1Deck');
let player1CardsWon = document.querySelector('.player1CardsWon');
let player1Cards = document.querySelector('.player1DCards');
let player2Deck = document.querySelector('.player2Deck');
let player2CardsWon = document.querySelector('.player2CardsWon');
let player1Cards = document.querySelector('.player1Cards');

// creating deck class
class deck {
    constructor(cards) {
        this.cards = cards
    }
}

// creating card class
class card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

const suits = ['♣', '♦', '♥', '♠'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function newDeck() {
    for (let i = 0; i <= suits.length; i++) {
        suits[i].length
    }
}