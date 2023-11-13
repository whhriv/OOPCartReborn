import {v4 as uuidv4} from 'uuid';

class Item {
    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4()
    ){}

 
    itemElement(): HTMLDivElement {
        const cardBody = document.createElement('div');
        const card = document.createElement('div');
        card.classList.add('item-card');
        //const cardBody = document.createElement('div');
        cardBody.classList.add('container')
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-sm-6', 'mb-3', 'mb-sm-0')
        const cardDiv1 = document.createElement('div');
        cardDiv1.classList.add('card')
        const cardDiv2 = document.createElement('div');
        cardDiv2.classList.add('card-body')
        
        
        cardBody.classList.add('border', 'border-primary')
    
        const itemName = document.createElement('h2');
        itemName.classList.add('card-title')
        itemName.textContent = this._name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = this._description;
        itemDescription.classList.add('card-text')

        const itemPrice = document.createElement('p')
        itemPrice.textContent = `$${this._price.toFixed(2)}`
        itemPrice.classList.add('card-text')

        // Add To Cart Button
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart'
        addToCartButton.classList.add('btn')
        addToCartButton.classList.add('btn-primary')


        card.appendChild(itemName)
        card.appendChild(itemDescription)
        card.appendChild(itemPrice)
        card.appendChild(addToCartButton)
        card.appendChild(cardBody)

       card.style.display = 'flex';
       cardBody.style.display = 'grid'
       cardBody.style.display = '18rem;'
        //card.style.display = 'border solid black'


    // TODO: Make sure we have access to User Object during this period
        addToCartButton.addEventListener('click', () => {
            console.log('Event Listener for ADD TO CARY BUTTON', myUser, myShop);
            // myUser?.addToCart(this)   
            myShop.updateCart(this)
            console.log(myShop.updateCart(this), 'am I working?')
            
           //myUser?.updateCart(this)
            // Shop.updateCart(this)
           // console.log('itemAdd variable',itemAdd)                                           //Problematic?
            console.log(this, 'after ADD-TO-CART called')
        })
        
        return card
    }
 

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}


class User {
    static myUser: User | undefined;
    static age: number;
    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuidv4()
    ){
        this._name = _name
        this._age = _age
        this._cart = _cart
        this._id = _id
    }
    
    static addLoginUserListener() {
        const nameInput = document.getElementById('nameinput') as HTMLInputElement | null;
        const ageInput = document.getElementById('ageinput') as HTMLInputElement | null;
        const loginButton = document.getElementById('loginbutton') as HTMLButtonElement | null ;
        const loginForm = document.getElementById('logindiv') as HTMLDivElement | null
       // const loginForm2 = document.getElementById('loginform') as HTMLFormElement | null

        if (nameInput && ageInput && loginButton && loginForm){

            loginButton.addEventListener('click', (event) => {
                event.preventDefault()
                //console.log('here')
                const name = nameInput.value.trim();
                const age = parseInt(ageInput.value);
                //console.log('name and age', name, age);
                

                let user = new User(name,age)
                console.log('USER CREATED', user, age)
              
                loginForm.style.display = 'none';
                return new User(name, age);

              
            })
           
        }
            return null;
    }   
    // }
    // private _cartContainer: HTMLDivElement | null = null
    // public setCartContainer(cartContainer: HTMLDivElement | null) {
    //     this._cartContainer = cartContainer
    // }
    // public cartHTMLElement(cartContainer: HTMLDivElement): void {
    
    // public cartHTMLElement1(): HTMLDivElement {
    //  //   const cartContainer1 = document.getElementById('cart-container')
    //     const table = document.createElement('table')
    //     table.classList.add('table')
        
    //     for (let item of this._cart) {
    //     let row = document.createElement('tr');
    //     let itemNameCell = document.createElement('td')
    //     itemNameCell.textContent = item.name
    //     const itemPriceCell = document.createElement('td')
    //     itemPriceCell.textContent = `${item.price}`

    //     row.appendChild(itemNameCell)
    //     row.appendChild(itemPriceCell)

    //     table.appendChild(row)
    // }
    // //cartContainer1?.appendChild(table)
    // return table
    // }
    
    
    // public cartHTMLElement(): HTMLDivElement {
    //     const cartElement = document.createElement('table')
    //     for (let item of new Set(this.cart)) {
    //         const delButton = document.createElement('button')
    //         delButton.id = `${item.id}-rm1`
    //         delButton.classList.add('btn')
    //         delButton.onclick = () => {
    //             Shop.myUser.removeQuantityFromCart(item,1)
    //         }
    //         const delAllButton = document.createElement('button')
    //         delAllButton.id = `${item.id}-rma`
    //         delAllButton.innerText='all'
    //         delAllButton.onclick = () => {
    //             Shop.myUser.removeFromCart(item)
    //         }


    //     }

        // const cartContainer = document.createElement('div')
        // cartContainer.classList.add('cart-container')
       

    //     const cartContainer = document.getElementById('cart-container') as HTMLDivElement;
    //     for (let item of this._cart) {
    //         const itemDiv = document.createElement('div')
    //         itemDiv.classList.add('cart-item')
    //         const itemName = document.createElement('span')
    //         itemName.classList.add('itemName')
    //         const itemQuantity = document.createElement('span')
    //         itemQuantity.classList.add('quantity')
    //         const itemPrice = document.createElement('span')
    //         itemPrice.textContent = `$${item.price}`
            
        

    //         const removeFromCartButton = document.createElement('button');
    //         removeFromCartButton.textContent = 'remove item'
    //         removeFromCartButton.classList.add('btn')
    //         removeFromCartButton.classList.add('btn-primary')

            
    //         itemDiv.appendChild(itemName)
    //         itemDiv.appendChild(itemQuantity)
    //         itemDiv.appendChild(itemPrice)
    //         itemDiv.appendChild(removeFromCartButton)
  

    //         cartContainer?.appendChild(itemDiv)
    //     }
    //    return cartContainer as HTMLDivElement

    // }


    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }


    // public addToCart(item: Item): void {
    //     const itemDetails = {
    //         name: item.name,
    //         price: item.price,
    //     };
    //     this.cart.push(itemDetails);
    // }
    public addToCart(item:Item):void{
        this.cart.push(item)
        console.log('addToCart Function')
        return
    }
    public removeFromCart(itemToRemove:Item):void{
        this.cart = this.cart.filter( item => item.id !== itemToRemove.id )
    }

    public removeQuantityFromCart(itemToRemove:Item, quantity:number):void{
        for (let i=0; i<quantity; i++){
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }

    public getCartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        }
        return total
    }

    public printCart():void{
        console.log(`Here is what is in your cart, ${this.name}:`)
        for (let item of this.cart){
            console.log(`${item.name}: $${item.price}`)
        }
        console.log(`Total: $${this.getCartTotal()}`)
    }

    public addRemoveEventListeners() {
        document.addEventListener( 'click',() => {
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Remove From Cart'
            addToCartButton.classList.add('btn')
            addToCartButton.classList.add('btn-primary')
        })    
        
        // -addRemoveEventListeners() - This function adds event listeners to your cart's Remove One/Remove All Buttons.  They will use the previously build removeQuantityFromCart and removeFromCart functions built in the prev. nights homework.
    }
   

}

class Shop {
        
    constructor(
        private _items: Item[] = []
    ){
        let itemA = new Item('F-14 Tomcat', 10, 'Iranian surpluss, functional, port turbine non-functioning');
        this.items.push(itemA);

        let itemB = new Item('Delorean', 15, 'Salvage title: was hit by a train but has Flux capacitor');
        this.items.push(itemB);

        let itemC = new Item('knife', 100, 'Kershaw knife sitting on my desk');
        this.items.push(itemC);

        let itemD = new Item('Tub-O-nuts', 1, 'Various nuts mixed in tupperware');
        this.items.push(itemD);

        let itemE = new Item('Spear', 50, '5 foot mini Hawaiian sling');
        this.items.push(itemE);

        let itemF = new Item('Dog', 2000, 'I will sell you my dog, apparently');
        this.items.push(itemF);

        // save reference in Shop class to User
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    public showItems(){

        const shopDiv = document.getElementById('shop')
        if (shopDiv) {        
            shopDiv.innerHTML = '';
        
            this._items.forEach((item) => { 
                const itemCard = item.itemElement()
                shopDiv.appendChild(itemCard)
            }) 
        } else {
            console.log('ShopDiv Element not found in HTML')
        }
    }
    public updateCart(_items:Item): void {
        const cartContainer = document.getElementById('cart-container')
        console.log(_items, 'here from updateCart')
        //cartContainer?.appendChild(_items)
        

        if (cartContainer) {
            
            
            //User.cart
              
            const row = document.createElement('tr');
            const itemNameCell = document.createElement('td');
            itemNameCell.textContent = _items.name;
            const itemPriceCell = document.createElement('td');
            itemPriceCell.textContent = `$${_items.price.toFixed(2)}`;
            row.appendChild(itemNameCell);
            row.appendChild(itemPriceCell);
            console.log('inside cartContinaer!!!!!!!')
    
            cartContainer.appendChild(row);
        }
        console.log('Nothing but air in updateCart')
        console.log(cartContainer)
    }

}



let myUser: User | null = null;   
// let myUser: User;
//let user1 = new User('fred', 30)
User.addLoginUserListener();
// console.log('myUser', myUser)

// if (myUser){
//     let myShop = new Shop()
// }
let myShop = new Shop();
// let myUser = new User('frank', 33);


// let myUser = User.loginUser()
myShop.showItems();
// myUser?.attToCart(newItem)
// myShop.updateCart()
console.log(myShop)
console.log(User)

// user1.addToCart(myShop.items[1]);
// user1.addToCart(myShop.items[1]);
// user1.addToCart(myShop.items[1]);

// user1.printCart();


//myUser.addToCart(myShop.items[0]);




// User.loginUser()
