

document.addEventListener("DOMContentLoaded", function () {
 
  document.getElementById("year").textContent = new Date().getFullYear();

  // reviews
  var review = [

    { title: "Jeff: ⭐️⭐️⭐️⭐️⭐️", detail: "The Cookies and Cream latte was delicious!" },
    { title: "Dana: ⭐️⭐️⭐️⭐️⭐️", detail: "I love the cozy atmosphere inside here!" },
    { title: "Ananya:⭐️⭐️⭐️⭐️⭐️", detail: "The service is always amazing. I love the chocolate croissants!" },
    { title: "AU Student:⭐️⭐️⭐️⭐️⭐️", detail: "I love how accessible it is to AU! The location is amazing" },
    { title: "Rishith: ⭐️⭐️⭐️⭐️⭐️", detail: "The coffee here is the best in all of D.C." }
  ];

  // second one 
  var specials = [
    {title: "Pumpkin Spice Latte", detail: "$4.50" },
    {title: "Maple Butter Latte", detail: "$5" },
    {title: "Ginger Lemonade", detail: "$3.50" },
  ]; 
  // putting them into micromodal and having them random

  function showRandomReview() {
    var deal = review[Math.floor(Math.random() * review.length)];
    document.getElementById("review-content").innerHTML =
      "<p><strong>" + deal.title + "</strong></p><p>" + deal.detail + "</p>";
  }

  // micromodal
  MicroModal.init({ disableScroll: true });




  // opens modal
  document.getElementById("reviewBtn").addEventListener("click", function () {
    showRandomReview();
    MicroModal.show("review-modal");
  });


  // gives another deal
  document.getElementById("anotherBtn").addEventListener("click", function () {
    showRandomReview();
  });



  // auto
  if (!sessionStorage.getItem("bb_shown_review")) {
    showRandomReview();
    MicroModal.show("review-modal");
    sessionStorage.setItem("bb_shown_review", "1");
  }









});
