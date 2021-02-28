const userStorage = {
    setLocalStorage:(list,amount,price)=>{
        localStorage.setItem('shoppingCart',JSON.stringify(list))
        localStorage.setItem('shoppingCartAmount',JSON.stringify(amount))
        localStorage.setItem('shoppingCartPrice',JSON.stringify(price))
    },
    setToken:(token)=>{
        localStorage.setItem('token', token)
    },
    get:{
        list:()=>localStorage.getItem('shoppingCart')? JSON.parse(localStorage.getItem('shoppingCart')):[],
        amount:()=>localStorage.getItem('shoppingCartAmount')? JSON.parse(localStorage.getItem('shoppingCartAmount')):0,
        price:()=>localStorage.getItem('shoppingCartPrice')? JSON.parse(localStorage.getItem('shoppingCartPrice')):0,
        token:()=>localStorage.getItem('token')? localStorage.getItem('token') : null
    },
    delete: {
        token:()=>localStorage.removeItem('token')
    }
}
export default userStorage