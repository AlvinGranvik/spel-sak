import nisse from "./assets/Sprites/Nisse_SpriteSheet_NoGrid.png"

export default class GameObject {
  constructor(x, y, width, height, color, game) {
    this.game = game
    
    this.image = new Image()
    this.image.src = nisse
    
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.color = color
    this.speed = 0.1
    this.frameWidth = 200
    this.frameHeight = 220
    this.frameX = 0
    this.frameY = 0
    this.flip = false
    this.maxFrames = 10
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps
  }

  update(deltaTime) {
    this.x += this.speed

    //Animations för idle
    if (this.timer > this.interval) {
      this.frameX++
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
      
    if (this.frameX >= this.maxFrames) {
        this.frameX = 0
    }
  }
  

  draw(ctx) {
    if (this.flip) {
      ctx.save()
      ctx.scale(-1, 1)
    }
    ctx.drawImage(
      this.image,
      200 + this.frameX * this.frameWidth,
      this.frameY * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      this.flip ? this.x * -1 - this.width : this.x, //Deletes diddy
      this.y,
      this.width,
      this.height,
    )
    if (this.flip) {
      ctx.restore()
    }
  }
}