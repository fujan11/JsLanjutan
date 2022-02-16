// // // CALLBACK 
// //  Synchronus callback

// function halo(nama){
//     alert(`halo, ${nama}`);
// }

// function panggilNama(callback){
//     const nama = prompt('Masukkan Nama');
//     callback(nama);
// }

// panggilNama(halo);

const mhs =[
    {
        nama : 'fauzan mufid',
        nim : '1921400194',
        kelas : 'f',
        dosenWali : 'furqon,m.kom'
    },
    {
        nama : 'mufid fauzan ',
        nim : '1921400194',
        kelas : 'f',
        dosenWali : 'furqon,m.kom'
    },
    {
        nama : 'jalaluddi rumi',
        nim : '1921400194',
        kelas : 'f',
        dosenWali : 'furqon,m.kom'
    }
];



console.log('mulai');
mhs.forEach(m =>{
    for (let i = 0; i < 1; i++) {
        let date = new Date;
    }
 console.log(m.nama) 
});
console.log( 'selesai');

// ASSYNCHRONOUS CALLBACK

function getDataMhs(url, succes, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if(xhr.status=== 200){
                succes(xhr.response)
            }else if( xhr.status === 404){
                error();
            }
        }
    }

    xhr.open('get', url)
    xhr.send();
}
console.log('mullai');
getDataMhs('mahasiswa.json', result =>{
    const mhs = JSON.parse(result);
    mhs.forEach(m=> console.log(m.nama));
},
()=>{

});
console.log('akhirrr');


// // Menggunakan Jquery

console.log( 'mulaiok');

$.ajax({
    
    url: "mahasiswa.json",
    success: (mhs)=> {
        mhs.forEach(z => {
            console.log(z.nama);
        });
    }
});
console.log('akhir');






