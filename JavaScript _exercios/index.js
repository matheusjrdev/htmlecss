var num1 = Number (window.prompt ("Digite um numero "))

var num2 = Number (window.prompt("Digite outro numeor "))

function multiplicacao () {
    var multi = (num1 * num2); 
    var divi = (num1 / num2);
    console.log (num1 + " Multiplicado por " + num2 + " é igual a " + multi)
    console.log (num1 +" dividido por " + num2 + " é igual a " + divi)
}

multiplicacao ();