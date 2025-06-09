// Simple Spotify embed player implementation
const PLAYLIST_ID = "7cfvCbO1V0hoTj3m8fracc";

// Function to load the playlist
document.addEventListener("DOMContentLoaded", () => {
  const embedElement = document.querySelector(".spotify-embed");
  if (embedElement) {
    // Using compact mode and hiding download button where possible
    embedElement.src = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0&view=coverart&compact=true`;
  }
});

// Add functionality to open in Spotify when requested
function openInSpotify() {
    window.open(`https://open.spotify.com/playlist/${PLAYLIST_ID}`, '_blank');
}
