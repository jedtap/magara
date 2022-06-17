import './style.css';
import home from './home';
import menu from './menu';
import reserve from './reserve';
import thanks from './thanks';
import serving from './serving.jpg';


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
      home(h1, h2, p, body, html, serving);
    break;

    case "menu":
      menu(h1, h2, p, body, html);
    break;

    case "reserve":
      reserve(h1, p, br, body, html);
    break;

    case "thanks":
      thanks(h1, p, br, a, span, body, html);
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
