// Fonction de validation du nom
function validateName(name) {
    const regex = /^[\p{L}\s\']*$/u; // Regex pour valider le nom (autorise les lettres de toutes les langues, les espaces et les apostrophes)
    return regex.test(name);
}

// Fonction de validation de l'email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Regex pour valider l'email
    return regex.test(email);
}

// Fonction de validation du mot de passe
function validatePassword(password) {
    // Regex pour valider le mot de passe (au moins 8 caractères, au moins une lettre majuscule, au moins une lettre minuscule et au moins un chiffre)
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

// Fonction pour afficher un message d'erreur
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId + 'Error');
    errorElement.textContent = message;
}

// Fonction pour effacer un message d'erreur
function clearError(elementId) {
    const errorElement = document.getElementById(elementId + 'Error');
    errorElement.textContent = '';
}

// Fonction de validation du formulaire de sign-up
function validateSignupForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Valider le nom
    if (!validateName(name)) {
        showError('name', 'Veuillez entrer un nom valide.');
        return false;
    }

    // Valider l'email
    if (!validateEmail(email)) {
        showError('email', 'Veuillez entrer une adresse email valide.');
        return false;
    }

    // Valider le mot de passe
    if (!validatePassword(password)) {
        showError('password', 'Le mot de passe doit avoir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre.');
        return false;
    }

    // Si les validations réussissent, le formulaire peut être soumis
    return true;
}

// Gestionnaire d'événement pour le bouton de sign-up
document.getElementById('signupButton').addEventListener('click', function(event) {
    // Empêche l'envoi du formulaire si la validation échoue
    if (!validateSignupForm()) {
        event.preventDefault();
    } else {
        // Si la validation réussit, rediriger vers la page de jeux
        window.location.href = 'testlogo.html';
    }
});

// Gestionnaires d'événement pour la saisie dans les champs du formulaire
document.getElementById('name').addEventListener('input', function() {
    clearError('name');
});

document.getElementById('email').addEventListener('input', function() {
    clearError('email');
});

document.getElementById('password').addEventListener('input', function() {
    clearError('password');
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