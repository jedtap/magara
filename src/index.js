import './style.css';

function clearPage(){
  var child = body.lastElementChild; 
  while (child) {
      body.removeChild(child);
      child = body.lastElementChild;
  }
}

function generatePage(page){
  switch(page){
    case "home":
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

      html.setAttribute("style","height: 100%;padding: 0 10%;background: url(../src/serving.jpg) no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;");
    break;

    case "menu":
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

      html.setAttribute("style","height: 100%;padding: 0 10%;background: url(../src/dish.jpg) no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;");
    break;

    case "reserve":
      h1 = document.createElement("h1");
      h1.appendChild(document.createTextNode("Reserve Now"));
      h1.setAttribute("class","contact-h1");
      body.appendChild(h1);

      p = document.createElement("p");
      p.appendChild(document.createTextNode("We accept dine-ins, take-outs, and office reservations"));
      body.appendChild(p);

      br = document.createElement("br");
      body.appendChild(br);

      br = document.createElement("br");
      body.appendChild(br);

      p = document.createElement("p");
      p.appendChild(document.createTextNode("Address: 1st avenue corner 7th Street, Grand Town Manhattan, NYC"));
      body.appendChild(p);

      p = document.createElement("p");
      p.appendChild(document.createTextNode("Telephone number: +37 726-8920"));
      body.appendChild(p);

      p = document.createElement("p");
      p.appendChild(document.createTextNode("Email reservation: bookings@magara.com"));
      body.appendChild(p);

      html.setAttribute("style","height: 100%;padding: 0 10%;background: url(../src/lechon.jpg) no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;");
    break;

    case "thanks":
      h1 = document.createElement("h1");
      h1.appendChild(document.createTextNode("Special Thanks"));
      h1.setAttribute("class","thanks-h1");
      body.appendChild(h1);

      p = document.createElement("p");
      p.appendChild(document.createTextNode("Giving credits to the photo owners. Follow them on Unsplash!"));
      body.appendChild(p);

      br = document.createElement("br");
      body.appendChild(br);

      br = document.createElement("br");
      body.appendChild(br);

      p = document.createElement("p");
      p.setAttribute("class","anchor");
      body.appendChild(p);
      p = document.querySelector(".anchor");

      a = document.createElement("a");
      a.appendChild(document.createTextNode("Airam Dato-on"));
      a.setAttribute("href","https://unsplash.com/@airamdatoon");
      a.setAttribute("target","_blank");
      p.appendChild(a);

      span = document.createElement("span");
      span.appendChild(document.createTextNode(" • "));
      p.appendChild(span);

      a = document.createElement("a");
      a.appendChild(document.createTextNode("Eiliv-Sonas Aceron"));
      a.setAttribute("href","https://unsplash.com/@shootdelicious");
      a.setAttribute("target","_blank");
      p.appendChild(a);

      span = document.createElement("span");
      span.appendChild(document.createTextNode(" • "));
      p.appendChild(span);

      a = document.createElement("a");
      a.appendChild(document.createTextNode("Amanda Lim"));
      a.setAttribute("href","https://unsplash.com/@mandimelanie");
      a.setAttribute("target","_blank");
      p.appendChild(a);

      span = document.createElement("span");
      span.appendChild(document.createTextNode(" • "));
      p.appendChild(span);

      a = document.createElement("a");
      a.appendChild(document.createTextNode("Jem Sahagun"));
      a.setAttribute("href","https://unsplash.com/@jemsahagun");
      a.setAttribute("target","_blank");
      p.appendChild(a);

      html.setAttribute("style","height: 100%;padding: 0 10%;background: url(../src/bread.jpg) no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;");
    break;
  }
}

// Initialize
const body = document.querySelector(".body");
const html = document.querySelector("html");
const buttonHome = document.querySelector(".button-home");
const buttonMenu = document.querySelector(".button-menu");
const buttonReserve = document.querySelector(".button-reserve");
const buttonThanks = document.querySelector(".button-thanks");

let h1, h2, p, br, a, span;

buttonHome.addEventListener("click", () => {
  clearPage();
  generatePage("home");
});

buttonMenu.addEventListener("click", () => {
  clearPage();
  generatePage("menu");
});

buttonReserve.addEventListener("click", () => {
  clearPage();
  generatePage("reserve");
});

buttonThanks.addEventListener("click", () => {
  clearPage();
  generatePage("thanks");
});

generatePage("home");
