export default function reserve(h1, p, br, body, html) {
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
}