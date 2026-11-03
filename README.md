# discollector-site

Landing page e informativa sulla privacy di [Discollector](https://indigoautomation.github.io/discollector-site/),
pubblicate con GitHub Pages dal branch `main` (cartella radice). HTML e CSS statici, nessun build.

- `privacy.html` è l'URL della privacy policy per App Store Connect. Ha lo stesso testo di `docs/PRIVACY.md` nella repo dell'app:
  se cambia uno, aggiorna l'altro.
- Colori e font sono gli stessi di `src/components/theme.ts` dell'app (tema Spore, un solo accento rosa, Inter in `fonts/`, licenza OFL).
- Il link "Dati di BPM e tonalità da GetSongBPM.com" è il backlink obbligatorio per l'API di GetSongBPM: non toglierlo.
- Il pulsante App Store ha `href="#"` finché l'app non è pubblicata.
