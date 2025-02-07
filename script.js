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

function showProposal() {
    document.getElementById("proposal-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("proposal-popup").style.display = "none";
}

// Call countdown function
countdown();
