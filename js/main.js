//Получение рандомного числа из диапазона

function getRandomPositiveInteger(a, b) {
  const lesser = Math.ceil(Math.min((a), (b)));
  const more = Math.floor(Math.max((a), (b)));
  const result = Math.random() * (more - lesser + 1) + lesser;
  return Math.floor(result);
}
getRandomPositiveInteger(1, 1000);

//Получение рандомного числа с плавающей точкой до десяток

function getRandomPositiveFloat(a, b) {
  const lesser = Math.min((a), (b));
  const more = Math.max((a), (b));
  const result = Math.random() * (more - lesser + 1) + lesser;
  return +result.toFixed(1);
}

getRandomPositiveFloat(1, 10000);
