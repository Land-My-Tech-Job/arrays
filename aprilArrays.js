//Problem 1

//const fill = (arraySize, value) => {
  //if (arraySize <= 0) {
    //return [];
  //}
  //const newArray = new Array(arraySize);
  //newArray.fill(value);
  //return newArray;
//}

//Problem Two
 //const array1 = [1, 2, 3];
 //console.log(array1);
 //const reversed = array1.reverse();
 //console.log(reversed);
 //console.log(array1);


//Problem Three
//const compact = (array) => {
  //return(data);
 //}
 //const data = [0, 1, false, 2, undefined, '', 3, null];
 //console.log(compact(data))

 //Problem Four

//let pairs = ['a:','b:','c:']
//pairs.forEach(function (pair, index) {
  //console.log(`${pair} ${index}`);
//});

//Problem Five
//function without(value) {
  //return value >= 3;
//}
//const filtered = [1, 2, 3, 1, 2].filter(without);
//console.log(filtered)

//Problem Six
//const unique = (array) => {
  //return Array.from(new Set(array));
 //}
 //const data = [1, 2, 1, 2, 3];
 //console.log(unique(data))

//Problem Seven 
//const isEqual = (firstArray, secondArray) => {
//if (firstArray.length !== secondArray.length){
  //return false 
//}
//for (let i = 0; i < firstArray.length; i++){
  //if (firstArray[i] !== secondArray[i]){
    //return false
  //}
//}
//return true
//}

//const arr1 = [1, 2, 3, 4];
//const arr2 = [1, 2, 3, 4];
//const arr3 = [1, 2, 3, 5];
//const arr4 = [1, 2, 3, 4, 5];
//console.log(isEqual(arr1, arr2));
//console.log(isEqual(arr1, arr3));
//console.log(isEqual(arr1, arr4));

//Problem Eight
//const data = [1, 2, [3, 4, 5]];
//console.log(data.flat());

//Problem Nine
//const data = [1, 2, 3, 4, 5, 6, 7];
//const chunk = (array, size) => {
  //const result = [];
  //for (let i = 0; i < array.length; i += size){
    //result.push(array.slice(i, i + size))
  //}
  //return result
 //}
 //console.log(chunk(data, 2)) 
 //console.log(chunk(data, 3)) 

 //Problem Ten

 const intersection = (...arrays) => {
  for (const value of arrays)
    return arrays
 }

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) 
console.log(intersection(arr3, arr4, arr5))
console.log(intersection(arr6, arr7, arr8))
