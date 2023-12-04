export function parse(contents: string): string[] {
  return contents.split(/\r?\n/);
}

export function main(data: string[]) {
    console.log(data);
}
