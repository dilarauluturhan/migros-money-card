// iki sınıfı da burada yönetebileceğim

let msg =
    `
Migros'a hoş geldiniz!
Money Kart'ınız var mı?
1- Evet
2- Hayır
`;

const items = [
    {
        itemName: "Fındıklı Bitter",
        price: 25
    },
    {
        itemName: "Fındıklı Süt",
        price: 35
    },
    {
        itemName: "Yulaf",
        price: 20
    }
];

// sonuç true veya false
let answer = confirm(msg);
let totalCash;

if (answer) {
    // müşterinin Money Kart'ı var
    let name = prompt("Adınızı giriniz...");
    let lastName = prompt("Soyadınızı giriniz...");

    const client = new Client(name, lastName, answer, items);
    totalCash = client.calculate();

    alert(`
        Müşteri Bilgileri : ${name} ${lastName}
        Ödenecek Tutar: ${totalCash}
        `);
} else {
    // müşterinin Money Kart'ı yok
    const client = new Client(null,null,answer,items);
    totalCash = client.calculate();
    alert(`Ödenecek Tutar: ${totalCash}`);
}