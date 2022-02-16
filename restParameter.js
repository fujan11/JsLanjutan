function myfnc( ){
    // return Array.from(arguments);
    return [...arguments]
}


console.log(myfnc(1,2,3,4)); 

function tambah(...arrg){
    let dd =0;
    for( const ff of arrg){
       dd += ff; 
    }
    return `${arrg.reduce((a,b)=> a+b)} ${dd}`;
}


console.log(tambah(1,2,3,4,5));

// // array destructuring 

const kelompok = ['fauzan','mufid','gatsby','shampo','shinzui'];
const [ketua, wakil,...anggota] = kelompok;
console.log(ketua);
console.log(wakil);
console.log(anggota);

// // OBJECT DESTRUCTURING

const team ={
    pm: 'fauzan',
    Fe: 'mufid',
    Be: 'fauzan mufid',
    ui: 'fauzan mufid'
}

const {pm,...myteam}=team;
console.log(myteam);

// // Filtering menggunakan rest parameter

function typedata(type,...values) {
   return values.filter(v => typeof v === type) 
}

console.log(typedata('boolean','fauzan',1,'mufid',47,false,true,98));








