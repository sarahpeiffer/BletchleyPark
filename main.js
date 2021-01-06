const imageArray = ["intro", "about_us", "team", "colossus"];
let index = 0;
window.onload = function () {
    setInterval(function () { switchImage() }, 5000) //6 seconds
}

function switchImage() {
    if (index == imageArray.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    $('#rotate-image').fadeOut(500, function() {
        $('#rotate-image').attr("src","images/" + imageArray[index] + ".jpg");
        $('#rotate-image').fadeIn(500);
    });
}