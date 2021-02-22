import MediaPlayer from "@sneidersanchez/platzimediaplayer/src/MediaPlayer";
import AutoPlay from "@sneidersanchez/platzimediaplayer/src/plugins/AutoPlay";
import AutoPause from "@sneidersanchez/platzimediaplayer/src/plugins/AutoPause";
import Ads from "@sneidersanchez/platzimediaplayer/src/plugins/Ads";

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
