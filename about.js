document.addEventListener('DOMContentLoaded', async () => {
    const aboutTitle = document.querySelector('.container h2');
    const paragraphsContainer = document.querySelector('.container');
    
    const response = await fetch('http://localhost:5000/api/about');
    const data = await response.json();

    aboutTitle.textContent = data.title;
    paragraphsContainer.innerHTML = `<h2>${data.title}</h2>`;
    data.paragraphs.forEach(p => {
        const paragraph = document.createElement('p');
        paragraph.textContent = p;
        paragraphsContainer.appendChild(paragraph);
    });
});