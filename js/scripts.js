jQuery(document).ready(function ($) {
  function initializeOwlCarousel() {
    var loopEnabled = $(window).width() <= 985;
    $(".owl-carousel").owlCarousel({
      loop: loopEnabled,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }

  initializeOwlCarousel();

  $(window).resize(function () {
    // Destruye el carrusel existente
    $(".owl-carousel").trigger("destroy.owl.carousel");

    // Re-inicializa el carrusel con los nuevos parámetros
    initializeOwlCarousel();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  // Agregar evento de clic a los botones del acordeón
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Recorrer manualmente los elementos en el DOM y agregar evento de clic a los elementos con clase "close"
  var allElements = document.getElementsByTagName("*");
  for (var j = 0; j < allElements.length; j++) {
    if (allElements[j].classList.contains("close")) {
      allElements[j].addEventListener("click", function () {
        var panel = this.closest(".panel");
        panel.style.maxHeight = null;
        panel.previousElementSibling.classList.remove("active");
      });
    }
  }
});

gsap.to("#svg1,#svg1-conductor,#svg1-invertir", {
  y: 17, // Desplazamiento vertical
  duration: 1.2, // Duración de la animación en segundos
  ease: "power1.inOut", // Curva de animación
  repeat: -1, // Repetir la animación indefinidamente
  yoyo: true, // Hacer que la animación se revierta automáticamente
});

gsap.to("#svg2,#svg2-conductor,#svg2-invertir", {
  y: 17, // Desplazamiento vertical
  duration: 1.5, // Duración de la animación en segundos
  ease: "power1.inOut", // Curva de animación
  repeat: -1, // Repetir la animación indefinidamente
  yoyo: true, // Hacer que la animación se revierta automáticamente
});

gsap.to("#svg3,#svg3-conductor,#svg3-invertir", {
  y: 17, // Desplazamiento vertical
  duration: 1.8, // Duración de la animación en segundos
  ease: "power1.inOut", // Curva de animación
  repeat: -1, // Repetir la animación indefinidamente
  yoyo: true, // Hacer que la animación se revierta automáticamente
});

gsap.to("#svg4,#svg4-conductor,#svg4-invertir", {
  y: 17, // Desplazamiento vertical
  duration: 1.1, // Duración de la animación en segundos
  ease: "power1.inOut", // Curva de animación
  repeat: -1, // Repetir la animación indefinidamente
  yoyo: true, // Hacer que la animación se revierta automáticamente
});

gsap.to("#svg5,#svg5-conductor", {
  y: 17, // Desplazamiento vertical
  duration: 1.6, // Duración de la animación en segundos
  ease: "power1.inOut", // Curva de animación
  repeat: -1, // Repetir la animación indefinidamente
  yoyo: true, // Hacer que la animación se revierta automáticamente
});
gsap.to("#svg6-conductor", {
  y: 17, // Desplazamiento vertical
  duration: 2, // Duración de la animación en segundos
  ease: "power1.inOut", // Curva de animación
  repeat: -1, // Repetir la animación indefinidamente
  yoyo: true, // Hacer que la animación se revierta automáticamente
});

function loopAnimations() {
  // Encadenar animaciones con un retardo entre cada una
  gsap
    .timeline()
    .to("#heart", { scale: 1.2, duration: 0.5, ease: "power1.inOut" })
    .to("#heart", { opacity: 0, duration: 0.5 })
    .to("#heart", { scale: 0.5, opacity: 1, duration: 0 })
    .call(loopAnimations); // Llama a la función nuevamente para iniciar el siguiente ciclo
}

// Iniciar la secuencia de animaciones
loopAnimations();

setInterval(function () {
  var gifImg = document.querySelector(".invest__information__heart .bill");
  gifImg.src = gifImg.src + "?a=" + Math.random();
}, 1700);

setInterval(function () {
  var gifImg = document.querySelector(".invest__information__heart .heart");
  gifImg.src = gifImg.src + "?a=" + Math.random();
}, 1700);

// Función para generar un número aleatorio entre min y max (ambos incluidos)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para incrementar el número y mostrarlo
function incrementNumber() {
  var randomNumberElement = document.getElementById("random-number");
  var currentNumber = parseInt(randomNumberElement.textContent);
  var newNumber = currentNumber + 1;
  randomNumberElement.textContent = newNumber;
}

// Función para generar un intervalo de tiempo aleatorio y ejecutar la función de incremento
function startIncrement() {
  var intervalTime = getRandomInt(1000, 8000); // Intervalo de tiempo entre 1 y 6 segundos
  setInterval(incrementNumber, intervalTime);
}

// Inicia el proceso de incremento
startIncrement();

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".rect1-child").forEach(function (rect) {
  // Genera un valor aleatorio para la duración de la animación
  var randomDuration = gsap.utils.random(1, 3); // Por ejemplo, entre 1 y 3 segundos

  gsap.fromTo(
    rect,
    { width: 30 },
    {
      width: "100%",
      duration: randomDuration, // Usa la duración aleatoria
      scrollTrigger: {
        trigger: rect,
        start: "top 80%", // Ajusta esto según sea necesario
        end: "top 20%", // Ajusta esto según sea necesario
        scrub: true, // Permite la animación suave durante el scroll
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .rent__information__item
  const items = gsap.utils.toArray(".rent__information__item");

  // Asegura que los elementos estén ocultos inicialmente
  items.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = "hidden";
  });

  // Configura la animación con stagger
  ScrollTrigger.create({
    trigger: items[0], // Utiliza el primer elemento como el trigger
    start: "top 80%", // Inicia la animación cuando el top del primer elemento está en el 90% del viewport
    once: true, // La animación se ejecuta solo una vez
    onEnter: () => {
      // Se activa cuando el primer elemento entra en vista
      gsap.set(items, { visibility: "visible" }); // Cambia visibilidad a visible justo antes de la animación
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
        }
      );
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Seleccionar las secciones padres
  const sections = document.querySelectorAll(".rent");

  sections.forEach((section) => {
    // Seleccionar los elementos a animar dentro de cada sección
    const texts = section.querySelectorAll(
      ".rent__title, .rent__line, .rent__subtitle"
    );

    // Configurar la animación con stagger
    gsap.fromTo(
      texts,
      { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
        scrollTrigger: {
          trigger: section, // Utiliza la sección padre como el trigger
          start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
          end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
          once: true, // La animación se ejecuta solo una vez
        },
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Seleccionar las secciones padres
  const sections = document.querySelectorAll(".invest");

  sections.forEach((section) => {
    // Seleccionar los elementos a animar dentro de cada sección
    const texts = section.querySelectorAll(
      ".invest__title, .invest__line, .invest__subtitle"
    );

    // Configurar la animación con stagger
    gsap.fromTo(
      texts,
      { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
        scrollTrigger: {
          trigger: section, // Utiliza la sección padre como el trigger
          start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
          end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
          once: true, // La animación se ejecuta solo una vez
        },
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  sections.forEach((section) => {
    // Seleccionar los elementos a animar dentro de cada sección
    const texts = section.querySelectorAll(
      ".invest__title, .invest__line, .invest__subtitle"
    );

    // Configurar la animación con stagger
    gsap.fromTo(
      texts,
      { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
        scrollTrigger: {
          trigger: section, // Utiliza la sección padre como el trigger
          start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
          end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
          once: true, // La animación se ejecuta solo una vez
        },
      }
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .col-md-3 dentro de .invest__information
  const items = gsap.utils.toArray(".invest__information .col-md-3");

  // Asegura que los elementos estén ocultos inicialmente
  items.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = "hidden";
  });

  // Configura la animación con stagger
  ScrollTrigger.create({
    trigger: items[0], // Utiliza el primer elemento como el trigger
    start: "top 90%", // Inicia la animación cuando el top del primer elemento está en el 90% del viewport
    once: true, // La animación se ejecuta solo una vez
    onEnter: () => {
      // Se activa cuando el primer elemento entra en vista
      items.forEach((item) => (item.style.visibility = "visible")); // Cambia visibilidad a visible justo antes de la animación
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2, // Tiempo de espera entre las animaciones de los elementos
        }
      );
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".drive");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".drive__title, .drive__line, .drive__subtitle"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .drive__card__item
  const items = gsap.utils.toArray(".drive__card__item");

  // Asegura que los elementos estén ocultos inicialmente
  items.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = "hidden";
  });

  // Configura la animación con stagger
  ScrollTrigger.create({
    trigger: items[0], // Utiliza el primer elemento como el trigger
    start: "top 90%", // Inicia la animación cuando el top del primer elemento está en el 90% del viewport
    once: true, // La animación se ejecuta solo una vez
    onEnter: () => {
      // Se activa cuando el primer elemento entra en vista
      items.forEach((item) => (item.style.visibility = "visible")); // Cambia visibilidad a visible justo antes de la animación
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2, // Tiempo de espera entre las animaciones de los elementos
        }
      );
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos dentro del carrusel de imágenes
  const items = gsap.utils.toArray(".sponsors__owl-carousel .item");

  // Asegura que los elementos estén ocultos inicialmente
  items.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = "hidden";
  });

  // Configura la animación con stagger
  ScrollTrigger.create({
    trigger: items[0], // Utiliza el primer elemento como el trigger
    start: "top 80%", // Inicia la animación cuando el top del primer elemento está en el 80% del viewport
    once: true, // La animación se ejecuta solo una vez
    onEnter: () => {
      // Se activa cuando el primer elemento entra en vista
      items.forEach((item) => (item.style.visibility = "visible")); // Cambia visibilidad a visible justo antes de la animación
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2, // Tiempo de espera entre las animaciones de los elementos
        }
      );
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .reviews__container
  const reviewContainers = gsap.utils.toArray(".reviews__container");

  // Anima los elementos con un stagger para que aparezcan a destiempo
  gsap.fromTo(
    reviewContainers,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: reviewContainers[0], // Utiliza el primer elemento como el trigger
        start: "top 90%", // Inicia la animación cuando el top del primer elemento está en el 90% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom del primer elemento está en el 20% del viewport
        scrub: true,
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los elementos SVG dentro de .howtorent__information__image
  const svgs = gsap.utils.toArray(".howtorent__information__image svg");

  // Anima todos los elementos SVG simultáneamente para que aparezcan y desaparezcan de abajo hacia arriba
  gsap.fromTo(
    svgs,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: svgs[0], // Utiliza el primer elemento SVG como el trigger
        start: "top 80%", // Inicia la animación cuando el top del primer elemento SVG está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom del primer elemento SVG está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".howtorent");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".howtorent__title, .howtorent__line ,.howtorent__subtitle"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .howtorent__information__items
  const items = gsap.utils.toArray(".howtorent__information__items");

  // Asegura que los elementos estén ocultos inicialmente
  items.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = "hidden";
  });

  // Configura la animación con stagger
  ScrollTrigger.create({
    trigger: items[0], // Utiliza el primer elemento como el trigger
    start: "top 70%", // Inicia la animación cuando el top del primer elemento está en el 10% del viewport
    end: "bottom 10%", // Finaliza la animación cuando el bottom del primer elemento está en el 10% del viewport
    once: true, // La animación se ejecuta solo una vez
    onEnter: () => {
      // Se activa cuando el primer elemento entra en vista
      items.forEach((item) => (item.style.visibility = "visible")); // Cambia visibilidad a visible justo antes de la animación
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.4, // Tiempo de espera entre las animaciones de los elementos
        }
      );
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .rent__information__item
  const items = gsap.utils.toArray(" .howtorent__information__image");

  // Anima los elementos con un stagger para que aparezcan a destiempo
  gsap.fromTo(
    items,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: items[0], // Utiliza el primer elemento SVG como el trigger
        start: "top 40%", // Inicia la animación cuando el top del primer elemento SVG está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom del primer elemento SVG está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".form");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".form__title, .form__line ,.form__subtitle , .form__main"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .rent__information__item
  const items = gsap.utils.toArray(".increase__information__img");

  // Anima los elementos con un stagger para que aparezcan a destiempo
  gsap.fromTo(
    items,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.6, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: items[0], // Utiliza el primer elemento como el trigger
        start: "top 70%", // Inicia la animación cuando el top del primer elemento está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom del primer elemento está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".increase__information__text");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".increase__information__text-title, .increase__information__text-line , .increase__information__text-subtitle "
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 40%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".characteristics");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".characteristics__title, .characteristics__line ,.characteristics__subtitle"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .characteristics__information__items
  const items = gsap.utils.toArray(".characteristics__information__items");

  // Asegura que los elementos estén ocultos inicialmente
  items.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = "hidden";
  });

  // Crea la animación en cadena para todos los elementos
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: items[0], // Utiliza el primer elemento como el trigger
      start: "top 70%", // Inicia la animación cuando el top del primer elemento está en el 70% del viewport
      once: true, // La animación se ejecuta solo una vez
      onEnter: () => {
        items.forEach((item) => (item.style.visibility = "visible")); // Cambia visibilidad a visible justo antes de la animación
      },
    },
  });

  // Añade los elementos al timeline para que se animen en cadena
  items.forEach((item) => {
    tl.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2, // Tiempo de espera entre las animaciones de los elementos
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".team");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".team__title, .team__line ,.team__subtitle"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 80%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Selecciona todos los elementos .rent__information__item
  const items = gsap.utils.toArray(".team__information-card");

  // Anima los elementos con un stagger para que aparezcan a destiempo
  gsap.fromTo(
    items,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: items[0], // Utiliza el primer elemento como el trigger
        start: "top 120%", // Inicia la animación cuando el top del primer elemento está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom del primer elemento está en el 20% del viewport
        scrub: true,
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});
//contact

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".contact");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".contact__title, .contact__line ,.contact__subtitle"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 100%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});
//contact__information__data

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".question");

  // Seleccionar los elementos a animar dentro de la sección de conducción
  const texts = section.querySelectorAll(
    ".question__title, .question__line ,.question__subtitle"
  );

  // Configurar la animación con stagger
  gsap.fromTo(
    texts,
    { opacity: 0, y: 100 }, // Animación de inicio: baja opacidad y posición hacia abajo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Tiempo de espera entre las animaciones de los elementos
      scrollTrigger: {
        trigger: section, // Utiliza la sección de conducción como el trigger
        start: "top 100%", // Inicia la animación cuando el top de la sección está en el 80% del viewport
        end: "bottom 20%", // Finaliza la animación cuando el bottom de la sección está en el 20% del viewport
        once: true, // La animación se ejecuta solo una vez
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.querySelector(".whatsapp-button");
  const overlay = document.querySelector(".overlay");
  const circleContainer = document.querySelector(".circle-container");
  const circles = document.querySelectorAll(".circle");
  $;
  let isOpen = false;

  whatsappButton.addEventListener("click", function () {
    if (isOpen) {
      // Animate circles to disappear from last to first
      gsap.to(circles, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.in",
        stagger: {
          each: 0.2,
          from: "end", // Start stagger animation from the last circle
        },
        onComplete: () => {
          circleContainer.style.display = "none";
          overlay.style.display = "none";
        },
      });
    } else {
      overlay.style.display = "block";
      circleContainer.style.display = "flex";

      // Animate circles to appear from bottom to top (reverse order)
      gsap.fromTo(
        circles,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: {
            each: 0.2,
            from: "end", // Start stagger animation from the last circle
          },
        }
      );
    }
    isOpen = !isOpen;
  });

  overlay.addEventListener("click", function () {
    if (isOpen) {
      // Animate circles to disappear from last to first
      gsap.to(circles, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.in",
        stagger: {
          each: 0.2,
          from: "end", // Start stagger animation from the last circle
        },
        onComplete: () => {
          circleContainer.style.display = "none";
          overlay.style.display = "none";
        },
      });
      isOpen = false;
    }
  });
});
