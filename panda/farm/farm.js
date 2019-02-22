
/////  EXIT  ////

var GoQuiz = document.getElementById("go_quiz"),
    GoQuizBG = document.getElementById("container");



document.getElementById("exit").onclick = function(){
   GoQuizBG.classList.add("fadein");
    setTimeout(function() {
        GoQuizBG.style.display = "block";
        GoQuiz.style.display = "block";
    }, 200);
}

document.getElementById("no").onclick = function() {
    GoQuizBG.classList.add("fadeout");
    setTimeout(function() {
        GoQuizBG.style.display = "none";
    }, 100);
}

// <!-- Portrait Screen Alert -->
      var portScreen = document.getElementById("portrait");

      if (window.innerHeight > window.innerWidth) {
          portScreen.classList.remove("hidden");
      }

      $(window).on("orientationchange", function (event) {
          $("#portrait").toggleClass("hidden");
      });
