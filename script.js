// JavaScript form validation
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !password || !terms) {
      event.preventDefault();
      alert("Please complete all fields and agree to terms.");
    }
  });

// jQuery for hover effect
$(document).ready(function () {
  $(".btn-custom").hover(
    function () {
      $(this).css("background-color", "#f40612");
    },
    function () {
      $(this).css("background-color", "#e50914");
    }
  );

  // Add feature using jQuery
  $("#add-feature").on("click", function () {
    $(".features-list").append("<li>New Added Feature</li>");
  });
});
