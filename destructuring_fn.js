// // DESTRUCTURING FUNCTION

function kalkulasi(a,b){
    return [a+b,a-b,a*b,a/b]
}

const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
 console.log(tambah);
 console.log(kurang);


// // kalkulasi menggunakan object 
 function kalkulator(a,b){

    return {
        tambahh : a+b,
        kurangg : a-b,
        bagii : a/b,
        kalii : a*b
    }

 }

 const {tambahh, kalii, bagii, kurangg} = kalkulator(2,3);
 console.log(kali);

// // destructuring argument
const mhs ={
    nama : 'fauzan mufid',
    nim : '1921400194',
    ipk : {
        smt1 : '4.95',
        smt2 : '3.25',
        smt3 : '3.56'
    }
};
// // cara manual
    // function mhs1(nama, nim){
    //     return ` perkenalkan nama saya ${nama}, umur saya ${nim}` 
    // }



    // console.log(mhs1(mhs.nama, mhs.nim));

// dengan Destructuring dan destructuring beersarang
function mhs1({nama, nim, ipk :{smt1, smt2, smt3}}){
    return ` perkenalkan nama saya ${nama}, umur saya ${nim} niai smt1 : ${smt1}, smt2 : ${smt2}, smt3 : ${smt3}` 
}
console.log(mhs1(mhs));
















