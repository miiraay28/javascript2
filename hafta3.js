//console.log("miray");
//Kullanıcıdan ismini al console ve dokümana yazdı
/*let isim=prompt("İsminizi Giriniz:");
console.log("Merhaba " + isim);
document.writeln("<h1>Merhaba " + isim + "</h1>");
*/
/*let sayi1=prompt("birinci sayıyı giriniz:");
let sayi2=prompt("ikinci sayıyı giriniz:");
let toplam=Number(sayi1)+Number(sayi2);
document.writeln("<h1>Sayıların Toplamı : " + toplam + "</h1>");
*/
/*const dogru_sifre="1234";
let girilen_sifre=prompt("şifrenizi giriniz:");
document.writeln("<h1>Girdiğiniz Şifre: " + girilen_sifre + "</h1>");
document.writeln("<h1>Doğru Şifre:" + dogru_sifre + "</h1>");
*/
let urun_adi=prompt("Ürün Adı:");
let kategori=prompt("Kategori Giriniz:");
let aciklama=prompt("Açıklama Giriniz:");
let birim_fiyat=Number(prompt("Birim Fiyatı:"));
let adet=Number(prompt("Adet Sayısı:"));
let ara_toplam=birim_fiyati*adet;
let kdv=ara_toplam*0.18;
let kargo=49;
let toplam=ara_toplam+kdv+kargo;

document.writeln("<h1><b>Sipariş Özeti: </b></h1>"+"<hr>")+
 "Ürün Adı:" + urun_adi + "<br>" +
  "Ürün Kategorisi:" + kategori + "<br>" +
  "Ürün Açıklaması:" + aciklama + "<br>" +
  
  



