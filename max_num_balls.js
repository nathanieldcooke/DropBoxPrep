function boxToInsert(num) {

    let strNum = String(num);

    let digitsArr = strNum.split('');

    let sum = digitsArr.reduce((sum, num) => Number(sum) + Number(num));

    return sum;

}


const countBalls = (lowLimit, highLimit) => {

    const boxes = {};

    let highestBallCount = 0;

    for (let i = lowLimit; i <= highLimit; i++) {
        let currBox = boxToInsert(i);

        if (boxes[currBox]) {

            boxes[currBox] += 1;

            let ballsInBox = boxes[currBox];

            if (ballsInBox > highestBallCount) {
                highestBallCount = ballsInBox
            }


        } else {
            boxes[currBox] = 1; // set number of balls in box to 1
            if (highestBallCount === 0) highestBallCount = 1; // set hightestBallCount if not already incremented
        };

    };

    return highestBallCount;
};