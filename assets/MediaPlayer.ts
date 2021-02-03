interface config {
  el: HTMLVideoElement;
  plugins: Array<any>;
}

class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config: config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  tooglePlay() {
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause();
    }
  }
  toogleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
