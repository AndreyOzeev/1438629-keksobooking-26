//Получение рандомного числа из диапазона
function getRandomPositiveInteger(a, b) {
  const lesser = Math.ceil(Math.min(a, b));
  const more = Math.floor(Math.max(a, b));
  if (lesser > 0 && more > 0) {
    const result = Math.random() * (more - lesser + 1) + lesser;
    return Math.floor(result);
  }
  console.log('Необходимо передать положительные числа');
}
getRandomPositiveInteger(1, 1000);

//Получение рандомного числа с плавающей точкой до десяток

function getRandomPositiveFloat(a, b, digit = 1) {
  const lesser = Math.min(a, b);
  const more = Math.max(a, b);
  if (lesser > 0 && more > 0) {
    const result = Math.random() * (more - lesser + digit) + lesser;
    return +result.toFixed(digit);
  }
  console.log('Необходимо передать положительные числа');
}

getRandomPositiveFloat(1, 10000);
