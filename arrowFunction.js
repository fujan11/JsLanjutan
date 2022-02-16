// // Cunstructor Function

// const Mahasiswa = function(){
//     this.nama = 'fauzan';
//     this.umur = 22;
//     this.sayHello = function(){
//         console.log(`nama saya ${this.nama} umur saya ${this.umur} tahun`);
//     }

// }

// const TMahasiswa = new Mahasiswa();


// // ARROW FUNCTION
// const Mahasiswa = function(){
//     this.nama = 'fauzan';
//     this.umur = 22;
//     this.sayHello = ()=>{ //ARROW FUNCTION
//         console.log(`nama saya ${this.nama} umur saya ${this.umur} tahun`);
//     }

// }

// const TMahasiswa = new Mahasiswa();

// //arrow Function Pada object literal
// // Arrow function tidak memiliki konsep this.

    // const mahasiswa1 ={
    //     nama : 'fauzan',
    //     umur : 22,
    //     sayHellow : ()=>{
    //         console.log(`nama saya ${this.nama} umur saya ${this.umur} tahun`);
    //     }
    // }


// // contoh lain 
// const Mahasiswa = function(){
//     this.nama = 'fauzan';
//     this.umur = 22;
//     this.sayHello = function (){ 
//         console.log(`nama saya ${this.nama} umur saya ${this.umur} tahun`);
//     }
//     setInterval(()=>{ // Arrow Function Ketika di jalankan arrow function langsung mengecek This. pada global scopenya
//         console.log(this.umur++);
//     }, 1000);
// }

// const TMahasiswa = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }

    this.classList.toggle(satu);
    setTimeout(()=>{ // kegunaan dari  ARROW FUNCTION
        this.classList.toggle(dua);
    },1000)
});





   






