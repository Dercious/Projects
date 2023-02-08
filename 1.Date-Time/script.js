var date = new Date();

var TodayDate = document.getElementById('date');
var TodayDay = document.getElementById('day');
var TodayTime = document.getElementById('time');
var noofdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", , "Saturday"];

function CurrentDate() {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    TodayDate.innerHTML = day + "/" + month + "/" + year;
}
CurrentDate();
function CurrentDay() {
    var day = noofdays[date.getDay()];
    TodayDay.innerHTML = day;
}
CurrentDay();

function CurrentTime() {
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    // if(hour>12){
    //     hour=hour-12;
    // }

    TodayTime.innerHTML = hour+" Hours "
    + min +" Mins "
    + sec +" Sec ";
    setTimeout(()=>{
        CurrentTime()
    },1000)
}console.log(CurrentTime());
CurrentTime();