// AUDIO ON/OFF 
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

// TOGGLE ON/OFF sound button animation
var svg = document.getElementById("sound");

const circleWrapObj = document.querySelector(".btn");
const myC2ID = document.querySelector("#c2id");
const myC1ID = document.querySelector("#c1id");

circleWrapObj.addEventListener("click", () => {
	myC2ID.classList.toggle("circle2");
	myC1ID.classList.toggle("circle1");

});

// HOVER ON/OFF hat svg with ticket text
const hatObj = document.querySelector("#hat");
const myTextObj = document.querySelector(".ticket");

hatObj.addEventListener("mouseenter", () => {
	myTextObj.classList.add("ticketVisible");
});
hatObj.addEventListener("mouseleave", () => {
	myTextObj.classList.remove("ticketVisible");
});