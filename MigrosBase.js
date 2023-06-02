// ana sınıf olacak

class MigrosBase {
    // migros kartı olana %20'lik inidirm hakkı tanınsın
    saleRate = 20;

    constructor(firstName, lastName, hasCard, items) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasCard = hasCard;
        this.items = items;
    }

    calculate() {
        let cash = 0;
        if (this.itemsControl(this.items)) {
            if (this.hasCard) {
                // Money Kart'ı var
                this.items.forEach((item) => {
                    cash += (item.price * (100 - this.saleRate) / 100)
                })
            } else {
                // Money Kart'ı yok
                this.items.forEach((item) => {
                    cash += item.price
                })
            }
        } else {
            alert("En az bir tane ürün satın almalısınız...");
        }
        return cash;
    }

    itemsControl(items) {
        if (items != null && items.length > 0) {
            return true;
        }
        return false;
    }
}