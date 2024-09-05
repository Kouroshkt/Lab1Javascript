document.getElementById("inLogningForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var savedUserInformation = JSON.parse(localStorage.getItem('user'));
    if (!savedUserInformation) {
        alert("Ingen användarinformation hittades. Var god registrera dig först.");
        return;
    }

    var username0 = savedUserInformation.username;
    var password0 = savedUserInformation.password;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === username0 && password === password0) {
        savedUserInformation.inloggad = true;
        localStorage.setItem("user", JSON.stringify(savedUserInformation));
        window.location.href = "Hemsidan.html";
    } else {
        alert("Felaktigt användarnamn eller lösenord. Var god ange ett giltigt användarnamn och lösenord.");
    }
});
