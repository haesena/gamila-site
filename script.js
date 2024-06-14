
window.onscroll = function() {scrollFunction()};

window.onresize = function() {resizeFunction()};

function resizeFunction() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    document.getElementById("CompanyName").style.fontSize = "";
    document.getElementById("headerlogo").style.height = "";
    document.getElementById("Logo_and_Name").style.borderBottom = "";
    document.getElementById("navbar").style.marginTop = "";
    document.getElementById("navbar").style.fontSize = "";
    document.getElementById("subauthornav").style.display = ""
  }  else {
    document.querySelectorAll("nav ul")[0].style.display = "";
  }
}


function scrollFunction() {
  if (window.matchMedia("(min-width: 700px)").matches) {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
          document.getElementById("CompanyName").style.fontSize = "40px";
          document.getElementById("headerlogo").style.height = "40px";
          document.getElementById("Logo_and_Name").style.border = "none";
          document.getElementById("navbar").style.marginTop = "-20px";
          document.getElementById("navbar").style.fontSize = "calc(12px + 0.5vw)";
          document.getElementById("subauthornav").style.display = "none"
    } else {
          document.getElementById("CompanyName").style.fontSize = "";
          document.getElementById("headerlogo").style.height = "";
          document.getElementById("Logo_and_Name").style.borderBottom = "";
          document.getElementById("navbar").style.marginTop = "";
          document.getElementById("navbar").style.fontSize = "";
          document.getElementById("subauthornav").style.display = ""
    }
  }
}

function showMenu() {
  var x = document.querySelectorAll("nav ul")[0];
  if (x.style.display === "flex") {
    document.getElementById("icon").className = "fa fa-bars";
    x.style.display = "none";
  } else {
    document.getElementById("icon").className = "fa fa-close";
    x.style.display = "flex";
  }
}
