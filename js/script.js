(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#primary-menu');

  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menu.classList.toggle('is-open', !isOpen);
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector('#contact-form');
  if (!form) return;
  const fields = [
    { input: form.elements.fullName, error: document.querySelector('#name-error'), label: 'Full name' },
    { input: form.elements.email, error: document.querySelector('#email-error'), label: 'Email address' },
    { input: form.elements.subject, error: document.querySelector('#subject-error'), label: 'Subject' },
    { input: form.elements.message, error: document.querySelector('#message-error'), label: 'Message' }
  ];
  const feedback = document.querySelector('#form-feedback');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(field) {
    const value = field.input.value.trim();
    let message = '';
    if (!value) message = `${field.label} is required.`;
    else if (field.input.type === 'email' && !emailPattern.test(value)) message = 'Enter a valid email address, such as name@example.com.';
    field.error.textContent = message;
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }

  fields.forEach(field => field.input.addEventListener('input', () => {
    if (field.input.getAttribute('aria-invalid') === 'true') validate(field);
    if (!feedback.classList.contains('error')) feedback.textContent = '';
  }));

  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.textContent = '';
    feedback.classList.remove('error');
    const valid = fields.map(validate).every(Boolean);
    if (!valid) {
      feedback.textContent = 'Please correct the highlighted fields and try again.';
      feedback.classList.add('error');
      fields.find(field => field.input.getAttribute('aria-invalid') === 'true')?.input.focus();
      return;
    }
    feedback.textContent = 'Your message passed the form checks. This site has no message delivery service configured, so it has not been sent.';
    feedback.focus();
    form.reset();
    fields.forEach(field => field.input.removeAttribute('aria-invalid'));
  });
})();
