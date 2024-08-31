console.log(`Hallo World`);
//converting variables
// mit dem id tag kann ich in der index.html eine 
document.getElementById("myid").textContent = "Hey Js ist leicht";
//variables = A container that stores values
//            Behaves as it would be the value it contains
// 1.Declaration let x;
// 2.Assignment  x = 100;
let Flyingperyear = 2;
console.log(Flyingperyear);
// hier decleare ich die Variable und lade sie, die Variable verhält sich als wäre sie der Wert selbst
let lastName = "vom Berg";
console.log(typeof lastName);
// mit dem typeof kann ich den zugehörigen Typen meiner Variable displayn
// hier ist der Typ ein string,strings sind eine Serie von Characters
//boolean variables sind entweder true or false

/* document.getElementsById("addition")
document.getElementsById("substraction")
document.getElementsById("division")
document.getElementsById("multiplication")

*/



console.log(input1)
function algra(e){
    let input1 = Number(document.getElementById("input1").value)
    let input2 = Number(document.getElementById("input2").value)
    const operation = e.innerText
    let ergebnis = 0
    if(operation==='+'){
        ergebnis = input1+input2
    }
    if(operation==='-'){
        ergebnis = input1-input2
    }
    if(operation==='/'){
        ergebnis = input1/input2
    }
    if(operation==='*'){
        ergebnis = input1*input2
    }
   console.log(ergebnis)
   document.getElementById("score").textContent = ergebnis
}