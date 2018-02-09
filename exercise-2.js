//Tugas week 3 exercise-2

function balikString(str){
  var tampung = '';
  for (i = str.length-1; i >= 0; i--){
    tampung += str[i];
  }
  console.log(tampung);
}

balikString('hello world!');
