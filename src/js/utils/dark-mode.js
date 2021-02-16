const buttonDarkMode = document.getElementById('toggle-darkmode');

const loadThemeLayout = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

const checkStatusDarkMode = () => {
    if (JSON.parse(localStorage.darkthemestatus) === true) {
        buttonDarkMode.checked = true;
    } else {
        buttonDarkMode.checked = false;
    }
}

const loadContent = () => {
    loadThemeLayout();
    checkStatusDarkMode();
}


document.addEventListener('DOMContentLoaded', loadContent);



const changeDarkModeTheme = function(){
    const theme = this.checked ? 'dark' : 'light';
    localStorage.theme = theme;
    localStorage.darkthemestatus = this.checked;
    loadThemeLayout();
}

buttonDarkMode.addEventListener('click', changeDarkModeTheme);

  
  // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')