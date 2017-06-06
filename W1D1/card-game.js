/*

  Logic for card game

*/


// Card constructor
function Card(suit, rank){
	this.suit = suit
	this.rank = rank
}

// adding the print method to Card
Card.prototype.print = function(){
	const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
	const ranks = {
		1: "Ace",
		11: "Jack",
		12: "Queen",
		13: "Kings"
	}

	return `${ranks[this.rank] ? ranks[this.rank] : this.rank} of ${suits[this.suit]}`
}

// Deck constructor
function Deck(){
	let deck_of_cards = []

// create the deck of cards
	for(let suit = 0; suit < 4; suit++){
		for(let rank = 1; rank <= 13; rank++){
			deck_of_cards.push(new Card(suit, rank))
		}
	}

// deal a card off the deck of cards
	this.deal = () => {
		if(deck_of_cards){
			return deck_of_cards.pop()
		} else {
			// Rebuild the deck somehow?
			// turn create deck of cards
		}
	}

	this.shuffle = () => {
		for(let i = 0; i < deck_of_cards.length; i++){
			let j = Math.floor(Math.random()*deck_of_cards.length)
			let temp = deck_of_cards[i]
			deck_of_cards[i] = deck_of_cards[j]
			deck_of_cards[j] = temp
		}
	}
}

// Game Board constructor
function GameBoard(){
	// create deck for game
	let gameDeck = new Deck()
	let dealer_hand = []

	// shuffles deck, initializes players
	this.startGame = () => {
		gameDeck.shuffle
		let player_one = new Player(gameDeck.deal, name)
		let player_two = new Player(gameDeck.deal, name)
		dealer_hand += gameDeck.deal
	}

	this.resolveRound = () => {
		switch (win_condition_state) {
			// P1: correct, P2: correct
			case win_condition_state: 1
				// add another card to dealer hand
				dealer_hand += gameDeck.deal
				// reset player guesses
				player_one.guess = ""
				player_two.guess = ""
				break;
			// P1: correct, P2: incorrect
			case win_condition_state: 2
				player_one.winnings += dealer_hand.pop()
				player_one.winnings += player_two.hand.pop()
				break;
			// P1: incorrect, P2: correct
			case win_condition_state: 3
				player_two.winnings += dealer_hand.pop()
				player_two.winnings += player_two.hand.pop()
				break;
			// P1: incorrect, P2: incorrect
			case win_condition_state: 4
				dealer_hand += gameDeck.deal
				break;
			default:
				console.log("something went wrong")
				break;
		}
	}


}

// Player constructor
function Player(card, name){
	this.hand = []
	this.name = name
	this.guess = ""
	this.winnings = []

	this.hand += card
}


/*
  Display for card game

*/








//
// let my_deck = new Deck()
// my_deck.shuffle()
// // console.log(my_deck.debug())
// // console.log(my_deck.deck_of_cards)
// console.log(my_deck.deal().print())
//
// let player_one_hand = []
// let player_two_hand = []
// let dealer_hand = []
// let player_one_bet = ""
// let player_two_bet = ""
// let player_one_score = []
// let player_two_score = []
//
// function startGame(){
// 	let deckForGame = new Deck()
// 	deckForGame.shuffle
// }
//
// function startRound(){
// 	player_one_hand = deckForGame.deal
// 	player_two_hand = deckForGame.deal
//
// 	// display each hand
//
// 	// player one chooses higher or lower using a button or text or something
// 	// player two chooses higher or lower in the same way
//
// 	dealer_hand += deckForGame.deal
//
//
// }
//
// function resolveRound(){
//
// }
