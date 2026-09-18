document.addEventListener('DOMContentLoaded', () => {
    function toggleTheme(){
        document.body.classList.toggle("dark-theme");
    }

    const themeBtn = document.querySelector("#theme-btn")
    themeBtn.addEventListener("click", () => {
        toggleTheme();
    })
    
    const items = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // If you only want it once:
            observer.unobserve(entry.target);
        }
        });
    }, { threshold: 0.2 }); // 20% visible triggers

    items.forEach(item => observer.observe(item));
})

let currentIndex = 0;
setInterval(() => {
    phoneScroll(1);
}, 3000)


function phoneScroll(direction) {
    const img = document.getElementById("phone-img");

    // Horizontal movement
    const slideOut = direction > 0 ? "translateX(-20px)" : "translateX(20px)";
    const slideIn  = direction > 0 ? "translateX(20px)"  : "translateX(-20px)";

    // Animate out
    img.style.opacity = "0";
    img.style.transform = `rotate(-4deg) ${slideOut}`;

    setTimeout(() => {
        currentIndex += direction;

        if (currentIndex < 0) currentIndex = phoneImages.length - 1;
        if (currentIndex >= phoneImages.length) currentIndex = 0;

        img.src = phoneImages[currentIndex];

        // Prepare the incoming image
        img.style.transform = `rotate(-4deg) ${slideIn}`;

        // Force reflow
        void img.offsetWidth;

        // Animate in
        img.style.opacity = "2";
        img.style.transform = "rotate(-4deg) translateX(0)";
    }, 280);
}