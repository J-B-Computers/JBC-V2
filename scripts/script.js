// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Highlight the current navigation link
    const navLinks = document.querySelectorAll('.site-navigation-item a');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  
    // Smooth scroll to sections
    const smoothScroll = (target, duration) => {
      const targetPosition = document.querySelector(target).offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    };
  
    const scrollToSections = document.querySelectorAll('.scroll-to');
    scrollToSections.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);
      });
    });
  
    // Modal window functionality
    const modal = document.querySelector('.modal');
    const modalOpen = document.querySelectorAll('.modal-open');
    const modalClose = document.querySelector('.modal-close');
  
    modalOpen.forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.add('modal-show');
      });
    });
  
    modalClose.addEventListener('click', () => {
      modal.classList.remove('modal-show');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('modal-show');
      }
    });
  });
  