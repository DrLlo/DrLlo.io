$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

   /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

     //drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(1200,700,15,15)
    createPlatform(1100,650,15,15)
    createPlatform(1000,600,15,15)
    createPlatform(925,525,15,50)
    createPlatform(830,525,15,15)
    createPlatform(750,525,15,15)
    createPlatform(630,525,25,20)
    createPlatform(550,425,10,75)
    createPlatform(440,575,25,25)
    createPlatform(350,575,5,5)
    createPlatform(300,500,5,5)
    createPlatform(175,450,5,5)
    createPlatform(125,350,20,20)
    createPlatform(200,300,1000,5)
    createPlatform(200,275,5,5)
    createPlatform(100,125,10,450)
    createPlatform(1275,200,20,20)
    createPlatform(100,125,1100,5)
    createPlatform(1,130,25,25)
    createPlatform(75,250,25,25)
    createPlatform(1,400,50,25)
    createPlatform(75,525,10,10)
    createPlatform(20,575,5,5)

    




    
 // TODO 2
 // Create collectables
 // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
 // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
 // example usage: createCollectable(type, x, y, gravity, bounce)

 createCollectable("steve", 1250, 600, 3, 0.7);
 createCollectable("grace", 500, 478, 0, 0.7);
 createCollectable("max", 0, 85, 0, 0.7);

 
 // TODO 3
 // Create cannons
 // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
 // Your wall choices are: 'top' 'left' 'right' and 'bottom'
 // example usage: createCannon(side, position, delay, width, height)


 createCannon("top", 300,800);
 createCannon("top", 500,800);
 createCannon("top", 700, 800);
 createCannon("top", 100, 6000, 50, 50);
 createCannon("top", 900, 800);
 createCannon("top", 1100, 800);
 createCannon("top", 1300, 800);
 createCannon("top", 1400, 800);
 createCannon("right", 325, 6000, 50, 50);
 createCannon("right", 150, 4000, 50, 50);
 createCannon("right", 500, 10000, 300, 100);
 createCannon("right", 750, 6000, 50, 50);
 
 
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
