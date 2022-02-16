
// // memakai FOR
const angka =[1,-1,3,4,5,9,7,-2];


// const newAngka= [];
// for (let i = 0; i< angka.length; i++) {
//     if (angka[i]>3) {
//         newAngka.push(angka[i]);
//     }
    
// }
// console.log(newAngka);

// // MENGGUNAKAN FILTER

    const newAngka = angka.filter(function(a){
        return a >= 3;
    });

// // penulisan Menggunakan ARROW FUNCTION

    const newAngka1 = angka.filter(a=> a >= 3);

    console.log(newAngka);
    console.log(newAngka1);

// // Menggunakan MAP : memetakan tiap tiap element yang ada di dalam arraynya menggunakan fungsi yang baru

    const mapAngka = angka.map(a => a*2);
    console.log(mapAngka);


// // REDUCE 

    const reduceAngka = angka.reduce((accumulator, currentValue) =>
     (accumulator + currentValue));

    console.log(reduceAngka);

// // METHOD CHAINING = MENGGABUNGKAN HOF

const hasil = angka.filter(a => a>5)
    .map(a=> a*2)
    .reduce((acc,curr) => (acc + curr));

    console.log(hasil);






