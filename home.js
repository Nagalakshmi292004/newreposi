
const aboutPageButton = document.getElementById('aboutPageButton');
const contactPageButton = document.getElementById('contactPageButton');

aboutPageButton.addEventListener('click', () => {
    window.location.href = 'about.html'; 
});

contactPageButton.addEventListener('click', () => {
    window.location.href = 'contact.html'; 
});
