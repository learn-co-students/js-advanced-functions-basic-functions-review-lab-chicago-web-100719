// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(x = "special"){
        return `You are ${flair}${x}${flair}!`
    }
}

let Calculator = {
    add: () => 1+3,
    subtract: () => 1-3,
    multiply: () => 1*3,
    divide: () => 10/5
}

function actionApplyer(startingInt, functArray) {
    if (functArray.length === 0) {
        return startingInt
    } else {
        let num = startingInt
        functArray.forEach (funct => num = funct(num))
        return num
    }
}