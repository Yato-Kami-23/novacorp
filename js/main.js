/* ============================================================
   NovaCorp — main.js  (shared across all pages)
   ============================================================ */

/**
 * Highlights the sidebar nav-item that matches the current page URL.
 * Each <a class="nav-item"> must have an href pointing to the page file.
 */
function setActiveNav() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
  });
}

/**
 * Contact form submission feedback.
 * Call this on the Contact page's send button.
 */
function handleSend(btnEl) {
  const original = btnEl.textContent;
  btnEl.textContent = '✓ Message Sent!';
  btnEl.style.background = 'linear-gradient(135deg,#6dbf7f,#4aaa66)';
  btnEl.disabled = true;
  setTimeout(() => {
    btnEl.textContent = original;
    btnEl.style.background = '';
    btnEl.disabled = false;
  }, 3000);
}

// Run on every page load
document.addEventListener('DOMContentLoaded', setActiveNav);
