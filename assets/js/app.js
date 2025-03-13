const headerContainer = document.querySelector(".header__container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    headerContainer.classList.add("header__container_scroll");
  } else {
    headerContainer.classList.remove("header__container_scroll");
  }
});

const burger = document.querySelector(".header__icon");
burger.addEventListener('click', openMenu)

function openMenu() {
  if(this.classList.contains('header__icon_active')) {
    this.classList.remove('header__icon_active')
  } else {
    this.classList.add('header__icon_active')
  }
}