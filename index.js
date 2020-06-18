module.exports = {
  dice: () => (Math.floor(Math.random() * 6) + 1),
  random: (max, min = 0) => (Math.floor(Math.random() * max) + min)
}
