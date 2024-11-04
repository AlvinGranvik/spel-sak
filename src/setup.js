import Game from './Game.js'

export function setup(canvas) {
  const ctx = canvas.getContext('2d') // Skapar en 2d-kontext för att rita på canvas
  canvas.width = 854 // Definiera bredden på canvas
  canvas.height = 480 // Definera höjden på canvas

  const game = new Game(canvas.width, canvas.height)
  let lastTime = 0

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update(deltaTime)
    game.draw(ctx)
    requestAnimationFrame(animate)
  }

  animate(0)
}