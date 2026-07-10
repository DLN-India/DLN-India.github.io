(function () {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const chapters = document.querySelectorAll('[data-chapter]');
  const reveals = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('[data-count]');

  requestAnimationFrame(function () {
    if (hero) {
      hero.classList.add('is-ready');
    }
  });

  function onScrollNav() {
    if (!navbar) return;
    navbar.classList.toggle('is-solid', window.scrollY > 40);
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Motion 1: chapter active state via sticky intersection
  if ('IntersectionObserver' in window && chapters.length) {
    const chapterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            chapters.forEach(function (chapter) {
              chapter.classList.remove('is-active');
            });
            entry.target.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.01 }
    );
    chapters.forEach(function (chapter) {
      chapterObserver.observe(chapter);
    });
  }

  // Motion 2: reveal on scroll
  if ('IntersectionObserver' in window && reveals.length) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Motion 3: proof counters when proof section enters view
  function animateCounter(el) {
    const target = Number(el.getAttribute('data-count') || 0);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = prefix + value + suffix;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    counters.forEach(animateCounter);
  }

  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();
})();
