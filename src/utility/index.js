// Utility Scripts

export default {
  shuffle: function (array) {
    // make a copy of array to alter

    let arrayCopy = array.map((x) => x);

    let currentIndex = arrayCopy.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arrayCopy[currentIndex];
      arrayCopy[currentIndex] = arrayCopy[randomIndex];
      arrayCopy[randomIndex] = temporaryValue;
    }

    return arrayCopy;
  },
};
