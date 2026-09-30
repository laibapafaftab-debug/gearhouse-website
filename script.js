// 1. Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// 2. FAQ accordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
  });
});

// 3. Quote modal
const quoteModal = document.getElementById('quoteModal');
const openQuoteBtns = [document.getElementById('openQuote'), document.getElementById('openQuoteHero')];
const closeModalBtn = document.getElementById('closeModal');

openQuoteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    quoteModal.classList.add('open');
    quoteModal.setAttribute('aria-hidden', 'false');
  });
});

function closeQuoteModal() {
  quoteModal.classList.remove('open');
  quoteModal.setAttribute('aria-hidden', 'true');
}

closeModalBtn.addEventListener('click', closeQuoteModal);
quoteModal.addEventListener('click', (e) => {
  if (e.target === quoteModal) closeQuoteModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeQuoteModal();
});

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks — we\'ll text you an estimate shortly.');
  e.target.reset();
  closeQuoteModal();
});

// 4. Contact form validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function setError(id, message) {
  const group = document.getElementById(id).closest('.form-group');
  group.classList.toggle('invalid', Boolean(message));
  group.querySelector('.error-msg').textContent = message || '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const bike = document.getElementById('bike').value.trim();

  if (name === '') { setError('name', 'Please enter your name.'); valid = false; }
  else { setError('name', ''); }

  if (email === '') { setError('email', 'Please enter your email.'); valid = false; }
  else if (!isValidEmail(email)) { setError('email', 'Enter a valid email address.'); valid = false; }
  else { setError('email', ''); }

  if (bike === '') { setError('bike', 'Tell us the bike type and issue.'); valid = false; }
  else { setError('bike', ''); }

  if (!valid) {
    formSuccess.textContent = '';
    return;
  }

  formSuccess.textContent = "Thanks! We'll confirm a time slot within one business day.";
  contactForm.reset();
  setTimeout(() => { formSuccess.textContent = ''; }, 5000);
});

// 5. Scroll-reveal animation
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => revealObserver.observe(el));
