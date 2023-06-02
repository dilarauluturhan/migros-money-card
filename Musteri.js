/*
  -Musteri sınıfım MigrosBase'i extends edecek. Bu sınıfı miras almış olacak.
  -Müşteri bilgilerini alıp üst sınıfa göndereceğim ve bunu üst sınıfta yöneteceğim.
  -Her bir müşterinin aldığı ürünlerin hesabı burada yapılacak ve sonucu Musteri.js'e dönecek.
*/

class Musteri extends MigrosBase {
    constructor(firstName, lastName, hasCard, items) {
        super(firstName, lastName, hasCard, items);
    }

    calculate() {
        return super.calculate();
    }
}