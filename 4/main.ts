interface Game {
  gameId: number;
  picks: string[][][];
}


export function parseInput(contents: string): Game[] {
  return contents.split(/\r?\n/).map(l => {
    const parts = l.split(': ');
    const gameId = parseInt(parts[0].slice(5));
    const picks = parts[1]
      .split(';')
      .map(x => x.split(', ').map(y => y.trim().split(' ')));
    return { gameId, picks }
  });
}

const MAX_RED = 12, MAX_GREEN = 13, MAX_BLUE = 14;

export function main(games: Game[]) {
  let sum = 0;
  for(const game of games) {
    const counts: Record<string, number> = {
      "red": 0,
      "green": 0,
      "blue": 0
    };
    game.picks.forEach(subGames => {
      subGames.forEach(subGame => {
        const count = parseInt(subGame[0]);
        const color = subGame[1];
        counts[color] = Math.max(counts[color], count);
      })
    })
    sum += counts["red"] * counts["green"] * counts["blue"];
  }
  return sum;
}
