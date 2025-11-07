// Configuration for Element SDK
const defaultConfig = {
  site_title: "Ultimate International Sports Hub",
  welcome_message: "Choose Your International Sport",
  ticker_message: "🔴 LIVE: Real-time international sports updates!",
  footer_text: "Your Ultimate Gateway to International Sports"
};

// Initialize variables
let currentSport = '';
let sportsData = [];
let currentRecordCount = 0;
let currentQuiz = 0;
let quizScore = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Function to load site configuration
function loadConfig() {
  document.title = defaultConfig.site_title;
  document.getElementById("welcome-message").textContent = defaultConfig.welcome_message;
  document.getElementById("ticker").textContent = defaultConfig.ticker_message;
  document.getElementById("footer-text").textContent = defaultConfig.footer_text;
}

// Function to select a sport
function selectSport(sport) {
  currentSport = sport;
  document.getElementById("selected-sport").textContent = Selected Sport: ${sport};
  loadLiveScores(sport);
  showPage("sport-page");
}

// Function to show a specific page
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.style.display = "none");
  document.getElementById(pageId).style.display = "block";
}

// Function to load fake live scores (you can replace with API later)
function loadLiveScores(sport) {
  const scoresDiv = document.getElementById("live-scores");
  scoresDiv.innerHTML = <p>Loading ${sport} scores...</p>;

  setTimeout(() => {
    scoresDiv.innerHTML = `
      <h3>${sport} Live Scores</h3>
      <ul>
        <li>${sport} Team A 2 - 1 Team B</li>
        <li>${sport} Team C 3 - 3 Team D</li>
      </ul>
      <button onclick="openMatchChat()">Join Match Chat 💬</button>
    `;
  }, 1000);
}

// Function to open chat
function openMatchChat() {
  showPage("chat-page");
}

// Function to send chat message
function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (msg === "") return;

  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-message";
  msgDiv.textContent = msg;
  chatBox.appendChild(msgDiv);
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Load default config on page load
window.onload = loadConfig;
