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
