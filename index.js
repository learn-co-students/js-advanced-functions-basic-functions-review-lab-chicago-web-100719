function saturdayFun(activity = "roller-skate") {return `This Saturday, I want to ${activity}!` }

let mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = '*') {
    return function(n = "special") {
        return `You are ${flair}${n}${flair}!`
    }
}

const Calculator = {
    add: function(a, b) {return a+b},
    subtract: function(a, b) {return a-b},
    multiply: function(a, b) {return a*b},
    divide: function(a, b) {return a/b}
}

let actionApplyer = function(start, functions) {
    let n = start
    for (let i = 0; i < functions.length; i++) {
        n = functions[i](n)
    }
    return n

}