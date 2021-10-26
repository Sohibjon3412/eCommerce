let elMenu = document.querySelector(".header__menu-btn");
let elModal = document.querySelector(".contact");

elMenu.addEventListener("click",function(){
  elModal.classList.toggle("contact__menu-size");
});
let elHeaderMenu = document.querySelector(".header__menu");
let elLinethird = document.querySelector(".line2");
let elLineOne = document.querySelector(".line1");
let elLineThree = document.querySelector(".line3");
let elNav = document.querySelector(".nav");
let elHeaderTop = document.querySelector(".header-top");
let elListbtn = document.querySelector(".fruits__btn--list");
let elGridbtn = document.querySelector(".fruits__btn--grid");
let elSmallList = document.querySelector(".categories__list--small");
let elBiglList = document.querySelector(".categories__list--big");


elHeaderMenu.addEventListener("click",function(){
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1");
    elLineThree.classList.toggle("rotate-line3");
    elNav.classList.toggle("open-nav");
    elHeaderTop.classList.toggle("open-header");
});

elListbtn.addEventListener("click",function(){
    elBiglList.classList.add("remove__list--big");
    elSmallList.classList.add("show-list-small");
});

elGridbtn.addEventListener("click",function(){
    elBiglList.classList.remove("remove__list--big");
    elSmallList.classList.remove("show-list-small");
});