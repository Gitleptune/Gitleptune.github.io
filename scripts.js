/*
avatar_url": "https://avatars.githubusercontent.com/u/76597257?v=4",
"followers": 10,
*/
// Random quote generation
const randomQuoteGeneration = [
	// Terry Pratchett
	"There is a rumour going around that I have found God. I think this is unlikely because I have enough difficulty finding my keys, and there is empirical evidence that they exist.",
	"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
	"There are times in life when people must know when not to let go. Balloons are designed to teach small children this.",
	"Give a person a fire and they're warm for a day, but set fire to them and they're warm for the rest of their life.",
	"It would seem that you have no useful skill or talent whatsoever. Have you thought of going into teaching?",
	"In ancient times cats were worshipped as gods; they have not forgotten this.",
	"Do you not know that a person is not dead whilst their name is still spoken?",
	"A good bookshop is just a genteel Black Hole that knows how to read.",
	"Stories of imagination tend to upset those without one.",
	"Evil begins when you begin to treat people as things.",
	"I'd rather be a rising ape than a falling angel.",
	"Time is a drug. Too much of it kills you.",
	"This isn't life in the fast lane, it's life in the oncoming traffic.",
	"",
	"",
	"",
	"",
	"",
	"",
	// spoof rng
	"Five exclamation marks, the sure sign of an insane mind.",
	"Five exclamation marks, the sure sign of an insane mind.",
	"<b>!!!!!</b>",
	"<b>!!!!!</b>",
	// OG-ish
	"This website was made using 100% recycled words.", // Terry Pratchett
	"Did any of the code I wrote last night suggest that I was sane?", // Terry Pratchett
		]
document.getElementById("random-quote").innerHTML = randomQuoteGeneration[Math.floor(Math.random() * randomQuoteGeneration.length)];