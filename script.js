// ============================================
// Open the envelope / seal
// ============================================
const sealScreen = document.getElementById('sealScreen');
const sealButton = document.getElementById('sealButton');
const letter = document.getElementById('letter');

sealButton.addEventListener('click', () => {
  sealScreen.classList.add('opened');
  document.body.style.overflow = 'auto';
  // Gently scroll the letter into view on open
  setTimeout(() => {
    letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
});

// Lock scroll until the seal is opened
document.body.style.overflow = 'hidden';

// ============================================
// Scroll-triggered reveal animations
// ============================================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealEls.forEach((el) => observer.observe(el));

// ============================================
// Candle wish interaction
// ============================================
const candleButton = document.getElementById('candleButton');
const candleCaption = document.getElementById('candleCaption');

const captions = [
  'Tap to light a candle & make a wish',
  'A wish, lit and sent into the world ✦'
];

candleButton.addEventListener('click', () => {
  const isLit = candleButton.classList.toggle('lit');
  candleCaption.textContent = isLit ? captions[1] : captions[0];
});
