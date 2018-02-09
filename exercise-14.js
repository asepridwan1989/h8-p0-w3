function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var result = [];
  var tampung1 = []; //buat genap
  var tampung2 = []; //buat ganjil
  var tampung3 = []; //buat kelipatan 3
  var hit1 = 0;
  var hit2 = 0;
  var hit3 = 0;

  var i = 0;
  while(i < arr.length){
    if (arr[i] %2 === 0 && arr[i] %3 !== 0){
      tampung1[hit1] = arr[i];
      hit1++;
    }else if(arr[i] %2 === 1 && arr[i] %3 !== 0){
      tampung2[hit2] = arr[i];
      hit2++;
    }else if (arr[i] %3 === 0){
      tampung3[hit3] = arr[i];
      hit3++;
    }
    i++;
  }
  result[0] = tampung1;
  result[1] = tampung2;
  result[2] = tampung3;
  return result;

}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
