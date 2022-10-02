"use strict"
const cart = $(".cart"),
    cartWrapper = $(".cartWrapper")
// $(".cartWrapper").style.display="block"
cart.addEventListener("click", () => {
    cartWrapper.classList.toggle("hiden")
    modal()
})


// =========== function + - ============////
let plus = 0

$(".plus").addEventListener("click", () => {
    plus = localStorage.getItem("plus") * 1 + 1
    localStorage.setItem("plus", plus)
    $(".zero").innerHTML = localStorage.getItem("plus")
})
$(".minus").addEventListener("click", () => {
    if (plus = localStorage.getItem("plus") > 0) {
        plus = localStorage.getItem("plus") * 1 - 1
        localStorage.setItem("plus", plus)
        $(".zero").innerHTML = localStorage.getItem("plus")
    } else {
        $(".zero").innerHTML = 10
        localStorage.setItem("plus", 10)
    }


})
$(".zero").innerHTML = localStorage.getItem("plus")







// ================ function modal ===========////

$("#add").addEventListener("click", () => {
    modal()
    cartWrapper.classList.toggle("hiden")
})
let div = document.createElement("div");
function modal() {
    if (plus = localStorage.getItem("plus") > 0) {
        div.innerHTML = ""
        $(".your").innerHTML = ""

        div.innerHTML = `<img src="./images/image-product-1-thumbnail.jpg" alt="product" class="imgCart"> 
        <p class="limited">Fall Limited Edition Sneakers</p>
        <p class="narx">$125.00 x ${localStorage.getItem("plus")} ===   $${125 * localStorage.getItem("plus")}.00</p>  
        <img src="./images/icon-delete.svg" class="delete" type="button" alt="delete">
        <button id="delete">
            Chekout
      </button>`
        div.classList.add("listener")
        $(".your").appendChild(div)

        $(".delete").addEventListener("click", () => {
            $(".your").innerHTML = "Your cart is empty."
            localStorage.setItem("plus", 0)
            $(".zero").innerHTML = localStorage.getItem("plus")
        })
        $("#delete").addEventListener("click", () => {
            cartWrapper.classList.toggle("hiden")
        })


    } else {
        $(".your").innerHTML = "Your cart is empty."
    }
}

console.log($all(".gridItem")[1]);
$all(".gridItem")[0].addEventListener("click", () => {
    $all(".gridItem")[0].classList.add("active")
    $all(".gridItem")[1].classList.remove("active")
    $all(".gridItem")[2].classList.remove("active")
    $all(".gridItem")[3].classList.remove("active")


    $all(".pro1")[0].classList.remove("hide")
    $all(".pro1")[1].classList.add("hide")
    $all(".pro1")[2].classList.add("hide")
    $all(".pro1")[3].classList.add("hide")
})
$all(".gridItem")[1].addEventListener("click", () => {
    $all(".gridItem")[0].classList.remove("active")
    $all(".gridItem")[1].classList.add("active")
    $all(".gridItem")[2].classList.remove("active")
    $all(".gridItem")[3].classList.remove("active")

    $all(".pro1")[0].classList.add("hide")
    $all(".pro1")[1].classList.remove("hide")
    $all(".pro1")[2].classList.add("hide")
    $all(".pro1")[3].classList.add("hide")
})
$all(".gridItem")[2].addEventListener("click", () => {
    $all(".gridItem")[0].classList.remove("active")
    $all(".gridItem")[1].classList.remove("active")
    $all(".gridItem")[2].classList.add("active")
    $all(".gridItem")[3].classList.remove("active")

    $all(".pro1")[0].classList.add("hide")
    $all(".pro1")[1].classList.add("hide")
    $all(".pro1")[2].classList.remove("hide")
    $all(".pro1")[3].classList.add("hide")
})
$all(".gridItem")[3].addEventListener("click", () => {
    $all(".gridItem")[0].classList.remove("active")
    $all(".gridItem")[1].classList.remove("active")
    $all(".gridItem")[2].classList.remove("active")
    $all(".gridItem")[3].classList.add("active")

    $all(".pro1")[0].classList.add("hide")
    $all(".pro1")[1].classList.add("hide")
    $all(".pro1")[2].classList.add("hide")
    $all(".pro1")[3].classList.remove("hide")
})



// =========jyrrsudtfit modal ==========////





$all(".pro1")[0].addEventListener("click", () => {
    $(".element").style.display = "block";
})
$all(".pro1")[1].addEventListener("click", () => {
    $(".element").style.display = "block";
})
$all(".pro1")[2].addEventListener("click", () => {
    $(".element").style.display = "block";
})
$all(".pro1")[3].addEventListener("click", () => {
    $(".element").style.display = "block";
})
$all(".closeP")[0].addEventListener("click", () => {
    $(".element").style.display = "none"
})


$all(".template")[0].addEventListener("click", () => {
    $all(".template")[0].classList.add("active")
    $all(".template")[1].classList.remove("active")
    $all(".template")[2].classList.remove("active")
    $all(".template")[3].classList.remove("active")


    $all(".baron")[0].classList.remove("hide")
    $all(".baron")[1].classList.add("hide")
    $all(".baron")[2].classList.add("hide")
    $all(".baron")[3].classList.add("hide")
})
$all(".template")[1].addEventListener("click", () => {
    $all(".template")[0].classList.remove("active")
    $all(".template")[1].classList.add("active")
    $all(".template")[2].classList.remove("active")
    $all(".template")[3].classList.remove("active")

    $all(".baron")[0].classList.add("hide")
    $all(".baron")[1].classList.remove("hide")
    $all(".baron")[2].classList.add("hide")
    $all(".baron")[3].classList.add("hide")
})
$all(".template")[2].addEventListener("click", () => {
    $all(".template")[0].classList.remove("active")
    $all(".template")[1].classList.remove("active")
    $all(".template")[2].classList.add("active")
    $all(".template")[3].classList.remove("active")

    $all(".baron")[0].classList.add("hide")
    $all(".baron")[1].classList.add("hide")
    $all(".baron")[2].classList.remove("hide")
    $all(".baron")[3].classList.add("hide")
})
$all(".template")[3].addEventListener("click", () => {
    $all(".template")[0].classList.remove("active")
    $all(".template")[1].classList.remove("active")
    $all(".template")[2].classList.remove("active")
    $all(".template")[3].classList.add("active")

    $all(".baron")[0].classList.add("hide")
    $all(".baron")[1].classList.add("hide")
    $all(".baron")[2].classList.add("hide")
    $all(".baron")[3].classList.remove("hide")
})


// houigoyguoyg=jhgv jgvukv-----////