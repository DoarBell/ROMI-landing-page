document.addEventListener('DOMContentLoaded', () => {
    function toggleTheme(){
        document.body.classList.toggle("dark-theme");
    }

    const themeBtn = document.querySelector("#theme-btn")
    themeBtn.addEventListener("click", () => {
        toggleTheme();
    })
})