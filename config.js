api.aceVimMap('jk', '<Esc>', 'insert');


api.Hints.setCharacters('weuioasdjklxcnm'); 
settings.hintAlign = "left";


api.map('`', '\'');
api.map('O', 't');
// create a new key `t` for default key `on`
api.map('t', 'on');
// create a new key `o` for saved temp key `>_t`


api.map('jk', '<Esc>');
api.map('H', 'S');
api.map('L', 'D');
api.map('gt', 'R');
api.map('gT', 'E');
api.map('K', 'R');
api.map('J', 'E');


// name: Rosé Pine Dawn
// author: thuanowa
// license: unlicense
// upstream: https://github.com/rose-pine/surfingkeys/blob/main/dist/rose-pine-dawn.conf
// blurb: All natural pine, faux fur and a bit of soho vibes for the classy minimalist


const hintsCss =
  "font-size: 13pt; font-family: 'JetBrains Mono NL', 'Cascadia Code', 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 0px; color: #575279 !important; background: #faf4ed; background-color: #faf4ed";


api.Hints.style(hintsCss);
api.Hints.style(hintsCss, "text");


settings.theme = `
  .sk_theme {
    background: #faf4ed;
    color: #575279;
  }f
