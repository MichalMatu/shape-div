const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const homeLink = document.querySelector(".home_link");

function toggleActiveClass(element) {
  element.addEventListener("click", function (e) {
    element.classList.toggle("active");

    if (e.target.classList[0] === "page1") {
      homeLink.classList.toggle("show");
    }
  });
}

toggleActiveClass(page1);
toggleActiveClass(page2);
toggleActiveClass(page3);
toggleActiveClass(homeLink);
