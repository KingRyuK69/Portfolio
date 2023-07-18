(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
var typed = new Typed(".typing",{
    strings: ["Intern @ Persistent", "Azure Admin @ ITP LLC", "Full Stack Dev", "Azure Dev", "CSE Undergrad","3x Azure Certified","Software Dev"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});
var typed2 = new Typed(".typing-2",{
    strings: ["GCP", "Azure", "MERN","ML|AI","App Dev","DevOps"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
});
typed();
typed2();
