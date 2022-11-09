// variables
const navigationToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav__list--primary');
const counterIncrease = document.querySelector('.section__carousel-item4--img2');
const counterDecrease = document.querySelector('.section__carousel-item4--img');
let totalCount = document.querySelector('.section__carousel-item--zero');
const btnAddtoCart = document.querySelector('.section__carousel-link');
const dropDownForCart = document.querySelector('.nav__icon1');
const emptyCart = document.querySelector('.empty-cart');
const filledCart = document.querySelector('.filled-cart');
const dropDownParagraph = document.querySelector('.dropdown-paragraph');
const deleteBtn = document.querySelector('.dropdown-img-del')

navigationToggle.addEventListener('click', () => {
    nav.classList.toggle('nav__list--primary--visible');
});

let count = 0;
totalCount.innerHTML = count;

function handleIncrement () {
    count++;
    totalCount.innerHTML = count;
};

function handleDecrement () {
    count--;
    totalCount.innerHTML = count;
   
}

counterIncrease.addEventListener('click', handleIncrement);
counterDecrease.addEventListener('click', handleDecrement);

function dropDownMenuForcart() {
    document.getElementById('mydropdown').classList.toggle('show');
};

dropDownForCart.addEventListener('click', dropDownMenuForcart)

dropDownMenuForcart();

console.log(count.value)

function addToCart() {
    if(count === 0){
    emptyCart.classList.add('show');
    
    }else{
        totalAmt = count * 125;
        dropDownParagraph.innerHTML = `Fall Limited Edition Sneakers $125.00  ${totalAmt}.00`;
        filledCart.classList.add('show');
        emptyCart.classList.remove('show');
    }
};

btnAddtoCart.addEventListener('click', addToCart);
deleteBtn.addEventListener('click', () => {
    filledCart.classList.remove('show');
})

