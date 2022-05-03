var excuse = [`"I really appreciate the offer, but I'm taking the (day/morning/afternoon/night) off. I need some quiet downtime. I hope you understand!"`, 
`"Thank you for the kind invitation, but I'm taking that (day/morning/afternoon/night) off. I need some me time to decompress. I hope you understand."`,
`"That sounds like so much fun, but unfortunately, I already have a (date night/ coffee date/ lunch date etc) scheduled. Please keep me in mind for next time!"`,
`"What a bummer—I have another commitment. Hope the event is a success!"`,
`"I already have plans at that exact time. Can we schedule a catch-up for another date soon?"`,
`"I wish I could come, but I'm busy that (morning/afternoon/evening). I know that it will be a success and I am sorry to miss out."`,
`"Ah, that sounds lovely, but I have a rule that I don’t make plans on Sundays—it’s my day (to decompress and connect with my family) (catch up with my DIY, hobbies and house work) (dress my gimp in a french maid outfit?!?). But thank you for thinking of me!"`,
`"Oh, that sounds like a blast, but I’m pretty committed to my 9 p.m. sleep schedule on weeknights these days. But thank you for the invite!"`,
`"(shopping/ spa day/ picnic etc ) isn’t really my thing, so I’m going to sit this one out!"`,
`"Thank you for thinking of me, but (large gatherings/ botox parties/ fancy day trips) aren’t really my speed!"`,
];

function newExcuse () {
	var randomNumber = Math.floor(Math.random() * (excuse.length));
	document.getElementById('excuse').innerHTML =  excuse[randomNumber];
}

newExcuse();