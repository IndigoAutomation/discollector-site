// Animazioni della landing: scrive --p (0→1) su ogni sezione [data-scroll] e, nel racconto, cambia schermata e testo.
document.documentElement.classList.add('js');

const sections = [...document.querySelectorAll('[data-scroll]')];
const story = document.querySelector('.story');
const steps = Number(story.dataset.steps);
const groups = [story.querySelectorAll('.captions li'), story.querySelectorAll('.stack img'), story.querySelectorAll('.dots i')];
let current = 0;
let ticking = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    let p;
    if (s.classList.contains('hero')) p = -r.top / r.height; // 0 in cima alla pagina
    else if (s === story) p = -r.top / (r.height - vh); // avanzamento mentre il telefono è fermo
    else p = (vh - r.top) / (r.height + vh); // da quando entra a quando esce
    p = Math.min(1, Math.max(0, p));
    s.style.setProperty('--p', p.toFixed(4));

    if (s === story) {
      const i = Math.min(steps - 1, Math.floor(p * steps));
      if (i !== current) {
        for (const g of groups) {
          g[current].classList.remove('on');
          g[i].classList.add('on');
        }
        current = i;
      }
    }
  }
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
update();
