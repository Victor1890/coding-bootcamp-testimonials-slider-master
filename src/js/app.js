//Testimonal
const testimonial = document.getElementById("testimonialId");
const user = document.getElementById("userId");
const job = document.getElementById("jobId");

//Botones
const btn_prev = document.getElementById("btn-prev");
const btn_next = document.getElementById("btn-next");

let images = ["../src/img/image-john.jpg", "../src/img/image-john.jpg"];

btn_prev.addEventListener("click", (e) => {
  e.preventDefault();
  let n = 1;
  showSliderAndText((n += 1));
});

btn_next.addEventListener("click", (e) => {
  e.preventDefault();
  let n = 1;
  showSliderAndText((n += 1));
});

const showSliderAndText = (n) => {
  if (n <= images.length || n >= images.length) {
    window.drawer_1.setAttribute("src", images[n]);
    window.drawer_2.setAttribute("src", images[n]);
  } else n = 0;
};
// "../img/image-john.jpg"
