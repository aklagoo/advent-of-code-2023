export function parse(contents: string): string[] {
  return contents.split(/\r?\n/);
}

function parseWord(s: string): number {
  let a: string = '', b: string = '';
  let i = 0;

  // Get first character
  while (i < s.length) {
    i++;
    if (s[i-1] >= '0' && s[i-1] <= '9')
      break;
  }
  a = s[i-1];

  // Get last character
  while (i < s.length) {
    i++;
    if (s[i-1] >= '0' && s[i-1] <= '9')
      b = s[i-1];
  }

  if (b == '') b = a;
  return parseInt(a+b);
}

export function main(data: string[]) {
  const vals = data.map(x => parseWord(x));
  console.log(vals);
  const sum = vals.reduce((acc, val) => acc + val, 0);
  console.log(sum);
}
