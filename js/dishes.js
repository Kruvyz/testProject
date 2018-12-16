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

console.log();

var filter = decodeURI(document.URL).split("filter=")[1];
//var dishes = [];

for (var i in data) {
    if (data[i].category.indexOf(filter) >= 0)
        //dishes.push(data[i]);
        createDish(data[i]);
}

// for (var j in dishes) {
//     createDish(dishes[j]);
// }

function createDish(dish) {
    var content = document.getElementById("content");
    var divDish = document.createElement("div");
    var image = document.createElement("img");
    var name = document.createElement("h3");
    var ingredients = document.createElement("p");
    var weight = document.createElement("p");
    var price = document.createElement("p");

    divDish.className += "dish";

    image.src = dish.imgUrl;
    image.className += "dish-icon";

    name.innerHTML = dish.name;
    ingredients.innerHTML = "Ігредієнти: " + dish.ingredients;

    weight.innerHTML = "Вага: " + dish.weight;
    price.innerHTML = "Ціна: " + dish.price + " грн";

    divDish.appendChild(image);
    divDish.appendChild(name);
    divDish.appendChild(ingredients);
    divDish.appendChild(weight);
    divDish.appendChild(price);
    content.appendChild(divDish);    
}