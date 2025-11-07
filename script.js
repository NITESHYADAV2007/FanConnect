/ Configuration for Element SDK
const defaultConfig = {
  site_title: "Ultimate International Sports Hub",
  welcome_message: "Choose Your International Sport",
  ticker_message: "🔴 LIVE: Real-time international sports updates!",
  footer_text: "Your Ultimate Gateway to International Sports"
};

let currentSport = '';

// Element SDK Implementation
async function onConfigChange(config) {
  document.getElementById("site-title").textContent = config.site_title || defaultConfig.site_title;
  document.getElementById("welcome-message").textContent = config.welcome_message || defaultConfig.welcome_message;
  document.getElementById("ticker").textContent = config.ticker_message || defaultConfig.ticker_message;
  document.getElementById("footer-text").textContent = config.footer_text || defaultConfig.footer_text;
  document.title = config.site_title || defaultConfig.site_title;
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["site_title", config.site_title || defaultConfig.site_title],
    ["welcome_message", config.welcome_message || defaultConfig.welcome_message],
    ["ticker_message", config.ticker_message || defaultConfig.ticker_message],
    ["footer_text", config.footer_text || defaultConfig.footer_text]
  ]);
}

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Function to select a sport
function selectSport(sport) {
  currentSport = sport;
  document.getElementById("selected-sport").textContent = sport;
  loadLiveScores(sport);
  showPage("sport-page");
}

// Function to show a specific page
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    page.classList.remove("active");
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  }
}

// Function to load live scores
function loadLiveScores(sport) {
  const scoresDiv = document.getElementById("live-scores");
  scoresDiv.innerHTML = '<div class="loading">Loading ' + sport + ' scores</div>';

  setTimeout(() => {
    const scores = generateScores(sport);
    scoresDiv.innerHTML = '<h3>' + sport + ' Live Scores</h3>';
    
    scores.forEach(score => {
      const scoreItem = document.createElement('div');
      scoreItem.className = 'score-item';
      scoreItem.innerHTML = '<span>' + score.teams + '</span><span><strong>' + score.score + '</strong></span>';
      scoresDiv.appendChild(scoreItem);
    });

    const chatButton = document.createElement('button');
    chatButton.className = 'action-button';
    chatButton.textContent = 'Join Match Chat 💬';
    chatButton.onclick = openMatchChat;
    scoresDiv.appendChild(chatButton);
  }, 1000);
}

// Generate sample scores
function generateScores(sport) {
  const teams = {
    'Football': [
      { teams: 'Brazil vs Argentina', score: '2 - 1' },
      { teams: 'Germany vs France', score: '3 - 3' },
      { teams: 'Spain vs Italy', score: '1 - 0' }
    ],
    'Basketball': [
      { teams: 'Lakers vs Warriors', score: '108 - 102' },
      { teams: 'Celtics vs Heat', score: '95 - 89' },
      { teams: 'Bucks vs Nets', score: '112 - 110' }
    ],
    'Tennis': [
      { teams: 'Djokovic vs Nadal', score: '6-4, 7-5' },
      { teams: 'Federer vs Murray', score: '7-6, 6-3' },
      { teams: 'Alcaraz vs Medvedev', score: '6-2, 6-4' }
    ],
    'Cricket': [
      { teams: 'India vs Australia', score: '287/6 - 245/9' },
      { teams: 'England vs Pakistan', score: '312/8 - 298/10' },
      { teams: 'South Africa vs New Zealand', score: '265/7 - 268/5' }
    ],
    'Rugby': [
      { teams: 'All Blacks vs Springboks', score: '24 - 21' },
      { teams: 'England vs Wales', score: '18 - 15' },
      { teams: 'Ireland vs France', score: '27 - 22' }
    ],
    'Baseball': [
      { teams: 'Yankees vs Red Sox', score: '5 - 3' },
      { teams: 'Dodgers vs Giants', score: '7 - 4' },
      { teams: 'Astros vs Rangers', score: '6 - 6' }
    ]
  };

  return teams[sport] || [
    { teams: 'Team A vs Team B', score: '2 - 1' },
    { teams: 'Team C vs Team D', score: '3 - 3' }
  ];
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

// Handle Enter key in chat
function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  onConfigChange(defaultConfig);
});
