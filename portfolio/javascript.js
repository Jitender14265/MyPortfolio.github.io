var tablinks = document.getElementsByClassName("tab");
var tabcontents = document.getElementsByClassName("tab-contain");
function opentab(tabname) {
  for (tab of tablinks) {
    tab.classList.remove("active-tab");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active");
  }
  event.currentTarget.classList.add("active-tab");
  document.getElementById(tabname).classList.add("active");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "200px";
}
