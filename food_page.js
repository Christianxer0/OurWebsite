document.addEventListener("DOMContentLoaded", function () {
  const foodLink = document.getElementById("foodLink");
  const foodSection = document.getElementById("foodSection");

  foodLink.addEventListener("click", function () {
    setTimeout(() => {
      foodSection.classList.add("highlight");

      setTimeout(() => {
        foodSection.classList.remove("highlight");
      }, 1500);
    }, 500);
  });
});
