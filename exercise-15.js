function groupAnimals(animals) {
  var arrResult = [];
  var indeks = 0;
  for (var i = 0; i < animals.length; i++){
    arrResult.push([]);
    var scan = animals[i][0];
    for(var j = 0; j< animals.length; j++){
      if(scan === animals[j][0]){
        arrResult[i][indeks] = animals[j];
        indeks++;
      }
    }
    indeks = 0;
  }
  arrResult.sort();
  for (var m = 0; m < arrResult.length-1; m++){
    if (arrResult[m][0] === arrResult[m+1][0]){
      arrResult.splice(m,1);
    }
  }
  return arrResult;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
