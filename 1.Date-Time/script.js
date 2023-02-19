var date = new Date();

var TodayDate = document.getElementById('date');
var TodayDay = document.getElementById('day');
var TodayTime = document.getElementById('time');
var noofdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
    var date=new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = "AM"

    if(hour==0){
        hour=12
    }
    if (hour>12)
    {
        hour=hour-12
        ampm="PM"
    }
    
    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;

    TodayTime.innerHTML = hour+": "
    + min +": "
    + sec + " "+ampm;
    setTimeout(()=>{
        CurrentTime()
    },1000)
}
CurrentTime();

