# dice.js
Post-modern approach to dice and randomness in computers. Inspired by Eser Ozvataf's [ne-lazim-abime](https://github.com/eserozvataf/ne-lazim-abime)

> ⚠️ Parody Repository

# Academic Studies
This repository implements these studies
- [Learning from Pseudo-Randomness with an Artificial Neural Network – Does God Play Pseudo-Dice?](https://arxiv.org/pdf/1801.01117.pdf)
- [Certifiable Quantum Dice - Or, testable exponential randomness expansion](https://arxiv.org/pdf/1111.6054.pdf)

# API
## To Dice
```
dicejs.dice();
```
## Get a Random Integer
```
let max = 10;
let min = 0;
dicejs.random(max, min); 
```

## To Quantum Dice
```
dicejs.quantumDice(); 
```

## Get a Random Quantum Number
```
let max = 10;
let min = 0;
dicejs.quantumRandom(max, min); 
```

# To do
- [x] Implementation of studies
- [ ] Support dices other than 6 based with an optional parameter

# Contributions
Please be free to contribute
