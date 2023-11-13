import Item from './.Item'
// import User from './.User'
// import myUser from './.User'

export default class Shop {
    // let thisShop = new Shop()
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
    public updateCart(_items:Item): void {  // here is where I can get cart to display
//Item -> itemElement() -> addToCartButton() - > myShop.updateCart(this) == cartElementToUpdate
       console.log(_items, 'here from updateCart')
        console.log('Nothing but air in updateCart')
        //const cartContainer = document.getElementById('cart-container')
        
        
        
        //= myUser.cart.map()
       

        
    
    
    
    
    
    
    
    
    
    
    
    
        //   if (cartContainer) {
    //     cartContainer.innerHTML = ''    
        
    //   cartElemenToUpdate.forEach((item) => {
    //         const itemInCart = item.itemElement()
    //         cartContainer.appendChild(itemInCart)
    //     })}
        }
    }
    let myShop = new Shop()
    export {myShop}
        myShop.showItems()
        // if (myUser && myUser.cart.length === 0){
        //     console.log('CART IS EMPTY')
        // } else {
        //     const cartContent = myUser?.cartHTMLElement1()
        //     console.log('we are in the cart container for update cart')
        //     if (cartContent){
        //         cartContainer.appendChild(cartContent)
        //     }
        // }
        
        // const cartContainer = document.getElementById('cart-container')
        // if (!cartContainer){
        //     console.log('Cart Container not found in HTML')
        //     return
        // }
        // cartContainer.innerHTML = '';

        // if (myUser?.cart.length === 0) {
        //     console.log('CART IS EMPTY')
        // } else {
        //     const cartContent = myUser?.cartHTMLElement1();           ///cartHTMLElement1/none
        //     console.log('we are in the cart container for update cart')
        //     if (cartContent) {
        //     cartContainer.appendChild(cartContent)
            
        //     }
            //add event listeners for item removal

            //this.addRemoveEventListeners()
   

    // This method will create the cart contents and siplay them to the cart div in the HTML.  If the Cart is empty it should say the cart is empty, if the cart contains Items it will list all the cart items using the cartHTMLElement method and the addRemoveEventListeners function
    


