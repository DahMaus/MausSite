function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeLabel");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);