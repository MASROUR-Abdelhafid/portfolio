// Attendre le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("✨ Portfolio chargé !");

    // 🟢 Animation ScrollReveal
    ScrollReveal().reveal('.hero-title', {
        delay: 200,
        origin: 'left',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.hero-subtitle', {
        delay: 400,
        origin: 'right',
        distance: '50px',
        duration: 1000
    });

    ScrollReveal().reveal('.btn-primary', {
        delay: 600,
        origin: 'bottom',
        distance: '50px',
        duration: 1000
    });

    ScrollReveal().reveal('section', {
        delay: 400,
        origin: 'bottom',
        distance: '70px',
        duration: 1200
    });

    // 🟢 Animation GSAP - Navbar dynamique
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Animation au survol des boutons
    gsap.utils.toArray(".btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.1, duration: 0.3 });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.3 });
        });
    });

    // Parallax ScrollTrigger sur les projets
    gsap.utils.toArray(".project-item").forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power2.out"
        });
    });

    // Animation formulaire de contact
    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 90%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        duration: 1.5
    });
});
