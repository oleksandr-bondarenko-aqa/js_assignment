const superagent = require("superagent");

class RollTheDice {
    rollOneDice(howManyTimes, resultsArray) {

        let ones = [],
            twos = [],
            threes = [],
            fours = [],
            fives = [],
            sixes = [];

        for (let i = 0; i < howManyTimes; i++) {
            superagent.get('https://www.random.org/integers/?num=100&min=1&max=6&col=2&base=10&format=plain&rnd=new')
                .then(response => {
                    let numbers = JSON.stringify(response.text);
                    for (let j = 0; j < numbers.length; j++) {
                        switch (numbers[j]) {
                            case '1':
                                ones.push(numbers[j]);
                                break;
                            case '2':
                                twos.push(numbers[j]);
                                break;
                            case '3':
                                threes.push(numbers[j]);
                                break;
                            case '4':
                                fours.push(numbers[j]);
                                break;
                            case '5':
                                fives.push(numbers[j]);
                                break;
                            case '6':
                                sixes.push(numbers[j]);
                                break;
                        }
                    }
                    resultsArray = [ones.length, twos.length, threes.length, fours.length, fives.length, sixes.length];
                    return resultsArray;
                })

            //     .then(result => {
            //     let sumAll = result.reduce((a, b) => a + b, 0);
            //
            //     let percentOnes = (100 * result[0]) / sumAll;
            //     let percentTwos = (100 * result[1]) / sumAll;
            //     let percentThrees = (100 * result[2]) / sumAll;
            //     let percentFours = (100 * result[3]) / sumAll;
            //     let percentFives = (100 * result[4]) / sumAll;
            //     let percentSixes = (100 * result[5]) / sumAll;
            //
            //     console.log(`One Dice was rolled ${howManyTimes * 100} times, the statistics is:
            //              1 was rolled ${result[0]} times which is ${percentOnes.toFixed(2)}%
            //              2 was rolled ${result[1]} times which is ${percentTwos.toFixed(2)}%
            //              3 was rolled ${result[2]} times which is ${percentThrees.toFixed(2)}%
            //              4 was rolled ${result[3]} times which is ${percentFours.toFixed(2)}%
            //              5 was rolled ${result[4]} times which is ${percentFives.toFixed(2)}%
            //              6 was rolled ${result[5]} times which is ${percentSixes.toFixed(2)}%`);
            // })
        }
    }

    parseResultsArray() {
        this.rollOneDice().then(result => {
            let sumAll = result.reduce((a, b) => a + b, 0);

            let percentOnes = (100 * result[0]) / sumAll;
            let percentTwos = (100 * result[1]) / sumAll;
            let percentThrees = (100 * result[2]) / sumAll;
            let percentFours = (100 * result[3]) / sumAll;
            let percentFives = (100 * result[4]) / sumAll;
            let percentSixes = (100 * result[5]) / sumAll;

            console.log(`One Dice was rolled, the statistics is:
                     1 was rolled ${result[0]} times which is ${percentOnes.toFixed(2)}%
                     2 was rolled ${result[1]} times which is ${percentTwos.toFixed(2)}%
                     3 was rolled ${result[2]} times which is ${percentThrees.toFixed(2)}%
                     4 was rolled ${result[3]} times which is ${percentFours.toFixed(2)}%
                     5 was rolled ${result[4]} times which is ${percentFives.toFixed(2)}%
                     6 was rolled ${result[5]} times which is ${percentSixes.toFixed(2)}%`);
        }
        })
}

export default new RollTheDice();