// Global State Variables
let userName = '';
let currentSport = null;
let currentTab = 'live';

// Quiz state
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

// Game state (Tic-Tac-Toe)
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
let currentPlayer = 'X'; // User is X, Computer is O

// --- Utility Functions ---

/**
 * Displays a toast notification.
 * @param {string} message - The message to display.
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

/**
 * Simulates fetching and updating a dynamic stat number.
 * @param {string} elementId - The ID of the element to update.
 * @param {number} min - Minimum value for the random number.
 * @param {number} max - Maximum value for the random number.
 */
function updateStat(elementId, min, max) {
    const element = document.getElementById(elementId);
    if (element) {
        // Generate a random number within the range, formatted with commas
        const newValue = Math.floor(Math.random() * (max - min + 1)) + min;
        element.textContent = newValue.toLocaleString();
    }
}

/**
 * Simulates refreshing all dynamic stats.
 */
function refreshStats() {
    updateStat('onlineUsers', 2500, 3500);
    updateStat('liveGames', 20, 30);
    updateStat('chatMessages', 45000, 55000);
    updateStat('activeUsers', 400, 500);
}

// --- Welcome & Navigation Functions ---

/**
 * Handles the user entering the site, setting the username and switching views.
 */
function enterSite() {
    const input = document.getElementById('userNameInput');
    userName = input.value.trim();

    if (userName.length < 2) {
        showToast('Please enter a name with at least 2 characters.');
        return;
    }

    // Update site title with user name
    document.getElementById('siteTitle').textContent = FanConnect | ${userName};

    // Hide welcome page and show home page
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';

    // Personalize welcome message
    document.getElementById('welcomeMessage').textContent = Hi ${userName}, Choose Your International Sport!;
    document.getElementById('personalizedWelcome').textContent = 'Stay updated with the latest sports news and experience live scores, interactive features, quizzes, chats, games, and international competitions from around the world.';

    // Fetch and display initial news
    refreshNews();

    showToast(Welcome to FanConnect, ${userName}! Select a sport to begin.);
}

/**
 * Switches back from the sport detail page to the home page.
 */
function goBackHome() {
    document.getElementById('sportDetailPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    currentSport = null;
    currentTab = 'live'; // Reset to default tab
    document.getElementById('siteTitle').textContent = FanConnect | ${userName};
    showToast('Back to the main sports selection.');
}

// --- Home Page (Sport Selection) ---

/**
 * Handles the selection of a sport, updates the detail page, and switches views.
 * @param {string} sport - The internal sport key (e.g., 'football').
 * @param {string} icon - The sport's emoji icon.
 * @param {string} competitions - A list of key competitions for the sport.
 */
function selectSport(sport, icon, competitions) {
    currentSport = sport;
    const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);

    // Update Header
    document.getElementById('sportIcon').textContent = icon;
    document.getElementById('sportName').textContent = sportName;
    document.getElementById('sportCompetitions').textContent = Key Competitions: ${competitions};
    document.getElementById('siteTitle').textContent = FanConnect | ${sportName} Hub;

    // Switch views
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('sportDetailPage').style.display = 'block';

    // Initialize content for the selected sport
    switchTab(currentTab);
    loadSportContent(sport);

    showToast(You selected ${sportName}!);
}

/**
 * Loads dynamic content specific to the selected sport.
 * @param {string} sport - The internal sport key.
 */
function loadSportContent(sport) {
    // 1. Live Scores & Upcoming Matches
    refreshLiveScores();
    refreshUpcomingMatches();

    // 2. Quiz Setup
    loadQuizData(sport);

    // 3. Game Setup (Tic-Tac-Toe board)
    createGameBoard();
    resetGame();

    // 4. Players and Ratings (Simulated)
    loadPlayers(sport);
    loadRatings(sport);
}

// --- News Section ---

/**
 * Simulates fetching and rendering news articles.
 */
function refreshNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    newsGrid.innerHTML = ''; // Clear existing news

    const mockNews = [
        { title: "Messi's stunning goal seals crucial win for Argentina", tag: "FOOTBALL", color: "#4CAF50" },
        { title: "India beats Australia in thrilling Test Championship match", tag: "CRICKET", color: "#FF9800" },
        { title: "Lakers dominate in season opener, Lebron scores 40", tag: "BASKETBALL", color: "#2196F3" },
        { title: "Djokovic claims 25th Grand Slam title after epic final", tag: "TENNIS", color: "#E91E63" },
        { title: "Springboks lift Rugby World Cup trophy in dramatic fashion", tag: "RUGBY", color: "#00BCD4" },
    ];

    mockNews.forEach(news => {
        const article = document.createElement('div');
        article.className = 'news-article';
        article.innerHTML = `
            <div class="news-tag" style="background-color: ${news.color};">${news.tag}</div>
            <h4 class="news-headline">${news.title}</h4>
            <p class="news-time">5 minutes ago | Global Sports Desk</p>
        `;
        newsGrid.appendChild(article);
    });

    showToast('Latest sports headlines updated!');
}

// --- Sport Detail Tabs ---

/**
 * Switches between the interactive tabs (Live, Upcoming, Quiz, etc.).
 * @param {string} tabId - The ID of the tab content to show (e.g., 'live', 'quiz').
 */
function switchTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(${tabId}Tab);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Activate the corresponding button
    const activeButton = document.querySelector(.tab-button[onclick*="'${tabId}'"]);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    currentTab = tabId;
}

// --- Live Scores Tab ---

/**
 * Simulates fetching and displaying live match scores.
 */
function refreshLiveScores() {
    const matchesContainer = document.getElementById('liveMatches');
    if (!matchesContainer || !currentSport) return;

    matchesContainer.innerHTML = ''; // Clear existing

    const mockMatches = getMockMatches(currentSport, 'live');

    if (mockMatches.length === 0) {
        matchesContainer.innerHTML = <p class="no-content">No live ${currentSport} matches currently. Check the upcoming schedule!</p>;
        return;
    }

    mockMatches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card live';
        matchCard.innerHTML = `
            <div class="match-info">
                <span class="match-competition">${match.competition}</span>
                <span class="live-status">🔴 LIVE</span>
            </div>
            <div class="match-teams">
                <div class="team-name">${match.teamA}</div>
                <div class="team-score">${match.scoreA}</div>
            </div>
            <div class="match-teams">
                <div class="team-name">${match.teamB}</div>
                <div class="team-score">${match.scoreB}</div>
            </div>
            <div class="match-status">${match.status}</div>
        `;
        matchesContainer.appendChild(matchCard);
    });

    showToast(${mockMatches.length} live matches updated for ${currentSport}!);
}

// --- Upcoming Matches Tab ---

/**
 * Simulates fetching and displaying upcoming matches.
 */
function refreshUpcomingMatches() {
    const matchesContainer = document.getElementById('upcomingMatches');
    if (!matchesContainer || !currentSport) return;

    matchesContainer.innerHTML = ''; // Clear existing

    const mockMatches = getMockMatches(currentSport, 'upcoming');

    if (mockMatches.length === 0) {
        matchesContainer.innerHTML = <p class="no-content">No upcoming ${currentSport} matches scheduled right now.</p>;
        return;
    }

    mockMatches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card upcoming';
        matchCard.innerHTML = `
            <div class="match-info">
                <span class="match-competition">${match.competition}</span>
                <span class="match-date">${match.date}</span>
            </div>
            <div class="match-teams">
                <div class="team-name">${match.teamA}</div>
                <div class="team-vs">vs</div>
                <div class="team-name">${match.teamB}</div>
            </div>
            <div class="match-status">${match.status}</div>
        `;
        matchesContainer.appendChild(matchCard);
    });

    showToast(Upcoming schedule for ${currentSport} updated!);
}

/**
 * Helper function to generate mock match data.
 * @param {string} sport - The selected sport.
 * @param {string} type - 'live' or 'upcoming'.
 * @returns {Array} - An array of mock match objects.
 */
function getMockMatches(sport, type) {
    const now = new Date();
    const futureDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US'); // 7 days from now

    const liveScores = {
        football: [
            { teamA: 'Brazil', scoreA: '2', teamB: 'Argentina', scoreB: '1', competition: 'WC Qualifier', status: '75th Min' },
            { teamA: 'Man City', scoreA: '3', teamB: 'Liverpool', scoreB: '2', competition: 'Premier League', status: 'Half Time' },
        ],
        cricket: [
            { teamA: 'India', scoreA: '287/6', teamB: 'Australia', scoreB: '245', competition: 'Test Championship', status: 'Day 3 Stumps' },
        ],
        basketball: [
            { teamA: 'USA', scoreA: '89', teamB: 'Spain', scoreB: '92', competition: 'FIBA World Cup', status: '4th Qtr' },
        ],
        tennis: [
            { teamA: 'Djokovic', scoreA: '6-4, 4-3', teamB: 'Alcaraz', scoreB: '4-6, 3-4', competition: 'Wimbledon Final', status: 'Set 3' },
        ],
        rugby: [
            { teamA: 'South Africa', scoreA: '18', teamB: 'New Zealand', scoreB: '15', competition: 'RWC Final', status: '78th Min' },
        ],
        olympics: [
            { teamA: 'Dressel', scoreA: '0:51.23', teamB: 'Peaty', scoreB: '0:51.35', competition: 'Swimming 100m', status: 'Race in Progress' },
        ],
    };

    const upcomingMatches = {
        football: [
            { teamA: 'Germany', teamB: 'France', competition: 'Nations League', status: 'Next Week', date: futureDate },
            { teamA: 'Real Madrid', teamB: 'Barcelona', competition: 'El Clasico', status: '2 Weeks', date: futureDate },
        ],
        cricket: [
            { teamA: 'England', teamB: 'South Africa', competition: 'T20 Series', status: 'Tomorrow', date: futureDate },
        ],
        basketball: [
            { teamA: 'Boston Celtics', teamB: 'LA Lakers', competition: 'NBA', status: 'Tonight', date: futureDate },
        ],
        tennis: [
            { teamA: 'Nadal', teamB: 'Medvedev', competition: 'ATP Masters', status: 'Tomorrow', date: futureDate },
        ],
        rugby: [
            { teamA: 'Ireland', teamB: 'England', competition: 'Six Nations', status: 'Next Month', date: futureDate },
        ],
        olympics: [
            { teamA: 'Japan', teamB: 'China', competition: 'Gymnastics Final', status: '2 Days', date: futureDate },
        ],
    };

    return type === 'live' ? liveScores[sport] || [] : upcomingMatches[sport] || [];
}

// --- Quiz Tab ---

/**
 * Loads mock quiz data based on the selected sport.
 * @param {string} sport - The selected sport.
 */
function loadQuizData(sport) {
    const allQuizData = {
        football: [
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Brazil", "Germany", "Italy", "Argentina"],
                answer: "Brazil"
            },
            {
                question: "Which club won the UEFA Champions League in the 2022/2023 season?",
                options: ["Real Madrid", "Man City", "Bayern Munich", "Liverpool"],
                answer: "Man City"
            },
        ],
        cricket: [
            {
                question: "What is the name of the prestigious Test cricket series played between England and Australia?",
                options: ["The World Series", "The Ashes", "The Border-Gavaskar Trophy", "The World Cup"],
                answer: "The Ashes"
            },
        ],
        // Add more quiz data for other sports
    };

    quizData = allQuizData[sport] || [];
    currentQuestionIndex = 0;
    score = 0;
    renderQuiz();
}

/**
 * Renders the current quiz question and options.
 */
function renderQuiz() {
    const questionTextElement = document.getElementById('questionText');
    const optionsContainer = document.getElementById('quizOptions');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const quizScoreElement = document.getElementById('quizScore');

    if (currentQuestionIndex >= quizData.length) {
        // Quiz finished
        questionTextElement.textContent = "Quiz Complete!";
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';
        quizScoreElement.innerHTML = Your Final Score: ${score} out of ${quizData.length};
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    quizScoreElement.textContent = Score: ${score} / ${quizData.length};

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

/**
 * Checks the selected quiz answer.
 * @param {string} selectedOption - The option text selected by the user.
 * @param {HTMLElement} button - The button element that was clicked.
 */
function checkAnswer(selectedOption, button) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    const allOptions = document.querySelectorAll('.quiz-option-btn');

    // Disable all options after selection
    allOptions.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add('correct');
        } else if (btn === button) {
            btn.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
        showToast('Correct Answer! 🎉');
    } else {
        showToast(Wrong Answer. The correct answer was: ${currentQuestion.answer});
    }

    // Update score display and show next button
    document.getElementById('quizScore').textContent = Score: ${score} / ${quizData.length};
    document.getElementById('nextQuestionBtn').style.display = 'block';
}

/**
 * Moves to the next quiz question.
 */
function nextQuestion() {
    currentQuestionIndex++;
    renderQuiz();
}

// --- Chat Tab ---

/**
 * Sends a simulated chat message.
 */
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatContainer = document.getElementById('chatContainer');
    const messageText = chatInput.value.trim();

    if (messageText === '') return;

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message user-message';
    messageElement.textContent = ${userName}: ${messageText};

    // Append to the container and scroll to bottom
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Clear input
    chatInput.value = '';

    // Simulate a delayed response from a 'Bot'
    setTimeout(() => {
        const botResponse = document.createElement('div');
        botResponse.className = 'chat-message bot-message';
        botResponse.textContent = FanConnect_Bot: That's a great point, ${userName}! The game is certainly heating up.;
        chatContainer.appendChild(botResponse);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1500);
}

// --- Game Tab (Tic-Tac-Toe) ---

/**
 * Creates the Tic-Tac-Toe game board elements dynamically.
 */
function createGameBoard() {
    const boardContainer = document.getElementById('gameBoard');
    if (!boardContainer.hasChildNodes()) {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'game-cell';
            cell.dataset.index = i;
            cell.onclick = () => handleCellClick(i);
            boardContainer.appendChild(cell);
        }
    }
}

/**
 * Resets the Tic-Tac-Toe game state.
 */
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    document.getElementById('gameStatus').textContent = Your Turn (X);
    document.querySelectorAll('.game-cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('win-cell');
    });
    showToast('Tic-Tac-Toe game reset!');
}

/**
 * Handles a user's move (cell click).
 * @param {number} index - The index of the clicked cell.
 */
function handleCellClick(index) {
    if (gameBoard[index] !== '' || !isGameActive || currentPlayer === 'O') {
        return; // Cell already occupied or not user's turn
    }

    makeMove(index, 'X');
    
    // Check for win/draw after user move
    if (checkWin('X')) {
        endGame('X wins!');
        return;
    }
    if (gameBoard.every(cell => cell !== '')) {
        endGame('Draw!');
        return;
    }

    // Computer's turn
    currentPlayer = 'O';
    document.getElementById('gameStatus').textContent = Computer's Turn (O);
    setTimeout(computerMove, 1000);
}

/**
 * Applies a move to the board and updates the display.
 * @param {number} index - The index for the move.
 * @param {string} player - 'X' or 'O'.
 */
function makeMove(index, player) {
    gameBoard[index] = player;
    document.querySelector(.game-cell[data-index="${index}"]).textContent = player;
}

/**
 * Simulates the computer's move (basic random strategy).
 */
function computerMove() {
    if (!isGameActive) return;

    let availableIndices = gameBoard.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);

    if (availableIndices.length > 0) {
        // Simple strategy: pick a random empty cell
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const moveIndex = availableIndices[randomIndex];

        makeMove(moveIndex, 'O');

        // Check for win/draw after computer move
        if (checkWin('O')) {
            endGame('Computer (O) wins!');
            return;
        }
        if (gameBoard.every(cell => cell !== '')) {
            endGame('Draw!');
            return;
        }

        // Switch back to user's turn
        currentPlayer = 'X';
        document.getElementById('gameStatus').textContent = Your Turn (X);
    }
}

/**
 * Checks for a win condition.
 * @param {string} player - 'X' or 'O'.
 * @returns {boolean} - True if the player has won.
 */
function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player) {
            // Highlight winning cells
            combination.forEach(index => {
                document.querySelector(.game-cell[data-index="${index}"]).classList.add('win-cell');
            });
            return true;
        }
    }
    return false;
}

/**
 * Ends the game and displays the result.
 * @param {string} message - The message to display (win/loss/draw).
 */
function endGame(message) {
    isGameActive = false;
    document.getElementById('gameStatus').textContent = Game Over: ${message};
    showToast(Game Over: ${message});
}

// --- Players and Ratings Tabs ---

/**
 * Simulates fetching and displaying player cards.
 * @param {string} sport - The selected sport.
 */
function loadPlayers(sport) {
    const playersContainer = document.getElementById('playersContainer');
    if (!playersContainer) return;

    playersContainer.innerHTML = '';

    const mockPlayers = {
        football: [
            { name: "Lionel Messi", country: "Argentina", position: "Forward", rating: 9.8, img: 'https://via.placeholder.com/150/007bff/ffffff?text=Messi' },
            { name: "Kylian Mbappé", country: "France", position: "Forward", rating: 9.5, img: 'https://via.placeholder.com/150/dc3545/ffffff?text=Mbappe' },
            { name: "Virgil van Dijk", country: "Netherlands", position: "Defender", rating: 9.2, img: 'https://via.placeholder.com/150/ffc107/333333?text=Van+Dijk' },
        ],
        cricket: [
            { name: "Virat Kohli", country: "India", position: "Batsman", rating: 9.6, img: 'https://via.placeholder.com/150/007bff/ffffff?text=Kohli' },
            { name: "Pat Cummins", country: "Australia", position: "Bowler", rating: 9.1, img: 'https://via.placeholder.com/150/dc3545/ffffff?text=Cummins' },
        ],
        // Add more player data
    };

    const players = mockPlayers[sport] || [{ name: "No Player Data", country: "N/A", position: "N/A", rating: 0, img: '' }];

    playersContainer.className = 'players-grid';

    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <img src="${player.img}" alt="${player.name}" class="player-photo">
            <h4 class="player-name">${player.name}</h4>
            <p class="player-detail">Country: ${player.country}</p>
            <p class="player-detail">Position: ${player.position}</p>
            <div class="player-rating">⭐ ${player.rating}</div>
        `;
        playersContainer.appendChild(playerCard);
    });
}

/**
 * Simulates fetching and displaying player rating cards.
 * @param {string} sport - The selected sport.
 */
function loadRatings(sport) {
    const ratingContainer = document.getElementById('ratingContainer');
    if (!ratingContainer) return;

    ratingContainer.innerHTML = '';
    ratingContainer.className = 'ratings-grid';

    const mockPlayersToRate = {
        football: [
            { id: 1, name: "Erling Haaland", team: "Norway", rating: 8.9 },
            { id: 2, name: "Kevin De Bruyne", team: "Belgium", rating: 9.3 },
        ],
        cricket: [
            { id: 3, name: "Joe Root", team: "England", rating: 8.7 },
        ],
    };

    const players = mockPlayersToRate[sport] || [{ id: 0, name: "No Players Available for Rating", team: "N/A", rating: 0 }];

    players.forEach(player => {
        const ratingCard = document.createElement('div');
        ratingCard.className = 'rating-card';
        ratingCard.innerHTML = `
            <h4 class="rate-player-name">${player.name} (${player.team})</h4>
            <p class="current-rating">Current Community Rating: <span>⭐ ${player.rating.toFixed(1)}</span></p>
            <div class="rating-controls">
                <select id="rate-${player.id}" class="rating-select">
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                <button class="submit-rating-btn" onclick="submitRating(${player.id})">Submit Rating</button>
            </div>
        `;
        ratingContainer.appendChild(ratingCard);
    });
}

/**
 * Simulates submitting a player rating.
 * @param {number} playerId - The ID of the player being rated.
 */
function submitRating(playerId) {
    const selectElement = document.getElementById(rate-${playerId});
    const rating = selectElement.value;
    showToast(You rated Player ${playerId} (${rating} Stars). Thank you for your feedback!);
    // In a real app, this would send data to a backend.
}

// --- Initialization ---

// Set up initial state and event listeners when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initial fetch of live stats
    refreshStats();

    // Set interval for stat refresh
    setInterval(refreshStats, 15000);

    // Initial check for news (to pre-populate before user enters site)
    // Note: News will be refreshed again in enterSite()
    refreshNews();

    // Event listener for Enter key in name input
    const userNameInput = document.getElementById('userNameInput');
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('enterSiteBtn').click();
        }
    });

    // Event listener for Enter key in chat input
    const chatInput = document.getElementById('chatInput');
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
