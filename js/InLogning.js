document.getElementById("inLogningForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var savedUserInformation = JSON.parse(localStorage.getItem('user'));
    if (!savedUserInformation) {
        alert("Ingen användarinformation hittades. Var god registrera dig först.");
        return;
    }
    function saneraInput(input) {
        return input.replace(/[<>/'"]/g, '');
    }

    var username0 = savedUserInformation.username.toLowerCase();
    var password0 = savedUserInformation.password;
    var username = saneraInput(document.getElementById("username").value.toLowerCase());
    var password = saneraInput(document.getElementById("password").value);

    if (username === username0 && password === password0) {
        savedUserInformation.inloggad = true;
        localStorage.setItem("user", JSON.stringify(savedUserInformation));
        window.location.href = "Hemsidan.html";
    } else {
        alert("Felaktigt användarnamn eller lösenord. Var god ange ett giltigt användarnamn och lösenord.");
    }
});
