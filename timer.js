//var countDown
//var workTimer
//var restTimer
//grab ids from buttons 



//store a reference to a timer variable
var startTimer;

var currentTime = new Date().getTime();
var interval = setInterval(function () {
    var now = new Date().getTime();
    var difference = countDown - now;

    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Session complete!";
    }
}, 1000);

