document.addEventListener('DOMContentLoaded', () => {
  // Fade-in on scroll for .section and .portfolio-item
  const fadeElems = [...document.querySelectorAll('.section, .portfolio-item')];

  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElems.forEach(elem => {
      const elemTop = elem.getBoundingClientRect().top;
      if (elemTop < triggerBottom) {
        elem.style.opacity = 1;
        elem.style.transform = 'translateY(0)';
        elem.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      }
    });
  };

  fadeElems.forEach(elem => {
    // Initial state: invisible and slightly moved down
    elem.style.opacity = 0;
    elem.style.transform = 'translateY(20px)';
  });

  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll(); // Trigger on load

  // Lightbox for portfolio images
  const portfolioImages = document.querySelectorAll('.portfolio-item img');

  portfolioImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.style.position = 'fixed';
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = '100vw';
      lightbox.style.height = '100vh';
      lightbox.style.background = 'rgba(0,0,0,0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.alignItems = 'center';
      lightbox.style.justifyContent = 'center';
      lightbox.style.cursor = 'zoom-out';
      lightbox.style.zIndex = 9999;

      const enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      enlargedImg.style.maxWidth = '90%';
      enlargedImg.style.maxHeight = '90%';
      enlargedImg.style.borderRadius = '10px';
      enlargedImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.7)';
      lightbox.appendChild(enlargedImg);

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });

      document.body.appendChild(lightbox);
    });
  });

  // Dark mode toggle (optional, you can create a button with id="darkModeToggle")
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});
