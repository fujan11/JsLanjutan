
// // MEMBUAT MENGGUNAKAN PROTOTYPE BIASA 


// function Mahasiswa(nama,energi){
        
//         this.nama = nama;
//         this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi ;
//     return `SELAMAT MAKAN ${this.nama}`
// };

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam *2;
//     return `${this.nama}, anda sudah tidur `
// };

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `${this.nama}, Jangan Terlalu Banyak Main Game`;
// }

// let fauzan = new Mahasiswa('fauzan',10);


// // MEMBUAT MENGGUNAKAN CLASS

class Mahasiswa{
    cunstructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }


    makan(porsi){
        this.energi += porsi;
        return`anda telah memiliki ${this.energi} energi`; 
    }

    main(jam){
        this.energi -= jam;
        return `jangan terlalu lama bermain game`;

    }

    tidur(jam){
        this.energi += jam*2;
        return `anda telah tidur sebanyak ${jam} jam `
    }
}

let fauzan = new Mahasiswa('fauzan', 10)