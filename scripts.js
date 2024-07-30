document.addEventListener('DOMContentLoaded', function() {
    // Autoplay first song
    const audio = document.querySelector('#birthday-song');
    audio.muted = true;  // Start muted to allow autoplay
    audio.play().then(() => {
        audio.muted = false;  // Unmute after playing starts
    }).catch(error => {
        console.log('Autoplay was prevented. Click anywhere to play the song.');
        // Add an event listener to unmute and play on first user interaction
        document.addEventListener('click', () => {
            audio.muted = false;
            audio.play();
        }, { once: true });
    });

    // Quotes array
    const quotes = [
        "Keep beautifying the atmosphere with your beautiful smile.",
        "May your day be filled with joy and your year with success.",
        "Your smile lights up every room, and your heart warms every soul.",
        "Wishing you all the happiness in the world today and always.",
        "You make every day brighter just by being you."
    ];

    let quoteIndex = 0;
    const quoteBox = document.getElementById('quote');
    
    // Function to change quotes
    function changeQuote() {
        quoteBox.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }
    
    // Initial quote
    changeQuote();

    // Change quote every 6 seconds
    setInterval(changeQuote, 6000);
});
