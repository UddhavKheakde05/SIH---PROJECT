document.addEventListener('DOMContentLoaded', async () => {
    const contactTitle = document.querySelector('.container h2');
    const emailParagraph = document.querySelector('.container p:nth-of-type(1)');
    const phoneParagraph = document.querySelector('.container p:nth-of-type(2)');

    const response = await fetch('http://localhost:5000/api/contact');
    const data = await response.json();
    contactTitle.textContent = data.title;
    emailParagraph.innerHTML = `Email: <b>${data.email}</b>`;
    phoneParagraph.innerHTML = `Phone: <b>${data.phone}</b>`;
});