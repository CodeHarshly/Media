document.addEventListener("DOMContentLoaded", function() {
  var icon = document.getElementById("icon1");

  icon.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      enableLightMode();
    } else {
      disableLightMode();
    }
  });

  // Check the initial state of light mode
  var isLightMode = localStorage.getItem("lightMode");

  if (isLightMode === "1") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

function enableLightMode() {
  var icon = document.getElementById("icon1");
  var imageid1 = document.getElementById("imageid1");
  var imageid2 = document.getElementById("imageid2");
  document.body.classList.add("light-mode");
  localStorage.setItem("lightMode", "1");
  icon.src = "images/Sun.png";
  icon.style.animation = "slidemenu 3s ease forwards";
  imageid1.src = "images/homep2.png";
  imageid2.src = "images/aboutp2.png";
  setTimeout(() => {
    icon.style.animation ="";
  }, 3000);
}

function disableLightMode() {
  var icon = document.getElementById("icon1");
  var imageid1 = document.getElementById("imageid1");
  var imageid2 = document.getElementById("imageid2");
  document.body.classList.remove("light-mode");
  localStorage.setItem("lightMode", "0");
  icon.src = "images/Moon.png";
  icon.style.animation = "slidemenu 3s ease forwards";
  imageid1.src = "images/homep1.png";
  imageid2.src = "images/aboutp1.png";
  setTimeout(() => {
    icon.style.animation ="";
  }, 3000);
}

