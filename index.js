module.exports = {
  dice: () => (Math.floor(Math.random() * 6) + 1),
  random: (max, min = 0) => (Math.floor(Math.random() * (max - min)) + min),
  quantumDice: () => new Array(Math.floor(Math.random() * 3)).fill(null).map(() => ((Math.random() * 6) + 1)),
  quantumRandom: (max, min = 0) => new Array(Math.floor(Math.random() * 3)).fill(null).map(() => ((Math.random() * (max - min)) + min)),
};
