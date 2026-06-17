const topbar = document.querySelector(".site-header");

const syncHeaderState = () => {
  if (!topbar) return;
  topbar.dataset.compact = String(window.scrollY > 12);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
