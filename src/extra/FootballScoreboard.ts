type Match = {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    startTime: Date;
}
const ERRORS = {
    INVALID_DATA: "Invalid data were provided",
    NOT_FOUND: "Match not found",
    ALREADY_EXISTS: "Match is already in progress"
};

class FootballScoreboard {
    private matches: Match[] = [];

    startMatch(homeTeam: string, awayTeam: string): void {
        if (!homeTeam || !awayTeam) {
            return console.error(ERRORS.INVALID_DATA);
        }

        if (this.findMatch(homeTeam, awayTeam)) {
            return console.error(ERRORS.ALREADY_EXISTS);
        }

        const match: Match = {
            homeTeam,
            awayTeam,
            homeScore: 0,
            awayScore: 0,
            startTime: new Date(),
        };
        this.matches.push(match);
    }

    updateScore(homeTeam: string, awayTeam: string, homeScore: number, awayScore: number): void {
        if (!homeTeam || !awayTeam || homeScore < 0 || awayScore < 0) {
            return console.error(ERRORS.INVALID_DATA);
        }

        const match = this.findMatch(homeTeam, awayTeam);
        if (match) {
            match.homeScore = homeScore;
            match.awayScore = awayScore;
        } else {
            console.error(ERRORS.NOT_FOUND);
        }
    }

    finishMatch(homeTeam: string, awayTeam: string): void {
        if (!homeTeam || !awayTeam) {
            return console.error(ERRORS.INVALID_DATA);
        }

        this.matches = this.matches.filter(match => !(match.homeTeam === homeTeam && match.awayTeam === awayTeam));
    }

    /**
     * Ordering by the highest total score first.
     * If the total scores are the same then order by chronological order of addition
     */
    getMatchesSummary(): Match[] {
        return this.matches
            .sort((a, b) => {
                const totalScoreA = a.homeScore + a.awayScore;
                const totalScoreB = b.homeScore + b.awayScore;
                if (totalScoreA === totalScoreB) {
                    return this.matches.indexOf(b) - this.matches.indexOf(a);
                } else {
                    return totalScoreB - totalScoreA;
                }
            });
    }

    private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
        return this.matches.find(match => match.homeTeam === homeTeam && match.awayTeam === awayTeam);
    }
}

export default FootballScoreboard;
