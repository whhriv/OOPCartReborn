"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
// - cartHTMLElement() : This will return an HTML Div Element.  This function will loop over your cart and create some HTML Code to layout your cart items in a formatted way to have the Name, Quantity and price of each item shown.  You will also create a button to Remove All or Remove Just One of these items from the cart. The event listenering for these buttons will be created ina  different function. Remember: You'll need to devise a way that each add and remove element is tied to a particular item (an easy way to do this is give every button an id based off the items UUIID and precede/follow the UUID with a tag that says whether the button is a remove one or remove all button)
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    cartHTMLElement() {
        const cartContainer = document.createElement('div');
        cartContainer.classList.add('cart-container');
        for (let item of this._cart) {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            let itemName = document.createElement('span');
            itemName.classList.add('span');
            let itemQuantity = document.createElement('span');
            itemQuantity.classList.add('span');
            let itemPrice = document.createElement('span');
            itemPrice.textContent = `$${item.price}`;
            let buttonRemoveOne = document.createElement('button');
            buttonRemoveOne.textContent = 'Remove One';
            buttonRemoveOne.id = `remove-one-${item.id}`; //tagging with ID
            let buttonRemoveAll = document.createElement('button');
            buttonRemoveAll.textContent = 'Remove All';
            buttonRemoveAll.id = `remove-all-${item.id}`; //for ident of button
            // listeners for buttons
            buttonRemoveOne.addEventListener('click', () => this.removeQuantityFromCart(item, 1));
            buttonRemoveAll.addEventListener('click', () => this.removeFromCart(item));
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemQuantity);
            itemDiv.appendChild(itemPrice);
            itemDiv.appendChild(buttonRemoveOne);
            itemDiv.appendChild(buttonRemoveAll);
            cartContainer.appendChild(itemDiv);
        }
        return cartContainer;
    }
    //And to call this static method somewhere else in code it would look like User.createUser()
    static loginInUser() {
        const nameInput = document.getElementById('nameInput');
        const ageInput = document.getElementById('ageInput');
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value, 10);
        if (name && ageInput) {
            return new User(name, age);
        }
        else {
            return null;
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(itemToRemove) {
        this.cart = this.cart.filter(item => item.id !== itemToRemove.id);
    }
    removeQuantityFromCart(itemToRemove, quantity) {
        for (let i = 0; i < quantity; i++) {
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }
    getCartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        return total;
    }
    printCart() {
        console.log(`Here is what is in your cart, ${this.name}:`);
        for (let item of this.cart) {
            console.log(`${item.name}: $${item.price}`);
        }
        console.log(`Total: $${this.getCartTotal()}`);
    }
}
class Shop {
    constructor(_items = []) {
        this._items = _items;
        let itemA = new Item('Notebook', 10, 'Keep all of your notes in one handy place');
        this.items.push(itemA);
        let itemB = new Item('Socket Wrench', 20, 'Tools');
        this.items.push(itemB);
        let itemC = new Item('Blanket', 30, 'Stay warm and cozy');
        this.items.push(itemC);
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
let myShop = new Shop();
let myUser = new User(HTMLInputElement);
myUser.addToCart(myShop.items[0]);
myUser.printCart();
User.loginInUser();
