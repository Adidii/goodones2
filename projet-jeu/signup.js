// Fonction de validation du nom
function validateName(name) {
    const regex = /^[a-zA-Z\s]*$/; // Regex pour valider le nom (autorise uniquement les lettres et les espaces)
    return regex.test(name);
}

// Fonction de validation de l'email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider l'email
    return regex.test(email);
}

// Fonction de validation du mot de passe
function validatePassword(password) {
    // Regex pour valider le mot de passe (au moins 8 caractères, au moins une lettre majuscule, au moins une lettre minuscule et au moins un chiffre)
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

// Fonction de validation du formulaire de sign-up
function validateSignupForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Valider le nom
    if (!validateName(name)) {
        alert('Veuillez entrer un nom valide (lettres et espaces uniquement).');
        return false; // Empêche l'envoi du formulaire si le nom est invalide
    }

    // Valider l'email
    if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false; // Empêche l'envoi du formulaire si l'email est invalide
    }

    // Valider le mot de passe
    if (!validatePassword(password)) {
        alert('Le mot de passe doit avoir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre.');
        return false; // Empêche l'envoi du formulaire si le mot de passe est invalide
    }

    // Si les validations réussissent, le formulaire peut être soumis
    return true;
}

// Gestionnaire d'événement pour le bouton de sign-up
document.getElementById('signupButton').addEventListener('click', function(event) {
    // Empêche l'envoi du formulaire si la validation échoue
    if (!validateSignupForm()) {
        event.preventDefault(); // Empêche le comportement par défaut du bouton (envoi du formulaire)
    }
});

// Gestionnaire d'événement pour le bouton de sign-up
document.getElementById('signupButton').addEventListener('click', function(event) {
    // Empêche l'envoi du formulaire si la validation échoue
    if (!validateSignupForm()) {
        event.preventDefault(); // Empêche le comportement par défaut du bouton (envoi du formulaire)
    } else {
        // Si la validation réussit, afficher un message de confirmation
        alert("Inscription réussie ! Vous allez être redirigé vers la page de jeux.");
        // Vous pouvez également utiliser une boîte de dialogue modale ou une autre méthode d'affichage de message.
    }
});

// Fonction pour valider le formulaire de sign-up
function validateSignupForm() {
    // Vous pouvez ajouter ici votre logique de validation, comme le contrôle des champs vides, le format de l'e-mail, etc.
    // Pour l'instant, nous supposons que le formulaire est valide.
    return true;
}
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