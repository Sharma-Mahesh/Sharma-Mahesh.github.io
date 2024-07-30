document.addEventListener('DOMContentLoaded', function() {
    // Autoplay first song
    const audio = document.querySelector('audio');
    if (audio) {
        audio.play();
    }
});
