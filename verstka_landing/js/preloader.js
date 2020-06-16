let preloader = document.getElementById("preloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;
    let interpreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interpreloader);
            preloader.style.display = "none";
        }
    }, 16);
}

window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(preloader);
    }, 100);
};