
function ruhBlock() {
	document.getElementById('block_left').style.left = '0';
}

/****Events *****/

function ruh() {
    
var text = document.getElementsByClassName('events_text')[0];
    text.style.left = "0";
	var img = document.getElementsByClassName('events_img')[0];
    img.style.right = "0";
	
	
}
function ruhVideo() {
	var video = document.getElementsByClassName('video_wrap')[0];
    video.style.left = "0";
}

function youtube() {
	console.log(7);
	document.getElementById('btn_play').style.display = 'none';
	console.log(17);
	
}

var first_line = document.getElementById('first-line');
var top_line = first_line.offsetHeight/2;
document.getElementById('silver-line').style.top = top_line + 'px';
var last_line = document.getElementById('last-line');
console.log(last_line);
var bottom_line = last_line.offsetHeight+10;
console.log(bottom_line);
document.getElementById('silver-line').style.bottom = bottom_line + 'px';

