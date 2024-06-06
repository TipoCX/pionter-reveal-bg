let vw = document.getElementById("body").clientWidth;
let vh = document.getElementById("body").clientHeight;

function updateSize() {
    vw = document.getElementById("body").clientWidth;
    vh = document.getElementById("body").clientHeight;
}

window.onresize = updateSize()

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

async function moveBlur(e) {
    // await new Promise(r => setTimeout(r, 20));
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById('body').style.boxShadow = (x - vw / 2) + 'px ' + (y - vh / 2) + "px 80px " + (vw * 0.45) + "px rgba(0, 0, 0, 1) inset"
}
