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



    document.getElementById('ja_button').addEventListener('click', ja_wurde_geklickt);
	document.getElementById('nein_button').addEventListener('click', nein_wurde_geklickt);
    		// Das soll passieren wenn "id=ja/nein_button" angeklicket wurde
		function ja_wurde_geklickt() {
			document.getElementById('contentContainer').style.display = 'block';		
			document.getElementById('ja_button').style.color = 'white';
			document.getElementById('ja_button').style.backgroundColor = '#052e3b';
			document.getElementById('nein_button').style.color = 'gray';
			document.getElementById('nein_button').style.backgroundColor = '#b3b3b3';
			
		}
		function nein_wurde_geklickt() {
			document.getElementById('contentContainer').style.display = 'none';
			document.getElementById('nein_button').style.color = 'white';
			document.getElementById('nein_button').style.backgroundColor = '#052e3b';
			document.getElementById('ja_button').style.color = 'gray';
			document.getElementById('ja_button').style.backgroundColor = '#b3b3b3';
			document.getElementById("pflegekasse_kzp-anspruch").value = "";
			document.getElementById("pflegekasse_verhinderungspf").value = "";

		}

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
 // Funktion, die ausgeführt werden soll
    function onVisible(entry) {
        entry.target.style.transform="scale(1)";
    }

    // Observer erstellen
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                onVisible(entry);
                // Optional: Beobachtung beenden, damit es nur einmal passiert
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.01 //  Element muss zu ...threshold... sichtbar sein
    });

    //Das gewünschte Element beobachten
    const altenpflegeheim_inhalt_bild1 = document.getElementById("altenpflegeheim_inhalt_bild1");
    const altenpflegeheim_inhalt_bild2 = document.getElementById("altenpflegeheim_inhalt_bild2");
    const altenpflegeheim_inhalt_bild3 = document.getElementById("altenpflegeheim_inhalt_bild3");
    
    observer.observe(altenpflegeheim_inhalt_bild1);
    observer.observe(altenpflegeheim_inhalt_bild2);
    observer.observe(altenpflegeheim_inhalt_bild3);


    //Kurzzeitpflegerechner


    function kurzzeitpflegerechner(von, bis, pflegegrad, bereitsPflAnspruch, kurzzeitpflege, verhinderungspflege) {
        var days = bis-von;
        return days;
    }

    

    
}

function initCommonNavbar() {
    //Navbar Init – für alle Geräte
}

function commonScrollLogic() {
    //Scroll – für alle Geräte
}
