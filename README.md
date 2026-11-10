# discollector-site

Landing page e informativa sulla privacy di [Discollector](https://discollector.com). HTML e CSS statici, nessun build.

- Pubblicato su Vercel (progetto `discollector-site`, team indigoautomation) a ogni push su `main`, con il dominio
  `discollector.com` (`www` rediretto). GitHub Pages resta attivo dallo stesso `main` solo per reindirizzare i vecchi URL
  a `discollector.com` tramite `redirect.js`, inclusa la privacy aperta dalle app già installate.
- `https://discollector.com/privacy.html` è l'URL della privacy policy. Il testo inglese traduce `docs/PRIVACY.md` nella repo
  dell'app: se cambia il contenuto di uno, aggiorna l'altro.
- `index.html` + `landing.css` + `landing.js`: landing nel tema notte dell'app con telefoni che si muovono scorrendo (`landing.js` scrive
  l'avanzamento `--p` di ogni sezione e cambia le schermate del racconto; con "riduci movimento" i telefoni restano fermi).
  `style.css` ha i token comuni e serve anche alla privacy.
- Colori e font sono gli stessi di `src/components/theme.ts` dell'app (Plus Jakarta Sans in `fonts/`, licenza OFL).
- `icon.png` e `favicon.png` vengono da `assets/icon.png` dell'app (logo borsa). `img/*.jpg` sono catture dell'app;
  `img/qr-app-store.svg` porta a https://apps.apple.com/app/id6830593741 (rigenerabile con `segno`).
