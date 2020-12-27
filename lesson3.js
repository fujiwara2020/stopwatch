const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');


// 経過時間のミリ秒
let elapsed = 0;

let intervalId = null;

function updateTime() {
    const ms = elapsed % 1000;
    const s = Math.floor(elapsed / 1000) % 60;
    const m = Math.floor(elapsed / (1000*60)) % 60;
    const h = Math.floor(elapsed / (1000*60*60));
    
    const msStr = ms.toString().padStart(3, '0');
    const sStr = s. toString().padStart(2, '0');
    const mStr = m. toString().padStart(2, '0');
    const hStr = h. toString().padStart(2, '0');
    
    timeElement.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
}

// スタートボタン
start.addEventListener('click', function(e) {
    if (intervalId !== null) { return; }
    let pre = new Date();
    intervalId = setInterval(function(){
        const now = new Date();
        elapsed += now - pre;
        pre = now;
        updateTime();
    }, 10);
});

// ストップボタン
stop.addEventListener('click', function(e) {
    clearInterval(intervalId);
    intervalId = null;
});

// リセットボタン
reset.addEventListener('click', function(e) {
    elapsed = 0;
    updateTime();
});
