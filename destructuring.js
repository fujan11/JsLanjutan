// // DESTRUCTURING VARIABLE; CONTOH SEDERHANA 

const bio = ["fauzan","11sepetember","sumenep"];
const [nama, birthday, tl] = bio;
console.log(nama);
console.log(birthday);
console.log(tl);

// // SKIPPING ITEMS

const [a,,b] = bio;
console.log(a);
console.log(b);

// // SWAP ITEM

let a1 = 1;
let b1 = 2;

console.log(a1);
console.log(b1);

[a1,b1] = [b1,a1]

console.log(a1);
console.log(b1);

// //Return Value pada function

function coba() {
    return [1,2];
}
const [p,q] = coba();
console.log(p );

// // REST PARAMETER

const [z, ...values] = [1,2,3,4,5];

console.log(values);
console.log(z);


// //  DESTRUCTURING OBJECT

const mhs = {
    nama1 : 'fauzan',
    dua : 'mufid'
};

const {nama1, dua} = mhs;
console.log(nama);
console.log(dua);

// // Assigment tanpa Dekalarasi object

( {nama2, dua2} = {
    nama2 : 'fauzan',
    dua2 : 'mufid'
});
console.log(nama2);
console.log(dua2);

// // ASSIGMENT KE DALAM VARIABLE YANG BARU
const {nama1 :n, dua:d} = mhs;
console.log(d);
console.log(n);

// // MEMBERIKA DEFAULT VALUE
const mhs1 = {
    namaa : 'fauzannnn',
    duaa : 'mufid',
    ee : 'fauzanmufid09@gmail.com'
};
const {namaa :nn, duaa:dd, ee : e='Fauzanmufid09@gmail.com'} = mhs1;
console.log(nn);
console.log(dd);
console.log(e);

// // REST PARAMETER
const {namaa, ...value} = mhs1;
console.log(namaa);
console.log(value);

// // MENGAMBIL FIELD PADA OBJECT, SETELAH DIKIRIM SEBAGAI PARAMETER UNTUK FUNCTION
function getId ({namaa}){
    return namaa;
}

console.log(getId(mhs1));


