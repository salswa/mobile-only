// Detect if the user is on a mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Redirect if not on a mobile device
if (!isMobile) {
    window.location.href = 'not-desktop-compatible.html';
}
