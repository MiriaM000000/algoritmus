function SumOfTwoNumbers(array, mySum) {
    let result = []
        for (let i = 0; i < array.length; i++) {
          for (let j = i+1; j < array.length; j++) {
              if (array[i] + array[j] === mySum) {
                  result.push(array[i])
                  result.push(array[j])
                  return result
              }
          }
      }
      return result
}


console.log(SumOfTwoNumbers([9,1,3,4,5], 6)) 
console.log(SumOfTwoNumbers([1,2,3,4,5], 10))
console.log(SumOfTwoNumbers([1,19,55,-4,13], 51))