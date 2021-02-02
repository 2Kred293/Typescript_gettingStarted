import {result} from './result'

export class Scoreboard {

    private results: result[] = [];
  
    addResult(newResult: result): void {
      this.results.push(newResult);
    }
  
    updateScoreboard(): void {
      let output: string = '<h2>Scoreboard</h2>';
  
      for (let index = 0; index < this.results.length; index++) {
        const result: result = this.results[index];
        output += '<h4>';
        output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
        output += '</h4>';
      }
  
      const scoresElement: HTMLElement = document.getElementById('scores')!;
      scoresElement.innerHTML = output;
    }  
  }