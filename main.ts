const amounts = [100, 200, 300];

const discount = (n: number) => n + 10;

for (const amount of amounts) {
  const pricing = discount(amount);
  console.log(pricing);
}
