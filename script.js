// ... existing data simulation ...

// --- Game Page Logic (game.html) ---
if (document.getElementById('selected-sport-header')) {
    const sport = localStorage.getItem('selectedSport') || 'Football'; 
    // Title update
    document.getElementById('game-title').textContent = ${sport} | FanConnect;
    document.getElementById('selected-sport-header').textContent = sport;
    
    // ... rest of game page logic ...
}

// ... existing goToChat function ...

// --- Chat Page Logic (chat.html) ---
if (document.getElementById('chat-messages')) {
    const matchTeams = localStorage.getItem('selectedMatchTeams') || 'A vs B';
    // Title update
    document.getElementById('chat-title').textContent = ${matchTeams} | FanConnect Chat;
    document.getElementById('match-header').textContent = Chat: ${matchTeams};

    // ... rest of chat logic ...
}
