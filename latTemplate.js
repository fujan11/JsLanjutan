// // latihan HTML FRAGMENT

const mhs= [
    {
    Nama : 'fauzan',
    nim  : '1921400194',
    kelas : 'f',

},
    {
    Nama : 'awawaw',
    nim  : '1921400194',
    kelas : 'f',

},
    {
    Nama : 'mufid',
    nim  : '1921400194',
    kelas : 'f',

},
];

const el = `<div class="mhs">
${mhs.map(m => `<ul>
    <li>${m.Nama}</li>
    <li>${m.nim}</li>
    <li>${m.kelas}</li>   
</ul>`).join('')}


</div>`;

// // pengkondisian

const lagu= {
    judul : 'kebutuhan hati',
    penyanyi : 'kaleb j',
    feat : 'hahiahi'
}

const vw = `<div class="lagu">

<ul>
    <li>${lagu.judul}</li>
    <li>${lagu.penyanyi}  ${(lagu.feat)? `(feat) ${lagu.feat}` : ''}</li>
    
</ul>

</div>`


// // html fragment bersarang
const mhss ={
    nama : 'fauzan Mufid',
    smt : '5',
    matkull : [
        'PBO','AI','STATISTIKA'
    ]
}
function cetakMakul(matkul) {
    return` 
    <ol>
    ${matkul.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}
const vwm = `<div class="mk">

<h1>${mhss.nama}</h1>
<h1> semester ${mhss.smt}</h1>
<h1> mata kuliah: </h1> 
${cetakMakul(mhss.matkull)}   
    
</div>`

document.body.innerHTML = vwm;











