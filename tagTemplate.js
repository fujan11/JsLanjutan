// // contoh sederhana dari tag template

const nama = 'Fauzan Mufid';
const umur = '22';

function coba (strings,...values) {
    // // CARA MANUAL
    // let result ='';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ('')}`;
    // });
    // return result;

    return strings.reduce((result, str, i)=> `${result}${str}${values[i] || ('')}`,'');
}


const str = coba`nama ${nama} umur${umur} tahun`

console.log(str);