document.addEventListener("DOMContentLoaded", function () {
    var currentMode = getDeviceMode();

    // Gemeinsame Initialisierung
    initCommon();
    initCommonBody();
    initCommonNavbar();

    // Modusspezifische Initialisierung
    if (modeInit[currentMode]) modeInit[currentMode]();
    if (modeBody[currentMode]) modeBody[currentMode]();
    if (modeNavbar[currentMode]) modeNavbar[currentMode]();

    // Scroll-Event
    window.addEventListener("scroll", function () {
        commonScrollLogic();
        if (modeScroll[currentMode]) modeScroll[currentMode]();
    });

    // Resize-Event
    window.addEventListener("resize", function () {

        const newMode = getDeviceMode();


        //alte functionen enfernen bzw Inhalt neuladen
        if (newMode !== currentMode) {
            location.reload();
        }

        if (newMode !== currentMode) {
            currentMode = newMode;

            // Alles neu initialisieren
            initCommon();
            initCommonBody();
            initCommonNavbar();

            if (modeInit[currentMode]) modeInit[currentMode]();
            if (modeBody[currentMode]) modeBody[currentMode]();
            if (modeNavbar[currentMode]) modeNavbar[currentMode]();
        }
    });
});

function getDeviceMode() {
    if (window.matchMedia("(min-width: 1024px)").matches) return "desktop";
    if (window.matchMedia("(min-width: 768px)").matches) return "tablet";
    return "mobile";
}

// Mapping: Initialisierung
var modeInit = {
    mobile: function () { console.log("Init Mobile"); },
    tablet: function () { console.log("Init Tablet"); },
    desktop: function () { console.log("Init Desktop"); }
};

// Mapping: Body-Logik
var modeBody = {
    mobile: function () { console.log("Mobile-spezifischer Body-Inhalt"); },
    tablet: function () { console.log("Tablet-spezifischer Body-Inhalt"); },
    desktop: function () { console.log("Desktop-spezifischer Body-Inhalt"); }
};

// Mapping: Navbar-Logik
var modeNavbar = {
    mobile: function () {
        hamburgerCheck = document.getElementById("hamburger_check");
        navbar_right_id = document.getElementById("navbar--right--id");
        hamburgerImage = document.getElementById("hamburgerImage");


        if (hamburgerCheck) {
            hamburgerCheck.addEventListener("change", function () {
                if (hamburgerCheck.checked) {
                    console.log("Hamburger geöffnet");
                    // Hier kannst du z. B. Navbar öffnen
                    hamburgerImage.src = "../img/navbar/x_icon.png";
                    hamburgerImage.style.width = "40px"

                    if (navbar_right_id) {
                        // Direkt auf scale(1) setzen

                        navbar_right_id.style.height = "100vh";


                    }
                } else {
                    console.log("Hamburger geschlossen");
                    hamburgerImage.src = "../img/navbar/Hamburger_icon.png";
                    hamburgerImage.style.width = "50px"

                    navbar_right_id.style.height = "0vh";
                }
            });
        }

    },
    tablet: function () { console.log("Tablet-spezifische Navbar"); },
    desktop: function () {

        //Navigation
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.documentElement.scrollTop > 70) {
                navbar = document.getElementById("navbar").style.height = "75px";

            }
            if (document.documentElement.scrollTop < 40) {
                navbar = document.getElementById("navbar").style.height = "100px";
            }
        }


        let jobDiv = document.getElementById("navbar--right--div--buttons--div");
        let jobUnterordnerDiv = document.getElementById("navbar--right--div--buttons--div--unterordner");


        jobDiv.addEventListener("mouseover", function () {
            jobUnterordnerDiv.style.transform = "translate(-50%, 0) scaleY(1)";
        });

        jobDiv.addEventListener("mouseout", function () {
            jobUnterordnerDiv.style.transform = "translate(-50%, 0) scaleY(0)";
        });
    }
};

// Mapping: Scroll-Logik
var modeScroll = {
    mobile: function () { console.log("Mobile-spezifisches Scroll-Verhalten"); },
    tablet: function () { console.log("Tablet-spezifisches Scroll-Verhalten"); },
    desktop: function () { console.log("Desktop-spezifisches Scroll-Verhalten"); }
};

// Gemeinsame Logik
function initCommon() {
    //Init – für alle Geräte
}

function initCommonBody() {
    //Body Init – für alle Geräte




   
}

function initCommonNavbar() {
    //Navbar Init – für alle Geräte
}

function commonScrollLogic() {
    //Scroll – für alle Geräte
}
