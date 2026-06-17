const topbar = document.querySelector(".topbar");

const syncHeaderState = () => {
  topbar.dataset.compact = String(window.scrollY > 12);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
