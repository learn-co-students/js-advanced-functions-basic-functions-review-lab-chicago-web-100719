// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: () => 1 + 3,
    subtract: () => 1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5
}

function actionApplyer(startingInt, functArray) {
    if (functArray.length < 1) {
        return startingInt
    } else {
        let num = startingInt
        functArray.forEach (funct => num = funct(num))
        return num
    }
}