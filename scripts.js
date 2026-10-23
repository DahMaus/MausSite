function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeLabel");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

const bgm = new Audio("./bgm.mp3");
bgm.loop = true;
bgm.volume = 0.2;

bgm.play().catch(() => {
    document.addEventListener("click", () => {
        bgm.play().catch(console.error);
    }, { once: true });
});