// add to cart (count number)
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
    let count =+prodCount.innerHTML;
    count++;
    prodCount.innerHTML = count;
console.log(a)})
} 
// change like buttons
var likeButtons = document.getElementsByClassName("frfav2");
//var likeButtons = document.querySelectorAll(".frfav2")
console.log(likeButtons);
for(let i=0; i<likeButtons.length;i++){
    likeButtons[i].addEventListener("click", function(){
        console.log("like");
        this.classList.toggle("liked");
        /*if (this.classList.contains("liked")){
            this.classList.remove("liked");
        }else{
            this.classList.add("liked");
        }*/
    })
}
// modal
let moreDetailsButtons = document.querySelectorAll(".details");

let modal = document.querySelector(".modal");
let clsBtn = document.querySelector(".btn-close");
console.log();
moreDetailsButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
        modal.classList.add("show");
        modal.classList.remove("hide");
    });
});
function modalHide(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}
//modal.addEventListener("click", modalHide);
clsBtn.addEventListener("click", modalHide);
modal.addEventListener("click", function(e){
    if (e.target===modal){
        modalHide();
    }
})

//slider
$(".slide1").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });

//product count
var a=0;
let minus = document.querySelectorAll(".minus-btn");
let plus = document.querySelectorAll(".plus-btn");
let prodQuantity = document.querySelectorAll(".prodqnt");
console.log(prodQuantity);
console.log(+prodQuantity[0].textContent);
for(let i=0; i<prodQuantity.length; i++){
    plus[i].addEventListener("click", function(){
        a++;
        prodQuantity[i].setAttribute("value", a);
        console.log(a);
    })
    minus[i].addEventListener("click", function(){
        a--;
        prodQuantity[i].setAttribute("value", a);
        console.log(a);
    })
}