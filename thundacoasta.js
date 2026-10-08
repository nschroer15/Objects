function coaster(N, scooby) {
  let riders = 0;
  for (let i = 0; i < N; i++)
    if (scooby[i].H > 120)
      if (scooby[i].A < 12 && scooby[i].Y === Y) riders++;
      else if (scooby[i].A > 12) riders++;
  return riders;
}
let people = [
  { H: 130, A: 14, Y: N },
  { H: 125, A: 9, Y: Y },
  { H: 125, A: 9, Y: N },
  { H: 110, A: 15, Y: Y },
  { H: 120, A: 12, Y: N },
  { H: 119, A: 13, Y: Y },
];
console.log(coaster(6, people));
