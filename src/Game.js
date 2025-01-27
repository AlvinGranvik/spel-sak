import Ball from "./Ball"
import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new Input(this)
    this.player = new Player(400, 0, 170, 240, "green", this);
    console.log("Ny instans av game ", this.width);
    this.box = new GameObject(0, 420, 50, 50, "purple");
    this.box2 = new GameObject(800, 420, 50, 50, "red");
  }

  update(deltaTime) {
    this.box.update(deltaTime)
    this.box2.update(deltaTime)
    this.player.update(deltaTime)
  }

  draw(ctx) {
    this.box.draw(ctx)
    this.box2.draw(ctx)
    this.player.draw(ctx)
  }
  
 }

