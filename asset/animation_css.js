console.log("lets start it");
const box = document.querySelector(".box");
// when double click on box make it bigger and smaller
box.addEventListener("dblclick", () => {
  if (box.classList.contains("big")) {
    box.classList.remove("big");
  } else {
    box.classList.add("big");
  }
});
// create 3 random number r, g, b from 0 to 255 and set it as background color when click and hold on box
box.addEventListener("mousedown", () => {
  const intervalId = setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }, 100);

  //store the intervalId in a variable so we can clear it later
  box.intervalId = intervalId;
});

box.addEventListener("mouseup", () => {
  clearInterval(box.intervalId);
});
