// AUTO SAVE CONTACT FORM DATA

const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input");

// 🔹 Load saved data on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("contactFormData");

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    inputs.forEach(input => {
      if (parsedData[input.id]) {
        input.value = parsedData[input.id];
      }
    });
  }
});

// 🔹 Save data on typing
inputs.forEach(input => {
  input.addEventListener("input", () => {
    const formData = {};

    inputs.forEach(field => {
      formData[field.id] = field.value;
    });

    localStorage.setItem("contactFormData", JSON.stringify(formData));
  });
});

// 🔹 Clear data on submit
form.addEventListener("submit", () => {
  localStorage.removeItem("contactFormData");
});