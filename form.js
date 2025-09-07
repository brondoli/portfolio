document.getElementById("formContact").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formMessage");

    if (nom === "" || email === "" || message === "") {
        feedback.style.color = "red";
        feedback.textContent = "Veuillez remplir tous les champs.";
    } else {
        feedback.style.color = "#20ff67";
        feedback.textContent = "Merci ! Votre message a bien été envoyé.";
        document.getElementById("formContact").reset();
    }
});
