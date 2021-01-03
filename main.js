const imageArray = ["intro", "about_us", "team", "colossus"];
let index = 0;
window.onload=function(){
    setInterval(function(){switchImage()},5000) //6 seconds
}

function switchImage() {
    document.getElementById("rotate").innerHTML = "";
    if(index == imageArray.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
   let newImage = document.createElement("img");
    newImage.src = "images/" + imageArray[index] + ".jpg";
    newImage.classList.add("column-image");
    document.getElementById("rotate").append(newImage);
}