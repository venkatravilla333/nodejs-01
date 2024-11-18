// console.log('one')
// // console.log('two')
// setTimeout(() => {
//   console.log('data from db')
// }, 4000)
// console.log('three')



// var dataFromDB = function getData(num,callback) {
//   setTimeout(() => {
//     // var data = ['sachin', 'kohli', 'dhoni']
//     var data = num*num
//     // return data
//     callback(data)
//   }, 4000)
  
  
// }

// var data = dataFromDB(2, (data1)=> {
//          console.log(data1)
//          dataFromDB(data1, (data2) => {
//             console.log(data2)
//             dataFromDB(data2, (data3) => {
//               console.log(data3)
//                dataFromDB(data3, (data4) => {
//                console.log(data4)
//           })
//           })
//   })
// })


// displayData(data)

//promises

// function getData(num) {
//  var promiseResult = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       // resolve(['sachin', 'kohli', 'dhoni'])
//       resolve(num*num)
//     }, 4000)
//  })
//   return promiseResult
// }

// var data = getData()

// getData(2)
//   .then((data1) => {
//     console.log(data1)
//    return getData(data1)
//   }).then((data2) => {
//     console.log(data2)
//     return getData(data2)
//    }).then((data3) => {
//      console.log(data3)
//    })
//   .catch((err) => { 
//     console.log(err)
//   })

// function displayData(data) {
//   console.log(data)
// }
// displayData(data)

//async await


function getData(num) {
 var promiseResult = new Promise((resolve, reject) => {
   setTimeout(() => {
      // resolve(['sachin', 'kohli', 'dhoni'])
      resolve(num*num)
    }, 4000)
 })
  return promiseResult
}

async function displayData() {
  var data1 = await getData(2)
  console.log(data1) //async 
  var data2 = await getData(data1)
  console.log(data2) //async 
  var data3 = await getData(data2)
  console.log(data3) //async 
}
displayData()

