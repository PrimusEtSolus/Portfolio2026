document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

console.log("Portfolio loaded successfully!");
