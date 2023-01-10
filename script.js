const searchForm= document.querySelector(".search-form");
const cartItem= document.querySelector(".cart-items-container");

const searchBtn = document.getElementById("search-btn");
const cartBtn = document.getElementById("cart-btn");

searchBtn.addEventListener('click',function(){
    searchForm.classList.toggle("active");
});

cartBtn.addEventListener('click',function(){
    cartItem.classList.toggle("active");
});