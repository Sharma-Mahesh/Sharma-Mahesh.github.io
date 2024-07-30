document.addEventListener('DOMContentLoaded', function() {
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
