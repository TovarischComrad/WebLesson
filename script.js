// alert("Hello world!");
console.log("Hello world!");

var x = 2;
var y = 3;
console.log(x + y);

function my_click() {
    // console.log("Ты тыкнул на кнопку");
    var s = document.getElementById("input_field").value;
    console.log(s);
}

document.addEventListener('DOMContentLoaded', function() {

    // Весь код будет работать после загрузки страницы
    // var s = document.getElementById("text").innerHTML;
    // console.log(s);

    document.getElementById("text").innerHTML = "I am hacker";
})

