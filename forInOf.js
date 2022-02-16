const mhs =['fauzan','mufid','andika'];


// // MENGGUNAKAN FOR BIASA 
for(let i = 0; i< mhs.length; i++){
    console.log(mhs[i]);
}



// // MENGGUNAKAN FOR EACH

mhs.forEach((e,i) => {
    console.log(`nama ${e}, index ke ${i +1}`);
});

// // menggunakan FOR OF Untuk array

for(const m of mhs){
    console.log(m);
}

// // STRING DENGAN FOR OF
const f ='fauzan';
for( const z of f){
    console.log(z);
}

// // BISA DI GUNAKAN UNTUK NODE LIST

const list = document.querySelectorAll('.list');
list.forEach(l => {
    console.log(l.innerHTML);
})

for( const nn of list){
    console.log(`${nn.innerHTML} OF`);
}

// // LOOPING PADA ArGUMENT

function hitung(){
    let total = 0;
    for(const tt of arguments){
         total += tt;
    }
    return total;
}
console.log(hitung(1, 2, 3, 4, 5,)); 


// // FOR IN

const mhs2 = {
    nama : 'fauzan',
    kelas : 'f',
    ttl : 'sumenep 11 september 2000'
}

for( const xx in mhs2){
    console.log(mhs2[xx]);
    // console.log(xx);
}





