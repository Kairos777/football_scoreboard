import React, { useEffect } from 'react';
import FootballScoreboard from './extra/FootballScoreboard';
import './App.css';

function App() {
    useEffect(() => {
        const scoreboard = new FootballScoreboard();

        scoreboard.startMatch("Mexico", "Canada");
        scoreboard.updateScore("Mexico", "Canada", 0, 5);

        scoreboard.startMatch("Spain", "Brazil");
        scoreboard.updateScore("Spain", "Brazil", 10, 2);

        scoreboard.startMatch("Germany", "France");
        scoreboard.updateScore("Germany", "France", 2, 2);

        scoreboard.startMatch("Uruguay", "Italy");
        scoreboard.updateScore("Uruguay", "Italy", 6, 6);

        scoreboard.startMatch("Argentina", "Australia");
        scoreboard.updateScore("Argentina", "Australia", 3, 1);

        const matchesSummary = scoreboard.getMatchesSummary();
        console.log(matchesSummary);
    }, []);
    return (
        <div className="App">Open the console to check the result</div>
    );
}

export default App;
