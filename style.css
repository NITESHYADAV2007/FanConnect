body {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  margin: 0;
  padding: 0;
  text-align: center;
  min-height: 100%;
  color: white;
}

html {
  height: 100%;
}

header {
  background: linear-gradient(45deg, #0f1419, #1e3c72);
  color: white;
  padding: 25px;
  font-size: 32px;
  font-weight: bold;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  position: relative;
}

.live-indicator {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #ff4444;
  border-radius: 50%;
  margin-right: 10px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* Live Ticker */
.live-scores-ticker {
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 15px;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.ticker-content {
  display: flex;
  animation: scroll 30s linear infinite;
  white-space: nowrap;
}

@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.ticker-item {
  margin-right: 50px;
  font-weight: bold;
}

/* Live Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.stat-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  display: block;
}

.stat-label {
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  margin-top: 5px;
}

/* Welcome Page Styles */
.welcome-page {
  display: block;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.welcome-container {
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.welcome-hero {
  background: rgba(255,255,255,0.1);
  border-radius: 30px;
  padding: 60px 40px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255,255,255,0.2);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  position: relative;
  overflow: hidden;
}

.welcome-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  pointer-events: none;
}

.sports-icons-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-icon {
  position: absolute;
  font-size: 40px;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.floating-icon:nth-child(1) { top: 10%; left: 10%; }
.floating-icon:nth-child(2) { top: 20%; right: 15%; }
.floating-icon:nth-child(3) { top: 60%; left: 5%; }
.floating-icon:nth-child(4) { bottom: 20%; right: 10%; }
.floating-icon:nth-child(5) { bottom: 10%; left: 20%; }
.floating-icon:nth-child(6) { top: 40%; right: 5%; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.hero-title {
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  font-size: 22px;
  color: rgba(255,255,255,0.9);
  margin-bottom: 50px;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.name-input-section {
  position: relative;
  z-index: 2;
}

.name-input-section h2 {
  font-size: 32px;
  color: white;
  margin-bottom: 15px;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
}

.name-input-section p {
  font-size: 18px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px;
}

.name-input-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.name-input {
  padding: 18px 25px;
  font-size: 18px;
  border: 3px solid rgba(255,255,255,0.3);
  border-radius: 15px;
  background: rgba(255,255,255,0.9);
  color: #1e3c72;
  min-width: 250px;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.name-input:focus {
  outline: none;
  border-color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,1);
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.3);
}

.name-input::placeholder {
  color: rgba(30,60,114,0.6);
}

.enter-button {
  padding: 18px 35px;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 25px rgba(255,107,53,0.4);
  position: relative;
  overflow: hidden;
}

.enter-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255,107,53,0.6);
  background: linear-gradient(45deg, #ff7b45, #f8a31e);
}

.enter-button:active {
  transform: translateY(-1px);
}

.enter-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.enter-button:hover::before {
  left: 100%;
}

.enter-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.button-text {
  font-size: 18px;
}

.button-icon {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.enter-button:hover .button-icon {
  transform: translateX(5px);
}

.features-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.feature-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-item:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
}

.feature-text {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

/* Home Page Styles */
.home-page {
  display: none;
}

.welcome-section {
  margin: 40px 0;
  padding: 40px 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.welcome-section h1 {
  font-size: 48px;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.welcome-section p {
  font-size: 22px;
  opacity: 0.9;
  margin-bottom: 30px;
}

.international-sports {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 50px 0;
}

.sport-card {
  background: rgba(255,255,255,0.95);
  color: #1e3c72;
  border: 3px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 40px 30px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

.sport-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  background: rgba(255,255,255,1);
}

.sport-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.sport-card:hover::before {
  left: 100%;
}

.sport-icon {
  font-size: 64px;
  margin-bottom: 20px;
  display: block;
}

.sport-card h3 {
  font-size: 28px;
  margin: 0 0 10px 0;
  font-weight: bold;
}

.sport-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.sport-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid #eee;
}

.sport-stat-item {
  text-align: center;
}

.sport-stat-number {
  font-size: 20px;
  font-weight: bold;
  color: #1e3c72;
  display: block;
}

.sport-stat-label {
  font-size: 12px;
  color: #888;
}

/* News Section Styles */
.news-section {
  margin: 50px 0;
  padding: 40px 30px;
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.news-title {
  font-size: 36px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.news-card {
  background: rgba(255,255,255,0.95);
  color: #333;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.news-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.news-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(30,60,114,0.1), transparent);
  transition: left 0.5s;
}

.news-card:hover::before {
  left: 100%;
}

.news-category {
  background: #1e3c72;
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 15px;
}

.news-headline {
  font-size: 20px;
  font-weight: bold;
  color: #1e3c72;
  margin-bottom: 12px;
  line-height: 1.3;
}

.news-summary {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #888;
}

.news-time {
  display: flex;
  align-items: center;
  gap: 5px;
}

.news-source {
  font-weight: bold;
  color: #1e3c72;
}

.breaking-badge {
  background: #ff4444;
  color: white;
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  animation: pulse 2s infinite;
  margin-left: 10px;
}

.sports-selection-title {
  text-align: center;
  margin: 60px 0 30px 0;
  padding: 30px;
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.sports-selection-title h2 {
  font-size: 36px;
  color: white;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.sports-selection-title p {
  font-size: 18px;
  color: rgba(255,255,255,0.9);
}

/* Sport Detail Page Styles */
.sport-detail-page {
  display: none;
}

.sport-header {
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 30px;
  margin: 20px 0;
  backdrop-filter: blur(10px);
}

.sport-header h2 {
  font-size: 36px;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.back-button {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  padding: 12px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.back-button:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.content-tabs {
  display: flex;
  gap: 15px;
  margin: 30px 0;
  justify-content: center;
  flex-wrap: wrap;
}

.tab-button {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.tab-button.active {
  background: rgba(255,255,255,0.9);
  color: #1e3c72;
  border-color: rgba(255,255,255,0.9);
}

.tab-button:hover {
  background: rgba(255,255,255,0.3);
}

.tab-content {
  display: none;
  margin-top: 30px;
}

.tab-content.active {
  display: block;
}

/* Interactive Features Styles */
.interactive-section {
  background: rgba(255,255,255,0.95);
  color: #333;
  border-radius: 20px;
  padding: 30px;
  margin: 20px 0;
}

.section-title {
  font-size: 28px;
  color: #1e3c72;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.matches-grid {
  display: grid;
  gap: 20px;
  margin: 20px 0;
}

.match-card {
  background: white;
  border: 2px solid #eee;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.match-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.match-card.live {
  border-color: #ff4444;
  background: linear-gradient(45deg, #fff, #fff5f5);
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.match-title {
  font-size: 20px;
  font-weight: bold;
  color: #1e3c72;
}

.live-badge {
  background: #ff4444;
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 2s infinite;
}

.match-teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.team {
  display: flex;
  align-items: center;
  gap: 10px;
}

.team-flag {
  font-size: 24px;
}

.team-name {
  font-size: 18px;
  font-weight: bold;
}

.match-score {
  font-size: 32px;
  font-weight: bold;
  color: #1e3c72;
}

.match-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.match-time {
  color: #666;
  font-size: 14px;
}

.match-venue {
  color: #888;
  font-size: 14px;
}

/* Quiz Styles */
.quiz-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.question {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.question h4 {
  color: #1e3c72;
  margin-bottom: 15px;
}

.quiz-options {
  display: grid;
  gap: 10px;
  margin: 15px 0;
}

.quiz-option {
  background: white;
  border: 2px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quiz-option:hover {
  border-color: #1e3c72;
  background: #f0f8ff;
}

.quiz-option.selected {
  background: #1e3c72;
  color: white;
  border-color: #1e3c72;
}

/* Chat Styles */
.chat-container {
  max-height: 400px;
  overflow-y: auto;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 20px 0;
  background: #f8f9fa;
}

.chat-message {
  background: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.chat-message.user {
  background: #1e3c72;
  color: white;
  margin-left: 20%;
}

.chat-input-container {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.chat-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.send-btn {
  background: #1e3c72;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.send-btn:hover {
  background: #2a5298;
}

/* Player Rating Styles */
.player-card {
  background: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.player-info h4 {
  color: #1e3c72;
  margin: 0 0 5px 0;
}

.player-stats {
  color: #666;
  font-size: 14px;
}

.rating-container {
  display: flex;
  gap: 5px;
}

.star {
  font-size: 24px;
  color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.star:hover,
.star.active {
  color: #ffd700;
}

/* Mini Game Styles */
.mini-game {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.game-cell {
  aspect-ratio: 1;
  background: white;
  border: 2px solid #1e3c72;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-cell:hover {
  background: #f0f8ff;
}

.game-cell.x {
  color: #ff4444;
}

.game-cell.o {
  color: #1e3c72;
}

/* Upcoming Matches Styles */
.upcoming-match {
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  border: 2px solid #dee2e6;
}

.countdown {
  background: #1e3c72;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}

/* Refresh Button */
.refresh-button {
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.refresh-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* Loading Animation */
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #1e3c72;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Toast Notification */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #4CAF50;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transform: translateX(400px);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.toast.show {
  transform: translateX(0);
}

.toast.error {
  background: #f44336;
}

/* Footer */
footer {
  margin-top: 60px;
  padding: 30px 20px;
  background: rgba(0,0,0,0.3);
  color: rgba(255,255,255,0.8);
  font-size: 16px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .welcome-hero {
    padding: 40px 25px;
    margin: 20px 10px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .name-input-section h2 {
    font-size: 24px;
  }
  
  .name-input-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .name-input {
    min-width: 200px;
    width: 100%;
    max-width: 300px;
  }
  
  .enter-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .features-preview {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .feature-item {
    padding: 15px;
  }
  
  .feature-icon {
    font-size: 24px;
  }
  
  .feature-text {
    font-size: 14px;
  }
  
  .floating-icon {
    font-size: 30px;
  }
  
  .international-sports {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .news-section {
    padding: 25px 20px;
  }
  
  .news-title {
    font-size: 28px;
  }
  
  .sports-selection-title h2 {
    font-size: 28px;
  }
  
  .content-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .match-teams {
    flex-direction: column;
    gap: 15px;
  }
  
  .match-score {
    font-size: 24px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
