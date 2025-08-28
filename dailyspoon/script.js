document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      body.classList.toggle('drawer-open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => body.classList.remove('drawer-open'));
    });
  }

  // Seamless marquee: duplicate items until width > 2x container
  const marquees = document.querySelectorAll('.marquee');
  marquees.forEach(marquee => {
    const speed = Number(marquee.getAttribute('data-speed') || 40);
    const track = marquee.querySelector('.marquee-track');
    if (!track) return;

    // Duplicate content for continuous scroll
    const originalChildren = Array.from(track.children);
    const originalWidth = () => track.scrollWidth;

    while (originalWidth() < marquee.clientWidth * 2) {
      originalChildren.forEach(child => track.appendChild(child.cloneNode(true)));
    }

    // Adjust animation duration based on speed and content width
    const totalWidth = track.scrollWidth;
    const duration = Math.max(20, Math.min(120, Math.floor(totalWidth / speed)));
    track.style.animationDuration = `${duration}s`;

    // Pause on hover
    marquee.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    marquee.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
  });
});


