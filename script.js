document.addEventListener('DOMContentLoaded', () => {
  // Navbar Active Link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(15, 15, 26, 0.98)';
    } else {
      navbar.style.background = 'rgba(15, 15, 26, 0.95)';
    }
  });

  // Smooth Scroll for Buttons and Nav Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Project Links Alert (Temporary Demo)
  document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Demo coming soon! This feature requires a server-side setup.');
    });
  });

  document.querySelectorAll('.code-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Code available on GitHub soon! Check back later.');
    });
  });

  // Form Validation and Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name && email && message) {
      formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
      contactForm.reset();
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    } else {
      formMessage.textContent = 'Please fill out all fields.';
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    }
  });
});