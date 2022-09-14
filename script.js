let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cartItems.classList.remove('active');
}

let cartItems= document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>
{
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let search= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}
window.onscroll = () =>
{
    navbar.classList.remove('active');
    search.classList.remove('active');
    cartItems.classList.remove('active');
}