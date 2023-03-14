// AUDIO ON/OFF 
var audioPlayerObj = document.getElementById('audioplayer');
var sndPlaying = false;

function audioToggle(msg) {
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


// //ON CLICK open new link tabs
// const openInNewTab = (url) => {
// 	window.open(url, "_self");
//   }
  
//   const hat = document.querySelector("#hat");
//   hat.addEventListener("click", () => {
// 	openInNewTab("https://www.amctheatres.com/movies/one-piece-film-red-71142");
//   });

//   const location = document.querySelector("#locationSvg");
//   hat.addEventListener("click", () => {
// 	openInNewTab("https://www.google.com/maps/place/AMC+DINE-IN+Fashion+District+8/@39.9519835,-75.1571648,17z/data=!3m2!4b1!5s0x89c6c629ea6ddc0d:0x7edf0a3a89c66f0c!4m6!3m5!1s0x89c6c75a6a0559e3:0x1dc3c709d0f5bc97!8m2!3d39.9519835!4d-75.1571648!16s%2Fg%2F11h80lmbzn");
//   });