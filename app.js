document.addEventListener('DOMContentLoaded', () => {
    const previewPortfolio = document.getElementById("preview-portfolio");
    const cardPortfolio = document.getElementById("card-portfolio");

    cardPortfolio.addEventListener('click', () => {
        if (previewPortfolio.classList.contains('show')) {
            previewPortfolio.classList.remove('show');
            setTimeout(() => {
                previewPortfolio.style.display = 'none';
            }, 250); // Wait for the transition to complete before setting display to none
        } else {
            previewPortfolio.style.display = 'block'; // Make it display before the transition starts
            setTimeout(() => {
                previewPortfolio.classList.add('show');
            }, 10); // Allow the browser to render the display change before starting the transition
        }
    });
});