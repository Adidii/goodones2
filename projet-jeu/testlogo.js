document.getElementById('logo1').addEventListener('click', function() {
    window.location.href = 'page1.html'; // Lien vers la première page
});

document.getElementById('logo2').addEventListener('click', function() {
    window.location.href = 'page2.html'; // Lien vers la deuxième page
});
document.addEventListener('DOMContentLoaded', function() {
    var menuBurger = document.getElementById('menuBurger');
    var navMenu = document.getElementById('navMenu');

    // Burger Menu Event Handler
    menuBurger.addEventListener('click', function() {
        if (navMenu.classList.contains('hidden')) {
            navMenu.classList.remove('hidden');
            navMenu.classList.add('show');
        } else {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('show');
        }
    });
});