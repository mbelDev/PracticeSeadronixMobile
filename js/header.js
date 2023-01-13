const header = document.querySelector(".header");
const header_m_btn = document.querySelector(".btn_header_m");
const gnb = document.querySelector(".gnb");
const gnb_click = document.querySelectorAll(".gnb__main-menu > li > a");
const header_m_open = document.querySelectorAll(".gnb__main-menu > li");
const header_m_close = document.querySelectorAll(".gnb__sub-menu");
gnb.addEventListener("mouseenter", function () {
  header.classList.add("on");
});
gnb.addEventListener("mouseleave", function () {
  header.classList.remove("on");
});
header_m_btn.addEventListener("click", function () {
  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
});

for (let i = 0; i < gnb_click.length; i++) {
  gnb_click[i].addEventListener("click", function (e) {
    e.preventDefault();
    reset_open();
    header_m_close[i].classList.toggle("open");
  });
}

function reset_open() {
  for (var i = 0; i < header_m_close.length; i++) {
    header_m_close[i].classList.remove("open");
  }
}
