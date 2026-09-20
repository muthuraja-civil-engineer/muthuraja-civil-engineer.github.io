/**
 * Main Application Orchestrator
 * Clean, Minimalist & Fast
 */
import { portfolioData } from './data.js';
import { initMarquee } from './marquee.js';
import { initAccordion } from './accordion.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeroMetrics();
  renderProjects('all');
  renderServices();
  renderSoftwareStack();
  renderTimeline();
  renderTestimonials();
  renderFaqs();

  // Initialize sub-modules
  initMarquee();
  initAccordion();
  setupNavigation();
  setupProjectFilters();
  setupScrollProgressAndBackToTop();

  // Initialize Lucide Icons if available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Run subtle animations after initial render
  setTimeout(() => {
    initAnimations();
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 50);
});

/* --------------------------------------------------------------------------
   Render Functions
   -------------------------------------------------------------------------- */

function renderHeroMetrics() {
  const container = document.getElementById('hero-metrics-container');
  if (!container) return;

  container.innerHTML = portfolioData.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-value ${m.accent ? 'metric-value-accent' : ''}">${m.value}</div>
      <div class="metric-label">${m.label}</div>
    </div>
  `).join('');
}

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-card ${p.gridSpan}" data-category="${p.category}">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
        <div class="project-overlay">
          <div class="project-meta">
            <span class="tag-badge tag-badge-accent">${p.categoryLabel}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-specs-list">
            ${p.specs.map(s => `
              <div class="project-spec-item">
                <span>${s.label}:</span> <strong>${s.value}</strong>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </article>
  `).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function setupProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderProjects(category);

      // Re-trigger subtle GSAP reveal on filtered cards
      if (typeof gsap !== 'undefined') {
        gsap.from('.project-card', {
          opacity: 0,
          y: 15,
          stagger: 0.08,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  });
}

function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = portfolioData.services.map(s => `
    <div class="service-card">
      <div class="service-icon-box">
        <i data-lucide="${s.icon}"></i>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      <ul class="service-capabilities">
        ${s.capabilities.map(c => `
          <li class="service-capability-item">
            <i data-lucide="check" style="width: 15px; height: 15px;"></i>
            <span>${c}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderSoftwareStack() {
  const container = document.getElementById('software-grid');
  if (!container) return;

  container.innerHTML = portfolioData.softwareStack.map(sw => `
    <div class="software-card">
      <div class="software-card-icon">
        <i data-lucide="${sw.icon}"></i>
      </div>
      <div class="software-name">${sw.name}</div>
      <div class="software-domain">${sw.domain}</div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = portfolioData.timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-content">
        <span class="timeline-period">${t.period}</span>
        <h4 class="timeline-role">${t.role}</h4>
        <div class="timeline-company">${t.company}</div>
        <ul class="timeline-responsibilities">
          ${t.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = portfolioData.testimonials.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">
          ${t.author.charAt(0)}
        </div>
        <div>
          <div class="testimonial-name">${t.author}</div>
          <div class="testimonial-role">${t.organization}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = portfolioData.faqs.map(f => `
    <div class="faq-item">
      <button class="faq-trigger" type="button" aria-expanded="false">
        <span>${f.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-content">
        <p class="faq-text">${f.answer}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   Navigation & Progress
   -------------------------------------------------------------------------- */

function setupNavigation() {
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggle.innerHTML = isOpen 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('open');
      if (toggle) {
        toggle.innerHTML = '<i data-lucide="menu"></i>';
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  });
}

function setupScrollProgressAndBackToTop() {
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
