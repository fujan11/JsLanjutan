// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang js lanjutan
let jsLanjut = videos.filter(videos => videos.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video 
.map(item => item.dataset.duration)

// ubah durasi menjadi int ubah menit menjadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts [0]*60) + parts[1];
})

// jumlahkan semua detik
.reduce((total,detik)=> total + detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut-jam *3600;
const menit = Math.floor(jsLanjut/ 60) ;
const detik = jsLanjut-menit*60;
// simpan di dom
const jVideo = videos.filter(videos => videos.textContent.includes('JAVASCRIPT LANJUTAN'));

const durasi =document.querySelector('.total-durasi');
const tVideo = document.querySelector('.jumlah-video')



tVideo.textContent =`jumlah video anda sebanyak ${jVideo.length}`;
durasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

