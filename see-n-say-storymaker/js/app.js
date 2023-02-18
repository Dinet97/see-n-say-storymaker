// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('button');

//variables and declaring for button for the column of the words
var noun1 = document.getElementById("noun1");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");
var noun2 = document.getElementById("noun2");
var places = document.getElementById("places");

//variables and declaring for the id
var generatedWords = document.getElementById("generatedWords");
var randomize = document.getElementById('randomize');
var reset = document.getElementById('reset');

// arrays to contain the words
var noun1Array = ["Anand", "Dimiya", "Riya", "Joyal"];
var verbArray = ["runs", "watchs", "loves", "visits", "lives"];
var adjectiveArray = ["a crazy", "a happy", "a smart", "a beautiful", "a long"];
var noun2Array = ["house", "doll", "phone", "laptop", "tree"];
var placesArray = ["in Canada", "in India", "in Banff", "in Wasaga", "in Calgary"];



/* Functions
-------------------------------------------------- */
function randomValueFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function randomStory(){
	var stories = ["There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping.",
					"After flying a long distance, a thirsty crow was wandering the forest in search of water. Finally, he saw a pot half-filled with water. He tried to drink from it but his beak wasn’t long enough to reach the water inside. He then saw pebbles on the ground and one by one, he put them in the pot until the water rose to the brim. The crow then hastily drank from it and quenched his thirst.",
					"Once there was a hungry fox who stumbled upon a vineyard. After seeing the round, juicy grapes hanging in a bunch, the fox drooled. But no matter how high he jumped, he couldn’t reach for it. So he told himself that it was probably sour and left. That night, he had to sleep on an empty stomach.",
					"There was once a shepherd boy who liked to play tricks. One day, while he was watching over the herd, the boy decided to play a trick and cried “wolf! wolf!”. The people who heard rushed over to help him. But they were disappointed when they saw that there was no wolf and the boy was laughing at them. The next day, he did it again and people rushed to his aid only to be disappointed once again. On the third day, the boy saw a wolf devouring one of his sheep and cried for help. But the people who heard him thought this is just another of the boy’s pranks so no one came to help him. That day, the boy lost some of his sheep to the wolf."];
					//From https://www.bing.com/ck/a?!&&p=de820cc12a4cee06JmltdHM9MTY3NjU5MjAwMCZpZ3VpZD0zOTQ3YjUwNi1hNGE5LTYyODgtMDg1NC1hN2FmYTUwMzYzOTUmaW5zaWQ9NTE4Mw&ptn=3&hsh=3&fclid=3947b506-a4a9-6288-0854-a7afa5036395&psq=ofhsoupkitchen.org%2fshort-stories-with-morals&u=a1aHR0cHM6Ly9vZmhzb3Vwa2l0Y2hlbi5vcmcvc2hvcnQtc3Rvcmllcy13aXRoLW1vcmFscw&ntb=1
	var randIndx = Math.floor(Math.random() * stories.length);
	var randomStory = stories[randIndx];
	var textStory = document.getElementById("story");
	var audioStory = new SpeechSynthesisUtterance(randomStory);
	synth.speak(audioStory);
	textStory.innerHTML = randomStory;

}

function resetStory(){
	var textStory = document.getElementById("story");
	textStory.innerHTML="";
	synth.cancel();
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
	speakNow(textToSpeak);
	generatedWords.textContent = textToSpeak;
}

noun1.onclick = function () {
	var noun1Function = randomValueFromArray(noun1Array);
	speakNow(noun1Function);
	textToSpeak += noun1Function;
}

verb.onclick = function () {

	var verbFunction = randomValueFromArray(verbArray);
	speakNow(verbFunction);
	textToSpeak += " " + verbFunction;
}

adjective.onclick = function () {

	var adjectiveFunction = randomValueFromArray(adjectiveArray);
	speakNow(adjectiveFunction);
	textToSpeak += " " + adjectiveFunction;
}

noun2.onclick = function () {

	var noun2Function = randomValueFromArray(noun2Array);
	speakNow(noun2Function);
	textToSpeak += " " + noun2Function;
}

places.onclick = function () {

	var placesFunction = randomValueFromArray(placesArray);
	speakNow(placesFunction);
	textToSpeak += " " + placesFunction;
}

randomize.addEventListener('click', randomStory);
reset.addEventListener('click', resetStory);

