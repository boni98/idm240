var flameObj  = document.querySelector("#flame");
var sawObj    = document.querySelector("#saw");
var sawTurned = false;

flameObj.addEventListener("transitionend", flameEndAnim);


function flameEndAnim(e) {
	if (sawTurned) {
		sawObj.style.transform = "rotate(0deg)";
		sawObj.style.webkitTransform = "rotate(0deg)";
		sawTurned = false;
	} else {
		sawObj.style.transform = "rotate(45deg)";
		sawObj.style.webkitTransform = "rotate(45deg)";
		sawTurned = true;
	}

	//	window.open('http://jervo.org');
}
