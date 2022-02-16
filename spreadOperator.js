// // // Spread Operator 
// Memecah iterable menjadi singgle element

const mhs = ['fauzan','mufid','suganda'];
console.log(...mhs); // Menggunakan Spread Operator
console.log(mhs); // tidak menggunakan spreadOperator

// // Menggabungkan 2 array 

const mhs1 = ['OMG','DODDY','BANDRI'];
const mhs2 =[...mhs, ...mhs1];
console.log(...mhs2); // menggunakan SPREAD OPERATOR


const orang = mhs.concat(mhs1);
console.log(orang); // menggnakan CONCET


// // MENGCOPY ARRAY

const cmhs1 =[...mhs1];
cmhs1[0] = 'fauzanmufid';
console.log(cmhs1);

// // mengcopy array dari html
const limhs =document.querySelectorAll('.li');
const ulmhs = [];
for( let i = 0; i< limhs.length; i++){
    ulmhs.push(limhs[i].textContent);
}
console.log();
// // menggunakan map 

const ullmhs = [...limhs].map(m => m.textContent)
console.log(ullmhs);

// // membuat animasi hover 

const nama = document.querySelector('.nama');
const vnama = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML=vnama;

















