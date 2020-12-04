//Testimonal
const testimonial = document.getElementById("testimonialId");
const user = document.getElementById("userId");
const job = document.getElementById("jobId");

//Botones
const btn_prev = document.getElementById("btn-prev");
const btn_next = document.getElementById("btn-next");

let images = ["../src/img/image-tanya.jpg", "../src/img/image-john.jpg"];

btn_prev.addEventListener("click", (e) => {
  showSliderAndText();
});

btn_next.addEventListener("click", (e) => {
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

    testimonial.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`;

    user.innerHTML = `John Tarkpor`;
    job.innerHTML = `Junior Front-end Developer`;
  } else {
    window.drawer_1.setAttribute("src", images[0]);
    window.drawer_2.setAttribute("src", images[0]);

    testimonial.innerHTML = `"I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future."`;

    user.innerHTML = `Tanya Sinclair`;
    job.innerHTML = `UX Engineer`;
  }
};
