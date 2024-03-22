class Player extends Entity {
  constructor(xPosition = 0, yPosition = 0, color, size) {
    super(xPosition, yPosition, color, size);
    this.movementInput = { x: 0, y: 0 }
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  onKeyDown(event) {
    if (event.key === 's') {
      this.movementInput.y = -1;
    }
    if (event.key === 'w') {
      this.movementInput.y = 1;
    }
    if (event.key === 'a') {
      this.movementInput.x = -1;
    }
    if (event.key === 'd') {
      this.movementInput.x = 1;
    }
  }

  onKeyUp(event) {
    if (event.key === 's') {
      this.movementInput.y = 0;
    }
    if (event.key === 'w') {
      this.movementInput.y = 0;
    }
    if (event.key === 'a') {
      this.movementInput.x = 0;
    }
    if (event.key === 'd') {
      this.movementInput.x = 0;
    }
  }

  update() {
    this.move = normalize(this.movementInput.x, this.movementInput.y);
  }
}
