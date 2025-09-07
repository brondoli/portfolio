// ===== Début Adaptation Formulaire =====
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formContact");
  const messageBox = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const message = document.getElementById("message").value;

      // Créer le mailto
      const sujet = "Message de " + prenom + " " + nom;
      const corps = "Nom: " + nom + "%0A" +
                    "Prénom: " + prenom + "%0A%0A" +
                    "Message:%0A" + message;

      // Ouvrir messagerie
      window.location.href = "mailto:tonemail@example.com?subject=" 
                              + encodeURIComponent(sujet) 
                              + "&body=" + corps;

      // Message de confirmation
      messageBox.textContent = "Votre message est prêt à être envoyé !";
      messageBox.style.color = "lightgreen";
    });
  }
});
// ===== Fin Adaptation Formulaire =====
