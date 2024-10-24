const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const cancelBtn = document.getElementById("cancelBtn");
const fileInput = document.getElementById("fileInput");
const customDialog = document.getElementById("customDialog");

if (openDialogBtn) {
    openDialogBtn.addEventListener("click", function() {
        customDialog.style.display = "block";
    });
}

if (closeDialogBtn) {
    closeDialogBtn.addEventListener("click", function() {
        customDialog.style.display = "none";
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
        customDialog.style.display = 'none';
    });
}

if (fileInput) {
    fileInput.addEventListener('change', function() {
        var fileName = fileInput.files[0].name;
        document.getElementById('fileName').textContent = fileName;
    });
}

// Ferme le dialog si l'utilisateur clique en dehors de la boîte
window.onclick = function(event) {
    if (event.target == customDialog) {
        customDialog.style.display = "none";
    }
}

  