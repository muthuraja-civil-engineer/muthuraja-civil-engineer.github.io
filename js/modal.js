/**
 * Booking / Contact Modal Controller
 */
export function initModal() {
  const modalOverlay = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const bookingForm = document.getElementById('booking-form');
  const modalBody = modalOverlay ? modalOverlay.querySelector('.modal-body') : null;

  if (!modalOverlay) return;

  function openModal(prefilledTopic = '') {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const topicSelect = document.getElementById('project-type-select');
    if (topicSelect && prefilledTopic) {
      topicSelect.value = prefilledTopic;
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind trigger buttons across the site
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-action="book-call"]');
    if (trigger) {
      e.preventDefault();
      const topic = trigger.getAttribute('data-topic') || '';
      openModal(topic);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(bookingForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const projectType = formData.get('projectType') || 'Civil Infrastructure Consultation';
      const notes = formData.get('notes') || '';

      const subject = encodeURIComponent(`Site Call / Consultation Request: ${projectType} - ${name}`);
      const body = encodeURIComponent(
        `Hello Muthuraja,\n\n` +
        `I would like to discuss an engineering project / site consultation.\n\n` +
        `Client Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Project Type: ${projectType}\n` +
        `Details / Scope:\n${notes}\n\n` +
        `Looking forward to connecting.`
      );

      // Trigger mailto client
      const mailtoUrl = `mailto:muthuraja.civil05@gmail.com?subject=${subject}&body=${body}`;

      // Display friendly success confirmation in modal
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center; padding: 20px 0;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981; display: inline-flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 20px;">
              ✓
            </div>
            <h3 style="font-size: 1.4rem; color: #ffffff; margin-bottom: 10px;">Consultation Request Drafted</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; line-height: 1.6;">
              Opening your default email client to send this directly to <strong>muthuraja.civil05@gmail.com</strong>.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <a href="${mailtoUrl}" class="btn btn-primary btn-sm">Launch Email Client</a>
              <button type="button" class="btn btn-secondary btn-sm" id="modal-done-btn">Close</button>
            </div>
          </div>
        `;

        const doneBtn = document.getElementById('modal-done-btn');
        if (doneBtn) {
          doneBtn.addEventListener('click', () => {
            closeModal();
            setTimeout(() => location.reload(), 300);
          });
        }
      }

      window.location.href = mailtoUrl;
    });
  }
}
