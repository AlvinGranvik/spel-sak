import Ball from "./Ball"
import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"
import Door from "./Door"
import Back from "./Background"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new Input(this)
    this.player = new Player(400, 0, 170, 240, "green", this);
    console.log("Ny instans av game ", this.width);
    this.box = new GameObject(0, 420, 50, 50, "purple");
    this.box2 = new GameObject(800, 420, 50, 50, "red");
    this.door = new Door(0, 0, 1024.8, 576, "blue", this);
    this.back = new Back(0, 0, 1024.8, 576, "yellow", this);
    this.timer = 0
    this.spawnTimer = 1000
  }

  update(deltaTime) {
    this.box.update(deltaTime)
    this.box2.update(deltaTime)
    this.player.update(deltaTime)

    if (this.timer > this.spawnTimer) {
      console.log("spawna grej")
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
  }

  draw(ctx) {
    this.back.draw(ctx)
    this.box.draw(ctx)
    this.box2.draw(ctx)
    this.door.draw(ctx)
    this.player.draw(ctx)
  }
  
 }

