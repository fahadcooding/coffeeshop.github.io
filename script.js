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

        window.addEventListener('scroll', reveal);
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for(var i=0; i<reveals.length; i++)
            {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 70;

                 if(revealtop < windowheight - revealpoint)
                 {
                    reveals[i].classList.add('active');
                 }
                 else
                 {
                    reveals[i].classList.remove('active');
                 }
            }
        }