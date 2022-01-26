var excuse = [`"I really appreciate the offer, but I'm taking the day/morning/afternoon/night off. I need some quiet downtime. I hope you understand!"`, 
`"That sounds like so much fun, but unfortunately, I have a date night scheduled. Please keep me in mind for next time!"`,
`"What a bummer—I have another commitment. Hope the event is a success!"`,
`"I already have plans at that exact time. Can we schedule a catch-up for another date soon?"`,
`"I wish I could come, but I'm busy that afternoon. I know that it will be a success and I am sorry to miss out."`,
`"Ah, that sounds lovely, but I have a rule that I don’t make plans on Sundays—it’s my day [to decompress and sexually service my husband][catch up with my poisoning of the neighbours dogs][dress my gimp in a french maid outfit]. But thank you for thinking of me!"`,
`"Oh, that sounds like a blast, but I’m pretty committed to my 9 p.m. sleep schedule on weeknights these days. But thank you for the invite!"`,
`"[Catching the rona/fancy meals out/charity events] isn’t really my thing, so I’m going to sit this one out!"`,
`"Thank you for thinking of me, but [large gatherings/ botox parties] aren’t really my speed!"`,
];

function newExcuse () {
	var randomNumber = Math.floor(Math.random() * (excuse.length));
	document.getElementById('excuse').innerHTML = "You can say: " + " " + excuse[randomNumber];
}

newExcuse();