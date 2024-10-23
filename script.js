document.addEventListener("DOMContentLoaded", function () {
  const acceptButton = document.getElementById("accept-btn");
  const termsContainer = document.getElementById("terms-container");
  const siteContent = document.getElementById("site-content");

  acceptButton.addEventListener("click", function () {
    termsContainer.style.display = "none";
    siteContent.style.display = "block";
  });
});
