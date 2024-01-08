const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const myAudio = document.getElementById("my_audio");

window.addEventListener("click", function() {
  // Set the volume based on the scroll position
  myAudio.volume = 0.2; // You can adjust this value based on your preference
  myAudio.play();
});


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// =====================

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiPieces.push(createConfettiPiece());
    }

    animateConfetti();
}

function createConfettiPiece() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff']; // Add more colors as needed
    const size = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    return {
        x,
        y,
        size,
        color,
        velocityX: (Math.random() - 0.5) * 5, // Random horizontal velocity
        velocityY: Math.random() * 3 + 2, // Vertical velocity with a minimum speed
    };
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(confetti => {
        confetti.x += confetti.velocityX;
        confetti.y += confetti.velocityY;

        // Bounce off the walls
        if (confetti.x > canvas.width || confetti.x < 0) {
            confetti.velocityX *= -1;
        }

        // Reset confetti if it goes below the screen
        if (confetti.y > canvas.height) {
            confetti.y = 0;
        }

        drawConfetti(confetti);
    });

    requestAnimationFrame(animateConfetti);
}

function drawConfetti(confetti) {
    ctx.beginPath();
    ctx.arc(confetti.x, confetti.y, confetti.size, 0, Math.PI * 2);
    ctx.fillStyle = confetti.color;
    ctx.fill();
    ctx.closePath();
}

window.addEventListener('resize', () => {
    // Adjust canvas size when the window is resized
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

