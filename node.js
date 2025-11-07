/ Configuration for Element SDK
const defaultConfig = {
  site_title: "Ultimate International Sports Hub",
  welcome_message: "Choose Your International Sport",
  ticker_message: "🔴 LIVE: Real-time international sports updates!",
  footer_text: "Your Ultimate Gateway to International Sports"
};

let currentSport = '';
let sportsData = [];
let currentRecordCount = 0;
let currentQuiz = 0;
let quizScore = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Latest sports news data
const sportsNews = [
  {
    category: "FOOTBALL",
    headline: "Messi Leads Argentina to Victory in World Cup Qualifier",
    summary: "Lionel Messi scored twice as Argentina defeated Brazil 3-1 in a thrilling World Cup qualifier match at the Maracanã Stadium.",
    time: "2 hours ago",
    source: "FIFA News",
    breaking: true
  },
  {
    category: "BASKETBALL",
    headline: "USA Basketball Team Advances to FIBA World Cup Final",
    summary: "Team USA secured their spot in the FIBA World Cup final with a dominant 98-85 victory over Spain in the semifinals.",
    time: "4 hours ago",
    source: "FIBA Official",
    breaking: false
  },
  {
    category: "TENNIS",
    headline: "Djokovic Wins Record 24th Grand Slam at US Open",
    summary: "Novak Djokovic made history by winning his 24th Grand Slam title, defeating Carlos Alcaraz in straight sets at the US Open final.",
    time: "6 hours ago",
    source: "ATP Tour",
    breaking: true
  },
  {
    category: "CRICKET",
    headline: "India Dominates Australia in Test Championship",
    summary: "India took a commanding lead in the ICC Test Championship with a comprehensive victory over Australia in Melbourne.",
    time: "8 hours ago",
    source: "ICC Cricket",
    breaking: false
  },
  {
    category: "OLYMPICS",
    headline: "Paris 2024 Olympics Sets New Viewership Records",
    summary: "The Paris 2024 Olympics has broken all previous viewership records with over 3.2 billion viewers worldwide tuning in.",
    time: "12 hours ago",
    source: "Olympic News",
    breaking: false
  },
  {
    category: "RUGBY",
    headline: "South Africa Retains Rugby World Cup Title",
    summary: "The Springboks successfully defended their Rugby World Cup title with a thrilling 20-17 victory over New Zealand in the final.",
    time: "1 day ago",
    source: "World Rugby",
    breaking: false
  }
];

// Sports data with international focus
const sportsMatches = {
  football: {
    live: [
      {
        title: "FIFA World Cup Qualifier",
        team1: { name: "Brazil", flag: "🇧🇷", score: 2 },
        team2: { name: "Argentina", flag: "🇦🇷", score: 1 },
        time: "78' - 2nd Half",
        venue: "Maracanã, Rio de Janeiro",
        live: true
      },
      {
        title: "UEFA Champions League",
        team1: { name: "Real Madrid", flag: "🇪🇸", score: 3 },
        team2: { name: "Manchester City", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 2 },
        time: "89' - 2nd Half",
        venue: "Santiago Bernabéu, Madrid",
        live: true
      },
      {
        title: "Copa America",
        team1: { name: "Colombia", flag: "🇨🇴", score: 1 },
        team2: { name: "Uruguay", flag: "🇺🇾", score: 0 },
        time: "HT - Half Time",
        venue: "Estadio Nacional, Lima",
        live: true
      }
    ],
    upcoming: [
      {
        title: "UEFA Nations League",
        team1: { name: "France", flag: "🇫🇷" },
        team2: { name: "Germany", flag: "🇩🇪" },
        time: "Tomorrow 19:45 GMT",
        venue: "Stade de France, Paris",
        countdown: "18h 32m"
      },
      {
        title: "Premier League",
        team1: { name: "Arsenal", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        team2: { name: "Liverpool", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        time: "March 15, 16:30 GMT",
        venue: "Emirates Stadium, London",
        countdown: "2d 14h"
      }
    ]
  },
  cricket: {
    live: [
      {
        title: "ICC Test Championship",
        team1: { name: "India", flag: "🇮🇳", score: "287/6 (78.2)" },
        team2: { name: "Australia", flag: "🇦🇺", score: "245 all out" },
        time: "Day 3 - 2nd Session",
        venue: "Melbourne Cricket Ground",
        live: true
      },
      {
        title: "T20 World Cup",
        team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "156/4 (16.3)" },
        team2: { name: "Pakistan", flag: "🇵🇰", score: "189/8 (20)" },
        time: "Chasing 190 - 34 needed",
        venue: "Lord's Cricket Ground",
        live: true
      }
    ],
    upcoming: [
      {
        title: "ODI World Cup",
        team1: { name: "South Africa", flag: "🇿🇦" },
        team2: { name: "New Zealand", flag: "🇳🇿" },
        time: "Tomorrow 14:30 GMT",
        venue: "Newlands, Cape Town",
        countdown: "22h 15m"
      }
    ]
  },
  basketball: {
    live: [
      {
        title: "FIBA World Cup",
        team1: { name: "USA", flag: "🇺🇸", score: 89 },
        team2: { name: "Spain", flag: "🇪🇸", score: 92 },
        time: "4th Quarter - 2:45",
        venue: "Manila Arena, Philippines",
        live: true
      }
    ],
    upcoming: [
      {
        title: "Olympics Qualifier",
        team1: { name: "France", flag: "🇫🇷" },
        team2: { name: "Germany", flag: "🇩🇪" },
        time: "Tomorrow 18:00 GMT",
        venue: "AccorHotels Arena, Paris",
        countdown: "16h 45m"
      }
    ]
  },
  tennis: {
    live: [
      {
        title: "Wimbledon Final",
        team1: { name: "Novak Djokovic", flag: "🇷🇸", score: "6-4, 4-3" },
        team2: { name: "Carlos Alcaraz", flag: "🇪🇸", score: "4-6, 6-3" },
        time: "2nd Set - Serving",
        venue: "Centre Court, Wimbledon",
        live: true
      }
    ],
    upcoming: [
      {
        title: "US Open Semifinal",
        team1: { name: "Rafael Nadal", flag: "🇪🇸" },
        team2: { name: "Daniil Medvedev", flag: "🇷🇺" },
        time: "Tomorrow 21:00 GMT",
        venue: "Arthur Ashe Stadium, New York",
        countdown: "19h 30m"
      }
    ]
  },
  rugby: {
    live: [
      {
        title: "Rugby World Cup Final",
        team1: { name: "South Africa", flag: "🇿🇦", score: 18 },
        team2: { name: "New Zealand", flag: "🇳🇿", score: 15 },
        time: "68' - 2nd Half",
        venue: "Stade de France, Paris",
        live: true
      }
    ],
    upcoming: [
      {
        title: "Six Nations",
        team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        team2: { name: "Ireland", flag: "🇮🇪" },
        time: "Tomorrow 15:00 GMT",
        venue: "Twickenham, London",
        countdown: "13h 45m"
      }
    ]
  },
  olympics: {
    live: [
      {
        title: "Swimming - Men's 100m Freestyle",
        team1: { name: "Caeleb Dressel", flag: "🇺🇸", score: "47.02" },
        team2: { name: "Adam Peaty", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "47.15" },
        time: "Final - Lane 4 & 5",
        venue: "Paris La Défense Arena",
        live: true
      }
    ],
    upcoming: [
      {
        title: "Basketball - Men's Final",
        team1: { name: "USA", flag: "🇺🇸" },
        team2: { name: "France", flag: "🇫🇷" },
        time: "Tomorrow 20:30 GMT",
        venue: "Pierre Mauroy Stadium",
        countdown: "17h 25m"
      }
    ]
  }
};

// Quiz data for each sport
const sportsQuizzes = {
  football: [
    { question: "How many players are on a football team on the field?", options: ["10", "11", "12", "9"], correct: 1 },
    { question: "Which country won the 2018 FIFA World Cup?", options: ["Brazil", "Germany", "France", "Argentina"], correct: 2 },
    { question: "What is the maximum duration of a football match?", options: ["90 minutes", "120 minutes", "105 minutes", "No limit"], correct: 0 }
  ],
  basketball: [
    { question: "How many players are on a basketball team on the court?", options: ["4", "5", "6", "7"], correct: 1 },
    { question: "Which country has won the most Olympic basketball gold medals?", options: ["Spain", "USA", "Argentina", "Lithuania"], correct: 1 },
    { question: "What is the height of a basketball hoop?", options: ["3 meters", "3.05 meters", "3.2 meters", "2.9 meters"], correct: 1 }
  ],
  cricket: [
    { question: "How many players are in a cricket team?", options: ["10", "11", "12", "9"], correct: 1 },
    { question: "Which country has won the most Cricket World Cups?", options: ["India", "Australia", "England", "West Indies"], correct: 1 },
    { question: "What is the maximum overs in a T20 match per team?", options: ["15", "20", "25", "30"], correct: 1 }
  ],
  tennis: [
    { question: "How many Grand Slam tournaments are there per year?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "Which country has won the most Davis Cup titles?", options: ["Australia", "USA", "France", "Great Britain"], correct: 1 },
    { question: "What is the scoring system in tennis?", options: ["1,2,3,4", "15,30,40,Game", "10,20,30,40", "5,10,15,20"], correct: 1 }
  ],
  rugby: [
    { question: "How many players are on a rugby union team?", options: ["13", "15", "16", "14"], correct: 1 },
    { question: "Which country has won the most Rugby World Cups?", options: ["New Zealand", "South Africa", "Australia", "England"], correct: 0 },
    { question: "How many points is a rugby try worth?", options: ["4", "5", "6", "3"], correct: 1 }
  ],
  olympics: [
    { question: "How often are the Summer Olympics held?", options: ["Every 2 years", "Every 4 years", "Every 3 years", "Every 5 years"], correct: 1 },
    { question: "Which country has won the most Olympic gold medals?", options: ["Russia", "Germany", "USA", "China"], correct: 2 },
    { question: "In which city were the first modern Olympics held?", options: ["Paris", "London", "Athens", "Rome"], correct: 2 }
  ]
};

// International players data
const sportsPlayers = {
  football: [
    { name: "Lionel Messi", position: "Forward", team: "Argentina & Inter Miami", stats: "8× Ballon d'Or, World Cup Winner 2022" },
    { name: "Kylian Mbappé", position: "Forward", team: "France & PSG", stats: "World Cup Winner 2018, Golden Boot 2022" },
    { name: "Erling Haaland", position: "Striker", team: "Norway & Manchester City", stats: "Premier League Golden Boot 2023" }
  ],
  basketball: [
    { name: "Luka Dončić", position: "Point Guard", team: "Slovenia & Dallas Mavericks", stats: "EuroLeague Champion, NBA All-Star" },
    { name: "Giannis Antetokounmpo", position: "Forward", team: "Greece & Milwaukee Bucks", stats: "NBA Champion 2021, 2× MVP" },
    { name: "Nikola Jokić", position: "Center", team: "Serbia & Denver Nuggets", stats: "NBA Champion 2023, 2× MVP" }
  ],
  cricket: [
    { name: "Virat Kohli", position: "Batsman", team: "India & RCB", stats: "Former Captain, 75+ International Centuries" },
    { name: "Babar Azam", position: "Batsman", team: "Pakistan & Peshawar Zalmi", stats: "Current Captain, #1 ODI Batsman" },
    { name: "Steve Smith", position: "Batsman", team: "Australia & Sydney Sixers", stats: "Former Captain, Test Average 60+" }
  ],
  tennis: [
    { name: "Novak Djokovic", position: "Singles", team: "Serbia", stats: "24 Grand Slam Titles, 400+ weeks at #1" },
    { name: "Carlos Alcaraz", position: "Singles", team: "Spain", stats: "4 Grand Slam Titles, Current #1" },
    { name: "Iga Swiatek", position: "Singles", team: "Poland", stats: "5 Grand Slam Titles, Former #1" }
  ],
  rugby: [
    { name: "Antoine Dupont", position: "Scrum-half", team: "France & Toulouse", stats: "World Player of the Year 2021, 2023" },
    { name: "Ardie Savea", position: "Flanker", team: "New Zealand & Hurricanes", stats: "All Blacks Captain, 70+ caps" },
    { name: "Maro Itoje", position: "Lock", team: "England & Saracens", stats: "Lions Captain, Premiership Champion" }
  ],
  olympics: [
    { name: "Caeleb Dressel", position: "Swimming", team: "USA", stats: "5× Olympic Gold Medalist Tokyo 2020" },
    { name: "Elaine Thompson-Herah", position: "Athletics", team: "Jamaica", stats: "5× Olympic Gold, 100m World Record" },
    { name: "Neeraj Chopra", position: "Javelin", team: "India", stats: "Olympic Gold 2020, World Champion 2023" }
  ]
};

// Data SDK handler
const dataHandler = {
  onDataChanged(data) {
    sportsData = data;
    currentRecordCount = data.length;
    updateLiveStats();
  }
};

// Element SDK implementation
async function onConfigChange(config) {
  document.getElementById('siteTitle').textContent = config.site_title || defaultConfig.site_title;
  document.getElementById('welcomeMessage').textContent = config.welcome_message || defaultConfig.welcome_message;
  document.getElementById('tickerMessage').textContent = config.ticker_message || defaultConfig.ticker_message;
  document.getElementById('footerText').innerHTML = © 2025 Ultimate International Sports Hub | ${config.footer_text || defaultConfig.footer_text};
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

// Load news articles
function loadNews() {
  const newsContainer = document.getElementById('newsGrid');
  
  newsContainer.innerHTML = sportsNews.map(article => `
    <div class="news-card" onclick="readNewsArticle('${article.headline}')">
      <div class="news-category">
        ${article.category}
        ${article.breaking ? '<span class="breaking-badge">BREAKING</span>' : ''}
      </div>
      <div class="news-headline">${article.headline}</div>
      <div class="news-summary">${article.summary}</div>
      <div class="news-meta">
        <div class="news-time">
          🕒 ${article.time}
        </div>
        <div class="news-source">${article.source}</div>
      </div>
    </div>
  `).join('');
}

// Read news article (simulate opening article)
async function readNewsArticle(headline) {
  showToast(Reading: ${headline.substring(0, 30)}...);
  await saveUserInteraction('news_read', headline.substring(0, 50));
}

// Refresh news
async function refreshNews() {
  const button = event.target;
  const originalText = button.innerHTML;
  
  button.innerHTML = '<span class="loading"></span> Refreshing News...';
  button.disabled = true;
  
  // Simulate API call delay
  setTimeout(() => {
    // Shuffle news articles to simulate new content
    sportsNews.sort(() => Math.random() - 0.5);
    
    // Update some timestamps
    sportsNews.forEach((article, index) => {
      if (index < 2) {
        const hours = Math.floor(Math.random() * 3) + 1;
        article.time = ${hours} hour${hours > 1 ? 's' : ''} ago;
      }
    });
    
    loadNews();
    button.innerHTML = originalText;
    button.disabled = false;
    showToast('Latest news updated! 📰');
  }, 1500);
  
  await saveUserInteraction('news_refreshed', 'User refreshed sports news');
}

// Initialize SDKs
async function initializeApp() {
  try {
    if (window.elementSdk) {
      await window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }

    if (window.dataSdk) {
      const initResult = await window.dataSdk.init(dataHandler);
      if (!initResult.isOk) {
        console.error("Failed to initialize data SDK");
      }
    }

    loadNews();
    initializeGame();
    startLiveUpdates();
  } catch (error) {
    console.error("Failed to initialize SDKs:", error);
  }
}

// Select sport and navigate to detail page
async function selectSport(sport, icon, competitions) {
  currentSport = sport;
  
  // Update sport detail page
  document.getElementById('sportIcon').textContent = icon;
  document.getElementById('sportName').textContent = sport.charAt(0).toUpperCase() + sport.slice(1);
  document.getElementById('sportCompetitions').textContent = competitions;
  
  // Hide home page and show sport detail page
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('sportDetailPage').style.display = 'block';
  
  // Load initial data
  loadLiveMatches();
  loadUpcomingMatches();
  initializeQuiz();
  loadPlayerInfo();
  loadPlayerRatings();
  
  // Save user interaction
  await saveUserInteraction('sport_selected', sport);
  
  showToast(Welcome to ${sport.charAt(0).toUpperCase() + sport.slice(1)} International Hub! 🌍);
}

// Go back to home page
function goBackHome() {
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('sportDetailPage').style.display = 'none';
  currentSport = '';
}

// Switch between tabs
function switchTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(tab + 'Tab').classList.add('active');
  
  // Load content based on tab
  switch(tab) {
    case 'live':
      loadLiveMatches();
      break;
    case 'upcoming':
      loadUpcomingMatches();
      break;
    case 'quiz':
      initializeQuiz();
      break;
    case 'players':
      loadPlayerInfo();
      break;
    case 'ratings':
      loadPlayerRatings();
      break;
    case 'game':
      resetGame();
      break;
  }
}

// Load live matches
function loadLiveMatches() {
  const matches = sportsMatches[currentSport]?.live || [];
  const container = document.getElementById('liveMatches');
  
  if (matches.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:40px; color:#666;">No live matches at the moment. Check back soon!</div>';
    return;
  }
  
  container.innerHTML = matches.map(match => `
    <div class="match-card ${match.live ? 'live' : ''}">
      <div class="match-header">
        <div class="match-title">${match.title}</div>
        ${match.live ? '<div class="live-badge">LIVE</div>' : ''}
      </div>
      <div class="match-teams">
        <div class="team">
          <span class="team-flag">${match.team1.flag}</span>
          <span class="team-name">${match.team1.name}</span>
        </div>
        <div class="match-score">${match.team1.score} - ${match.team2.score}</div>
        <div class="team">
          <span class="team-name">${match.team2.name}</span>
          <span class="team-flag">${match.team2.flag}</span>
        </div>
      </div>
      <div class="match-info">
        <div class="match-time">${match.time}</div>
        <div class="match-venue">${match.venue}</div>
      </div>
    </div>
  `).join('');
}

// Load upcoming matches
function loadUpcomingMatches() {
  const matches = sportsMatches[currentSport]?.upcoming || [];
  const container = document.getElementById('upcomingMatches');
  
  if (matches.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:40px; color:#666;">No upcoming matches scheduled. Check back later!</div>';
    return;
  }
  
  container.innerHTML = matches.map(match => `
    <div class="match-card upcoming-match">
      <div class="match-header">
        <div class="match-title">${match.title}</div>
        <div class="countdown">${match.countdown}</div>
      </div>
      <div class="match-teams">
        <div class="team">
          <span class="team-flag">${match.team1.flag}</span>
          <span class="team-name">${match.team1.name}</span>
        </div>
        <div style="font-size:24px; color:#666;">VS</div>
        <div class="team">
          <span class="team-name">${match.team2.name}</span>
          <span class="team-flag">${match.team2.flag}</span>
        </div>
      </div>
      <div class="match-info">
        <div class="match-time">${match.time}</div>
        <div class="match-venue">${match.venue}</div>
      </div>
    </div>
  `).join('');
}

// Quiz functionality
function initializeQuiz() {
  currentQuiz = 0;
  quizScore = 0;
  loadQuestion();
}

function loadQuestion() {
  const quiz = sportsQuizzes[currentSport];
  if (!quiz || currentQuiz >= quiz.length) {
    showQuizResults();
    return;
  }

  const question = quiz[currentQuiz];
  document.getElementById('questionText').textContent = question.question;
  
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'quiz-option';
    optionDiv.textContent = option;
    optionDiv.onclick = () => selectQuizOption(index, optionDiv);
    optionsContainer.appendChild(optionDiv);
  });

  document.getElementById('nextQuestionBtn').style.display = 'none';
}

function selectQuizOption(selectedIndex, element) {
  const quiz = sportsQuizzes[currentSport];
  const question = quiz[currentQuiz];
  
  // Remove previous selections
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.classList.remove('selected');
    opt.style.pointerEvents = 'none';
  });
  
  element.classList.add('selected');
  
  if (selectedIndex === question.correct) {
    quizScore++;
    element.style.background = '#4CAF50';
    element.style.color = 'white';
    showToast('Correct! 🎉');
  } else {
    element.style.background = '#f44336';
    element.style.color = 'white';
    // Show correct answer
    document.querySelectorAll('.quiz-option')[question.correct].style.background = '#4CAF50';
    document.querySelectorAll('.quiz-option')[question.correct].style.color = 'white';
    showToast('Incorrect! The correct answer is highlighted.', 'error');
  }
  
  document.getElementById('nextQuestionBtn').style.display = 'block';
}

function nextQuestion() {
  currentQuiz++;
  loadQuestion();
}

function showQuizResults() {
  const quiz = sportsQuizzes[currentSport];
  const percentage = Math.round((quizScore / quiz.length) * 100);
  
  document.getElementById('quizContent').innerHTML = `
    <div style="text-align:center; padding:30px;">
      <h3>🏆 Quiz Complete!</h3>
      <div style="font-size:48px; margin:20px 0;">${percentage >= 70 ? '🎉' : '📚'}</div>
      <p style="font-size:24px; color:#1e3c72;">You scored ${quizScore} out of ${quiz.length}</p>
      <p style="font-size:18px; color:#666;">${percentage}% - ${percentage >= 70 ? 'Excellent international sports knowledge!' : 'Keep studying international sports!'}</p>
      <button onclick="initializeQuiz()" style="background:#1e3c72; color:white; border:none; padding:15px 30px; border-radius:8px; cursor:pointer; margin-top:20px;">Try Again</button>
    </div>
  `;
  
  saveUserInteraction('quiz_completed', ${currentSport}: ${quizScore}/${quiz.length});
}

// Chat functionality
function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (message) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
    
    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Save chat message
    saveUserInteraction('chat_message', ${currentSport}: ${message.substring(0, 50)});
    
    // Simulate response
    setTimeout(() => {
      const responseDiv = document.createElement('div');
      responseDiv.className = 'chat-message';
      responseDiv.textContent = getRandomResponse();
      chatContainer.appendChild(responseDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
  }
}

function getRandomResponse() {
  const responses = [
    That's a great point about international ${currentSport}!,
    I totally agree! ${currentSport} competitions are amazing!,
    "The international level is so competitive!",
    "Thanks for sharing your thoughts on the global scene!",
    The international ${currentSport} community is so passionate!,
    "Which country do you support?",
    "Did you see the latest international match?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Game functionality
function initializeGame() {
  const gameBoardElement = document.getElementById('gameBoard');
  gameBoardElement.innerHTML = '';
  
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'game-cell';
    cell.onclick = () => makeMove(i, cell);
    gameBoardElement.appendChild(cell);
  }
}

function makeMove(index, cell) {
  if (gameBoard[index] === '' && gameActive && currentPlayer === 'X') {
    gameBoard[index] = 'X';
    cell.textContent = 'X';
    cell.classList.add('x');
    cell.style.pointerEvents = 'none';
    
    if (checkWinner()) {
      document.getElementById('gameStatus').textContent = '🎉 You Win!';
      gameActive = false;
      showToast('Congratulations! You won! 🎉');
      saveUserInteraction('game_won', currentSport);
      return;
    }
    
    if (gameBoard.every(cell => cell !== '')) {
      document.getElementById('gameStatus').textContent = '🤝 It\'s a Tie!';
      gameActive = false;
      return;
    }
    
    currentPlayer = 'O';
    
    // Computer move
    setTimeout(() => {
      makeComputerMove();
    }, 500);
  }
}

function makeComputerMove() {
  const emptyCells = gameBoard.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
  
  if (emptyCells.length > 0 && gameActive) {
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    gameBoard[randomIndex] = 'O';
    
    const cells = document.querySelectorAll('.game-cell');
    cells[randomIndex].textContent = 'O';
    cells[randomIndex].classList.add('o');
    cells[randomIndex].style.pointerEvents = 'none';
    
    if (checkWinner()) {
      document.getElementById('gameStatus').textContent = '🤖 Computer Wins!';
      gameActive = false;
      showToast('Computer wins this time! Try again!', 'error');
      return;
    }
    
    if (gameBoard.every(cell => cell !== '')) {
      document.getElementById('gameStatus').textContent = '🤝 It\'s a Tie!';
      gameActive = false;
      return;
    }
    
    currentPlayer = 'X';
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('gameStatus').textContent = '';
  initializeGame();
}

// Player info functionality
function loadPlayerInfo() {
  const players = sportsPlayers[currentSport] || [];
  const container = document.getElementById('playersContainer');
  
  container.innerHTML = players.map(player => `
    <div class="player-card">
      <div class="player-info">
        <h4>${player.name}</h4>
        <div class="player-stats">
          <strong>Position:</strong> ${player.position}<br>
          <strong>Team:</strong> ${player.team}<br>
          <strong>Achievements:</strong> ${player.stats}
        </div>
      </div>
    </div>
  `).join('');
}

// Player rating functionality
function loadPlayerRatings() {
  const players = sportsPlayers[currentSport] || [];
  const container = document.getElementById('ratingContainer');
  
  container.innerHTML = players.map((player, index) => `
    <div class="player-card">
      <div class="player-info">
        <h4>${player.name}</h4>
        <div class="player-stats">${player.position} - ${player.team}</div>
      </div>
      <div class="rating-container">
        ${[1,2,3,4,5].map(star => `
          <span class="star" onclick="ratePlayer(${index}, ${star})" data-rating="${star}">⭐</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function ratePlayer(playerIndex, rating) {
  const playerCard = document.querySelectorAll('#ratingContainer .player-card')[playerIndex];
  const stars = playerCard.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
  
  const playerName = sportsPlayers[currentSport][playerIndex].name;
  showToast(You rated ${playerName} ${rating} star${rating > 1 ? 's' : ''}! ⭐);
  saveUserInteraction('player_rated', ${playerName}: ${rating} stars);
}

// Refresh live scores
async function refreshLiveScores() {
  const button = event.target;
  const originalText = button.innerHTML;
  
  button.innerHTML = '<span class="loading"></span> Refreshing...';
  button.disabled = true;
  
  // Simulate API call delay
  setTimeout(() => {
    // Update some scores randomly
    const matches = sportsMatches[currentSport]?.live || [];
    matches.forEach(match => {
      if (match.live && Math.random() > 0.6) {
        if (typeof match.team1.score === 'number') {
          match.team1.score += Math.random() > 0.5 ? 1 : 0;
          match.team2.score += Math.random() > 0.5 ? 1 : 0;
        }
      }
    });
    
    loadLiveMatches();
    button.innerHTML = originalText;
    button.disabled = false;
    showToast('Live scores updated! 🔄');
  }, 1500);
  
  await saveUserInteraction('refresh_live_scores', currentSport);
}

// Refresh upcoming matches
async function refreshUpcomingMatches() {
  const button = event.target;
  const originalText = button.innerHTML;
  
  button.innerHTML = '<span class="loading"></span> Refreshing...';
  button.disabled = true;
  
  // Simulate API call delay
  setTimeout(() => {
    loadUpcomingMatches();
    button.innerHTML = originalText;
    button.disabled = false;
    showToast('Schedule updated! 📅');
  }, 1200);
  
  await saveUserInteraction('refresh_upcoming', currentSport);
}

// Update live stats
function updateLiveStats() {
  const baseUsers = 2847;
  const variation = Math.floor(Math.random() * 200) - 100;
  document.getElementById('onlineUsers').textContent = (baseUsers + variation + currentRecordCount * 2).toLocaleString();
  
  document.getElementById('chatMessages').textContent = (45892 + currentRecordCount * 5).toLocaleString();
  document.getElementById('activeUsers').textContent = Math.max(456, Math.floor(currentRecordCount * 2.5));
  
  // Update live games count
  const liveGamesBase = 24;
  document.getElementById('liveGames').textContent = liveGamesBase + Math.floor(Math.random() * 6);
}

// Start live updates
function startLiveUpdates() {
  // Update stats every 8 seconds
  setInterval(() => {
    updateLiveStats();
  }, 8000);
}

// Save user interaction
async function saveUserInteraction(action, details) {
  if (currentRecordCount >= 999) {
    showToast('Maximum data limit reached', 'error');
    return;
  }

  if (window.dataSdk) {
    const userData = {
      user_name: "International Sports Fan",
      selected_sport: currentSport,
      quiz_scores: action === 'quiz_completed' ? details : "",
      player_ratings: action === 'player_rated' ? details : "",
      chat_messages: action === 'chat_message' ? details : "",
      viewed_matches: action.includes('refresh') ? Refreshed ${currentSport} matches : "",
      favorite_teams: "",
      live_activity: ${action} - ${details},
      created_at: new Date().toISOString()
    };

    const result = await window.dataSdk.create(userData);
    if (!result.isOk) {
      console.error("Failed to save user interaction");
    }
  }
}

// Show toast notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = toast ${type};
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Enter site functionality
let userName = '';

function enterSite() {
  const nameInput = document.getElementById('userNameInput');
  const enteredName = nameInput.value.trim();
  
  if (enteredName.length < 2) {
    showToast('Please enter a valid name (at least 2 characters)', 'error');
    nameInput.focus();
    return;
  }
  
  if (enteredName.length > 30) {
    showToast('Name is too long (maximum 30 characters)', 'error');
    nameInput.focus();
    return;
  }
  
  userName = enteredName;
  
  // Disable button and show loading
  const enterBtn = document.getElementById('enterSiteBtn');
  enterBtn.disabled = true;
  enterBtn.innerHTML = '<span class="loading"></span> Entering Sports Hub...';
  
  // Animate transition
  setTimeout(() => {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    
    // Personalize welcome message
    const personalizedMsg = document.getElementById('personalizedWelcome');
    personalizedMsg.textContent = Welcome ${userName}! Stay updated with the latest sports news and experience live scores, interactive features, quizzes, chats, games, and international competitions from around the world;
    
    // Update chat welcome message
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
      const welcomeMsg = chatContainer.querySelector('.chat-message');
      if (welcomeMsg) {
        welcomeMsg.textContent = 🔴 Welcome ${userName} to the international sports chat! Discuss live matches and share your thoughts!;
      }
    }
    
    showToast(Welcome to the Sports Hub, ${userName}! 🎉);
    
    // Save user entry
    saveUserInteraction('user_entered', Name: ${userName});
    
    // Reset button
    enterBtn.disabled = false;
    enterBtn.innerHTML = '<span class="button-text">Enter Sports Hub</span><span class="button-icon">🚀</span>';
  }, 1500);
}

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  
  // Add enter key support for name input
  document.getElementById('userNameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enterSite();
  });
  
  // Add enter key support for chat
  document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
});
