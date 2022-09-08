var hours = document.getElementById('h');
var minutes = document.getElementById('m');
var seconds = document.getElementById('s');
var day = document.getElementById('d');
var date = document.getElementById('da');
var duration = document.getElementById('ampm');

function reload() {
    var cont = new Date();

    var hh = cont.getHours();
    var mm = cont.getMinutes();
    var ss = cont.getSeconds();
    var dd = cont.getUTCDate();
    
    if(hh==00){
     hh = 12;
     duration = 'AM';
    }
    if(hh==12){
     duration = 'PM';
    }
    if(hh>12){
     hh = hh-12;
     duration = 'PM';
    }

    hours.textContent = hh; 
    minutes.textContent = mm;
    seconds.textContent = ss;
    day.textContent = getday(dd);
    date.textContent = cont;
    duration.textContent = duration;

}

function getday(value){
    var dayNames =
    [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    
    return[value];
}

setInterval(reload,1000);