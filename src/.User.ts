import {v4 as uuidv4} from 'uuid';
import Item from './.Item'
//import Shop from './.shop'

export default class User {
    static myUser: User | undefined;
    static age: number;
    // static cart: Item[] = []
    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuidv4()
    ){}
    
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

                //delay create shop until USER
                let myUser = new User(name,age )
                //return new User(name, age);
            
                return myUser

               // myUser = new User(name, age);
            })
           
        }
            return null;
    }   

    
    public cartHTMLElement1(): HTMLDivElement {
     //   const cartContainer1 = document.getElementById('cart-container')
        const table = document.createElement('table')
        table.classList.add('table')
        
        for (let item of this._cart) {
        let row = document.createElement('tr');
        let itemNameCell = document.createElement('td')
        itemNameCell.textContent = item.name
        const itemPriceCell = document.createElement('td')
        itemPriceCell.textContent = `${item.price}`

        row.appendChild(itemNameCell)
        row.appendChild(itemPriceCell)

        table.appendChild(row)
    }
    //cartContainer1?.appendChild(table)
    return table
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
//let myUser = new User()
//export{myUser}
