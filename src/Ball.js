import Game from "./Game";
import GameObject from "./GameObject";

export default class extends GameObject {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color)
  }

  draw(ctx) {
    if (this.color == "purple") {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      console.log("bangerang")
    }
  }
}

