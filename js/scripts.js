// Business Logic

var numberGen = Math.floor((Math.random() * 6) + 1)

function rollDie() {

  return numberGen();
}

console.log(numberGen);
