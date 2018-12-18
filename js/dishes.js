document.getElementById("dishes-content").addEventListener("click", addDish);
document.getElementsByClassName("filter")[0].addEventListener("click", changeFilter);

var basketElement = getData("basketElement") || [];
printDishes();
checkedCheckbox();

function printDishes() {
    var filter = parseUrl(decodeURI(document.URL));

    for (var i in data) {
        if (dishFiltration(data[i], filter))
            createDish(data[i], i);
    }
}

function createDish(dish, id) {
    var content = document.getElementById("dishes-content");
    var divDish = document.createElement("div");
    var image = document.createElement("img");
    var name = document.createElement("h3");
    var ingredients = document.createElement("p");
    var weight = document.createElement("p");
    var price = document.createElement("p");
    var btn = document.createElement("button");

    divDish.className += "dish";

    image.src = dish.imgUrl;
    image.className += "dish-icon";

    name.innerHTML = dish.name;
    ingredients.innerHTML = "Ігредієнти: " + dish.ingredients;

    weight.innerHTML = "Вага: " + dish.weight;
    price.innerHTML = "Ціна: " + dish.price + " грн";

    btn.innerHTML = "Замовити";
    btn.dataset.id = id;
    btn.className += "add-btn";

    divDish.appendChild(image);
    divDish.appendChild(name);
    divDish.appendChild(ingredients);
    divDish.appendChild(weight);
    divDish.appendChild(price);
    divDish.appendChild(btn);
    content.appendChild(divDish);    
}

function addDish(event) {
    var target = event.target;

    if (target.className.indexOf("add-btn") === -1) return;

    var dish = data[+target.dataset.id];
    dish = {
        name: dish.name,
        price: dish.price,
        count: 1,
    };

    var index = indexDishInBasket(dish);

    if (index >= 0) {
        basketElement[index].count++;
    } else {
        basketElement.push(dish);
    }

    setData("basketElement", basketElement);
}

function indexDishInBasket(dish) {
    for (var i in basketElement) {
        if (dish.name === basketElement[i].name) return i;
    }

    return -1;
}

function parseUrl(url) {
    return url.split("?")[1];
}

function dishFiltration(dish, filter) {
    filter = filter.split("&");

    for (var j in filter) {
        filter[j] = filter[j].split("=");
        var prop = filter[j][0];
        var values = filter[j][1].split(",");   

        for(var i in values) {
            if (dish[prop].toLowerCase().indexOf(values[i].toLowerCase()) === -1) return false;
        }
    }    

    return true;
}

function changeFilter(event) {
    var target = event.target;
    var attribute = "category";

    if (target.tagName !== "INPUT") return;

    if (target.checked) addFilter(target.value, attribute);
    else deleteFilter(target.value);    
}

function addFilter(filter, attribute) {
    var url  = decodeURI(document.URL);
    var index = url.indexOf(attribute);

    if (index === -1) {
        url += "&" + attribute + "=" + filter;
    } else {
        url = url.slice(0, index + attribute.length + 1) + filter + ","
            + url.slice(index + attribute.length + 1, url.length);
    }

    window.location = url;
}

function deleteFilter(filter) {
    var url  = decodeURI(document.URL);

    if (url.indexOf(filter + ",") >= 0) {
        url = url.replace(filter + ",", "");
    } else if (url.indexOf("," + filter) >= 0) {
        url = url.replace("," + filter, "");
    } else {
        url = url.replace(filter, "");
    }       

    window.location = url;
}

function checkedCheckbox() {
    var filter = parseUrl(decodeURI(document.URL));
    var checkboxes = document.querySelectorAll(".filter input");

    for (var i in checkboxes) {
        if (filter.indexOf(checkboxes[i].value) >= 0) {
            checkboxes[i].checked = true;
        }
    }
}