document.querySelector(".header__bar").addEventListener("click", openNav);
document.querySelector(".header__slider").addEventListener("click", pickSliderItem);

function openNav(e) {
  let item = e.target,
    logo = item.previousElementSibling,
    nav = item.nextElementSibling;
  if (item.classList.contains("header__bar")) {
    item.classList.toggle("header__bar_open");
    item = item.firstElementChild;
  } else {
    item.parentElement.classList.toggle("header__bar_open");
    logo = item.parentElement.previousElementSibling;
    nav = item.parentElement.nextElementSibling;
  }

  logo.classList.toggle("header__logo_open");
  nav.classList.toggle("header__nav_open");
  item.classList.toggle("header__bar-icon_open");
}

function pickSliderItem(e) {
  let item = e.target,
    parent = item.parentElement;

  if (!item.classList.contains("list__item-slider")) {
    return;
  }

  parent.querySelector(".list__item-slider_active").classList.remove("list__item-slider_active");
  item.classList.add("list__item-slider_active");
}