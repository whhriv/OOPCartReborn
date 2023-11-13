import User from './.User'
import Shop from './.shop'
import Item from './.Item'
// import myUser from './User'

export {
    User, 
    Shop,
    Item,
}

//let myUser: User | null = null;  
User.addLoginUserListener();
//let myShop = new Shop();