/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const R: number = parseInt(readline());
const L: number = parseInt(readline());

function nextLine(line: number[]): number[] {
  const result: number[] = [];
  let i = 0;

  while (i < line.length) {
    const currentDigit = line[i];
    let count = 1;

    while (i + count < line.length && line[i + count] === currentDigit) {
      count++;
    }

    result.push(count);
    result.push(currentDigit);

    i += count;
  }

  return result;
}

let sequence: number[] = [R];

for (let i = 1; i < L; i++) {
  sequence = nextLine(sequence);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(sequence.join(' '));
