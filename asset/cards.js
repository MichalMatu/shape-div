const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");

function toggleActiveClass(element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active");
  });
}

toggleActiveClass(page1);
toggleActiveClass(page2);
toggleActiveClass(page3);

