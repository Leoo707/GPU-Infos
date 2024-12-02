document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const contentDiv = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();

            const pageUrl = link.getAttribute('href'); // URL der HTML-Datei
            try {
                const response = await fetch(pageUrl); // Datei laden
                if (!response.ok) {
                    throw new Error(`HTTP-Fehler: ${response.status}`);
                }
                const htmlContent = await response.text(); // HTML-Inhalt als Text
                contentDiv.innerHTML = htmlContent; // Inhalt einfügen
            } catch (error) {
                contentDiv.innerHTML = `<p>Fehler beim Laden der Seite: ${error.message}</p>`;
            }
        });
    });
});
