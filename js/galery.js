function printImages() {
    var content = document.getElementById("galery-content");

    for (var i in data) {
        var image = document.createElement("img");
        image.src = data[i].imgUrl;
        image.className += "galery-img"

        content.appendChild(image);
    }    
}