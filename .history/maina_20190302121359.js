const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;

let size = 100; //wielkość kwadratu
square.style.width = size +"px";
square.style.height = size +"px";

//maksymalna wielkość kwadratu
//window.innerWidth * 0.5

window.addEventListener("scroll", function(){
if  (grow == true) {
    size += 5
    square.style.width = size + "px";
    square.style.height = size + "px";
    }
else {
    size -= 5
    square.style.width = size + "px";
    square.style.height = size + "px";
}

if(size >)
})