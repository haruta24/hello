// 値段を受け取り、20%オフした値段を返す
const discount = (amount: number, percent: number) => {
  return amount * (1 - percent / 100);
};

// 100円を30%オフする
const a = discount(100, 30);

// 2900円を20%オフする
const b = discount(2900, 20);

console.log(a) // 70
;

console.log(b) // 2320
;

export {};
