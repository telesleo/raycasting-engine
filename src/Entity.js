class Entity {
  constructor(xPosition = 0, yPosition = 0, color = 'gray', size = 10, speed = 5) {
    this.position = { x: xPosition, y: yPosition }
    this.color = color;
    this.size = size;
    this.movementInput = { x: 0, y: 0 } 
    this.speed = speed;
  }

  update() { }
}
