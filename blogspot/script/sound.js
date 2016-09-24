/*
function playSound(soundfile) {
  document.getElementById("sound").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSoundFromDrive(soundfileid) {
    var googleDriveRoot = 'https://googledrive.com/host/';
    playSound(googleDriveRoot+soundfileid);
}
*/

function playAudioFromElement(element) {
    // Find my parent
    var parent = element.parentNode; //.parentNode;
    // Find the first node with tag name "audio"
    var player = parent.getElementsByTagName("audio")[0];
    // Play the sound
    player.play();
}  

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
