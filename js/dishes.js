// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', 'data.json', true);

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
//   // вывести результат
//   alert( xhr.responseText ); // responseText -- текст ответа.
// }
// var myRequest = new Request("../data.json");
// var myMode = myRequest.mode;

// fetch(myRequest)
// .then(function(response){
//     alert(response.json());
// })

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.log("Json parsed data is: " + JSON.stringify(myObj));
   }
};
xmlhttp.open("GET", "../data.json", true);
xmlhttp.setRequestHeader('Content-Type', 'aplication/json');
xmlhttp.setRequestHeader('Access-Control-Allow-Origin', );
xmlhttp.send();