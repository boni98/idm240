var audioPlayerObj = document.getElementById('audioplayer');
var bugleObj = document.getElementById('bugle');
var playPauseObj = document.getElementById('playPauseBtn');

var sndPlaying = false;

function audioToggle(msg) {
	// alert(msg);
	if (sndPlaying) {
		audioPlayerObj.pause();
		sndPlaying = false;
        playPauseObj.innerHTML = "PLAY";
		bugleObj.classList.add("shrink50");
		bugleObj.classList.remove("expand100");
	} else {
		audioPlayerObj.play();
		sndPlaying = true;
        playPauseObj.innerHTML = "PAUSE";
		bugleObj.classList.add("expand100");
		bugleObj.classList.remove("shrink50");
	}
}
