import Game from "./Game.js"

const setup = (canvas) => {
  const ctx = canvas.getContext('2d') // Skapar en 2d-kontext för att rita på canvas
  // 16:9 aspect ratio
  canvas.width = 1024,8 // sätt bredden på canvas
  canvas.height = 576 // sätt höjden på canvas
  

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

export { setup }