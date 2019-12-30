// function add(a,b){
//     return a + b;
// }

// function mul(a,b){
//     return a * b;
// }

// function selReverse(arr, id){
//     var result = []
//     if(id !== 0){
//       arr.map((x) => result.push(...arr.splice(0, id).reverse()))
//       result.push(...arr.reverse())
//     }else{
//       return arr
//     }
//     return result
// }

// module.exports = {
//     add, mul, selReverse
// }
// console.log(add(2,5))

module.exports = {
    add: function(arr){
      return arr.map(x => x*2)
    }
  }