

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function(adj = "special") {
    return `You are ${flair}${adj}${flair}!`
  }
}


let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}

let Calculator = {
  add: function() {
    return 1 + 3
  },
  subtract: function() {
    return 1 - 3
  },
  multiply: function() {
    return 1 * 3
  },
  divide: function() {
    return 10 / 5
  }
}
