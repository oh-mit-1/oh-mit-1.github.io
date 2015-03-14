function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a dev on github,</p>",
"<p onClick=nextLine(2)>And pull requests, all, she did snub.</p>",
"<p onClick=nextLine(3)>So I forked the repo;</p>",
"<p onClick=nextLine(4)>Now they all bug <em>me</em>, d'oh!</p>",
"<p onClick=nextLine(5)>Said she, 'Welcome to the git club!'</p>");

	document.getElementById("line").innerHTML=poem[line];
}

