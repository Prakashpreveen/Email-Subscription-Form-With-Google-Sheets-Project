const scriptURL =
  "https://script.google.com/macros/s/AKfycbzjfLxCROqLlbOWYiuNRotLlfPRIU_m5eKLO0SaBtx0tcbZp7cXmh0Hv-KImajORWXf3w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const inputEmail = document.getElementById("input-email");

function handleForSubmit(e) {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        msg.innerHTML = "Thank You for Subscribing!";
        msg.style.color = "green";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 2000);
        form.reset();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      msg.innerHTML = "There was an error. Please try again.";
      msg.style.color = "red";
    });
}

form.addEventListener("submit", handleForSubmit);

inputEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleForSubmit();
  }
});
