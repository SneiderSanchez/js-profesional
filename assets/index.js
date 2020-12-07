import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "../plugins/AutoPlay.js";
const video = document.querySelector("video");
const tooglePlayButton = document.getElementById('tooglePlay')
const toogleMuteButton = document.getElementById('toogleMute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]});
tooglePlayButton.onclick = () => player.tooglePlay();
toogleMuteButton.onclick = () => player.toogleMute();
