var quoteButton = document.getElementById("quote-button");



var quotes = [
		{saying:"All the world's a stage, and all the men and women mearly players.", firstName: "William", lastName:"Shakespeare"},
		{saying: "The greatest pleasure in life is doing what people say you cannot do.", firstName: "Walter", lastName: "Bagehot"},
		{saying: "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.", firstName: "Franz", lastName:"Kafka"},
		{saying:"A creative man is motivated by the desire to achieve, not by the desire to beat others.", firstName:"Ayn", lastName:"Rand"},
		{saying:"You can't cross the sea merely by standing and staring at the water.", firstName:"Rabindranath", lastName:"Tagore"},
		{saying:"Don't watch the clock. Do what it does. Keep going.", firstName:"Sam", lastName:"Levenson"}

]

var quoteHolder = document.getElementById("quote-holder");


// var randomQuoteString = randomQuote.saying + " " + randomQuote.firstName + " " + randomQuote.lastName;

//When click button, get a quote
function sayQuote(){
	var randomIndex = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomIndex];
	


	// console.log(randomQuote.saying + " " + randomQuote.firstName + " " + randomQuote.lastName);
	// Object.keys(randomQuote).forEach(function(value){
	// 	console.log(randomQuote[value];
	// });
	return {
		saying: randomQuote.saying,
		firstName: randomQuote.firstName,
		lastName: randomQuote.lastName
	}
}


//Add the quote to the "Your Quotes" section as an unordered list
	//Create an unordered list
		//Create a list item
var createQuoteElement = function(quoteString){
	var quoteBullet = document.createElement("li");
	// console.log(quoteBullet);
	var label = document.createElement("label");
	label.innerText = quoteString;
	quoteBullet.appendChild(label);
	return quoteBullet;
}

//Add quote to list
var addQuote = function(){
	var quote = sayQuote();

	var quoteElement = createQuoteElement(quote.saying);
	console.log(quote.lastName);

	quoteHolder.appendChild(quoteElement);

}


quoteButton.addEventListener('click', addQuote);

