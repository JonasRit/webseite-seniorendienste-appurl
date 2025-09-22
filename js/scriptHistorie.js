document.addEventListener('DOMContentLoaded', function () {
    // 1. Alle notwendigen HTML-Elemente holen
    const slider = document.getElementById('historieSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.historie--einzelne');

    // 2. Sicherheitsprüfung: Wenn der Slider nicht existiert, wird das Skript beendet.
    if (!slider || items.length === 0) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
    }

    // 3. Wichtige Variablen definieren
    let currentIndex = 0; // Hält die aktuelle Position des Sliders fest

    /**
     * Ermittelt, wie viele Elemente je nach Bildschirmbreite sichtbar sein sollen.
     * WICHTIG: Die Breiten (600px, 992px) müssen mit den Werten
     * in deinen CSS-Media-Queries übereinstimmen!
     * @returns {number} Anzahl der sichtbaren Items (1, 2 oder 3)
     */
    const getItemsPerPage = () => {
        if (window.innerWidth <= 600) {
            return 1; // Für Mobilgeräte
        } else if (window.innerWidth <= 992) {
            return 2; // Für Tablets
        } else {
            return 3; // Für Desktops
        }
    };

    /**
     * Berechnet die exakte Distanz, um die der Slider bewegt werden muss.
     * Diese Methode funktioniert perfekt mit CSS 'gap', da sie den gesamten
     * sichtbaren Bereich fair auf die Items aufteilt.
     * @returns {number} Die Breite eines "Slots" in Pixeln.
     */
    const getSlideWidth = () => {
        const viewport = slider.parentElement; // Der sichtbare Bereich (.historie-viewport)
        const viewportWidth = viewport.offsetWidth;
        return viewportWidth / getItemsPerPage();
    };

    /**
     * Aktiviert oder deaktiviert die Pfeil-Buttons, je nachdem,
     * ob man am Anfang oder am Ende des Sliders ist.
     */
    const updateArrowState = () => {
        const itemsPerPage = getItemsPerPage();
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - itemsPerPage;
    };

    /**
     * Bewegt den Slider an die korrekte Position und aktualisiert die Pfeile.
     * Dies ist die Hauptfunktion für alle visuellen Änderungen.
     */
    const updateSliderPosition = () => {
        const slideWidth = getSlideWidth();
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
        updateArrowState();
    };


    // 4. Event-Listener für die Steuerung
    
    // Klick auf den "Weiter"-Pfeil
    nextBtn.addEventListener('click', () => {
        const itemsPerPage = getItemsPerPage();
        // Nur weiterschalten, wenn noch genügend Elemente vorhanden sind
        if (currentIndex < items.length - itemsPerPage) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    // Klick auf den "Zurück"-Pfeil
    prevBtn.addEventListener('click', () => {
        // Nur zurückschalten, wenn nicht schon am Anfang
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    // Wenn die Fenstergröße geändert wird, Position neu berechnen
    window.addEventListener('resize', updateSliderPosition);


    // 5. Initialisierung
    // Beim Laden der Seite den Slider einmal korrekt positionieren
    updateSliderPosition();
});