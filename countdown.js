const targetDate = new Date().getTime()
+ (1000 * 3600 *48);
let days, hours, minutes, seconds;

const countdown = document.getElementById("tiles");


const timer = setInterval(getCountdown, 1000);
function pad(n){
    return (n < 10? '0':'') + n;
}
function getCountdown(){
    const currentDate = new Date().getTime();
    let secondsLeft = (targetDate - currentDate)/ 1000;
    
    if (secondsLeft < 0){
        clearInterval(timer);
        return;
    }

    days = pad(parseInt(secondsLeft/86400));
    secondsLeft = secondsLeft % 3600;

    minutes = pad(parseInt(secondsLeft / 60));
    seconds = pad(parseInt(secondsLeft % 60));


}
getCountdown();