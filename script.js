const button = document.getElementById("testButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Success! JavaScript is working.";
  message.classList.add("success");
  button.textContent = "Test passed!";
});
