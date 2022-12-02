const fs = require('fs');

fs.readFile('./day1/input.txt', (err, data) => {
  let maxArr = [0, 0, 0];
  console.log(err);
  if (err) return;
  const elfesCals = data
    .toString()
    .split('\n\n')
    .map((line) => line.split('\n'));

  for (elf of elfesCals) {
    const cals = elf
      .map((item) => Number(item))
      .reduce((sum, item) => (sum += item));

    for (let i = maxArr.length - 1; i >= 0; i--) {
      if (cals > maxArr[i]) {
        maxArr.splice(i + 1, 0, cals);
        maxArr.shift();

        break;
      }
    }
    console.log({ maxArr });
  }

  console.log(maxArr.reduce((sum, item) => (sum += item)));
});
