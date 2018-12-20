document.getElementById("basket").addEventListener("click", showBasket);
document.getElementsByClassName("close-btn")[0].addEventListener("click", closeBasket);
document.getElementsByClassName("basket-content")[0].addEventListener("click", changeCount);

var basketElement = getData("basketElement") || [];

function showBasket() {
    var basketDiv = document.getElementById("basket-div");
    basketDiv.style.display = "block";
    showDishesInBasket();
}

function closeBasket() {
    document.getElementById("basket-div").style.display = "none";
}

function showDishesInBasket() {
    var content = document.getElementsByClassName("basket-content")[0];
    var sumPrice = document.createElement("p");
    var sum = 0;
    content.innerHTML = "";

    for (var i in basketElement) {
        var elem = document.createElement("div");
        var name = document.createElement("p");
        var count = document.createElement("div");
        var price = document.createElement("p");
        var deleteBtn = document.createElement("button");
    
        elem.className += "basket-elem";
        name.innerHTML = basketElement[i].name;
        count.innerHTML = "<button class=\"plus-btn\" data-id=\"" + i + "\">+</button>" 
            + basketElement[i].count 
            + "<button class=\"minus-btn\" data-id=\"" + i + "\">-</button>" ;
        price.innerHTML = basketElement[i].price + " грн";

        deleteBtn.innerHTML = "x";
        deleteBtn.className += "delete-btn";
        deleteBtn.dataset.id = i;

        elem.appendChild(name);
        elem.appendChild(count);
        elem.appendChild(price);
        elem.appendChild(deleteBtn);

        content.appendChild(elem);

        sum += basketElement[i].price * basketElement[i].count;
    }

    sumPrice.innerHTML = "Сума: " + sum;
    content.appendChild(sumPrice);
}

function changeCount(event) {
    var target = event.target;

    if (target.className.indexOf("plus-btn") >= 0) {
        basketElement[+target.dataset.id].count++;       
    } else if (target.className.indexOf("minus-btn") >= 0
        && basketElement[+target.dataset.id].count > 0) {
        basketElement[+target.dataset.id].count--;
    } else if (target.className.indexOf("delete-btn") >= 0) {
        basketElement.splice(+target.dataset.id, 1);
    } 
    
    showDishesInBasket();
}