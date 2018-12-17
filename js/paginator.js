document.getElementsByClassName("paginator")[0].addEventListener("click", pagination)

var dishes = document.getElementsByClassName("dish");
var count = 2;
var countPage = Math.ceil(dishes.length / count);

var paginator = document.querySelector(".paginator");
var page = "";
for (var i = 0; i < countPage; i++) {
  page += "<span data-page=" + i + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
}
paginator.innerHTML = page;

for (var i = 0; i < dishes.length; i++) {
    if (i < count)
        dishes[i].style.display = "block";
}

var mainPage = document.getElementById("page1");
mainPage.classList.add("pagination-active");

function pagination(event) {
    var target = event.target;
    var id = target.id;

    if (target.tagName !== "SPAN") return;

    var dataPage = +target.dataset.page;
    mainPage.classList.remove("pagination-active");
    mainPage = document.getElementById(id);
    mainPage.classList.add("pagination-active");

    for (var i = 0; i < dishes.length; i++) {
        dishes[i].style.display = "none";
    }

    for (var i = 0; i < dishes.length; i++) {
        if (i >= dataPage * count && i < (dataPage + 1) * count)
            dishes[i].style.display = "block";
    }
}