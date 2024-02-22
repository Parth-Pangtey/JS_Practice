
// slice()
const arr1=[0,1,2,3,4];
arr1.slice(0,4);
console.log(arr1);

//SPLICE()
const array = [0,1,2,3,4,5,6,7,8,9];
array.splice(7,9); // Removes 'banana' and 'cherry' starting from index 1
console.log(array); // Output: ['apple', 'date']



// //Async JS

// // console.log("My name");


// // setTimeout(() => {
// //     console.log("Parth");
// // }, 2000);

// // console.log("is");

// //Promises

// function loadingData(){

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("1.loadingData");    
//         }, 2000)
//     })
   
    
// }
// function collectingData(){

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("2.collectingData");
//         }, 2000)
       
//     })
   
// }
// function approvingData(){
//     console.log("3.approvingData");
// }
// function approved(){
//     console.log("4.approved");
// }

// async function ex(){
//     await loadingData(); 
//     await collectingData();
//     await approvingData();
//     await approvedData();
// }
// ex();