class Entity {
  constructor(xPosition = 0, yPosition = 0, color = 'gray', size = 10) {
    this.position = { x: xPosition, y: yPosition }
    this.color = color;
    this.size = size;
  }
}
