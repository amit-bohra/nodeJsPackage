const randomNumberByAmit = (min = 0, max = 1) => {
  if (typeof max !== "number" && typeof min !== "number") {
    min = 0;
    max = 1;
  } else if (min === max) {
    max += 1;
  }
  return Math.random() * (max - min) + min;
};

module.exports = randomNumberByAmit;
