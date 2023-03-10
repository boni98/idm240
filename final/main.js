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

var isPlaying = true
const circleWrapObj = document.querySelector(".btn");
const myC2ID = document.querySelector("#c2id");
const myC1ID = document.querySelector("#c1id");

circleWrapObj.addEventListener("click", () => {
	if(isPlaying){
		circleWrapObj.classList.remove("pause")
		circleWrapObj.classList.add("play")
		myC2ID.style.animationPlayState = "running";
   	 	myC1ID.style.animationPlayState = "running";
		isPlaying=false;
	}
	else{
		circleWrapObj.classList.remove("play")
		circleWrapObj.classList.add("pause")
		myC2ID.style.animationPlayState = "paused";
    	myC1ID.style.animationPlayState = "paused";
		isPlaying=true;
	}
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