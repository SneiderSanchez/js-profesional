interface config {
  el: HTMLVideoElement;
  plugins: Array<any>;
}

class MediaPlayer {
  media: HTMLMediaElement;
  container: HTMLElement;
  plugins: Array<any>;

  constructor(config: config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
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
