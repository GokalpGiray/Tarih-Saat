let fullName = prompt("Lütfen Adınızı Giriniz: ");

if (fullName != null) {
    document.getElementById("myName").innerHTML = fullName;
}


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    let dd = date.getDay();

    if (dd = 0) {
        d = "Pazar"
    } else if (d = 1) {
        d = "Pazartesi"
    } else if (d = 2) {
        d = "Salı"
    } else if (d = 3) {
        d = "Çarşamba"
    } else if (d = 4) {
        d = "Perşembe"
    } else if (d = 5) {
        d = "Cuma"
    } else if (d = 6) {
        d = "Cumartesi"
    }
    
    var time = h + ":" + m + ":" + s + " " + d;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);

}

showTime();