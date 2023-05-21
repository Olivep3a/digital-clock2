setInterval(() => {
    let hoursEl = document.getElementById("hours");
    let minutesEl = document.getElementById("minutes");
    let secondsEl = document.getElementById("seconds");
    let ampmEl = document.getElementById("ampm");

    let hhEL = document.getElementById("hh");
    let mmEL = document.getElementById("mm");
    let ssEL = document.getElementById("ss");

    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursEl.innerHTML = h + "<br><span>Hours</span>";
    minutesEl.innerHTML = m + "<br><span>Minutes</span>";
    secondsEl.innerHTML = s + "<br><span>Seconds</span>";
    ampmEl.innerHTML = am;

    hhEL.style.strokeDashoffset = 440 - (440 * h) / 12;
    mmEL.style.strokeDashoffset = 440 - (440 * m) / 60;
    ssEL.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
