export class Item{
    code:string;
    name: string;
    quantity:string;
    price:string;

    constructor(code: string, name: string, quantity: string, price: string) {
        this.code = code;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}