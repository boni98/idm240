var audioPlayerObj = document.getElementById('audioplayer');

var sndPlaying = false;

function audioToggle(msg) {
	// alert(msg);
	if (sndPlaying) {
		audioPlayerObj.pause();
		sndPlaying = false;
	} else {
		audioPlayerObj.play();
		sndPlaying = true;
	}
}

var svg = document.getElementById("sound");

const circleWrapObj = document.querySelector(".btn");
const myC2ID = document.querySelector("#c2id");
const myC1ID = document.querySelector("#c1id");

circleWrapObj.addEventListener("click", () => {
	myC2ID.classList.toggle("circle2");
	myC1ID.classList.toggle("circle1");

});

// var hat = document.getElementById("hat")
// var ticket = document.getElementById("ticket")

// if (window.innerWidth > 768) {
// 	hat.addEventListener('mouseover', function () {
// 		console.log('Mouse over!');
// 		ticket.style.visibility = "visible"
// 	});

// 	hat.addEventListener('mouseout', function () {
// 		console.log('Mouse not hover!');
// 		ticket.style.visibility = "hidden"
// 	});
// }