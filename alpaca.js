function happyAlpaca(N, X) {
  let happy = 2; //Make array of happiness
  let alpacas = [2, 2];
  for (let i = 1; i < N - 2; i++)
    if (happy < X) {
      alpacas.push(alpacas[i]);
      happy++;
    } else alpacas.push(alpacas[i] + 1);
  alpacas.push(2);
  return alpacas;
}
console.log(happyAlpaca(7, 4));
