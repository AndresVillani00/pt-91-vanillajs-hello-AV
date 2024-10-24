/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = [" ate", " peed", " crushed", " broke"];
  let what = [" my homework ", " my phone ", " the car "];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];

  function excusaAleatoria() {
    let excusaWho = Math.floor(Math.random() * who.length);
    let excusaAction = Math.floor(Math.random() * action.length);
    let excusaWhat = Math.floor(Math.random() * what.length);
    let excusaWhen = Math.floor(Math.random() * when.length);

    let excusa =
      who[excusaWho] +
      action[excusaAction] +
      what[excusaWhat] +
      when[excusaWhen];
    document.getElementById("excusas").innerHTML = "<h3>" + excusa + "</h3>";
  }

  excusaAleatoria();
};
