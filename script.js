function openNav() {
  document.getElementById("lateral").style.width = "13%";
  document.getElementById("boton-abrir").style.display = "none";
}

function closeNav() {
  document.getElementById("lateral").style.width = "0px";
  document.getElementById("boton-abrir").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".snap-section");
  const navLinks = document.querySelectorAll(".lateral-link");

  const sectionToLink = {};
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    sectionToLink[targetId] = link;
  });

  const scrollContainer = document.querySelector(".scroll-container");

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

  //Form
  const messageButton = document.getElementById("form-boton-enviar");
  const messageBox = document.getElementById("confirmacion");
  const form = document.getElementById("form-contacto");

  messageButton.addEventListener("click", (e) => {
    if (form.checkValidity()) {
      console.log("test");
      messageBox.classList.add("show");

      setTimeout(() => {
        messageBox.classList.remove("show");
      }, 3000);

      const inputs = document.querySelectorAll(".form-campo");
      inputs.forEach((input) => {
        input.value = "";
      });

      form.submit();
    }
  });
});
