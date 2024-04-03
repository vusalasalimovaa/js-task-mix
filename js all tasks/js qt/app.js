// ? Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];

// for(let i = 0; i<arr.length; i++){

//     if(arr[i] % 2 == 1){
//         console.log(i) 
//     }
    
// }

//----------------------------------------------------

// ? Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];

// for(let i = 0; i<arr.length; i++){
//     if(i % 2 ==1){
//         console.log(arr[i])
//     }
// }

//----------------------------------------

// ? Verilmiş array-in max elementini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let maxNum = arr[0];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > maxNum){
//         maxNum = arr[i]
//     }
// }
// console.log("Max element:", maxNum);

//----------------------------------------

// ? Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let cutMax = arr[0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 ==0 && arr[i] > cutMax){
//         cutMax = arr[i]
//     }
// }
// console.log("Max cut reqem:", cutMax)

//----------------------------------------

// ? Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let minElement = arr[0];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<minElement){
//         minElement = arr[i]
//         console.log("Min elementin indeksi:",i);
//     }
// }

//----------------------------------------------

// ? Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let arr=[3,8,2,5,4,10,7,6];
// let minIndex = 0
// let minElement = arr[0];
// let maxIndex = 0
// let maxElement = arr[0];

// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i] < minElement){
//         minElement = arr[i];
//         minIndex = i
//     }

//     if(arr[i] > maxElement){
//         maxElement = arr[i];
//         maxIndex = i
//     }

//     let array = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = array
// }
// console.log(minElement,minIndex)

// ! --------------------------------------------

// ? Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

//-----------------------------------------------

// ? Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

//-----------------------------------------------

// ? Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

//-----------------------------------------------

// ? Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

//----------------------------------------------

// ? Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];
// let enUzunSoz = "";

// for(let i = 0; i<arr.length; i++){
//     if(arr[i].length > enUzunSoz.length){
//         enUzunSoz = arr[i]
//     }

// }
// console.log("En uzun soz:",enUzunSoz)

//-----------------------------------------------------------

// ? Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];
// let butunherfleriBoyuk = "";
// let boyukHerflerIndex = 0;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] === arr[i].toUpperCase()){
//         butunherfleriBoyuk = arr[i];
//         boyukHerflerIndex =i;
//     }
// }
// console.log(`Butun herfleri boyuk olan soz ${butunherfleriBoyuk} ve indeksi ${boyukHerflerIndex}`)

// ! -------------------------------------------------------

// ? Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

//----------------------------------------------------------------------