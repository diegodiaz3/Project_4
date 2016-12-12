function myFunction() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("num").innerHTML = x;

    var y = Math.floor((Math.random() * 9) + 1);
    document.getElementById("num2").innerHTML = y;

    var z = Math.floor((Math.random() * 9) + 1);
    document.getElementById("num3").innerHTML = z;

    var s = x + y + z;
    document.getElementById("score").innerHTML = s;


}




function someFunc() {
    myFunction();



}




