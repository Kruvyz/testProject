var index = [7, 8, 9];

document.getElementById("buyComplex").addEventListener("click", buyComplex);

function buyComplex() {
    for (var i in index) {
        basketElement[i] = {
            name: data[index[i]].name,
            price: data[index[i]].price,
            count: 1
        };
    }
    
    document.getElementById("basket").click();
}

