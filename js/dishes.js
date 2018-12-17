var data = JSON.parse(`[
    {
        "name": "Капрезе",
        "ingredients": "сир моцарела, помідори, базилік, оливковa олія",
        "weight": "150г",
        "price": 76,
        "imgUrl": "../images/caprese.jpg",
        "category": "італійська, салат"
    },
    {
        "name": "Тірамісу",
        "ingredients": "сир маскарпоне, цукор, яйця, печево савоярді, заварна кава, ром, какао порошок",
        "weight": "220г",
        "price": 70,
        "imgUrl": "../images/tiramisu.jpg",
        "category": "італійська, десерт"
    },
    {
        "name": "Піца гавайська",
        "ingredients": "сир моцарелла, тісто, відварена курка, консервовані ананаси, італійські трави",
        "weight": "710г",
        "price": 134,
        "imgUrl": "../images/hawaiian.jpg",
        "category": "італійська, піца"
    }
]`);

document.getElementById("content").addEventListener("click", addDish);

var basketElement = getData("basketElement") || [];
var filter = decodeURI(document.URL).split("filter=")[1];

for (var i in data) {
    if (data[i].category.indexOf(filter) >= 0)
        createDish(data[i], i);
}

function createDish(dish, id) {
    var content = document.getElementById("content");
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