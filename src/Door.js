import GameObject from "./GameObject"
import doorImg from "./assets/Background/MG_FG.png"

export default class Door extends GameObject {
    constructor(x, y, width, height, color, game) {
      super(x, y, width, height, color);
      this.game = game;
      this.image = new Image();
      this.image.src = doorImg
    }
  
    draw(ctx) {
      // Ensure the image is loaded before drawing
      if (this.image.complete) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        // Optionally, draw a placeholder if the image is not ready
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  }