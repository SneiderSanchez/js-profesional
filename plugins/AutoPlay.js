function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  player.toogleMute();
  player.play();
};
export default AutoPlay;
