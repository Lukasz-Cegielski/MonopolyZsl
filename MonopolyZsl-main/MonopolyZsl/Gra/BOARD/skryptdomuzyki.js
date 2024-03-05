var firsttime = true; // czy intro ma poleciec
var running = false; // czy muzyka gra
function muzykaon() {
    const audio = document.getElementById("audio");
    if (firsttime == true) {
        audio.play();
        setTimeout(podmianaaudio, 55530)
        firsttime = false
    }
    document.getElementById("guzior").setAttribute("onClick", "javascript: muzykaoff();");
    document.getElementById("mute").src = "audio-button.png"
    running = true;
    audio.muted = false
};
function muzykaoff() {

    document.getElementById("guzior").setAttribute("onClick", "javascript: muzykaon();");
    document.getElementById("mute").src = "mute-button.png"
    const audio = document.getElementById("audio");
    running = false;
    audio.muted = true;
}
function podmianaaudio() {
    document.getElementById("audio").src = "track2-loop.mp3"
    const audio = document.getElementById("audio");
    audio.loop = true;
    /*   if (running == true) {
          audio.play();
      } */
    audio.play()
}