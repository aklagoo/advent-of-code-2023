const regexp = /(?=(zero|one|two|three|four|five|six|seven|eight|nine|\d))/g;
const map: Record<string, string> = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
};

export function parseInput(contents: string): string[] {
  return contents.split(/\r?\n/);
}

function parseWord(s: string): number {
  const numbers = [...s.matchAll(regexp)].map(x => x[1]);
  const a = numbers[0] in map? map[numbers[0]]: numbers[0];
  const b = numbers[numbers.length - 1] in map? map[numbers[numbers.length - 1]]: numbers[numbers.length - 1];
  return parseInt(a + b);
}

export function main(data: string[]) {
  const vals = data.map(x => parseWord(x));
  const sum = vals.reduce((acc, val) => acc + val, 0);
  return sum;
}
