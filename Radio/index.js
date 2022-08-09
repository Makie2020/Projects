$(document).ready(function() {
    $( "#lijn" ).draggable({ 
        axis: "x",
        containment: ("#dial"),
        cursor: "pointer",
        drag: (e, ui) => {
            console.log(ui.position.left);
            if (ui.position.left >= 310 & ui.position.left <= 340) {
                titel.innerHTML = "Capital FM"
              } else if ( ui.position.left >= 490 & ui.position.left <= 520){
                titel.innerHTML = "Heart FM"
              } else if (ui.position.left >= 640 & ui.position.left <= 670) {
                titel.innerHTML = "Classic FM"
              } else if (ui.position.left >= 165 & ui.position.left <= 195) {
                titel.innerHTML = "LBC FM"
              } else if (ui.position.left >= 215 & ui.position.left <= 245) {
                titel.innerHTML = "Classic XTR FM"
              } else if (ui.position.left >= 365 &  ui.position.left <= 395) {
                titel.innerHTML = "XFM"
              } else if (ui.position.left >= 441 &  ui.position.left <= 471) {
                titel.innerHTML = "Gold FM"
              } else if (ui.position.left >= 279 & ui.position.left <= 307) {
                titel.innerHTML = "Smooth FM"
              } else {
                document.getElementById("titel").innerHTML = "Searching";
              }
        }
    });
    $("button").click(function() {
      let x= 500;  
      const fired_button = $(this).val();
        if (fired_button === "Capital") {
            x = 320;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#firstButton").css("opacity", 1);
        } else if (fired_button === "Heart") {
            x = 500;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#secondButton").css("opacity", 1);
        } else if (fired_button === "Classic") {
            x = 650;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#thirdButton").css("opacity", 1);
        } else if (fired_button === "LBC") {
            x = 175;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#fourthButton").css("opacity", 1);
        }  else if (fired_button === "CaptitalXtr") {
            x = 225;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#fifthButton").css("opacity", 1);
        }  else if (fired_button === "XFM") {
            x = 375;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#sixthButton").css("opacity", 1);
        } else if (fired_button === "Gold") {
            x = 451;
            lijn.style.left = x + 'px';
            titel.innerHTML = fired_button + " FM";
            $("button").css("opacity", 0.7);
            $("#seventhButton").css("opacity", 1);
        } else if (fired_button === "Smooth") {
            x = 289;
            lijn.style.left = x + 'px';
            $("button").css("opacity", 0.7);
            $("#eigthButton").css("opacity", 1);
            titel.innerHTML = fired_button + " FM";
        } else {
            document.getElementById("titel").innerHTML = "Capital";
        }
    });
}); 
var titel = document.getElementById("titel")
var lijn = document.getElementById('lijn');  