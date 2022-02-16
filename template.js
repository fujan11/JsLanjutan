// // template Literals/ Template String 

const nama = 'Fauzan Mufid';
const umur = 22;

console.log(`nama ${nama}, umur ${umur} tahun`);

// // Embedded  Expression

console.log(`${(umur % 2==0) ? 'genap':'ganjil'}`);

// HTML fragment

const mahasiswa= {
    Nama : 'fauzan',
    nim  : '1921400194',
    kelas : 'f',

};
const el = `<div class="mhs">
<h2>${mahasiswa.Nama}</h2>
<h2>${mahasiswa.nim}</h2>
<h2>${mahasiswa.kelas}</h2>
</div>`

const html = document.querySelector('body');
html.innerHTML =` selamat datng ${el}`;