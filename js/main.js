//Получение рандомного числа из диапазона

function getRandomPositiveInteger(a, b) {
  const lesser = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const more = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (more - lesser + 1) + lesser;
  return Math.floor(result);
}
getRandomPositiveInteger(1, 1000);

//Получение рандомного числа с плавающей точкой до десяток

function getRandomPositiveFloat(a, b, digit) {
  const lesser = Math.min(Math.abs(a), Math.abs(b));
  const more = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (more - lesser + digit) + lesser;
  return +result.toFixed(1);
}

getRandomPositiveFloat(1, 10000);
