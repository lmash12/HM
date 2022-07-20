let btnThemeChange = document.getElementById('btnTheme');
let cssThemes = document.getElementById('theme_css');
let iconTheme = document.getElementById('themeIcon');
let logo = document.getElementById('logoImg');
let theme = 'light';

function changeTheme(){
    btnThemeChange.onclick = function(){
        cssThemes.href = '../styledark.css';
        iconTheme.src = "/img/Moon-Dark.png";
        logo.src = 'img/Logo-Dark.png';
        theme = 'dark';
    
    if(theme == 'dark'){
        btnThemeChange.onclick = function(){
            cssThemes.href = '../style.css';
            iconTheme.src = 'img/Moon.png';
            logo.src = 'img/Logo.png';
            theme = 'light'
       
        }
         }else if(theme == 'light'){
            btnThemeChange.onclick = function(){
                cssThemes.href = '../styledark.css';
                iconTheme.src = "/img/Moon-Dark.png";
                theme = 'dark'
            }
         }
    }
}

changeTheme();




