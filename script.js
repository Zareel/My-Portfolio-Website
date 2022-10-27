let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");
let faCross = document.querySelector("#sidemenu.fa-xmark");

function opentab(tabname) {
  for (item of tablinks) {
    item.classList.remove("active-link");
  }
  for (element of tabcontents) {
    element.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}
