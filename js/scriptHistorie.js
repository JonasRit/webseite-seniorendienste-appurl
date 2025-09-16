document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('historieSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.historie--einzelne');

    // Prüfen, ob Slider-Elemente auf der Seite vorhanden sind
    if (!slider || items.length === 0) {
        // Wenn keine Elemente da sind, wird das Skript nicht ausgeführt
        if(prevBtn) prevBtn.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        return; 
    }

    let currentIndex = 0;
    // Wir nehmen an, dass immer 3 Elemente pro "Seite" sichtbar sein sollen
    const itemsPerPage = 3; 

    // Funktion zur Berechnung der exakten Breite eines Items in Pixeln
    const getSlideWidth = () => {
        const firstItem = items[0];
        const style = window.getComputedStyle(firstItem);
        // Berechne die Gesamtbreite: Elementbreite + rechter Abstand
        const itemWidth = firstItem.offsetWidth;
        const marginRight = parseInt(style.marginRight, 10);
        return itemWidth + marginRight;
    };

    // Funktion zum Aktualisieren der Pfeil-Zustände (aktiv/deaktiviert)
    const updateArrowState = () => {
        prevBtn.disabled = currentIndex === 0;
        // Deaktiviere "Weiter", wenn nicht mehr genügend Items für eine volle Seite übrig sind
        nextBtn.disabled = currentIndex >= items.length - itemsPerPage;
    };

    // Funktion zum Bewegen des Sliders
    const updateSliderPosition = () => {
        const slideWidth = getSlideWidth();
        // Berechne die Verschiebung in Pixeln
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
        updateArrowState();
    };

    // Event-Listener für den "Weiter"-Button
    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - itemsPerPage) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    // Event-Listener für den "Zurück"-Button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });
    
    // Bei einer Größenänderung des Fensters die Position neu berechnen,
    // damit nichts komisch aussieht.
    window.addEventListener('resize', updateSliderPosition);

    // Initialisierung beim Laden der Seite
    updateSliderPosition();
});