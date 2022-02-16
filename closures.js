// // LEXICAL SCOPE

// function init(){
//     let nama ='Fauzan Mufid';
//     function tampil(){
//         console.log(nama);
//     };
//     return tampil;

// }
// init();

// // CONTOH YANG KE 2

// function Salam (waktu){
//     return function (nama){
//         console.log(`halo ${nama}, selamat ${waktu}`);
//     };
// };

// let pagi = Salam('pagi');
// let siang = Salam('siang');
// let malam = Salam('malam');

// console.dir(pagi('fauzan'));


// // CONTOH KE 3


let add = (function(){
    let counter = 0;
    return function(){
      return  ++counter;
    }
})();


console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add()); 