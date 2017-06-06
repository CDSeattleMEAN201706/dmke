
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

let my_deck = new Deck()
my_deck.shuffle()
// console.log(my_deck.debug())
// console.log(my_deck.deck_of_cards)
console.log(my_deck.deal().print())

let player_one_hand = []
let player_two_hand = []
let dealer_hand = []
let player_one_bet = ""
let player_two_bet = ""
let player_one_score = []
let player_two_score = []

function startGame(){
	let deckForGame = new Deck()
	deckForGame.shuffle
}

function startRound(){
	player_one_hand = deckForGame.deal
	player_two_hand = deckForGame.deal

	// display each hand

	// player one chooses higher or lower using a button or text or something
	// player two chooses higher or lower in the same way

	dealer_hand += deckForGame.deal


}

function resolveRound(){

}
