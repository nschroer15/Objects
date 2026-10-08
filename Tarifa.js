function wifi(X, N, used) {
  let monthly = X;
  for (let i = 0; i < N; i++) {
    X = X - used[i];
    X = X + monthly;
  }

  return X;
}
console.log(wifi(15, 3, [15, 10, 20]));
