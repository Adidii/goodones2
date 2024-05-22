// Fonction de validation du nom
function validateName(name) {
    const regex = /^[\p{L}\s'-]+$/u; // Regex pour valider le nom (autorise les lettres de toutes les langues, les espaces, les apostrophes et les tirets)
    return regex.test(name);
}

// Fonction de validation du mot de passe
function validatePassword(password) {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    let isValid = true;

    if (!lowercaseRegex.test(password)) {
        document.getElementById('lowercaseMessage').classList.add('invalid');
        document.getElementById('lowercaseMessage').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('lowercaseMessage').classList.add('valid');
        document.getElementById('lowercaseMessage').classList.remove('invalid');
    }

    if (!uppercaseRegex.test(password)) {
        document.getElementById('uppercaseMessage').classList.add('invalid');
        document.getElementById('uppercaseMessage').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('uppercaseMessage').classList.add('valid');
        document.getElementById('uppercaseMessage').classList.remove('invalid');
    }

    if (!numberRegex.test(password)) {
        document.getElementById('numberMessage').classList.add('invalid');
        document.getElementById('numberMessage').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('numberMessage').classList.add('valid');
        document.getElementById('numberMessage').classList.remove('invalid');
    }
    
    if (!specialCharRegex.test(password)) {
        document.getElementById('specialCharMessage').classList.add('invalid');
        document.getElementById('specialCharMessage').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('specialCharMessage').classList.add('valid');
        document.getElementById('specialCharMessage').classList.remove('invalid');
    }
    
    if (password.length < 8) {
        document.getElementById('lengthMessage').classList.add('invalid');
        document.getElementById('lengthMessage').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('lengthMessage').classList.add('valid');
        document.getElementById('lengthMessage').classList.remove('invalid');
    }
    
    return isValid;
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
    
    // Fonction pour afficher un message d'erreur général
    function showGeneralError(message) {
    const generalErrorElement = document.getElementById('generalError');
    generalErrorElement.textContent = message;
    }
    
    // Fonction pour effacer le message d'erreur général
    function clearGeneralError() {
    const generalErrorElement = document.getElementById('generalError');
    generalErrorElement.textContent = '';
    }
    
    // Fonction de validation du formulaire de connexion
    function validateLoginForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    let isValid = true;
    
    // Valider le nom
    if (!validateName(name)) {
        showError('name', 'Veuillez entrer un nom valide.');
        isValid = false;
    } else {
        clearError('name');
    }
    
    // Valider le mot de passe
    if (!validatePassword(password)) {
        showError('password', 'Le mot de passe doit avoir au moins 8 caractères, et contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial.');
        isValid = false;
    } else {
        clearError('password');
    }
    
    // Afficher un message d'erreur général si la validation échoue
    if (!isValid) {
        showGeneralError("Validation échouée. Veuillez vérifier vos informations.");
    } else {
        clearGeneralError();
    }
    
    // Si les validations réussissent, le formulaire peut être soumis
    return isValid;
    }
    
    // Gestionnaire d'événement pour le bouton de connexion
    document.getElementById('loginButton').addEventListener('click', function(event) {
    // Empêche l'envoi du formulaire si la validation échoue
    if (!validateLoginForm()) {
        event.preventDefault();
    } else {
        // Redirection si la validation réussit
        location.href = 'testlogo.html';
    }
    });
    
    // Gestionnaires d'événement pour la saisie dans les champs du formulaire
    document.getElementById('name').addEventListener('input', function() {
    clearError('name');
    clearGeneralError();
    });
    
    document.getElementById('password').addEventListener('input', function() {
    clearError('password');
    clearGeneralError();
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
    
       
