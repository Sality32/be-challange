const plusMinus = (arr) => {
  const positive = (arr.filter(a => a > 0).length / arr.length).toFixed(6);
  const negative = (arr.filter(a => a < 0).length / arr.length).toFixed(6);
  const zeroPoint = (arr.filter(a => a === 0).length / arr.length).toFixed(6);

  console.log(`${positive}\n${negative}\n${zeroPoint}`)
}

plusMinus([-4, 3, -9, 0, 4, 1])