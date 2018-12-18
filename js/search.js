document.getElementById("search-btn").addEventListener("click", search);

function search() {
    var name = document.getElementById("search-input");
    var value = "name=" + name.value;
    var url = "file:///E:/epam/finalProject/pages/dishes.html?" + value;

    window.location = url;
}

