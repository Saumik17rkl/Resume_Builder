document.addEventListener("DOMContentLoaded", function () {
 document.getElementById("subscribeBtn").addEventListener("click", function () {
  let email = document.getElementById("emailInput").value;
  if (email.trim() === "") {
   alert("Please enter a valid email address.");
  } else {
   alert("You have successfully subscribed!");
  }
 });
});
