function saturdayFun(word='roller-skate') {
    return `This Saturday, I want to ${word}!`
}


function mondayWork(word ="go to the office") {
    return `This Monday, I will ${word}.`
}

function wrapAdjective(newWord='*') {
    return function(word='special'){
        return `You are ${newWord}${word}${newWord}!`
    }
}

let Calculator ={ add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
  
}

function actionApplyer(start, array){

    let a = start

    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
}