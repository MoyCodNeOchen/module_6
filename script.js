// let cars = new Map ([
//   ["toyota","white"],
//   ["MB","black"],
//   ["ford","blue"],
//   ["vaz","brown"]
// ]);
// for (let name cars.value()) {
//   console.log(name)
// }

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
let arr=[1,2,3,4,5,6,7,8,9,10,321,32039];
let chet=0;
let nechet=0;

function checkChetnost () {
for (i=0; i<arr.length; i++){
  if (arr[i] % 2 ==0) {
    chet++;
  } else {
    nechet++;
  }

}
alert("Кол-во четных элементов: "+ chet );
alert("Кол-во нечетных элементов: "+ nechet );
}

checkChetnost();
