window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game; // added

  startButton.addEventListener("click", function () {
    startGame()
  });
    
  document.addEventListener('click',()=>{
    console.log('click')
    });
  
  function startGame() {
    console.log("start game");
    game= new Game(); // added
    game.start(); // added
    gameloop();
  }

  function gameLoop() {
    game.player.move();
    requestedAnimationFrame(gameLoop);
  }
};
