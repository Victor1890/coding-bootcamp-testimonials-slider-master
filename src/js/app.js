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
  let n = -1;
  showSliderAndText(n);
});

btn_next.addEventListener("click", (e) => {
  e.preventDefault();
  let n = 1;
  showSliderAndText((n += 1));
});

const showSliderAndText = (n) => {
  if (n >= 0) {
    window.drawer_1.setAttribute("src", images[0]);
    window.drawer_2.setAttribute("src", images[1]);
  } else {
    window.drawer_1.setAttribute("src", images[n - 1]);
    window.drawer_2.setAttribute("src", images[n - 1]);
  }
};
// "../img/image-john.jpg"
