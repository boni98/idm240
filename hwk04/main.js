var audioPlayerObj = document.getElementById('audioplayer');
var bugleObj = document.getElementById('bugle');

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
