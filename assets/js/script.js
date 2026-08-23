document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  statusEl.textContent =
    "Thank you! Your message has been received. We will contact you shortly.";
  form.reset();
});
