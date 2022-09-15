import React from "react";
import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products:[
            {
        price: 999,
        title: 'Mobile Phone',
        qty: 1,
        img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        id:1
    },
     {
        price: 99,
        title: 'Watch',
        qty: 1,
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
         id: 2
    },
    {
        price: 999,
        title: 'Laptop',
        qty: 1,
        img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        id: 3
    },
]
    // this.increaseQuantity = this.increaseQuantity.bind(this)
    // this.testing()
}

}
handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of ', product);
    const {products}=this.state;
    const index = products.indexOf(product)

    products[index].qty += 1

    this.setState({
        products: products
    })

    
}
handleDecreaseQuantity = (product) => {
console.log('Hey please inc the qty of ', product);
const {products}=this.state;
const index = products.indexOf(product)

if( products[index].qty === 0){
    return
}
products[index].qty -= 1

this.setState({
    products: products
})


}
handleDeleteProduct = (id) => {
    const { products } = this.state

    const items=products.filter((item) => item.id !== id)// [{}]

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const { products } = this.state

  let count = 0

  products.forEach((product) => {
    count += product.qty
  })
  
  return count

}
getCartTotal = () => {
  const { products } = this.state
   
  let cartTotal=0

  products.map((product) =>{
    cartTotal = cartTotal + product.qty*product.price
  })
  return cartTotal
}
  render(){
    const { products } = this.state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
         products={products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{fontSize:20,padding:10}}>
        TOTAL: {this.getCartTotal()}
      </div>
    </div>
  );
}
}

export default App;
 