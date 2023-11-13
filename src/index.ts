import {v4 as uuidv4} from 'uuid';

class Item {
    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4()
    ){}

 
    public itemElement(): HTMLDivElement {
        const cardBody = document.createElement('div');
        const card = document.createElement('div');
        card.classList.add('item-card');
        cardBody.classList.add('container')

        card.innerHTML = `<div class="card item-card" style="width: 18rem; height: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this._name}</h5>
            <p class="card-text">${this._description}</p>
            <p class="card-text">$${this._price}</p>
            <button class="btn btn-primary" id="addToCart">Add To Cart</button>
            </div>
    </div>`
        
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
        const addToCartButton = card.querySelector('#addToCart') as HTMLButtonElement;
        // addToCartButton.textContent = 'Add to Cart'
    
        addToCartButton.onclick=() => {
           console.log('here I am')
            Shop.myUser!.addToCart(this)
        }
        addToCartButton.classList.add('btn')
        addToCartButton.classList.add('btn-primary')


        card.appendChild(itemName)
        card.appendChild(itemDescription)
        card.appendChild(itemPrice)
        card.appendChild(addToCartButton)
        card.appendChild(cardBody)

       card.style.display = 'flex';
    //    cardBody.style.display = 'grid'
    //    cardBody.style.display = '18rem;'
    


    // TODO: Make sure we have access to User Object during this period
       
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
    static addLoginUserListener():User | undefined {
        const nameInput = document.getElementById('nameinput') as HTMLInputElement | null;
        const ageInput = (<HTMLInputElement>document.getElementById('ageinput')).value;
        const loginButton = document.getElementById('loginbutton') as HTMLButtonElement | null ;
        const loginForm = document.getElementById('logindiv') as HTMLDivElement | null


        if (nameInput && ageInput){
    
            
            const name = nameInput.value.trim();
            const age = parseInt(ageInput);


            let user = new User(name,age)
            console.log('USER CREATED', user, age)
          
            loginForm!.style.display = 'none';
            document.getElementById('cart-container')!.style.visibility = 'visible'
            return new User(name, age);

           
        }
            return;
    }   
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
    public cartElement() {
        const cartEle = document.createElement("table")
            
            for(const item of new Set(this.cart)){
                const rmButton = document.createElement("button")
                rmButton.id=`${item.id}-rm1`
                rmButton.classList.add("btn", "btn-danger")
                rmButton.onclick = () => {
                    Shop.myUser!.removeQuantityFromCart(item,1)
                    };
                rmButton.innerText="-1"

                const rmAllButton = document.createElement("button")
                rmAllButton.id =`${item.id}-rmall`
                rmAllButton.innerText="X"
                rmAllButton.classList.add("btn", "btn-dark-red", "btn-danger")

                rmAllButton.onclick=()=>{
                    Shop.myUser!.removeFromCart(item)
                }
                cartEle.innerHTML+=`<tr><td><strong>${item.name}</strong></td><td>$${item.price}</td>
                <td>${this.cart.filter((i)=>i.id===item.id).length}</td>
                <td>${rmAllButton.outerHTML}</td>
                <td>${rmButton.outerHTML}</td>
                </tr>`
            }
            cartEle.innerHTML+=`<tr id="totalbar"><td><strong>${"Total:"}</strong></td><td>$${this.getCartTotal().toFixed(2)}</td></tr>`
            return cartEle
        }

            addRemoveListeners(){
                for(const item of new Set(this.cart)){
                    const removeOneButton = document.getElementById(`${item.id}-rm1`) as HTMLButtonElement || null;
                    if (removeOneButton){
                        removeOneButton.onclick = () => {
                        Shop.myUser?.removeQuantityFromCart(item,1)
                        };
                    }
                    const removeAllButton = document.getElementById(`${item.id}-rmall`) as HTMLButtonElement || null;
                    if(removeAllButton){
                        removeAllButton.onclick = () => {
                        Shop.myUser?.removeFromCart(item)
                        };
                    }
                }
            } 


   
    }
   



class Shop {
    static myUser: User | undefined
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

        this.showItems()
        Shop.myUser!.cart = []

        Shop.updateCart()

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
           for (let item of this.items){
            document.getElementById('shop')!.appendChild(item.itemElement())
           }
        } else {
            console.log('ShopDiv Element not found in HTML')
        }
    }
    static updateCart(){
        const cartContainer = document.getElementById('cart-container')!

        if (Shop.myUser!.cart.length <= 0) {
            cartContainer.innerHTML = `<h2>Nothing but air</h2>`
            console.log(cartContainer)
        } else { 
            cartContainer.replaceChildren(Shop.myUser!.cartElement())
            cartContainer!.innerHTML = ("<h2>My Cart:</h2>" + cartContainer?.innerHTML)

            Shop.myUser?.addRemoveListeners()

        }
    }

    static loginUser(event:Event): void {
        event.preventDefault()
        console.log('trying to login')
        Shop.myUser = User.addLoginUserListener()
        new Shop()
        
    }

}

document.getElementById('loginbutton')!.addEventListener('click', (event:Event) => Shop.loginUser(event))

// let myUser: User | null = null;   

// User.addLoginUserListener();

// let myShop = new Shop();

// myShop.showItems();

// console.log(myShop)
// console.log(User)


