if (location.hostname === 'indigoautomation.github.io') {
  const path = location.pathname.endsWith('/privacy.html') ? '/privacy.html' : '/';
  location.replace('https://discollector.com' + path + location.search + location.hash);
}
