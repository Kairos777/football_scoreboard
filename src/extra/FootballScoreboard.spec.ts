import FootballScoreboard from './FootballScoreboard';

describe('FootballScoreboard', () => {
    let scoreboard: FootballScoreboard;

    beforeEach(() => {
        scoreboard = new FootballScoreboard();
    });

    test('starts a match successfully', () => {
        scoreboard.startMatch('Mexico', 'Canada');
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary).toHaveLength(1);
        expect(matchesSummary[0].homeTeam).toBe('Mexico');
        expect(matchesSummary[0].awayTeam).toBe('Canada');
    });

    test('fails to start a match with invalid data', () => {
        scoreboard.startMatch('', '');
        scoreboard.startMatch('Spain', '');
        scoreboard.startMatch('', 'Brazil');
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary).toHaveLength(0);
    });

    test('fails to start a match if already in progress', () => {
        scoreboard.startMatch('Spain', 'Brazil');
        scoreboard.startMatch('Spain', 'Brazil');
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary).toHaveLength(1);
    });

    test('updates match score successfully', () => {
        scoreboard.startMatch('Spain', 'Brazil');
        scoreboard.updateScore('Spain', 'Brazil', 2, 1);
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary[0].homeScore).toBe(2);
        expect(matchesSummary[0].awayScore).toBe(1);
    });

    test('fails to update match score with invalid data', () => {
        scoreboard.startMatch('Spain', 'Brazil');
        scoreboard.updateScore('Spain', 'Brazil', -1, 1);
        scoreboard.updateScore('Spain', 'Brazil', 2, -1);
        scoreboard.updateScore('', '', 2, 1);
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary[0].homeScore).toBe(0);
        expect(matchesSummary[0].awayScore).toBe(0);
    });

    test('finishes a match successfully', () => {
        scoreboard.startMatch('Spain', 'Brazil');
        scoreboard.finishMatch('Spain', 'Brazil');
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary).toHaveLength(0);
    });

    test('fails to finish a match with invalid data', () => {
        scoreboard.startMatch('Spain', 'Brazil');
        scoreboard.finishMatch('', '');
        scoreboard.finishMatch('', 'Brazil');
        scoreboard.finishMatch('Spain', '');
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary).toHaveLength(1);
    });

    test('gets matches summary ordered by total score and start time', () => {
        scoreboard.startMatch('Spain', 'Brazil');
        scoreboard.startMatch('Germany', 'France');
        scoreboard.startMatch('Argentina', 'Italy');
        scoreboard.updateScore('Spain', 'Brazil', 2, 1);
        scoreboard.updateScore('Germany', 'France', 1, 1);
        scoreboard.updateScore('Argentina', 'Italy', 3, 2);
        const matchesSummary = scoreboard.getMatchesSummary();
        expect(matchesSummary[0].homeTeam).toBe('Argentina');
        expect(matchesSummary[1].homeTeam).toBe('Spain');
        expect(matchesSummary[2].homeTeam).toBe('Germany');
    });
});
