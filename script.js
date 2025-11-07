// -------- FanConnect Script --------

// Wait until page loads completely
document.addEventListener("DOMContentLoaded", () => {
  console.log("FanConnect Loaded ✅");

  // Get page sections
  const homePage = document.getElementById("homePage");
  const sportsPage = document.getElementById("sportsPage");
  const matchPage = document.getElementById("matchPage");

  // Get buttons
  const enterBtn = document.getElementById("enterHubBtn");
  const chooseBtn = document.getElementById("chooseSportBtn");
  const backHomeBtn = document.getElementById("backHomeBtn");
  const backSportsBtn = document.getElementById("backSportsBtn");

  // Utility function to show one section and hide others
  function showPage(pageToShow) {
    const allPages = [homePage, sportsPage, matchPage];
    allPages.forEach(page => {
      page.style.display = (page === pageToShow) ? "block" : "none";
    });
  }

  // Start with Home page
  showPage(homePage);

  // When "Enter Sports Hub" is clicked
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      showPage(sportsPage);
    });
  }

  // When "Choose Sport" is clicked
  if (chooseBtn) {
    chooseBtn.addEventListener("click", () => {
      showPage(matchPage);
    });
  }

  // Back buttons
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      showPage(homePage);
    });
  }

  if (backSportsBtn) {
    backSportsBtn.addEventListener("click", () => {
      showPage(sportsPage);
    });
  }

  // Example: handle sport selection
  const sportButtons = document.querySelectorAll(".sport-btn");
  sportButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sport = button.dataset.sport;
      document.getElementById("selectedSport").textContent = sport;
      showPage(matchPage);
    });
  });
});
