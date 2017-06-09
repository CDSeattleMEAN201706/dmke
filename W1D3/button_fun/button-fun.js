
$(document).ready(function(){
	//$("button").css("color", "blue");
	$("document").on('click', 'button', function(){
		css("color", "blue")
	}
});



$(document).on('click', 'button', function(){
	$(this).toggleClass("red");
});


$("button").hover(function(){
	$(this).addClass("green")
}, function(){ $(this).removeClass("green") });



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
