export default function thanks(h1, p, br, a, span, body, html) {
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
}