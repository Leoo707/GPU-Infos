// Interaktive Navigation
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffcc00';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});

// Quiz-Funktionalität (für Selbsttest-Seite)
function checkAnswers() {
    const questions = document.querySelectorAll('.quiz-question');
    let score = 0;

    questions.forEach(question => {
        const selected = question.querySelector('input[type="radio"]:checked');
        if (selected && selected.value === 'correct') {
            score++;
        }
    });

    alert(`Du hast ${score} von ${questions.length} Fragen richtig beantwortet!`);
}
