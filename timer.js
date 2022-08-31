//var countDown
//var workTimer
//var restTimer
//grab ids from buttons 



//store a reference to a timer variable
var startTimer;

var deadline = new Date() ;
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Session Complete";
        
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);

//     // Display the result in the element with id="demo"
//     document.getElementById("").innerHTML = hours + "h "
//         + minutes + "m " + seconds + "s ";

//     // If the count down is finished, write some text
//     if (difference < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "Session complete!";
//     }
// }, 1000);

