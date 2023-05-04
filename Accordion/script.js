const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const faqs = [];

let accordianBody = document.querySelector(".accordian_body");
let maindiv = document.createElement("div");
maindiv.className = "main-div";
accordianBody.appendChild(maindiv);

function createFaq() {
  for (let i = 0; i < faqData.length; i++) {
    let que = document.createElement("div");
    que.className = "faq";
    let ans = document.createElement("div");
    ans.className = "answer";

    maindiv.appendChild(que);
    maindiv.appendChild(ans);
    que.innerText = faqData[i].question;
    ans.innerText = faqData[i].answer;

    ans.style.display = "none";

    que.addEventListener("click", function () {
      if (ans.style.display == "none") {
        ans.style.display = "block";
      } else {
        ans.style.display = "none";
      }
    });
  }
}

createFaq();
