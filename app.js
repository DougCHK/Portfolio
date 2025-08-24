// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobile = document.getElementById('mobileMenu');
mobile.style.display = "none";
function toggleMenu(force) {
    const show = force ?? mobile.style.display !== 'block';
    mobile.style.display = show ? 'block' : 'none';
}
hamburger.addEventListener('click', () => toggleMenu());