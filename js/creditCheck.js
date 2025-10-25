exports.creditCheck = function(string) {
// creditCheck = function(string) {



    let myList = string.split('')
    // console.log(myList);
    let newList = [];
    let summedDig = []
    let intList = [];

    for (let i = myList.length -1;i>=0;  i--){

        if (i % 2 ==  0) {
            newList.push(parseInt(myList[i]) * 2)
        }
        else {
            newList.push(myList[i])
        }
        
    }
    // console.log(newList)

    for (let j = 0; j < newList.length; j++) {
        if (Number.isInteger(j)) {
            if (j >= 10) {
                let newJ = String(newList[j]).split("");
                let sumDig = parseInt(newJ[0]) + parseInt(newJ[1])
                summedDig.push(sumDig)

            }
            else {
                summedDig.push(j)
            }
        }
        else {
            summedDig.push(j);

        }
        // console.log(summedDig, 'this is summedDig')
    }

    for (let x = 0; x < summedDig.length; x ++){
        let numbersNow = parseInt(summedDig[x]);
        intList.push(numbersNow)
    }

    let theSum = intList.reduce((acc,curr) => acc + curr, 0);

    if (theSum % 10 === 0) {
        return 'The number is valid!'
    }
    else {
        return 'The number is invalid!'
    }







}


// console.log(creditCheck('5541808923795240'))