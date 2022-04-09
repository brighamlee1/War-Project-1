// declaring DOM variables
let player1Deck = document.querySelector('.player1Deck');
let player1CardsWon = document.querySelector('.player1CardsWon');
let player1Cards = document.querySelector('.player1Cards');
let player2Deck = document.querySelector('.player2Deck');
let player2CardsWon = document.querySelector('.player2CardsWon');
let player2Cards = document.querySelector('.player2Cards');
let cardHolder1 = document.querySelector('.cardHolder1')
let cardHolder2 = document.querySelector('.cardHolder2')
let startTheGame = document.querySelector('.start-game')

// creating suits and ranks
const cardAttributes = {
    suits: ['♣', '♦', '♥', '♠'],
    ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
}

let war = false;
const deck = [];

startTheGame.addEventListener('click', () => {
    startGame();
})

function startGame() {
    newDeck();
    shuffle();
    deckSplit();
}

// creating new deck function 
function newDeck() {
    cardAttributes.suits.forEach((suit) => {
        cardAttributes.ranks.forEach((rank, i) => {
            const card = {
                suit: suit,
                rank: rank,
                cardRank: i + 2,
            }
            deck.push(card);
        })
    })
}

function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let random = deck[i];
        deck[i] = deck[j];
        deck[j] = random;
    }
}

function deckSplit() {
    const deckSplit = Math.ceil(deck.length / 2);
    player1Deck = deck.slice(0, deckSplit);
    player2Deck = deck.slice(deckSplit, deck.length);
}

let i = 0;
player1CardsWon = [];
function player1Flip() {
    if (i < player1Deck.length && player2Deck.length) {
        if (player1Deck[i].suit == '♣' || player1Deck[i].suit == '♠') {
            cardHolder1.classList.add('black');
        } else {
            cardHolder1.classList.add('red');
        }
        cardHolder1.classList.add('card');
        cardHolder1.innerText = `${player1Deck[i].rank} ${player1Deck[i].suit}`;

        if (player2Deck[i].suit == '♣' || player2Deck[i].suit == '♠') {
            cardHolder2.classList.add('black');
        } else {
            cardHolder2.classList.add('red');
        }
        cardHolder2.innerText = `${player2Deck[i].rank} ${player2Deck[i].suit}`;
        cardHolder2.classList.add('card');
        i++;
        compareCards();
    }
}

player1Deck.addEventListener('click', player1Flip);

// player2Deck.addEventListener('click', player2Flip);

let cardArray = [];
function compareCards() {
    if (player1Deck[0].cardRank > player2Deck[0].cardRank) {
        player1Deck.shift();
        player2Deck.shift();
        player1Deck.push(player1Deck[0]);
        player1Deck.push(player2Deck[0]);
    }
    else if (player2Deck[0].cardRank > player1Deck[0].cardRank) {
        player1Deck.shift();
        player2Deck.shift();
        player2Deck.push(player1Deck[0]);
        player2Deck.push(player2Deck[0]);
    }
}
