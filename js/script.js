// Esperamos a que el DOM esté completamente cargado antes de ejecutar animaciones
document.addEventListener('DOMContentLoaded', () => {

  // Registramos los plugins de GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // === MENÚ LATERAL ANIMADO CON GSAP ===
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');
  let menuOpen = false;

  // === ANIMACIONES DE ENTRADA PARA LOS TÍTULOS ===

  gsap.fromTo(".container2 h2", {
      x: -200,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".container2 h2",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play reverse play reverse"
      }
    }
  );

  gsap.fromTo(".container3 h2", {
      x: 200,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".container3 h2",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play reverse play reverse"
      }
    }
  );

  gsap.fromTo(".container4 h2", {
      y: 150,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".container4 h2",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play reverse play reverse"
      }
    }
  );

  // === CUADRADO FIJO ANIMADO CON EL SCROLL ===

  gsap.to("#cuadroScroll", {
    rotation: 360,
    backgroundColor: "#000000",
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  gsap.to("#cuadroMoviendo", {
    rotation: 360,
    x: 1800,
    backgroundColor: "#0800ff",
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  // === ANIMACIÓN DEL MENÚ LATERAL (TOGGLE) ===

  const menuTween = gsap.to(sideMenu, {
    x: -300,
    duration: 0.5,
    paused: true,
    ease: "power2.out"
  });

  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      menuTween.play();
    } else {
      menuTween.reverse();
    }
  });

  // === SCROLL A LAS SECCIONES CON GSAP SCROLLTO ===

  document.querySelectorAll('#sideMenu button').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) {
        // ✅ Scroll usando GSAP ScrollTo
        gsap.to(window, {
          scrollTo: {
            y: target,
            offsetY: 0 // Ajusta si usas header fijo
          },
          duration: 1.0,
          ease: "sine2.inOut"
        });

        // ❌ Alternativa original con scrollIntoView (comentada)
        /*
        target.scrollIntoView({ behavior: 'smooth' });
        */

        menuTween.reverse();
        menuOpen = false;
      }
    });
  });

  // === PARALLAX DE FORMAS ===

  gsap.to(".square1", {
    y: -300,
    x: 200,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  gsap.to(".square2", {
    y: -500,
    x: -200,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  gsap.to(".circle1", {
    y: 400,
    x: -300,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

});
