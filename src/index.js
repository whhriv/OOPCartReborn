"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
// let myUser: User | null = null;
var Item = /** @class */ (function () {
    function Item(_name, _price, _description, _id) {
        if (_id === void 0) { _id = (0, uuid_1.v4)(); }
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    Item.prototype.itemElement = function () {
        var _this = this;
        var card = document.createElement('div');
        card.classList.add('item-card');
        // const card = document.getElementById('shop')
        // for (item in Shop.items) {
        var itemName = document.createElement('h2');
        itemName.textContent = this._name;
        var itemDescription = document.createElement('p');
        itemDescription.textContent = this._description;
        var itemPrice = document.createElement('p');
        itemPrice.textContent = "$".concat(this._price.toFixed(2));
        // Add To Cart Button
        var addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        card.appendChild(itemName);
        card.appendChild(itemDescription);
        card.appendChild(itemPrice);
        card.appendChild(addToCartButton);
        // TODO: Make sure we have access to User Object during this period
        addToCartButton.addEventListener('click', function () {
            console.log('myUser in event listener', myUser);
            myUser === null || myUser === void 0 ? void 0 : myUser.addToCart(_this);
        });
        return card;
    };
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var User = /** @class */ (function () {
    function User(_name, _age, _cart, _id) {
        if (_cart === void 0) { _cart = []; }
        if (_id === void 0) { _id = (0, uuid_1.v4)(); }
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    User.addLoginUserListener = function () {
        var nameInput = document.getElementById('nameinput');
        var ageInput = document.getElementById('ageinput');
        var loginButton = document.getElementById('loginbutton');
        var loginForm = document.getElementById('logindiv');
        // const loginForm2 = document.getElementById('loginform') as HTMLFormElement | null
        if (nameInput && ageInput && loginButton && loginForm) {
            loginButton.addEventListener('click', function (event) {
                event.preventDefault();
                //console.log('here')
                var name = nameInput.value.trim();
                var age = parseInt(ageInput.value);
                //console.log('name and age', name, age);
                var user = new User(name, age);
                console.log('USER CREATED', user, age);
                loginForm.style.display = 'none';
                // console.log('Login Form Hidden')
                // need to reference user & instantiate shop AFTER this point somehow
                // if (myUser){
                //     let myShop = new Shop()
                // }
                //delay create shop until USER
                return new User(name, age);
                myUser = new User(User.name, User.age);
            });
        }
        return null;
    };
    User.prototype.cartHTMLElement = function () {
        // const cartContainer = document.createElement('div')
        // cartContainer.classList.add('cart-container')
        var cartContainer = document.getElementById('cart-container');
        for (var _i = 0, _a = this._cart; _i < _a.length; _i++) {
            var item = _a[_i];
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            var itemName = document.createElement('span');
            itemName.classList.add('itemName');
            var itemQuantity = document.createElement('span');
            itemQuantity.classList.add('quantity');
            var itemPrice = document.createElement('span');
            itemPrice.textContent = "$".concat(item.price);
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemQuantity);
            itemDiv.appendChild(itemPrice);
            cartContainer === null || cartContainer === void 0 ? void 0 : cartContainer.appendChild(itemDiv);
        }
        return cartContainer;
    };
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        } //
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (value) {
            this._cart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    User.prototype.removeFromCart = function (itemToRemove) {
        this.cart = this.cart.filter(function (item) { return item.id !== itemToRemove.id; });
    };
    User.prototype.removeQuantityFromCart = function (itemToRemove, quantity) {
        for (var i = 0; i < quantity; i++) {
            var index = this.cart.findIndex(function (item) { return item.id === itemToRemove.id; });
            this.cart.splice(index, 1);
        }
    };
    User.prototype.getCartTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.price;
        }
        return total;
    };
    User.prototype.printCart = function () {
        console.log("Here is what is in your cart, ".concat(this.name, ":"));
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("".concat(item.name, ": $").concat(item.price));
        }
        console.log("Total: $".concat(this.getCartTotal()));
    };
    return User;
}());
//new User(User.loginUser(), User.age)
// Shop.showItems() 
var Shop = /** @class */ (function () {
    function Shop(
    // myUser: User = {
    //     _name: 'default',
    // },
    _items) {
        if (_items === void 0) { _items = []; }
        this._items = _items;
        var itemA = new Item('F-14 Tomcat', 10, 'Iranian surpluss, functional, port turbine non-functioning');
        this.items.push(itemA);
        var itemB = new Item('Delorean', 15, 'Salvage title: was hit by a train but has Flux capacitor');
        this.items.push(itemB);
        var itemC = new Item('knife', 100, 'Kershaw knife sitting on my desk');
        this.items.push(itemC);
        // save reference in Shop class to User
    }
    Object.defineProperty(Shop.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Shop.prototype.showItems = function () {
        var shopDiv = document.getElementById('shop');
        if (shopDiv) {
            shopDiv.innerHTML = '';
            this._items.forEach(function (item) {
                var itemCard = item.itemElement();
                shopDiv.appendChild(itemCard);
            });
        }
        else {
            console.log('ShopDiv Element not found in HTML');
        }
    };
    return Shop;
}());
var myUser;
var user1 = new User('fred', 30);
User.addLoginUserListener();
// console.log('myUser', myUser)
// if (myUser){
//     let myShop = new Shop()
// }
var myShop = new Shop();
// let myUser = new User('frank', 33);
// let myUser = User.loginUser()
myShop.showItems();
console.log(myShop);
console.log(User);
user1.addToCart(myShop.items[1]);
user1.addToCart(myShop.items[1]);
user1.addToCart(myShop.items[1]);
user1.printCart();
//myUser.addToCart(myShop.items[0]);
// User.loginUser()
