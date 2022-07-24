let btnThemeChange = document.getElementById('btnTheme');
let cssThemes = document.getElementById('theme_css');
let iconTheme = document.getElementById('themeIcon');
let logo = document.getElementById('logoImg');
let theme = 'light';

btnThemeChange.addEventListener('click', () =>{
    if(theme == 'light'){
        cssThemes.href = '../styledark.css';
        iconTheme.src = "/img/Moon-Dark.png";
        logo.src = 'img/Logo-Dark.png';
        theme = 'dark';
    }else if(theme == 'dark'){
        cssThemes.href = '../style.css';
        iconTheme.src = 'img/Moon.png';
        logo.src = 'img/Logo.png';
        theme = 'light'
    }
})



