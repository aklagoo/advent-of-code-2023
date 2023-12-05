interface Value2D {
  i: number;
  j: number;
}

type int = number;

export function parseInput(contents: string): string[][] {
  return contents.split(/\r?\n/g).map(x => x.split(''));
}

const OFFSETS: Value2D[] = [
  { i: -1, j: -1 },
  { i: -1, j: 0 },
  { i: -1, j: 1 },
  { i: 0, j: -1 },
  { i: 0, j: 1 },
  { i: 1, j: -1 },
  { i: 1, j: 0 },
  { i: 1, j: 1 },
];

function getCorners(point: Value2D, maxCorner: Value2D) {
  const corners: Value2D[] = [];
  const curr: Value2D = { i: 0, j: 0 };
  for(const offset of OFFSETS) {
    curr.i = point.i + offset.i;
    curr.j = point.j + offset.j;
    if(curr.i >= 0 && curr.i < maxCorner.i && curr.j >= 0 && curr.j < maxCorner.j)
      corners.push({...curr});
  }
  return corners;
}

export function main(grid: string[][]): int {
  const numbers: int[] = [];
  const centers: Value2D[] = [];
  let top = -1;
  let isNumber: boolean = false;
  const maxCorner: Value2D = { i: grid.length, j: grid[0].length };
  for(let i = 0; i < maxCorner.i; i++) {
    for(let j = 0; j < maxCorner.j; j++) {
      if(grid[i][j] >= '0' && grid[i][j] <= '9') {
        if(!isNumber) {
          isNumber = true;
          numbers.push(0);
        }
        top = numbers.length - 1;
        numbers[top] = numbers[top] * 10 + parseInt(grid[i][j]);
        grid[i][j] = top.toString();
      }
      else if(grid[i][j] === '.') {
        isNumber = false;
      }
      else {
        isNumber = false;
        centers.push({i, j});
      }
    }
    isNumber = false;
  }

  // Process values.
  const partPos: Set<int> = new Set();
  for(let center of centers) {
    for(const corner of getCorners(center, maxCorner)) {
      if(grid[corner.i][corner.j] >= '0' && grid[corner.i][corner.j] <= '9')
        partPos.add(parseInt(grid[corner.i][corner.j]));
    }
  }

  return Array.from(partPos).reduce((a, p) => a + numbers[p], 0);
}
