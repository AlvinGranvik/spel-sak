import nisse from "./assets/Sprites/Nisse_SpriteSheet_NoGrid.png"

export default class GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    
    this.image = new Image()
    this.image.src = nisse
    
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.color = color
    this.speed = 0.1
  }

  update(deltaTime) {
    this.x += this.speed
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}