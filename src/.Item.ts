import {v4 as uuidv4} from 'uuid';
//import User from './.User'
import Shop from './.shop'
import myUser from './.User'
//import myShop from './.User'
//import updateCart from './shop'


let myShop = new Shop()


export default class Item {
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
        cardDiv.classList.add('col-sm-6')
        cardDiv.classList.add('mb-3')
        cardDiv.classList.add('mb-sm-0')
        const cardDiv1 = document.createElement('div');
        cardDiv1.classList.add('card')
        const cardDiv2 = document.createElement('div');
        cardDiv2.classList.add('card-body')
        
        
        cardBody.classList.add('border')
        cardBody.classList.add('border-primary')

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
            console.log('Event Listener for ADD TO CARY BUTTON', myUser);
            //myUser?.addToCart(this)   
            myShop.updateCart(this)
            let cartElemenToUpdate = myShop.updateCart(this)
        
            //const itemToCart = new CustomEvent('click')
           //myUser?.updateCart(this)
            // Shop.updateCart(this)
           // console.log('itemAdd variable',itemAdd)                                           //Problematic?
            console.log(this, 'after ADD-TO-CART called')
            return cartElemenToUpdate
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
