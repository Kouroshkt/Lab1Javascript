const dishes = [
    {
        "href": "Honug.html",
        "imgSrc": "img/Honug.jpg",
        "imgAlt": "Bild av Honug",
        "imgHeight": 200,
        "title": "Honug och senapsrostad lax med rödbetssallad och krämig potatis",
        "description": "SNABB | GLUTENFRI",
        "details": "20 minuter | Lätt | 986 kcal"
    },
    {
        "href": "chorizo.html",
        "imgSrc": "img/Chorizo.avif",
        "imgAlt": "Bild av Chorizospaghetti",
        "imgHeight": 200,
        "title": "Chorizospaghetti i cajunsås med paprika och rosmarinspangrattato",
        "description": "SNABB",
        "details": "25 minuter | Lätt | 980 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/Notfars.jpg",
        "imgAlt": "Bild av Nötfärsbowl",
        "imgHeight": 200,
        "title": "Nötfärsbowl med mongolisk glaze med pak choisallad och bulguro",
        "description": "SNABB | LÅGKALORI | MJÖLHFRI",
        "details": "25 minuter | Lätt | 614 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/stekt.avif",
        "imgAlt": "Bild av Stekt fläskkotlett",
        "imgHeight": 200,
        "title": "Stekt fläskkotlett i schalottenlökssås med palsternacksmos och rädissallad",
        "description": "SNABB | LÅGKALORI",
        "details": "20 minuter | Lätt | 626 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/Thilandsk.avif",
        "imgAlt": "Bild av Thailändsk larb på fläskfärs",
        "imgHeight": 200,
        "title": "Thailändsk larb på fläskfärs och ris med färsk gurka och salta jordnötter",
        "description": "SUPERSNABB | GLUTENFRI",
        "details": "15 minuter | Lätt | 814 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/festlig.jpg",
        "imgAlt": "Bild av Festlig BBQ-lax",
        "imgHeight": 200,
        "title": "Festlig BBQ-lax och ranchdressing med majs- och jordnötssalsa och kålsallad",
        "description": "GLUTENFRI",
        "details": "30 minuter | Lätt | 1393 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/Pannstek.avif",
        "imgAlt": "Bild av Pannstekt kolja",
        "imgHeight": 200,
        "title": "Pannstekt kolja med syltad gurksallad med senapsdressing",
        "description": "GLUTENFRI | LÅGKALORI",
        "details": "35 minuter | Lätt | 527 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/Kramig.avif",
        "imgAlt": "Bild av Indiskinspirerad calabresepasta",
        "imgHeight": 200,
        "title": "Krämig calabresepasta med körsbärstomater med persiljebröd",
        "description": "SNABB",
        "details": "20 minuter | Lätt | 992 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/Stekt torsk.avif",
        "imgAlt": "Bild av Stekt torsk",
        "imgHeight": 200,
        "title": "Stekt torsk i citronsmörsås\n" +
            "med krossad potatis och syltad rödlök",
        "description": "Barnvänlig | LÅGKALORI | GLUTENFRI",
        "details": "30 minuter | Lätt | 461 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/Asiatisk.avif",
        "imgAlt": "Bild av Asiatisk",
        "imgHeight": 200,
        "title": "Asiatisk-inspirerad öring\n" +
            "med nudelsallad och sweet chilisås",
        "description": "SNABB | BArnvänlig | Mjölkfri",
        "details": "20 minuter | Medel | 980 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/al pastor.avif",
        "imgAlt": "Bild av al pastor",
        "imgHeight": 200,
        "title": "Al pastor-burrito\n" +
            "med salsa, guacamole och tortillachips",
        "description": "SNABB | GLUTENFRI",
        "details": "30 minuter | Lätt | 870 kcal"
    },
    {
        "href": "",
        "imgSrc": "img/frikadeller.jpg",
        "imgAlt": "Bild av frikadeller",
        "imgHeight": 200,
        "title": "Frikadeller och bearnaise-potatissallad\n" +
            "med rädis- och körsbärstomatsallad",
        "description": "Gluten | Vete",
        "details": "25 minuter | Lätt | 1120 kcal"
    }
]

function createDishHtml(dish) {
    return `
        <a href="${dish.href}" class="box" target="_blank">
            <figure class="box">
                <img src="${dish.imgSrc}" alt="${dish.imgAlt}" height="${dish.imgHeight}">
                <figcaption>
                    <b>${dish.title}</b><br><br><br>
                    ${dish.description}<br>
                    <b>${dish.details}</b>
                </figcaption>
            </figure>
        </a>
    `;
}

const listAvMAt = document.querySelector(".ListAvMat");
for (let i = 0; i < dishes.length; i++) {
    listAvMAt.innerHTML += createDishHtml(dishes[i]);
}

let savedUserInformation = JSON.parse(localStorage.getItem("user"));
if (savedUserInformation.inloggad) {
    let name = savedUserInformation.name;
    // Kontrollera om dagens datum är måndag
    if (new Date().getDay() === 1 && savedUserInformation.monday) { // 1 representerar måndag i getDay()
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är måndag och det är dags att laga mat!`;
    } else if (new Date().getDay() === 2 && savedUserInformation.tuesday) {
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är tisdag och det är dags att laga mat!`;
    } else if (new Date().getDay() === 3 && savedUserInformation.wednesday) {
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är onsdag och det är dags att laga mat!`;
    } else if (new Date().getDay() === 4 && savedUserInformation.thursday) {
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är torsdag och det är dags att laga mat!`;
    } else if (new Date().getDay() === 5 && savedUserInformation.friday) {
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är fredag och det är dags att laga mat!`;
    } else if (new Date().getDay() === 6 && savedUserInformation.saturday) {
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är lördag och det är dags att laga mat!`;
    } else if (new Date().getDay() === 0 && savedUserInformation.sunday) {
        document.getElementById("dag").textContent = `Välkommen ${name}, idag är söndag och det är dags att laga mat!`;
    } else {
        document.getElementById("dag").textContent = "Välkommen " +`${name};`
    }
    document.getElementById("buttonLoggaIn").textContent = "Du är inloggad";
    document.getElementById("buttonLoggaIn").href = "";
    document.getElementById("buttonRegistrera").textContent = "Logga ut";
    document.getElementById("buttonRegistrera").addEventListener("click", function () {
        savedUserInformation.inloggad = false;
        localStorage.setItem("user", JSON.stringify(savedUserInformation));
        window.location.href = "";
    })
} else {
    console.log("Ingen användarinformation hittades i localStorage.");
}
