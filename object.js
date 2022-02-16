// // CARA MEMBUAT OBJECT PADA JAVA SCRIPT
// 1. OBJECT LITERAL
// // PROBLEM : TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK !!!!

    // let mahasiswa = {
    //     nama : 'fauzan mufid',
    //     energi : 10,
    //     makan : function(porsi){
    //         this.energi = this.energi + porsi;
    //         console.log(`halo ${this.nama} selamat makan`);
    //     }
    // }
    // let mahasiswa1 = {
    //     nama : 'mufid',
    //     energi : 34,
    //     makan : function(porsi){
    //         this.energi = this.energi + porsi;
    //         console.log(`halo ${this.nama} selamat makan`);
    //     }
    // }


// 2.MENGGUNAKAN FUNCTION DECLARATION
// // PROBLEM :  

    // function Mahasiswa(nama,energi){
    //     let mahasiswa = {};
    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;

    //     mahasiswa.makan = function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama}, selamat makan `);
    //     }

    //     mahasiswa.main = function(game){
    //         this.energi -= game;
    //         console.log(`halo ${this.nama}, jangan terlalu banyak main game`);

    //     }
    //     return mahasiswa;
    // }
    // let fauzan =Mahasiswa('fauzan', 10);
    // let mufid =Mahasiswa('mufid', 10);


// // 3.MEGGUNAKAN CRUNSTRUCTOR FUNCTION

//   function Mahasiswa(nama,energi){
       
//         this.nama = nama;
//         this.energi = energi;

//         this.makan = function(porsi){
//             this.energi += porsi;
//             console.log(`Halo ${this.nama}, selamat makan `);
//         }

//         this.main = function(game){
//             this.energi -= game;
//             console.log(`halo ${this.nama}, jangan terlalu banyak main game`);

//         }
//     }
//     let fauzan = new Mahasiswa('fauzan', 10);
//     let mufid = new Mahasiswa('mufid', 10);

// // 4. Menggunakan Object Create

const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan `);
    },

    main : function(game){
        this.energi -= game;
        console.log(`halo ${this.nama}, jangan terlalu banyak main game`);

    },
    tidur : function(jam){
        this.energi += jam * 2;
        console.log(`Selamat tidur ${this.nama}`);
    }
}

  function Mahasiswa(nama,energi){
        let mahasiswa = Object.create(methodMahasiswa);
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;


        return mahasiswa;
    }
    let fauzan =Mahasiswa('fauzan', 10);
    let mufid =Mahasiswa('mufid', 10);


