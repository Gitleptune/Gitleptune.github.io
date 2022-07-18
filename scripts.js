/*
avatar_url": "https://avatars.githubusercontent.com/u/76597257?v=4",
"followers": 10,
*/
// Random quote generation
const randomQuote= [
		// Terry Pratchett
		"When in doubt, choose to live.",
		"Time is a drug. Too much of it kills you.",
		"There is always time for another last minute.",
		"Progress just means bad things happen faster.",
		"I'd rather be a rising ape than a falling angel.",
		"Evil begins when you begin to treat people as things.",
		"Stories of imagination tend to upset those without one.",
		"And sin, young man, is when you treat people like things.",
		"Knowing things is magical, if other people don't know them.",
		"Look, he said to his imagination, if this is how you're goin.",
		"Real children do not go hoppity skip unless they are on drugs.",
		"A lie can run round the world before the truth has got its boots on.",
		"A good bookshop is just a genteel Black Hole that knows how to read.",
		"This isn't life in the fast lane, it's life in the oncoming traffic.",
		"<span class=\"small-caps\">words in the heart cannot be taken.</span>",
		"No one is actually dead until the ripples they cause in the world die away.",
		"Do you not know that a person is not dead whilst their name is still spoken?",
		"In ancient times cats were worshipped as gods; they have not forgotten this.",
		"Always be wary of any helpful item that weighs less than its operating manual.",
		"A good plan isn't one where someone wins, it's where nobody thinks they've lost.",
		"Coffee is a way of stealing time that should by rights belong to your older self.",
		"People think that stories are shaped by people. In fact, it's the other way around.",
		"Humans need fantasy to be human. To be the place where the falling angel meets the rising ape.",
		"The intelligence of that creature known as a crowd is the square root of the number of people in it.",
		"It was amazing how many friends you could make by being bad at things, provided you were bad enough to be funny.",
		"Cats will amusingly tolerate humans only until someone comes up with a tin opener that can be operated with a paw.",
		"Cats will amusingly tolerate humans only until someone comes up with a tin opener that can be operated with a paw",
		"Give a person a fire and they're warm for a day, but set fire to them and they're warm for the rest of their life.",
		"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
		"There are times in life when people must know when not to let go. Balloons are designed to teach small children thisre are times in life when people must know when not to let",
		"There is a rumour going around that I have found God. I think this is unlikely because I have enough difficulty finding my keys, and there is empirical evidence that they exist",
		// Misc
		"A person's a person, no matter how small.", // Dr. Seuss
		// Original-ish
		"This website was made using 100% recycled words.", // Terry Pratchett
		"Did any of the code I wrote last night suggest that I was sane?", // Terry Pratchett
	]
document.getElementById("random-quote").innerHTML = randomQuote[Math.floor(Math.random() * randomQuote.length)];
