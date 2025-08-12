// script.js
window.addEventListener('load', () => {
  // Back to top
  const btn = document.getElementById('backToTop');
  const toggleBtn = () => {
    const y = document.documentElement.scrollTop || document.body.scrollTop;
    btn.style.display = y > 300 ? 'block' : 'none';
  };
  window.addEventListener('scroll', toggleBtn);
  toggleBtn();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Scrollspy：高亮当前章节
  const links = document.querySelectorAll('.section-nav .nav-link, .site-nav.compact a');
  const map = {};
  links.forEach(l => {
    const id = l.getAttribute('href').replace('#','');
    map[id] = map[id] || [];
    map[id].push(l);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      const id = en.target.id;
      if (map[id]) {
        map[id].forEach(el => el.classList.toggle('active', en.isIntersecting));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

  document.querySelectorAll('main .section').forEach(sec => io.observe(sec));
});
