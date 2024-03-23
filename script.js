const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];
const bubbleRadius = 20;

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, bubbleRadius, 0, Math.PI * 2);
    c.fillStyle = "white";
    c.fill();
  };
}

function addBubble() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  bubbles.push(new Bubble(x, y));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach((bubble) => bubble.draw());
}

canvas.addEventListener("click", function (e) {
  bubbles = bubbles.filter((bubble) => {
    return (
      Math.sqrt((e.clientX - bubble.x) ** 2 + (e.clientY - bubble.y) ** 2) >
      bubbleRadius
    );
  });
});

setInterval(addBubble, 1000);
animate();
let score = 0;if((enemies[j].x - bullets[i].x)**2 + (enemies[j].y - bullets[i].y)**2 <= (bulletRadius + enemyRadius)**2) {
  enemies.splice(j, 1);
  score += 10; // Increment score by 10 for each enemy hit
}function draw() {
  // Existing code...

  // Display the score
  c.fillStyle = "black"; // Choose a text color that contrasts with your background
  c.font = "20px Arial";
  c.fillText(`Score: ${score}`, 10, 30); // Position the score at the top left corner

  // Existing code...
}window.onmousedown = (e) => {
  if (clicks === 0) {
    clicks = 1;
    score = 0; // Reset score on game start
    // Existing code...
  }
};// Assuming the Bubble function and other necessary parts of your game are defined above

// Shooter position
const shooter = {
  x: canvas.width / 2,
  y: canvas.height - 30, // Positioned 30px from the bottom
};

// Array to hold projectiles
let projectiles = [];

// Projectile constructor
function Projectile(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 5; // Smaller than a bubble
  this.velocity = 10; // Speed of the projectile

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "yellow"; // Color of the projectile
    c.fill();
  };

  this.update = function() {
    this.y -= this.velocity; // Move the projectile up
    this.draw();
  };
}

// Listen for clicks to shoot
canvas.addEventListener("click", function() {
  // Create a new projectile at the shooter's position
  projectiles.push(new Projectile(shooter.x, shooter.y));
});

// Update game function to include projectile movement
function updateGame() {
  // Clear the canvas or draw the background
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Draw and update each projectile
  projectiles.forEach((projectile, index) => {
    projectile.update();

    // Remove the projectile if it goes off screen
    if (projectile.y + projectile.radius < 0) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    }
  });

  // Other game drawing and updating logic...
}

// Assuming you have a game loop that calls updateGame()