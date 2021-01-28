const btn = document.querySelector('.btn');
let res = [];
let randomNumber;

function getRandomNumber(number, range) {
  res = [];
  for (let i = 0; i < number; i += 1) {
    randomNumber = Math.floor(Math.random() * range);
    if (randomNumber === 0) {
      randomNumber = range;
    }

    res.find((elem, index, array) => {
      if (elem === randomNumber) {
        console.log('Есть совпадение: ' + randomNumber);
        array.splice(index, 1);
        i = i - 1;
      }
    });

    res.push(randomNumber);
  }
  console.log(`Массив: ${res}`);
}

btn.addEventListener('click', () => getRandomNumber(7, 49));