const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header__container");
const menuMobile = document.querySelector(".menu__mobile");
const linkMenuMobile = document.querySelectorAll(".menu__mobile li a");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const modalThx = document.querySelector(".modal");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    headerContainer.classList.add("header__container_scroll");
  } else {
    headerContainer.classList.remove("header__container_scroll");
  }
});

const burger = document.querySelector(".header__icon");
burger.addEventListener("click", openMenu);

function openMenu() {
  if (this.classList.contains("header__icon_active")) {
    closeMenu();
  } else {
    burger.classList.add("header__icon_active");
    header.classList.add("header__open");
    headerContainer.classList.add("header__container_border-radius");
    menuMobile.classList.add("menu__mobile_show");
    body.classList.add("body_hidden");
    overlay.classList.add("overlay_show");
  }
}

linkMenuMobile.forEach((link) => link.addEventListener("click", closeMenu));
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  burger.classList.remove("header__icon_active");
  header.classList.remove("header__open");
  headerContainer.classList.remove("header__container_border-radius");
  menuMobile.classList.remove("menu__mobile_show");
  body.classList.remove("body_hidden");
  overlay.classList.remove("overlay_show");
}

// Send message
document.querySelector("#form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    telegram: e.target.telegram.value,
  };

  await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  modalThx.classList.add("modal_show");
  modalThx.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal__overlay") ||
      e.target.tagName === "BUTTON"
    ) {
      modalThx.classList.remove("modal_show");
    }
  });
  e.target.reset();
});