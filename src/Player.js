import GameObject from "./GameObject"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game

    this.image = new Image()
    this.image.src = "./src/assets/PlaceholderSheet.png"

    this.frameWidth = 100
    this.frameHeight = 95
    this.frameX = 0
    this.frameY = 0
    this.flip = false
    this.maxFrames = 7
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps

    this.speedX = 0
    this.speedY = 0
    this.maxSpeedX = 0.2
    this.maxSpeedY = 5
    this.color = "255, 0, 0"
    this.maxX = 50
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


    //Denna del behövs inte längre egentligen då att hoppa aldrig kommer att användas i spelet som jag gör, men jag behåller funktionen utifall det ändras.
    console.log(this.y)
    /*if (this.y > 320) {
      this.speedY = 0
    } else if (this.y < 320) {
      this.speedY += 5
    }
    if (this.game.input.keys.has("ArrowUp")) {
      this.speedY -= this.maxSpeedY
    } this.y += this.speedY*/
    this.y = 320 //Sätter höjden till 320 så att man är vid den punkten alltid oavsett vad.
    this.x += this.speedX
    if (this.x >= this.maxX) {
      this.speedX = 0
    }
    
  }

  

  draw(ctx) {
    if (this.flip) {
      ctx.save()
      ctx.scale(-1, 1)
    }
    ctx.drawImage(
      this.image,
      this.frameX * this.frameWidth,
      this.frameY * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width,
      this.height,
    )
    if (this.flip) {
      ctx.restore()
    }
  }
}