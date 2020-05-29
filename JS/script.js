// Laikmatis


// Set the date we're counting down to
var countDownDate = new Date("Feb 29, 2020 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("laikmatis").innerHTML = days + " dienų " + hours + "val "
  + minutes + "min " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("laikmatis").innerHTML = "Seminaras jau įvyko";
  }
}, 1000);

$("#Mykolas").on('click', function (e) {
e.preventDefault();
    $.fancybox.open({
        src: '<div class="message"><h2>Mykolas Truncė</h2> <li>Specializacija – Šeimų išsaugojimas. Tam jis konsultuoja poras, padeda asmeninio tobulėjimo srityje, kuria ir veda seminarus poroms.</li><li>Patirtis – 40+ metų seksualinės patirties trijose santuokose ir partnerystėje.</li><li>Yra susipažinęs su Indų Tantra, Kinų Meilės Dao ir pagrindinius principus taiko savo gyvenime.</li><li>Konsultuodamas poras mato sutuoktinių klaidas intymaus ryšio srityje ir  padeda jas ištaisyti.</li></div>',
        type: 'html',
        smallBtn: false
    });
    
    

});

    $("#Nerija").on('click', function (e) {
e.preventDefault();
    $.fancybox.open({
        src: '<div class="message"><h2>Nerija Solaitė</h2> <li>Specializacija – vyro ir moters energijų susijungimo meditacijos.</li><li>Yra gerai susipažinusi su Indų Tantra ir įvaldžiusi  energijų  sužadinimo bei užauginimo meditacijas.</li><li>Geba  sukurti saugią, intymią, artimą ir pilną pagarbos bei meilės erdvę, kurioje sutuoktiniai pasijaučia artimi ir saugūs.</li><li>Kaupė patirtį Lietuvoje, JAV, Indijoje, Ekvadore.</li></div>',
        type: 'html',
        smallBtn: false
    });


});

    $("#btn-footer").on('click', function (e) {
e.preventDefault();
    alert("Dėkojame, kad užsiregistravote naujienlaiškio gavimui!");
   

});


    $("VienasSem").on('click', function (e) {
e.preventDefault();
    alert("Dėkojame, kad pirkote bilietą į seminarą porai!");
   

});


    $("TrysSem").on('click', function (e) {
e.preventDefault();
    alert("Dėkojame, kad pirkote bilietą į 3 seminarus porai!");
   

});

/**/

var form = document.getAtr;

form.addEventListener("focus", function(event) {
    event.target.style.backgroundColor="green";
}, true
)

form.addEventListener("blur", function(event) {
    event.target.style.backgroundColor="";
}, true
)