export const getRandInt = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)))
}

export const generateProblem = () => {
    let length = 3
    let sumArr = []

    // populate array
    for (let i = 0; i < length; i++) {
        if (i < length - 1) {
            sumArr.push(getRandInt(1, 11), ' + ')
        } else {
            sumArr.push(getRandInt(1, 11))
        } 
    }
    console.log(sumArr)
    return sumArr
}

export const isCorrect = (answer, sumArr) => {
    let sum = sumArr.filter(el => typeof(el) === 'number')
      .reduce((accum, el) => accum += el)

      console.log('ANSWER', answer)
      console.log('SUM', sum)

    if (answer == sum) {
        console.log(true)
        return true
    }
    return false
}

// isCorrect(10, [6, ' + ', 3, ' + ', 1])
// isCorrect(10, [5, ' + ', 3, ' + ', 1])
