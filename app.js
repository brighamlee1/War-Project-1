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
newDeck()