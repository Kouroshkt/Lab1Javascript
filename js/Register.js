document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Ogiltig e-postadress. Vänligen ange en giltig e-postadress.");
        document.getElementById("email").style.border = "2px solid red";
        return;
    }

    let userInformation = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        vegetarian: document.getElementById('vegetarian').checked,
        monday: document.getElementById('Monday').checked,
        tuesday: document.getElementById('Tuesday').checked,
        wednesday: document.getElementById('Wednesday').checked,
        thursday: document.getElementById('Thursday').checked,
        friday: document.getElementById('Friday').checked,
        saturday: document.getElementById('Saturday').checked,
        sunday: document.getElementById('Sunday').checked,
        inloggad: true
    };

    localStorage.setItem('user', JSON.stringify(userInformation));
    let days = [
        userInformation.monday ? ' Måndagar' : '',
        userInformation.tuesday ? ' Tisdagar' : '',
        userInformation.wednesday ? ' Onsdagar' : '',
        userInformation.thursday ? ' Torsdagar' : '',
        userInformation.friday ? ' Fredagar' : '',
        userInformation.saturday ? ' Lördagar' : '',
        userInformation.sunday ? ' Söndagar' : ''
    ];
    let notificationDays = days.filter(day => day).join(', ');
    if (notificationDays.length > 0) {
        alert(`Du får notifikationer på följande dagar:${notificationDays}`);
    }

    // let savedUserInformation = JSON.parse(localStorage.getItem('user'));
    // console.log(savedUserInformation);
    window.location.href = "Hemsidan.html";
});




