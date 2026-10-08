function dual(X, N, duals) {
  let users = 1;
  let wanders = [X];
  for (let i = 0; i < N; i++) {
    if (duals[i * 2 + 1] === X) {
      X = duals[2 * i];
    }
    if (!wanders.includes(X)) {
      users++;
    }
    wanders.push(X);
  }

  return X + "\n" + users;
}
console.log(dual("X", 4, ["A", "X", "B", "X", "X", "A", "D", "A"]));
