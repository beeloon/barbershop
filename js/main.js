// Variables
const link = document.querySelector(".login");
const popup = document.querySelector(".modal-content");
const close = popup.querySelector(".modal-content-close");

const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");

const form = popup.querySelector("form");
const storage = localStorage.getItem("login");

const mapOpen = document.querySelector(".js-open-map");
const mapPopup = document.querySelector(".modal-content-map");
const mapClose = mapPopup.querySelector(".modal-content-close");

// Listeners
link.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("modal-content-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("modal-content-show");

  if (popup.classList.contains("modal-error")) {
    popup.classList.add("modal-error");
  }
});

form.addEventListener("submit", function(e) {
  if (!login.value || !password.value) {
    e.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  
  }
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});

// Map
mapOpen.addEventListener("click", function (e) {
  e.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (e) {
  e.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});