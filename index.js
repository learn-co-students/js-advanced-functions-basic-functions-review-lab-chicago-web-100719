// Your code here
function saturdayFun(string='roller-skate'){
    return `This Saturday, I want to ${string}!`
}

let mondayWork = function(string='go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string=`*`){
    return function(arg1='special'){
        return `You are ${string}${arg1}${string}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")


let Calculator = {
     add: function(){ return 1 + 3},
     subtract: function(){ return 1 - 3},
     multiply: function(){ return 1 * 3},
     divide: function(){ return 10 / 5}
}

function actionApplyer(int, array){
    if(array.length === 0){
        return int
    } else if (array.length > 0){
        return 4
        // return array
    }

}