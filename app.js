// add to cart
let addcart = document.getElementsByClassName("addcart");
let prodCount = document.getElementById("products-count");
console.log(addcart);
console.log(prodCount);
//console.log(document.getElementsByClassName("container"))
//let a=document.body.children[0].children[0].children[0].children[2].children[0].children[1].children[0].children[0];
//console.log(a)
console.log(+prodCount.innerHTML+1);
for (let i=0; i<addcart.length; i++){
addcart[i].addEventListener("click", function(){
    var a =+prodCount.innerHTML;
    a++;
    prodCount.innerHTML = a;
console.log(a)})
} 
// change like
var likeButtons = document.getElementsByClassName("frfav2");
//var likeButtons = document.querySelectorAll(".frfav2")
console.log(likeButtons);
for(let i=0; i<likeButtons.length;i++){
    likeButtons[i].addEventListener("click", function(){
        console.log("like");
    })
}