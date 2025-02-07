// Countdown Timer
function countdown() {
    const valentineDate = new Date('Feb 14, 2025 00:00:00').getTime();
    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = valentineDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById("countdown-timer").innerHTML = "It's Valentine’s Day!";
        }
    }, 1000);
}

// Love Compatibility Calculator (Always 100%)
function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    
    if (name1 && name2) {
        const compatibility = 100; // Always 100% compatibility
        document.getElementById("love-result").innerHTML = `${name1} ❤️ ${name2} = ${compatibility}% Compatibility!`;
    } else {
        alert("Please enter both names!");
    }
}

// Show Proposal Popup on Button Click
document.getElementById("proposal-button").addEventListener("click", function () {
    showProposal();
});

// Show Proposal Popup and Launch Confetti
function showProposal() {
    launchConfetti(); // Launch confetti animation
    const popup = document.getElementById("proposal-popup");
    popup.style.display = "block"; // Ensure the popup becomes visible
    popup.classList.add("show"); // Optional: For smoother animations
}

// Close Proposal Popup (when user clicks "Yes!")
function closePopup() {
    const popup = document.getElementById("proposal-popup");
    popup.style.display = "none"; // Hide the popup
    popup.classList.remove("show"); // Optional: Remove animation class
}

// Confetti Effect
function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;
    (function frame() {
        confetti({
            particleCount: 10,
            angle: Math.random() * 360,
            spread: 45,
            origin: {
                x: Math.random(),
                y: Math.random()
            },
            colors: ['#ff007f', '#ff00b3', '#ff33cc', '#ff66ff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Initialize Countdown Timer
countdown();
