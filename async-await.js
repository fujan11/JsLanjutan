// const coba = new Promise((resolve, reject ) => {
//      const waktu = 4000;
//      if(waktu <= 3000){
//           setTimeout(() => {
//                resolve('selesai');
//           }, waktu);    
//      }else{
//           setTimeout(() => {
//                reject('kelamaan');
//           }, waktu);
//      }
     
// });

// coba.then(()=> console.log(coba))
// coba.catch(()=> console.log(coba));

// // async - await 

function cobaPromise() {
    return new Promise(resolve => {
          setTimeout(() => {
               resolve('selesai')
          }, 2000);
     })
}

 async function cobaAsync(){
      try{
           const coba = await cobaPromise();
           console.log(coba);
      } catch(e){
           console.log(e);
      }
}

cobaAsync();