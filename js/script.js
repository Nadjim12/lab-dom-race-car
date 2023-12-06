window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  restartButton.addEventListener('click', function() {
    restartGame();
  });
  function restartGame() {
    location.reload();
  }
  let game; // added

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

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
    gameLoop();
  }

  function gameLoop() {
    game.player.move();
    requestedAnimationFrame(gameLoop);
  }
};
