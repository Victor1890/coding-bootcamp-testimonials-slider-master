//Testimonal
const testimonial = document.getElementById("testimonialId");
const user = document.getElementById("userId");
const job = document.getElementById("jobId");

//Botones
const btn_prev = document.getElementById("btn-prev");
const btn_next = document.getElementById("btn-next");

let images = ["../src/img/image-tanya.jpg", "../src/img/image-john.jpg"];

btn_prev.addEventListener("click", (e) => {
  let n = randomNum();
  showSliderAndText();
});

btn_next.addEventListener("click", (e) => {
  let n = randomNum();
  showSliderAndText();
});

const randomNum = () => {
  return Math.random() * (0 - 1) + 1;
};

const showSliderAndText = () => {
  debugger;
  let n = randomNum();
  if (n > 0.1 && n <= 0.5) {
    window.drawer_1.setAttribute("src", images[1]);
    window.drawer_2.setAttribute("src", images[1]);
  } else {
    window.drawer_1.setAttribute("src", images[0]);
    window.drawer_2.setAttribute("src", images[0]);
  }
};
