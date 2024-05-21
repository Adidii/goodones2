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
