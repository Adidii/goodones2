// Fonction de validation du nom
function validateName(name) {
    const regex = /^[a-zA-Z\s]*$/; // Regex pour valider le nom (autorise uniquement les lettres et les espaces)
    return regex.test(name);
}

// Fonction de validation du mot de passe
function validatePassword(password) {
    // Vous pouvez ajouter votre propre logique de validation du mot de passe ici
    // Par exemple, une longueur minimale, des caractères spéciaux, etc.
    return password.length >= 8; // Exemple simple : le mot de passe doit avoir au moins 8 caractères
}

// Fonction de validation du formulaire de connexion
function validateLoginForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Valider le nom
    if (!validateName(name)) {
        alert('Veuillez entrer un nom valide (lettres et espaces uniquement).');
        return false; // Empêche l'envoi du formulaire si le nom est invalide
    }

    // Valider le mot de passe
    if (!validatePassword(password)) {
        alert('Le mot de passe doit avoir au moins 8 caractères.');
        return false; // Empêche l'envoi du formulaire si le mot de passe est invalide
    }

    // Si les validations réussissent, le formulaire peut être soumis
    return true;
}

// Gestionnaire d'événement pour le bouton de connexion
document.getElementById('loginButton').addEventListener('click', function(event) {
    // Empêche l'envoi du formulaire si la validation échoue
    if (!validateLoginForm()) {
        event.preventDefault(); // Empêche le comportement par défaut du bouton (envoi du formulaire)
    }
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