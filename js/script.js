function randImg(){
    setTimeout(function () {
        var rand = Math.floor(Math.random() * 6) + 1;
        var img = document.querySelector("#qr");
        img.src = "images/"+rand+".png";

        randImg();
    }, 15000);
}

function fn() {
    var img = document.querySelector("#qr");
    img.src = "images/1.png";
    randImg();
}

document.addEventListener('DOMContentLoaded', fn, false);