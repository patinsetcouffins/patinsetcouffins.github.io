function enterFullScreen() {
    var docElm = document.getElementById("camera_wrap_1");
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
  	document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
  	document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
  	document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
  	document.msExitFullscreen();
  }
}

function toggleFullScreen() {
  if (document.fullscreenElement ||
	document.webkitFullscreenElement ||
	document.mozFullScreenElement ||
	document.msFullscreenElement) {
    exitFullScreen();
    
  } else {
    enterFullScreen();
  }
}
