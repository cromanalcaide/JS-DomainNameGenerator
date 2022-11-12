/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let intro = ["the-", "our-", "yet-another-", "my-"];
  let epicEpiteto = [
    "amazing-",
    "user-frieldy-",
    "incredible-",
    "brand-new-",
    "uncanny-",
    "all-different-all-new-",
    "impossible-",
    "superior-",
    "good-old-"
  ];
  let epicOutro = [
    "website-domain",
    "christmas-present",
    "extinction-event",
    "impostor-syndrome"
  ];
  let epicDomain = [".com", ".net", ".org", ".ws", ".agency"];

  let newDomain = document.querySelector("#ejemplo2");

  function generateDomain() {
    for (let i = 0; i < intro.length; i++) {
      for (let i2 = 0; i2 < epicEpiteto.length; i2++) {
        for (let i3 = 0; i3 < epicOutro.length; i3++) {
          for (let i4 = 0; i4 < epicDomain.length; i4++) {
            let fraseFinal =
              intro[i] + epicEpiteto[i2] + epicOutro[i3] + epicDomain[i4];
            let myList = document.createElement("li");
            myList.innerHTML = fraseFinal;
            newDomain.appendChild(myList);
          }
        }
      }
    }
  }

  // document.getElementById("domainsHere").innerHTML = newDomain;
  // document.write(newDomain);
  generateDomain();
  // const newContent = document.createTextNode(newDomain);
};
