// declaring DOM variables
let player1Deck = document.querySelector('.player1Deck');
let player1CardsWon = document.querySelector('.player1CardsWon');
let player1Cards = document.querySelector('.player1DCards');
let player2Deck = document.querySelector('.player2Deck');
let player2CardsWon = document.querySelector('.player2CardsWon');
let player2Cards = document.querySelector('.player2Cards');
let cardHolder = document.querySelectorAll('.cardHolder')

// creating suits and ranks
const suits = ['♣', '♦', '♥', '♠'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }
}

class card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

// creating new deck function so we can eventually just create new deck
function newDeck() {
    for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < suits.length; i++) {
            ranks[j] = card.rank;
            suits[i] = card.suit;
        }
    }
}

// shuffling the deck we made above^^
function shuffle() {
    for (let i = deck.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let random = deck[i];
        deck[i] = deck[j];
        deck[j] = random;
    }
}

startGame();
function startGame() {
    const newDeck = new deck()
    newDeck.shuffle();
    const deckSplit = Math.ceil(deck.cards.length / 2);
    player1Deck = new deck(deck.slice(0, deckSplit));
    player2Deck = new deck(deck.slice(deckSplit, deck.cards.length));
}

function flipCard() {
    cardHolder.innerText = `${deck.cards.rank} ${deck.cards.suit}`;
    cardHolder.classList.add("card");
    if (deck.suit === '♣' || deck.suit === '♠') {
        cardHolder.classList.add('black');
    } else {
        cardHolder.classList.add('red');
    }
    return cardHolder;
}

player1Deck.appendChild(player1Deck[0].flipCard());
