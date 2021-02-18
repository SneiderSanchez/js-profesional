import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video");
const tooglePlayButton: HTMLElement = document.getElementById("tooglePlay");
const toogleMuteButton: HTMLElement = document.getElementById("toogleMute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
tooglePlayButton.onclick = () => player.tooglePlay();
toogleMuteButton.onclick = () => player.toogleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js").catch((error) => {
    console.log(error);
  });
}
