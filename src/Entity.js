class Entity {
  constructor(xPosition = 0, yPosition = 0, speed = 3, color = 'gray', size = 10) {
    this.position = { x: xPosition, y: yPosition }
    this.movement = { x: 0, y: 0 } 
    this.speed = speed;
    this.color = color;
    this.size = size;
  }

  update() { }
}
