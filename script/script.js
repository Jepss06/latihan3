const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
//ambil item nama
let  = localStorage("");
//ambil item desc
let  = localStorage.getItem("");
//perintahkan document untuk mengambil id info dan isi variabel untuk menampilkan nama dan desc!
document.getElementById(
  ""
). = `anda telah memesan ${}: ${}`;
//ambil item total
let  = localStorage.getItem("");
//ubah element yang id nya total!
//isi parseInt()!
document.getElementById("") = formatUang(parseInt());
let saldo = 50000;
//ubah element yang id nya saldo!
document.getElementById("") = formatUang();
const bayar = () => {
  //mengambil resto-pay dan cash yang berbentuk input type radio, lalu ambil valuenya(true/false)
  let  = document.getElementById("resto-pay");
  let  = document.getElementById("cash");
  console.log(resto, cash);
  // Cek jika tidak memilih metode
 if(...){
  alert('silahkan pilih metode')
  //jika memilih resto
 }else{
   if(...){
 alert('resto di pilih') 
 //jika saldo tidak cukup
    if(...){
      alert('saldo tidak cukup')
      //munculkan konfirmasi dan bungkus atau tampung pakai variabel
      //jika konfirmasi bersifat true atau "ok"
      if(...){
        alert('topup')
      }
    }
 //jika memilih cash
 }else{
  alert()
 }
};
}

