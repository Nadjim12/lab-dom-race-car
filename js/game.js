class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro');
      this.gameScreen = document.getElementById('game-screen');
      this.gameEndScreen = document.getElementById('game-end');
      this.player = null;
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
    }
  
    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      this.startScreen.style.display = 'none';
      this.gameScreen.style.display = 'block';
  
      this.player = new Player(
        this.gameScreen,
        200,
        500,
        100,
        150,
        "./images/car.png"
      );
  
      this.gameLoop();
    }
  
    gameLoop() {
      console.log("in the game loop");
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
  
      window.requestAnimationFrame(() => {
        this.gameLoop();
      });
    }
  
    update() {
      this.player.move();
      console.log("in the update");
  
      if (Math.random() < 0.01) {
        const newObstacle = new Obstacle();
        this.obstacles.push(newObstacle);
      }
  
      this.obstacles.forEach((obstacle) => {
        obstacle.move();
  
        if (obstacle.collidesWith(this.player)) {
          const obstacleIndex = this.obstacles.indexOf(obstacle);
          this.obstacles.splice(obstacleIndex, 1);
          this.player.reduceLives();
  
          if (this.player.getLives() === 0) {
            this.endGame();
          }
        }
  
        if (obstacle.isOffscreen()) {
          const obstacleIndex = this.obstacles.indexOf(obstacle);
          this.obstacles.splice(obstacleIndex, 1);
          this.player.increaseScore();
        }
      });
    }
  
    endGame() {
      this.player.element.remove();
  
      this.obstacles.forEach((obstacle) => {
        obstacle.element.remove();
      });
  
      this.gameIsOver = true;
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    }
  }