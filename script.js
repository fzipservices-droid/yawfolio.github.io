<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>About - My Portfolio</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <ul>
      <li><a href="index.html" class="nav-link active">About</a></li>
      <li><a href="skills.html" class="nav-link">Skills</a></li>
      <li><a href="projects.html" class="nav-link">Projects</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <section class="section">
    <h1>About Me</h1>
    <p>Hi! I’m [Your Name], a passionate full-stack developer who loves building elegant and efficient web applications.</p>
  </section>

  <footer>
    &copy; 2025 [Your Name]. All rights reserved.
  </footer>
</body>
</html>

document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    const images = item.querySelectorAll('.zoomable');
    const galleryId = item.dataset.gallery;

    const imageSrcs = Array.from(images).map(img => img.src);

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        openLightbox(imageSrcs, index);
      });
    });
  });

  function openLightbox(images, startIndex = 0) {
    let current = startIndex;

    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const imgElement = document.createElement('img');
    imgElement.src = images[current];

    const controls = document.createElement('div');
    controls.className = 'lightbox-controls';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Prev';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next →';

    prevBtn.onclick = () => {
      current = (current - 1 + images.length) % images.length;
      imgElement.src = images[current];
    };

    nextBtn.onclick = () => {
      current = (current + 1) % images.length;
      imgElement.src = images[current];
    };

    lightbox.onclick = (e) => {
      if (e.target === lightbox) document.body.removeChild(lightbox);
    };

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    lightbox.appendChild(imgElement);
    lightbox.appendChild(controls);
    document.body.appendChild(lightbox);
  }
});
