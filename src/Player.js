class Player extends Entity {
  constructor(xPosition = 0, yPosition = 0, speed = 3, color, size, ) {
    super(xPosition, yPosition, speed, color, size);
    this.buttons = { down: false, up: false, left: false, right: false }
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  onKeyDown(event) {
    if (event.key === 's') {
      this.buttons.down = true;
    }
    if (event.key === 'w') {
      this.buttons.up = true;
    }
    if (event.key === 'a') {
      this.buttons.left = true;
    }
    if (event.key === 'd') {
      this.buttons.right = true;
    }
  }

  onKeyUp(event) {
    if (event.key === 's') {
      this.buttons.down = false;
    }
    if (event.key === 'w') {
      this.buttons.up = false;
    }
    if (event.key === 'a') {
      this.buttons.left = false;
    }
    if (event.key === 'd') {
      this.buttons.right = false;
    }
  }

  update() {
    const movementInput = { x: 0, y: 0 }
    if (this.buttons.down === true && this.buttons.up === false) {
      movementInput.y = -1;
    } else if (this.buttons.up === true && this.buttons.down === false) {
      movementInput.y = 1;
    }
    if (this.buttons.left === true && this.buttons.right === false) {
      movementInput.x = -1;
    } else if (this.buttons.right === true && this.buttons.left === false) {
      movementInput.x = 1;
    }
    this.movement = normalize(movementInput.x, movementInput.y);
  }
}
