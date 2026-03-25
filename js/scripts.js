document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.timer-trigger');
    const display = document.querySelector('.timer-display');
    const startTime = Date.now();

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                display.textContent = `${elapsed} seconds`;
                observer.disconnect();
            }
        });
    });

    observer.observe(target);
});