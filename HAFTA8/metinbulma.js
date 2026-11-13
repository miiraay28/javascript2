const metinUzunlugunuBul=metin=>metin.length;
let cumle=prompt("Bir Cümle Giriniz:");
if (cumle===null || cumle.trim()===""){
    document.writeln("Lütfen geçerli bir cümle giriniz.");
}
else{
    let uzunluk=metinUzunlugunuBul(cumle.trim());
    document.writeln(`Girdiğiniz cümlenin uzunluğu :${uzunluk} karakterlidir.`);
}
