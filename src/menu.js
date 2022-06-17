export default function menu(h1, h2, p, body, html, photo) {
  h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Seasonal Menu"));
  h1.setAttribute("class","menu-h1");
  body.appendChild(h1);

  h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Starters"));
  h2.setAttribute("class","menu-h2");
  body.appendChild(h2);

  p = document.createElement("p");
  p.appendChild(document.createTextNode("Fresh Harvest Lumpia • Sinigang na Tangigue  • Seafood Kawali"));
  body.appendChild(p);

  h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Mains"));
  h2.setAttribute("class","menu-h2");
  body.appendChild(h2);

  p = document.createElement("p");
  p.appendChild(document.createTextNode("Classic Adobo • Lechon with Pancit • Sisig na Baboy"));
  body.appendChild(p);

  h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Desserts"));
  h2.setAttribute("class","menu-h2");
  body.appendChild(h2);

  p = document.createElement("p");
  p.appendChild(document.createTextNode("Halo-halo • Leche Flan  • Palitaw"));
  body.appendChild(p);

  html.setAttribute("style",`height: 100%;padding: 0 10%;background: url(${photo}) no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;`);
}