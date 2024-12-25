const body = document.querySelector('body')

body.classList.add('js')

let copy = document.querySelector(".section-clients__logo-slide").cloneNode(true)
document.querySelector('.section-clients').appendChild(copy)

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector("nav")
const ul = document.querySelector("nav ul")

hamburguer.addEventListener("click", () => {
  ul.classList.toggle("active")
})

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    ul.classList.remove("active");
  });
});

/* Scroll animation */

const sections = document.querySelectorAll('.js-scroll')
if (sections.length) {

  const windowMetade = window.innerHeight * 0.6
  function scrollAnimation() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade
      if (sectionTop < 0) {
        section.classList.add("ativo")
      }

    })
  }
  scrollAnimation()
  window.addEventListener('scroll', scrollAnimation)
}

const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const serviceButtons = document.querySelectorAll('.section-services__button');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-service-title');
    const description = button.getAttribute('data-service-description');

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    const formData = new FormData(form);  // Coleta os dados do formulário
    const actionUrl = form.action;

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Muito obrigado pelo seu contato, nossa equipe retornará em breve.");  // Alerta de sucesso
        form.reset();  // Limpa o formulário após o envio
      } else {
        alert("Houve um erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao enviar. Verifique sua conexão e tente novamente.");
    }
  });
});







