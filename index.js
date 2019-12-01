
const Calculator = {
  add: function(a,b) {
    return a+b
  },
  subtract: function(a,b) {
    return a-b
  },
  multiply: function(a,b) {
    return a*b
  },
  divide: function(a,b) {
    return a/b
  }
}

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work="go to the office") {
  return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
  return function(adjective="special"){
    return `You are ${flair}${adjective}${flair}!`
  }
}


function actionApplyer(start, arr){
  let a = start

  arr.forEach(funct => {
    a = funct(a)
  })

  return a
}



