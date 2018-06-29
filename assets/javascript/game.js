<script>
        
          // JavaScript function that wraps everything
          $(document).ready(function() {
        
            var captainPlanet = $(".captain-planet");
        
            // Gets Link for Theme Song
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/floyedthebarber.mp3");
        
            // Theme Button
            $(".theme-button").on("click", function() {
              audioElement.play();
            });
            $(".pause-button").on("click", function() {
              audioElement.pause();
            });
        
            // Size Buttons
            $(".normal-button").on("click", function() {
              captainPlanet.animate({ height: "300px" });
            });
            $(".grow-button").on("click", function() {
              captainPlanet.animate({ height: "500px" });
            });
            $(".shrink-button").on("click", function() {
              captainPlanet.animate({ height: "100px" });
            });
        
            $(".stretch-btn").on("click",function(){
            captainPlanet.animate({height:"100%"})
            
            })
        
            // Visibility Buttons
            $(".vis-button").on("click", function() {
              captainPlanet.animate({ opacity: "1" });
            });
            $(".invis-button").on("click", function() {
              captainPlanet.animate({ opacity: "0.05" });
            });
        
            // Move Buttons
            $(".up-button").on("click", function() {
              captainPlanet.animate({ top: "-=200px" }, "normal");
            });
            $(".down-button").on("click", function() {
              captainPlanet.animate({ top: "+=200px" }, "normal");
            });
            $(".left-button").on("click", function() {
              captainPlanet.animate({ left: "-=200px" }, "normal");
            });
            $(".right-button").on("click", function() {
              captainPlanet.animate({ left: "+=200px" }, "normal");
            });
            $(".back-button").on("click", function() {
              captainPlanet.animate({ top: "50px", left: "80px" }, "fast");
            });
        
            // Keyboard move controls
            $(document).keyup(function(e) {
              switch (e.which) {
        
              // Move Buttons (Keyboard Down)
              case 40:
                captainPlanet.animate({ top: "+=200px" }, "normal");
                break;
        
                // Move Buttons (Keyboard Right)
              case 39:
                captainPlanet.animate({ left: "+=200px" }, "normal");
                break;
        
                // Move Buttons (Keyboard Up)
              case 38:
                captainPlanet.animate({ top: "-=200px" }, "normal");
                break;
        
                // Move Buttons (Keyboard Left)
              case 37:
                captainPlanet.animate({ left: "-=200px" }, "normal");
                break;
        
              default:
                break;
              }
            });
          });
        
          </script>var name = prompt ("player 1, enter your name."); 
var word = prompt("player 1, enter your word.");
var i;
for (i = 0; index < name.length; i++) {
    const name = array[index];
    
}
var name = prompt("player 2, enter your name.");
var secret = []
var step;
for (word = 0; word < 2; word++)
console.log()"Player 1's name is"
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/audio/floydthebarber.mp3");
    
