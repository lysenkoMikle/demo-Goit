function getCommonElements(array1, array2) {
  // Change code below this line
let result = [];
    
for (let i = 0; i < array1.length; i+=1){
    if (array2.includes(array1[i])) {
        
          result.push(array1[i]);
      }
    
};
console.log(result);
}

//return result;
 // Change code above this line

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
