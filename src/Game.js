import GameObject from "./GameObject.js"

//Objekten som rör på sig
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.gameObjects = [
      new GameObject(this, 0, 100, 20, 20, '#f00', 100),
      new GameObject(this, 0, 200, 20, 20, '#0f0', 200),
      new GameObject(this, 0, 300, 20, 20, '#00f', 300)
    ]
  }

  

  //Uppdaterar objekten så att de kan röra på sig
  update(deltaTime) {
    this.gameObjects.forEach(gameObject => {
      gameObject.update(deltaTime)
    })
  }

  draw(ctx) {
    this.gameObjects.forEach(gameObject => {
      gameObject.draw(ctx)
    })
  }
}
