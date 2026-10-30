/*let yas=Number(prompt("Lütfen yaşınızı giriniz:"));
let butce=Number(prompt("Lütfen bütçenizi giriniz:"));
if (yas>18 && butce>2000)
{
    alert("Ehliyet sınavına girebilirsiniz");
}
else
{
    alert("Ehliyet sınavına giremezsiniz");
}
*/

/*let sinav1=Number(prompt("Lütfen birinci sınav notunuzu giriniz:"));
let sinav2=Number(prompt("Lütfen ikinci sınav notunuzu giriniz:"));
let sinav3=Number(prompt("Lütfen üçüncü sınav notunuzu giriniz:"));
let ortalama=(((sinav1*20)/100) + ((sinav2*30)/100) + ((sinav3*50)/100));
alert ("Ortalamanız: "+ortalama);
if(ortalama>60)
{
    alert("Dersten geçtiniz tebrikler");
}
else
{
    alert("Dersten kaldınız");
}
*/
/*let kilo=Number(prompt("Kilonuzu giriniz:"));
let boy=Number(prompt("Boyunuzu metre cinsinden giriniz:"));
let sonuc=kilo/(boy*2);
if(sonuc<18.5)
{
    alert("İdeal kilodasınız "+sonuc);
}
else if (sonuc>=25 && sonuc<=29.9)
{
    alert("İdeal kilonun üzerindesiniz "+sonuc);
}
else
{
    alert("ideal kilonun çok üzerindesiniz "+sonuc);
}
*/

/*let sayi=prompt("1 ile 5 arasında sayı giriniz:");
switch (sayi)
{
    case "1" :
        alert("Girilen sayı 1'dir");
        break;
    case "2" :
        alert("Girilen sayı 2'dir");
        break;
    case "3" :
        alert("Girilen sayı 3'tür");
        break;
    case "4" :
        alert("Girilen sayı 4'tür");
        break;
    case "5" :
        alert("Girilen sayı 5'tir");
        break;
}
*/

/*
let metin="MERHABA DÜNYA";
alert(metin.toLowerCase());

let metin2="merhaba dünya";
alert(metin2.toUpperCase());
*/

/*
let mevsim=prompt("Lütfen bir mevsim giriniz:");
switch(mevsim.toLowerCase())
{
    case "kış" :
        alert("Kış için kayak yapabilirsiniz");
        break;
    case "ilkbahar" :
        alert("İlkbahar için doğa yürüyüşü yapabilirsiniz");
        break;
    case "yaz" :
        alert("Yaz için deniz ativiteleri yapabilirsiniz");
        break;
    case "sonbahar" :
        alert("Sonbahar için yaprak toplayabilirsiniz");
        break;
}
*/

/*
document.writeln("<u>0'dan 10'a kadar olan çift sayılar:</u> "+"<br>");
for (let i=0; i<=10; i+=2)
{
    document.writeln(i);
}
document.writeln("<br><u>1'den 10'a kadar olan tek sayılar:</u> "+"<br>");
for (let j=1; j<=10; j+=2)
{
    document.writeln(j);
}
*/


let sayi=prompt("Lütfen sayı giriniz");
let faktoriyel=1;
for(let i=1; i<=sayi; i++)
{
    faktoriyel*=i;
}
alert(sayi+" sayısının faktoriyeli: "+ faktoriyel);






    