class Core {
  constructor(terrain, topdownCanvas, entities = []) {
    this.updateListeners = [];
    this.update = this.update.bind(this);
    this.terrain = terrain;
    this.entities = entities;
    this.topdownCanvas = topdownCanvas;
    this.topdownContext = this.topdownCanvas.getContext('2d');
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
    const deltaTime = (currentTime - this.lastFrameTime) / 1000;
    this.entities.forEach((entity) => {
      entity.update(deltaTime);
    });
    this.updateListeners.forEach((listener) => {
      listener(deltaTime);
    });
    this.lastFrameTime = currentTime;
    this.updateEntityPositions(deltaTime);
    this.drawTopdownView();
    requestAnimationFrame(this.update);
  }

  updateEntityPositions(deltaTime) {
    this.entities.forEach((entity) => {
      entity.position.x += entity.movementInput.x * entity.speed * deltaTime;
      entity.position.y += entity.movementInput.y * entity.speed * deltaTime;
    });
  }

  drawTopdownView() {
    this.topdownContext.fillStyle = 'white';
    this.topdownContext.fillRect(0, 0, this.topdownCanvas.width, this.topdownCanvas.height);
    const tileWidth = Math.floor(this.topdownCanvas.width / this.terrain.width);
    const tileHeight = Math.floor(this.topdownCanvas.height / this.terrain.height);
    this.drawTopdownTerrain(tileWidth, tileHeight);
    this.drawTopdownEntities(tileWidth, tileHeight);
  }

  drawTopdownTerrain(tileWidth, tileHeight) {
    for (let row = 0; row < this.terrain.values.length; row += 1) {
      const rowValues = this.terrain.values[row];
      for (let column = 0; column < rowValues.length; column += 1) {
        const value = rowValues[column];
        if (value === '1') {
          this.topdownContext.fillStyle = 'white';
        } else {
          this.topdownContext.fillStyle = 'black';
        }
        const xPosition = column * tileWidth;
        const yPosition = row * tileHeight;
        this.topdownContext.fillRect(xPosition, yPosition, xPosition + tileWidth, yPosition + tileHeight);
      }
    }
  }

  drawTopdownEntities(tileWidth, tileHeight) {
    this.entities.forEach((entity) => {
      this.topdownContext.fillStyle = entity.color;
      this.topdownContext.beginPath();
      const radius = Math.floor(entity.size / 2 * tileWidth);
      const xPosition = entity.position.x * tileWidth;
      const yPosition = this.topdownCanvas.height - entity.position.y * tileHeight;
      this.topdownContext.arc(xPosition, yPosition, radius, 0, 2 * Math.PI
      );
      this.topdownContext.fillStyle = entity.color;
      this.topdownContext.fill();
    });
  }
}
