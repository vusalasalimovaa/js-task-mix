// ? Verilen Array'in icindeki elementin indeksini tapmaq;

// let cars = ["Dodge", "Mercedes", "Porche", "Mustang"];

// for(let i = 0; i<cars.length; i++){

//     console.log(i,cars[i])
// }

//-------------------------------------------------------

// ? Armstrong ededlerini yazin;

// let num = prompt("Insert a number");
// let sum = 0;

// for(let i = 0; i<num.length; i++){
    
//     sum += num[i]**3

// }if(Number(num) == sum){
//     alert("It is armstrong number")
// }else{
//     alert("It is not an armstrong number.")
// }
    


//-----------------------------------------------------------

// ? 10 ile 1000 arasinda kvadrat ededleri cap eden proqram.

// for(let i = 1; i<1000; i++){
//     let a = i**2

//     if(a>=10 && a<1000){
//         console.log(a)
//     }
// }

//-----------------------------------------------------------

// ? 1 den 500 e qeder tek ededlerin cemi ile cut ededlerin ceminin ferqinin tek ve ya cut olmasi.

// let teksum = 0;
// let cutsum =0;

// for(i = 1; i<500; i+=2){
//     teksum += i
    
// }

// for(i = 1; i<500; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }

//     cutsum += i
// }


// console.log(`Tek ededlerin cemi: ${teksum}`)
// console.log(`Cut ededlerin cemi: ${cutsum}`)

// if(teksum-cutsum<0){
//     console.log(`Tek ve cut ededlerin ceminin ferqi menfidir: ${teksum-cutsum}`)
// }else{
//     console.log("Ferq musbetdir")
// }

//---------------------------------------------------------------

// ? ilk 10 Fibonacci ededlerini yazan algoritm.

// let x = 0, y=1;

// for(let i=1; i<10; i++){
//     z = x + y;
//     x = y;
//     y = z;
//     console.log(z)
// }

//------------------------------------------

// ? Multiplication Table

// for(let i = 1; i<10; i++){

//     for(let j = 1; j<10; j++){
//      console.log(`${i} x ${j} = `,i*j)   
// }

// }

//--------------------------------------------

// ? Array de en boyuk reqemin tapilmasi

// let numbers = [1,3,6,9,15,4,7,31,55,99,2];
// let maxNum = numbers[0]

// for(let i = 0; i<numbers.length; i++){

//     if(numbers[i] > maxNum){
//         maxNum = numbers[i]
       
//     }
// } 
// console.log("En boyuk reqem:",maxNum);

//--------------------------------------
