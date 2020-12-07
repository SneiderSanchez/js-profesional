function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  console.log('el player', player.mute);
  player.mute();
  player.play();
};
export default AutoPlay;
