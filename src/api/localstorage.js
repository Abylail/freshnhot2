const userStorage = {
    setLocalStorage:(list,amount,price)=>{
        localStorage.setItem('shoppingCart',JSON.stringify(list))
        localStorage.setItem('shoppingCartAmount',JSON.stringify(amount))
        localStorage.setItem('shoppingCartPrice',JSON.stringify(price))
    },
    get:{
        list:()=>localStorage.getItem('shoppingCart')? JSON.parse(localStorage.getItem('shoppingCart')):[],
        amount:()=>localStorage.getItem('shoppingCartAmount')? JSON.parse(localStorage.getItem('shoppingCartAmount')):0,
        price:()=>localStorage.getItem('shoppingCartPrice')? JSON.parse(localStorage.getItem('shoppingCartPrice')):0,
    }
}
export default userStorage