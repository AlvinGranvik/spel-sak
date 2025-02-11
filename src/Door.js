import GameObject from "./GameObject";
import DoorImg from "./assets/Background/MG_FG.png"

export default class Door extends GameObject {
    constructor(x, y, width, height, color, game) {
        super(x, y, width, height, color)
        this.game = game
        this.image = new Image()
        this.image.src = DoorImg
    }
    
    
    draw(ctx) {
        ctx.drawImage(
            this.image,
        )

    }
}