/**
 * Infinite Marquee Partner Ticker
 */
import { portfolioData } from './data.js';

export function initMarquee() {
  const marqueeTrack = document.getElementById('marquee-track');
  if (!marqueeTrack) return;

  const partners = portfolioData.partners;
  
  // Render double set of items to allow seamless infinite loop
  const createItems = () => {
    return partners.map(partner => `
      <div class="marquee-item">
        <span class="marquee-bullet"></span>
        <span class="marquee-brand-text">${partner.name}</span>
        <span class="tag-badge" style="font-size: 0.7rem; opacity: 0.7;">${partner.desc}</span>
      </div>
    `).join('');
  };

  marqueeTrack.innerHTML = createItems() + createItems();
}
