import rollTheDice from "../support/RollTheDice";

describe('Roll 1,2 dices a large number of times', () => {
  const results = [];

  it('Roll one dice 1000 times', () => {
    rollTheDice.rollOneDice(10, results);
    rollTheDice.parseResultsArray(results);
  })
})