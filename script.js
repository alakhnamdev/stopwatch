let [msec, sec, min, hour] = [0, 0, 0, 0];
let timer = document.getElementById("clock");
let lapRec = document.getElementById("lapRec");
let main = null;
let lnum = 1;
document.getElementById("start").addEventListener("click", () => {
    if (main !== null) {
        clearInterval(main);
    }
    main = setInterval(displayTime, 10);
    document.getElementById("lap").style.display = "block";
});
function displayTime() {
    msec += 10;
    sec = (msec == 1000) ? ((sec + 1) % 60) : sec;
    min = (sec == 60) ? ((min + 1) % 60) : min;
    hour = (min == 60) ? (hour + 1) : hour;
    msec = (msec == 1000) ? 0 : msec;

    let h = String(hour).padStart(2, "0");
    let m = String(min).padStart(2, "0");
    let s = String(sec).padStart(2, "0");
    let ms = String(msec).padStart(3, "0");

    timer.innerHTML = `${h}:${m}:${s}:${ms}`;
}
document.getElementById("pause").addEventListener("click", () => {
    clearInterval(main);
});
document.getElementById("lap").addEventListener("click", () => {
    document.getElementById("heading").style.display = "block";
    lapRec.style.display = "block";
    if (lnum <= 10) {
        let lap = timer.innerText;
        let div = document.createElement("div");
        let output = "lap " + lnum + " = " + lap;
        div.innerHTML = output;
        lapRec.appendChild(div);
        lnum += 1;
    }
    else{
        alert("laps exceed !");
    }
});
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(main);
    [msec, sec, min, hour] = [0, 0, 0, 0];
    timer.innerHTML = "00:00:00:000";
    lapRec.innerHTML = "";
    lnum = 1;
    lapRec.style.display = "none";
    document.getElementById("lap").style.display = "none";
    document.getElementById("heading").style.display = "none";
});