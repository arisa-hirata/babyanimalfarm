//SKIP CONVO

var Skip = document.getElementById("skip_btn"),
    msg = document.getElementById("skip_convo");


Skip.addEventListener("mouseover", function() {
        msg.style.display = "block";
});

Skip.addEventListener("mouseout", function() {
        msg.style.display = "none";
});

//  Portrait Screen Alert
var portScreen = document.getElementById("portrait");

if (window.innerHeight > window.innerWidth) {
  portScreen.classList.remove("hidden");
}

$(window).on("orientationchange", function (event) {
  $("#portrait").toggleClass("hidden");
});
