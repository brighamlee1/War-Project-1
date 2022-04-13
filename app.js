// declaring DOM variables
let player1Deck = document.querySelector('.player1Deck');
let player1CardsWon = document.querySelector('.player1CardsWon');
let player1Cards = document.querySelector('.player1Cards');
let player2Deck = document.querySelector('.player2Deck');
let player2CardsWon = document.querySelector('.player2CardsWon');
let player2Cards = document.querySelector('.player2Cards');
let cardHolder1 = document.querySelector('.cardHolder1');
let cardHolder2 = document.querySelector('.cardHolder2');
let startTheGame = document.querySelector('.start-game');
let draw = document.querySelector('.draw');
let winnerText = document.querySelector('.text');
let cards1 = document.querySelector('.cards1');
let cards2 = document.querySelector('.cards2');
let openDescriptionButton = document.querySelectorAll('[data-modal-target]');
let closeDescriptionButton = document.querySelectorAll('[data-close-button]');
let play = document.querySelector('.playAgain');
let war1 = document.querySelector('.war1');
let war2 = document.querySelector('.war2');
let wars1 = document.querySelector('.wars1');
let wars2 = document.querySelector('.wars2');
let warText = document.querySelector('.warText');
let warContainer = document.querySelector('.warContainer');


// creating suits and ranks
const cardAttributes = {
    suits: ['♣', '♦', '♥', '♠'],
    ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
}

// creating empty deck array
let deck = [];

// start game event listener
startTheGame.addEventListener('click', startGame);

// starting the game function
function startGame() {
    newDeck();
    shuffle();
    deckSplit();
    startTheGame.removeEventListener('click', startGame);

    // creating the event listener for the play again function (calling it inside here so that it cant be used until the start button has been pressed)
    play.addEventListener('click', playAgain);
    return;
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

// creating play again button so the user can play again
function playAgain() {
    winnerText.classList.remove('warStyles');
    warContainer.classList.add('hidden');
    player1CardsWon.innerText = 'Cards: 26';
    player2CardsWon.innerText = 'Cards: 26';
    cards1.classList.remove('cardHolder1');
    cards2.classList.remove('cardHolder2');
    winnerText.innerText = '';
    cards1.innerHTML = "";
    cards2.innerHTML = "";
    draw.addEventListener('click', playerFlip);
    deck = [];
    player1Deck = [];
    player2Deck = [];
    newDeck();
    shuffle();
    deckSplit();
    return;
}

// shuffle the deck
function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let random = deck[i];
        deck[i] = deck[j];
        deck[j] = random;
    }
}

// split the deck between player1 and player 2
function deckSplit() {
    const deckSplit = Math.ceil(deck.length / 2);
    player1Deck = deck.slice(0, deckSplit);
    player2Deck = deck.slice(deckSplit, deck.length);
    winner();
}

// declaring i outside the function to make it work
let i = 0;

// flipping over the first card of each player
function playerFlip() {
    if (i < player1Deck.length && player2Deck.length) {
        winnerText.classList.remove('warStyles');
        warContainer.classList.add('hidden');
        cards1.classList.add('cardHolder1');
        cards1.innerText = `${player1Deck[0].rank} ${player1Deck[0].suit}`;
        cards2.innerText = `${player2Deck[0].rank} ${player2Deck[0].suit}`;
        cards2.classList.add('cardHolder2');
        player1CardsWon.innerText = `Cards: ${player1Deck.length}`;
        player2CardsWon.innerText = `Cards: ${player2Deck.length}`;
        compareCards();
        winner();
    }
}

// changing color depending on the suit for player 1
function color1Change() {
    if (player1Deck[0].suit == '♣' || player1Deck[0].suit == '♠') {
        cards1.classList.add('black');
        cards1.classList.remove('red');
    }
    else if (player1Deck[0].suit == '♥' || player1Deck[0].suit == '♦') {
        cards1.classList.add('red');
        cards1.classList.remove('black');
    }
}

// changing color depending on the suit for player 2
function color2Change() {
    if (player2Deck[0].suit == '♣' || player2Deck[0].suit == '♠') {
        cards2.classList.add('black');
        cards2.classList.remove('red');
    }
    else if (player2Deck[0].suit == '♥' || player2Deck[0].suit == '♦') {
        cards2.classList.add('red');
        cards2.classList.remove('black');
    }
}

// changing colors of cards for the war cards condition depending on the suit
function color3change1() {
    if (player1Deck[3].suit == '♣' || player1Deck[3].suit == '♠') {
        wars1.classList.add('black');
        wars1.classList.remove('red');
    }
    else if (player1Deck[3].suit == '♥' || player1Deck[3].suit == '♦') {
        wars1.classList.add('red');
        wars1.classList.remove('black');
    }
}

function color3change2() {
    if (player2Deck[3].suit == '♣' || player2Deck[3].suit == '♠') {
        wars2.classList.add('black');
        wars2.classList.remove('red');
    }
    else if (player2Deck[3].suit == '♥' || player2Deck[3].suit == '♦') {
        wars2.classList.add('red');
        wars2.classList.remove('black');
    }
}

function color7change1() {
    if (player1Deck[7].suit == '♣' || player1Deck[7].suit == '♠') {
        wars1.classList.add('black');
        wars1.classList.remove('red');
    }
    else if (player1Deck[7].suit == '♥' || player1Deck[7].suit == '♦') {
        wars1.classList.add('red');
        wars1.classList.remove('black');
    }
}

function color7change2() {
    if (player2Deck[7].suit == '♣' || player2Deck[7].suit == '♠') {
        wars2.classList.add('black');
        wars2.classList.remove('red');
    }
    else if (player2Deck[7].suit == '♥' || player2Deck[7].suit == '♦') {
        wars2.classList.add('red');
        wars2.classList.remove('black');
    }
}
// end of color change for war cards

// drawing cards by calling the flip card function
draw.addEventListener('click', playerFlip);

// comparing cards to see which one wins that round or to start a war
function compareCards() {
    color1Change();
    color2Change();
    if (player1Deck[0].cardRank == player2Deck[0].cardRank) {
        winnerText.innerText = 'War Initiated!';
        winnerText.classList.add('warStyles');
        warWinner();
        if (player1Deck[3].cardRank == player2Deck[3].cardRank) {
            if (player1Deck[7].cardRank > player2Deck[7].cardRank) {
                wars1.innerText = `${player1Deck[7].rank} ${player1Deck[7].suit}`;
                wars2.innerText = `${player2Deck[7].rank} ${player2Deck[7].suit}`;
                warContainer.classList.remove('hidden');
                wars1.classList.add('war-cards1');
                wars2.classList.add('war-cards2');
                warText.innerText = 'Player 1 Wins the war!!';
                color7change1();
                color7change2();
                player1Deck.push(player1Deck.splice(0, 8));
                player1Deck.push(player2Deck.splice(0, 8));
            }
            else if (player2Deck[7].cardRank > player1Deck[7].cardRank) {
                wars1.innerText = `${player1Deck[7].rank} ${player1Deck[7].suit}`;
                wars2.innerText = `${player2Deck[7].rank} ${player2Deck[7].suit}`;
                warContainer.classList.remove('hidden');
                wars1.classList.add('war-cards1');
                wars2.classList.add('war-cards2');
                warText.innerText = 'Player 2 Wins the war!!';
                color7change1();
                color7change2();
                player2Deck.push(player1Deck.splice(0, 8));
                player2Deck.push(player2Deck.splice(0, 8));
            }
            else if (player1Deck < 7) {
                winnerText.innerText = 'Player 2 Wins the Game!!';
                player1CardsWon.innerText = `Cards: 0`;
                endGame();
            }
            else if (player2Deck < 7) {
                winnerText.innerText = 'Player 1 Wins the Game!!';
                player2CardsWon.innerText = `Cards: 0`;
                endGame();
            }
        }
        else if (player1Deck[3].cardRank > player2Deck[3].cardRank) {
            wars1.innerText = `${player1Deck[3].rank} ${player1Deck[3].suit}`;
            wars2.innerText = `${player2Deck[3].rank} ${player2Deck[3].suit}`;
            warContainer.classList.remove('hidden');
            wars1.classList.add('war-cards1');
            wars2.classList.add('war-cards2');
            warText.innerText = 'Player 1 Wins the war!!';
            color3change1();
            color3change2();
            player1Deck.push(player1Deck.splice(0, 4));
            player1Deck.push(player2Deck.splice(0, 4));
        }
        else if (player2Deck[3].cardRank > player1Deck[3].cardRank) {
            wars1.innerText = `${player1Deck[3].rank} ${player1Deck[3].suit}`;
            wars2.innerText = `${player2Deck[3].rank} ${player2Deck[3].suit}`;
            warContainer.classList.remove('hidden');
            wars1.classList.add('war-cards1');
            wars2.classList.add('war-cards2');
            warText.innerText = 'Player 2 Wins the war!!';
            color3change1();
            color3change2();
            player2Deck.push(player1Deck.splice(0, 4));
            player2Deck.push(player2Deck.splice(0, 4));
        }
    }
    else if (player1Deck[0].cardRank > player2Deck[0].cardRank) {
        winner();
        player1Deck.push(player1Deck.splice(0, 1));
        player1Deck.push(player2Deck.splice(0, 1));
        winnerText.innerText = 'Player 1 wins!';
    }
    else if (player2Deck[0].cardRank > player1Deck[0].cardRank) {
        winner();
        player2Deck.push(player1Deck.splice(0, 1));
        player2Deck.push(player2Deck.splice(0, 1));
        winnerText.innerText = 'Player 2 wins!';
    }
    else return;
}

// checking for a winner
function winner() {
    if (player1Deck.length < 1) {
        winnerText.innerText = 'Player 2 Wins the Game!!';
        player1CardsWon.innerText = `Cards: 0`;
        player2CardsWon.innerText = `Cards: 52`;
        endGame();
    } else if (player2Deck.length < 1) {
        winnerText.innerText = 'Player 1 Wins the Game!!';
        player1CardsWon.innerText = `Cards: 52`;
        player2CardsWon.innerText = `Cards: 0`;
        endGame();
    }
}

// checking for a winner before a war happens
function warWinner() {
    if (player1Deck.length < 5) {
        winnerText.innerText = 'Player 2 Wins the Game!!'
        player1CardsWon.innerText = `Cards: 0`;
        player2CardsWon.innerText = `Cards: 52`;
        endGame();
    } else if (player2Deck.length < 5) {
        winnerText.innerText = 'Player 1 Wins the Game!!'
        player1CardsWon.innerText = `Cards: 52`;
        player2CardsWon.innerText = `Cards: 0`;
        endGame();
    }
}

// gives ending game attributes that I'd like to give
function endGame() {
    winnerText.classList.remove('warStyles');
    warContainer.classList.add('hidden');
    cards1.classList.remove('cardHolder1');
    cards1.innerHTML = `Press play again to start a new game!`;
    cards1.classList.add('white');
    cards1.classList.remove('red');
    cards1.classList.remove('black');
    cards2.innerHTML = "Game Over";
    cards2.classList.add('blue');
    cards2.classList.remove('red');
    cards2.classList.remove('black');
    cards2.classList.remove('cardHolder2');
    draw.removeEventListener('click', playerFlip);
}


// creating modal for my game

// opening the modal
openDescriptionButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

// closing the modal
closeDescriptionButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

// function to make the opening of the modal happen
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

// function to make the closing of the modal happen
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}