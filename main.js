const themeBtn = document.querySelector('.theme-toggler');

function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').
        matches ? 'dark' : 'light';
    localStorage.getItem('site.theme') ? theme =
        localStorage.getItem('site.theme') : null;
   return theme;
}
function loadTheme(theme) {
    const root = document.querySelector(':root');
    if(theme === 'light') {
        themeBtn.innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
    } else {
        themeBtn.innerHTML = `<i class="bi bi-brightness-high"></i>`;
    }
    root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
    let theme = getCurrentTheme();
    let audio;
    if(theme === 'dark') {
        audio = document.querySelector('.audio_click');
        theme = 'light';
    } else {
        audio = document.querySelector('.audio_click');
        theme = 'dark';
    }
    audio.currentTime = 0;
    audio.play();
    localStorage.setItem('site.theme', `${theme}`);
    loadTheme(theme);
})
window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
})
