/**
 * FAQ Accordion Controller
 */
export function initAccordion() {
  const accordionContainer = document.getElementById('faq-accordion');
  if (!accordionContainer) return;

  accordionContainer.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-trigger');
    if (!trigger) return;

    const item = trigger.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const isActive = item.classList.contains('active');

    // Close all other accordion items
    const allItems = accordionContainer.querySelectorAll('.faq-item');
    allItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.faq-content');
        if (otherContent) otherContent.style.maxHeight = null;
      }
    });

    // Toggle current item
    if (isActive) {
      item.classList.remove('active');
      content.style.maxHeight = null;
    } else {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
