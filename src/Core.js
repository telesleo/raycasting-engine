class Core {
  constructor() {
    this.updateListeners = [];
    this.update = this.update.bind(this);
    this.start();
  }

  start() {
    this.lastFrameTime = performance.now();
    this.update();
  }

  addUpdateListener(listener) {
    this.updateListeners.push(listener);
  }

  update() {
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastFrameTime;
    this.updateListeners.forEach(listener => {
      listener(deltaTime);
    });
    this.lastFrameTime = currentTime;
    requestAnimationFrame(this.update);
  }
}
