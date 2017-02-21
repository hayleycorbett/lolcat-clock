var time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
var message = document.getElementById('timeEvent');
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = "lunchtime" + 2; // 2PM

var updateClock = function()
{

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
}else if (time == napTime){
    messageText = "IZ NAP TIME...";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
}else if (time == lunchTime){
    messageText = "IZ NOM NOM NOM TIME!!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
}else if (time == wakeupTime){
    messageText = "IZ TIME TO GETTUP.";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
}else if (time < noon){
    messageText = "Good morning, Mate!";
}else if (time > evening){
    messageText = "Good Evening, Mate!";
}else{
    messageText = "Good afternoon, Mate!";
}

console.log(messageText);

message.innerText = messageText;
lolcat.src = image;


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};
};

partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
