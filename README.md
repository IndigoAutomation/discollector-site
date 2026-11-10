# discollector-site

Landing page e informativa sulla privacy di [Discollector](https://discollector.com). HTML e CSS statici, nessun build.

- Pubblicato su Vercel (progetto `discollector-site`, team indigoautomation) a ogni push su `main`, con il dominio
  `discollector.com` (`www` rediretto). GitHub Pages resta attivo dallo stesso `main`, così il vecchio indirizzo
  https://indigoautomation.github.io/discollector-site/privacy.html continua a funzionare.
- `privacy.html` è l'URL della privacy policy per App Store Connect. Ha lo stesso testo di `docs/PRIVACY.md` nella repo dell'app:
  se cambia uno, aggiorna l'altro.
- `index.html` + `landing.css`: landing nel tema notte dell'app. `style.css` ha i token comuni e serve anche alla privacy.
- Colori e font sono gli stessi di `src/components/theme.ts` dell'app (Plus Jakarta Sans in `fonts/`, licenza OFL).
- `icon.png` e `favicon.png` vengono da `assets/icon.png` dell'app (logo borsa). `img/*.jpg` sono catture dell'app;
  `img/qr-app-store.svg` porta a https://apps.apple.com/app/id6830593741 (rigenerabile con `segno`).
