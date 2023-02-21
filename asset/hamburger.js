var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});

// select class ball
var ball = document.querySelector('.ball');

// add event listener to ball class and listen for mousemove
ball.addEventListener('mousemove', function(e) {
// move the ball away from the mouse to opposite side as mouse moves
  ball.style.left = e.pageX + 'px';
  ball.style.top = e.pageY + 'px';
});



