// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple contact form handler (front-end only)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message");

  // Here you would send data to your backend (e.g., via fetch to an API endpoint)
  // For now, just show a confirmation message.
  statusEl.textContent =
    "Thank you, " +
    name +
    ". Your request for " +
    service +
    " has been received. We’ll contact you at " +
    email +
    " shortly.";

  form.reset();
});
