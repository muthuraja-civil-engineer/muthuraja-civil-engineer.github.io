/**
 * GSAP & ScrollTrigger Animations Controller
 * Subtle, non-distracting entrances and clean reveals
 */
export function initAnimations() {
  if (typeof gsap === 'undefined') {
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Hero Entrance Animation
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  
  heroTl
    .from('.hero-status-pill', { opacity: 0, y: -15, duration: 0.6, delay: 0.1 })
    .from('.hero-headline', { opacity: 0, y: 25, duration: 0.8 }, '-=0.4')
    .from('.hero-subheadline', { opacity: 0, y: 15, duration: 0.6 }, '-=0.4')
    .from('.hero-actions .btn', { opacity: 0, y: 15, stagger: 0.1, duration: 0.5 }, '-=0.3')
    .from('.hero-photo-frame', { opacity: 0, scale: 0.97, duration: 0.8 }, '-=0.5')
    .from('.metric-card', { opacity: 0, y: 15, stagger: 0.08, duration: 0.5 }, '-=0.4');

  // 2. ScrollTrigger Reveals for Sections
  if (typeof ScrollTrigger !== 'undefined') {
    // Project Cards Reveal
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: 'power2.out'
      });
    });

    // Service Cards Reveal
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.08,
        ease: 'power2.out'
      });
    });

    // Timeline Items
    gsap.utils.toArray('.timeline-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    // Testimonial Cards
    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out'
      });
    });
  }
}
