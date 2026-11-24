document.addEventListener('DOMContentLoaded', () => {
  
  const menuBtn = document.getElementById('menuToggle');
  const navDrawer = document.getElementById('navDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

function openDrawer() {
    navDrawer.classList.add('open');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    navDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    navDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navDrawer.classList.contains('open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
});

const serviceItems = document.querySelectorAll('.about-container-right li');
if (serviceItems.length > 0) {
  function updateServiceOpacity() {
    const vh = window.innerHeight;
    serviceItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const progress = (vh - rect.top) / (vh * 0.6);
      const opacity = Math.max(0.12, Math.min(1, progress));
      const blur = Math.max(0, (1 - opacity) * 6);
      el.style.opacity = opacity.toFixed(2);
      el.style.filter = `blur(${blur.toFixed(1)}px)`;
    });
  }
  window.addEventListener('scroll', updateServiceOpacity, { passive: true });
  updateServiceOpacity();
}
