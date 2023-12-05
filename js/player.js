class Player {
    constructor(gameScreen, left, top, width, height) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        directionY = 0;
        
        this.element = document.createElement("img");
    this.element.src = imageUrl;
    this.element.style.position = "absolute";
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.gameScreen.appendChild(this.element);;
    }
  
    move() {
      // Implement player movement logic
    }
  }