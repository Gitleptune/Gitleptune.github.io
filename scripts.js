/*
avatar_url": "https://avatars.githubusercontent.com/u/76597257?v=4",
"followers": 10,
*/
// Random quote generation
const randomQuoteGeneration = [
	// Terry Pratchett
	"Most witches don’t believe in gods. They know that the gods exist, of course. They even deal with them occasionally. But they don’t believe in them. They know them too well. It would be like believing in the postman.",
	"There is a rumour going around that I have found God. I think this is unlikely because I have enough difficulty finding my keys, and there is empirical evidence that they exist.",
	"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
	"There are times in life when people must know when not to let go. Balloons are designed to teach small children this.",
	"The entire universe has been neatly divided into things to (a) mate with, (b) eat, (c) run away from, and (d) rocks.",
	"Cats will amusingly tolerate humans only until someone comes up with a tin opener that can be operated with a paw.",
	"Give a person a fire and they're warm for a day, but set fire to them and they're warm for the rest of their life.",
	"It would seem that you have no useful skill or talent whatsoever. Have you thought of going into teaching?",
	"Steal five dollars and you're a common thief. Steal thousands and you're either the government or a hero.",
	"The intelligence of that creature known as a crowd is the square root of the number of people in it.",
	"The enemy isn't men, or women, it's bloody stupid people and no one has the right to be stupid.",
	"Humans need fantasy to be human. To be the place where the falling angel meets the rising ape.",
	"Coffee is a way of stealing time that should by rights belong to your older self.",
	"A good plan isn't one where someone wins, it's where nobody thinks they've lost.",
	"Always be wary of any helpful item that weighs less than its operating manual.",
	"In ancient times cats were worshipped as gods; they have not forgotten this.",
	"Do you not know that a person is not dead whilst their name is still spoken?",
	"No one is actually dead until the ripples they cause in the world die away.",
	"A good bookshop is just a genteel Black Hole that knows how to read.",
	"This isn't life in the fast lane, it's life in the oncoming traffic.",
	"<b>Five exclamation marks, the sure sign of an insane mind.</b>",
	"Real children do not go hoppity skip unless they are on drugs.",
	"And sin, young man, is when you treat people like things.",
	"Stories of imagination tend to upset those without one.",
	"Evil begins when you begin to treat people as things.",
	"I'd rather be a rising ape than a falling angel.",
	"Progress just means bad things happen faster.",
	"Time is a drug. Too much of it kills you.",
	"When in doubt, choose to live.",
	"<b>!!!!!</b>",
	// Misc
	"A person's a person, no matter how small.", // Dr. Seuss
	// Original-ish
	"This website was made using 100% recycled words.", // Terry Pratchett
	"Did any of the code I wrote last night suggest that I was sane?", // Terry Pratchett
		]
document.getElementById("random-quote").innerHTML = randomQuoteGeneration[Math.floor(Math.random() * randomQuoteGeneration.length)];
