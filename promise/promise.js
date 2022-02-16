// // MEnggunakaan ajax 

// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//     success:  movies => console.log(movies) 
         
// });


// // menggunakan Fetch
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// // DEFINIFSI PROMISE 
// // promise adalah object yang mempresentasikan keberhasilan atau kegagalan
// // sebuah evnt yang assynhcronus di masa yang akan datang 
// // janji (terpenuhi / ingkar ) => (fulfilled/ rejected/ pending)
// // fungsi callback (resolve/ reject/ finally)
// // aksi (then/catch)

// contoh 1
 let ditepati = true;

//  const janji = new Promise((resolve, reject) =>{
//      if( ditepati){
//          resolve('janji telah di tepati');
//      }else{
//          reject('ingkar janji')
//      }
//  });

// janji
//     .then(response => console.log('ok..! '+ response))
//     .catch(response => console.log('palang' + response))


//// contoh 2

const janji2 = new Promise((resolve, reject)=>{
    if (ditepati){
        setTimeout(() => {
            resolve('janji di tepati');
        }, 5000);
    }else{
        setTimeout(() => {
            reject('janji tidak di tepati');
        }, 5000);
    }
})

console.log('pertama');
// console.log(janji2.then(()=> console.log(janji2)));
janji2
    .finally(()=> console.log('waktu tunggu sudah selesai'))
    .then(response => console.log('ok :' + response))
    .catch(response => console.log('Oh NO :!!! ' + response))

console.log('kedua');


// // cara menjalankan dua promise sekaligus ..... Contoh :

const film = new Promise(resolve=>{
    setTimeout(() => {
        resolve([{
            nama : 'avenger',
            writer : 'fauzan'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve =>{
    setTimeout(() => {
        resolve([{
            kota: 'probolinggo',
            cuaca : 'panas',
            suhuUdara : 25
        }])
    }, 500);
})

// // cara menjalankan Manual
// film.then(response => console.log(response));
// cuaca.then(response=> console.log(response));

// // menjalankan banyak promise dengan satu perintah

Promise.all([film, cuaca])
        .then(response => {
            const [film, cuaca]= response;
            console.log(film);
            console.log(cuaca);
        })








