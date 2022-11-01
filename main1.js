
 var monthNames = ["January", "February", "March", "April", "May"],
    dayNames = ["Sunday", "Monday", "Tuesday"];
setInterval(() => {
var daynam = document.getElementById("dayName"),
    daynum = document.getElementById("daynum"),
    month = document.getElementById("month");

var sec = document.getElementById("second"),
    min = document.getElementById("minute"),
    hr = document.getElementById("hour");
 
var now = new Date,
    ss = now.getSeconds(),
    mm = now.getMinutes(),
    hh = now.getHours(),

    ddn = now.getDay(),
    dd = now.getDate(),
    mon = now.getMonth();

    
    switch(hh){
        case 13:
            hh = 1;
            break;
        case 14:
            hh = 2;
            break;
        case 15:
            hh = 3;
            break;
        case 16:
            hh = 4;
            break;
        case 17:
            hh = 5;
            break;
        case 18:
            hh = 6;
            break;
        case 19:
            hh = 7;
            break;
        case 20:
            hh = 8;
            break;
        case 21:
            hh = 9;
            break;
        case 22:
            hh = 10;
            break;
        case 23:
            hh = 11;
            break;
        case 0:
            hh = 12;
            break;

    }
sec.innerHTML = ss;
min.innerHTML = mm;
hr.innerHTML = hh;

daynum.innerHTML = dd;
month.innerHTML = monthNames[mon];
daynam.innerHTML = dayNames[ddn];
}, 1000);

