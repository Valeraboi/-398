/*
let fruit = ["яблоко", "банан", "груша", "виноград", "лимон"]
fruit.splice(4,1, "клубника");
fruit.splice(2,0, "киви");
fruit.unshift("*");
fruit.push("*");

console.log(fruit);
console.log(fruit.length);
*/
let check = false;
let div = document.createElement("div");
div.classList.add('list');
div.style.cssText= `
    border:solid 2px black;
    width: 300px;
    height: 200px;
    `;
div.addEventListener("click", () => f ());
document.body.appendChild(div);


div.appendChild(document.createElement("div"));

function f(){
    if (check == false){
        div.style.background ="none";
        check  = true;


    } else{
        div.style.background = "red";
        check = false;
    }

}







