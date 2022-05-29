

function fn() {
    setTimeout(function () {
        var hint = document.querySelector("#hint");
        hint.innerHTML += "Coba Decode Dulu";
    }, 30000);
}

document.addEventListener('DOMContentLoaded', fn, false);