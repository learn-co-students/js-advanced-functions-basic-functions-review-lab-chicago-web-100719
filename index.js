// Your code here
const saturdayFun = (activity = "roller-skate") =>`This Saturday, I want to ${activity}!`
const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`

const wrapAdjective = (string = '*') => (param = "special") =>`You are ${string}${param}${string}!`

const Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b
}

const actionApplyer = (integer, array) =>{
    let a = integer
    for (let i=0; i< array.length; i++){
        a = array[i](a)
    }
    return a
}









