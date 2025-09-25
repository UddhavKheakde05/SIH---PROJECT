document.addEventListener('DOMContentLoaded', async () => {
    const welcomeText = document.getElementById('welcomeText');
    const subtitleText = document.getElementById('subtitleText');

    const response = await fetch('http://localhost:5000/api/dashboard');
    const data = await response.json();
    welcomeText.textContent = data.welcomeText;
    subtitleText.textContent = data.subtitleText;
});