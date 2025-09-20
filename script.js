document.addEventListener("DOMContentLoaded", () => {
  //SCROLL DINAMICO
  const sections = document.querySelectorAll(".snap-section");
  const navLinks = document.querySelectorAll(".lateral-link");

  //ENCUENTRA Y MAPEA
  const sectionToLink = {};
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    sectionToLink[targetId] = link;
  });

  const scrollContainer = document.querySelector(".scroll-container");

  //EN CADA SCROLL, REPINTA LOS <a> SEGUN EN CUAL SE ESTÉ
  scrollContainer.addEventListener("scroll", () => {
    let current = "";
    console.log(current);

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "white";
    });

    if (current && sectionToLink[current]) {
      sectionToLink[current].style.color = getComputedStyle(document.documentElement).getPropertyValue("--colorDestaque").trim();
    }
  });

  //CONFIRMACION FORM
  // const messageButton = document.getElementById("form-boton-enviar");
  // const messageBox = document.getElementById("confirmacion");
  // const form = document.getElementById("form-contacto");

  // messageButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   if (form.checkValidity()) {
  //     console.log("test");
  //     messageBox.classList.add("show");

  //     setTimeout(() => {
  //       messageBox.classList.remove("show");
  //     }, 3000);

  //     const inputs = document.querySelectorAll(".form-campo");
  //     inputs.forEach((input) => {
  //       input.value = "";
  //     });

  //     //form.submit();
  //   }
  // });
});

function confirmacionForm() {
  const messageBox = document.getElementById("confirmacion");
  messageBox.classList.add("show");

  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 3000);

  const inputs = document.querySelectorAll(".form-campo");
  inputs.forEach((input) => {
    input.value = "";
  });
}

//EMAIL JS
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "QO9ZhIMlCif8__4mW",
  });
})();

window.onload = function () {
  //ASIGNA FECHA ACTUAL
  let fecha = (document.getElementById("form-hora").value = obtenerFecha());

  document.getElementById("form-contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_32lb7no", "template_b6lx9f9", this).then(
      () => {
        confirmacionForm();
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  });
};

function obtenerFecha() {
  let now = new Date();

  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0"); // getMonth() is 0-indexed
  let day = String(now.getDate()).padStart(2, "0");
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}
