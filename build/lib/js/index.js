lucide.createIcons();

function toggleTheme() {
    const themeSwitch = document.querySelector(".theme-switch")
    
    if (document.body.id.startsWith("dark")) {
        document.body.id = "light-theme"
        themeSwitch.setAttribute('data-lucide', 'moon')
    } else {
        document.body.id = "dark-theme"
        themeSwitch.setAttribute('data-lucide', 'sun')
    }
    lucide.createIcons();
} 
