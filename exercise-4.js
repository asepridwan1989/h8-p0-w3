function dataHandling2(){
  output.splice(1,1,"Roman Alamsyah Elsharawy");
  output.splice(2,1,"Provinsi Bandar Lampung");
  output.splice(3,0,"Pria");
  output.splice(5,1,"SMA Internasional Metro");
  var tanggal2 = output[4].split('/');
//console.log(tanggal2);
  intTanggal2 = [];
  for (i=0; i<3;i++){
    intTanggal2.push(parseInt(tanggal2[i]));
  }
  if (intTanggal2[1]<10){
    var c = String(intTanggal2[1]);
    intTanggal2.splice(1,1,"0"+c);
  }

  //console.log(intTanggal2);
  console.log(output);
  var bulan = tanggal2[1].slice(0,2);
  //console.log(bulan);
  switch(bulan){
    case '01':
      console.log('Januari');
      break;
    case '02':
      console.log('Februari');
      break;
    case '03':
      console.log('Maret');
      break;
    case '04':
      console.log('April');
      break;
    case '05':
      console.log('Mei');
      break;
    case '06':
      console.log('Juni');
      break;
    case '07':
      console.log('Juli');
      break;
    case '08':
      console.log('Agustus');
      break;
    case '09':
      console.log('September');
      break;
    case '10':
      console.log('Oktober');
      break;
    case '11':
      console.log('November');
      break;
    case '12':
      console.log('Desember');
      break;
  }
  console.log(intTanggal2.sort(function(value1, value2) { return value2 > value1 }));
  console.log(tanggal2.join('-'));
  console.log (nama = output[1].slice(0,15));
}
var output = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(output);
