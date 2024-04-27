# Live Football Scoreboard library (POC)

Live Football World Cup Scoreboard library that shows all the ongoing matches and their scores.
The scoreboard supports the following operations:
1. Start a new match, assuming initial score 0 – 0 and adding it the scoreboard. This should capture following parameters:
a. Home team
b. Away team
2. Update score. This should receive a pair of absolute scores: home team score and away team score.
3. Finish match currently in progress. This removes a match from the scoreboard.
4. Get a summary of matches in progress ordered by their total score. The matches with the
same total score will be returned ordered by the most recently started match in the scoreboard.

"create-react-app" was taken as a starter kit for the demo 
## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kairos777/football_scoreboard.git
   
2. Install dependencies:
   ```bash
   npm install

3. To run the application locally (open localhost:3000 and check console), use the following command:
    ```bash
   npm start

4. Testing:
    ```bash
    npm test
