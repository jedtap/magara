export default function home(h1, h2, p, body, html, photo) {
  h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Magara"));
  h1.setAttribute("class","home-h1");
  body.appendChild(h1);

  h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Filipino cuisine elevated"));
  h2.setAttribute("class","home-h2");
  body.appendChild(h2);

  p = document.createElement("p");
  p.appendChild(document.createTextNode("Experience exotic flavours from 2,000 Philippine islands all at the heart of New York. Thousands have enjoy classic Filipino dishes with a twist since our opening in 1869. Bring the whole family and take a trip to South-east Asia without leaving town!"));
  body.appendChild(p);

  html.setAttribute("style",`height: 100%;padding: 0 10%;background: url(${photo}) no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;`);
}