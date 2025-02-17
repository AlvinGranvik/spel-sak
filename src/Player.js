import GameObject from "./GameObject"
import playerImage from "./assets/Sprites/Player_SpriteSheet_NoGrid.png"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game

    this.image = new Image()
    this.image.src = playerImage

    this.x = 0
    this.y = 0
    this.frameWidth = 340
    this.frameHeight = 480
    this.frameX = 0
    this.frameY = 0
    this.flip = false
    this.maxFrames = 10
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps

    this.speedX = 0
    this.speedY = 0
    this.maxSpeedX = 0.2
    this.maxSpeedY = 5
    this.color = "255, 0, 0"
    //Inivis walls
    this.maxX = 650
    this.minX = 200
  }

  update(deltaTime) {
    if (this.game.input.keys.has("ArrowLeft")) {
      if (this.speedX < -10) {
        this.speedX = -10
      } else {
        this.speedX -= this.maxSpeedX
      }

    }
    if (this.game.input.keys.has("ArrowRight")) {
      if (this.speedX > 10) {
        this.speedX = 10
      } else {
        this.speedX += this.maxSpeedX
      }
    }
    if (
      this.game.input.keys.has("ArrowRight") &&
      this.game.input.keys.has("ArrowLeft")
    ) {
      this.speedX = 0
    }
    if (
      !this.game.input.keys.has("ArrowRight") &&
      !this.game.input.keys.has("ArrowLeft")
    ) {
      this.speedX = 0
    }

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



    console.log(this.y)
    this.y = 300 //Sätter höjden till 300 så att man är vid den punkten alltid oavsett vad.
    this.x += this.speedX
    if (this.x > this.maxX) {
      this.x = this.maxX
    }

    if (this.x < this.minX) {
      this.x = this.minX
    }

  }

  draw(ctx) {
    if (this.flip) {
      ctx.save()
      ctx.scale(-1, 1)
    }
    ctx.drawImage(
      this.image,
      590 + this.frameX * this.frameWidth,
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