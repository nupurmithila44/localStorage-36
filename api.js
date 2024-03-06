const addProduct = () => {
    const productName = document.getElementById("product-alname");
    const productQuantity = document.getElementById("product-quantity");
    const productNameValue = productName.value ;
    const productQuantityValue = productQuantity.value ;
    productName.value = ''
    productQuantity.value= ''


    displayproduct(productNameValue, productQuantityValue)
    saveProductToLocalStorage(productNameValue, productQuantityValue)
    console.log(productNameValue, productQuantityValue)
}

const displayproduct = (product, quantity) => {
    console.log(product,quantity)
    const ulContainer = document.getElementById("ul-container")
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ulContainer.appendChild(li)

}

const  getStordShoppingCart = () => {
    let cart = {};
    const stroredCart = localStorage.getItem("cart");
    if(stroredCart){
        cart = JSON.parse(stroredCart)
    }
    return  cart
}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart =  getStordShoppingCart()
    cart[product] = quantity;
    console.log(cart)
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
    // console.log(cartStringified)
// console.log(product,quantity)
}

const displayProductFromLocalStorage =()=>{
const savedCart = getStordShoppingCart()
// console.log(savedCart)
for(const product in savedCart){
    // console.log(product)
    const quantity =savedCart[product]
    console.log(product,quantity)
    displayproduct(product,quantity)
}
}
displayProductFromLocalStorage()