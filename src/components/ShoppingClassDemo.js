import React from "react";

export default class ShoppingClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      cartItems: [],
      price: 0,
      itemsCount: 0,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }

  componentDidMount() {
    this.GetCategories();
    this.GetProducts("https://fakestoreapi.com/products");
  }

  deleteClick(){
    this.setState({
        cartItems: [],
        itemsCount: 0,
        price: 0
    })
  }

  updatePrice(){
    const totalPrice = this.state.cartItems.reduce((acc, curr) => acc + curr.price, 0);
    this.setState({
        price: totalPrice
    })
  }

  GetCartItemsCount(){
    this.setState({
        itemsCount: this.state.cartItems.length
    })
  }

  deleteProductClick(id){
    const index = this.state.cartItems.findIndex(item => item.id === id);
    this.state.cartItems.splice(index, 1);
    this.updatePrice();
    this.GetCartItemsCount();
  }

  handleAddToCart(e){
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.state.cartItems.push(data);
        this.updatePrice();
        this.GetCartItemsCount();
      });
  }

  handleCategoryChange(e){
    e.target.value === "ALL"
      ? this.GetProducts("https://fakestoreapi.com/products")
      : this.GetProducts(
          `https://fakestoreapi.com/products/category/${e.target.value.toLowerCase()}`
        );
  }

  GetCategories() {
    fetch("http://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("All");
        this.setState({
          categories: data,
        });
      });
  }

  GetProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="text-white bg-danger text-center p-2">
          <h2>
            <span className="bi bi-cart"></span> Shopping Cart
          </h2>
        </header>
        <section className="row mt-2">
          <nav className="col-2">
            <h3>Select Category</h3>
            <select onChange={this.handleCategoryChange} className="form-select">
              {this.state.categories.map((category) => (
                <option key={category}>{category.toUpperCase()}</option>
              ))}
            </select>
          </nav>
          <main className="col-6">
            <div
              className="d-flex flex-wrap overflow-auto"
              style={{ height: "650px" }}
            >
              {this.state.products && this.state.products.map((product) => (
                <div key = {product.id} className="card m-2 p-2" style={{ width: "200px" }}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    height="150"
                    alt={product.title}
                  ></img>
                  <div className="card-header" style={{ height: "185px" }}>
                    <p>{product.title}</p>
                  </div>
                  <div className="card-body">
                    <dl>
                      <dt>Price</dt>
                      <dd>{product.price}$</dd>
                      <dt>Rating</dt>
                      <dd>
                        <span className="bi bi-star-fill text-success"></span>
                        {product.rating.rate}{" "}
                        <span>[{product.rating.count}]</span>
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <button onClick={this.handleAddToCart} id={product.id} className="btn btn-danger w-100">
                      <span className="bi bi-cart-4"></span> Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <aside className="col-4">
            <button className="btn btn-danger w-100">
              <span className="bi bi-cart3"></span> [{this.state.itemsCount}] Your Cart Items
            </button>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Preview</th>
                  <th>
                    <button onClick={this.deleteClick} className="btn btn-danger">
                      <span className="bi bi-trash"></span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>
                      <img
                        src={item.image}
                        alt="Product_Image"
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>
                      <button onClick={() => this.deleteProductClick(item.id)} className="btn btn-danger">
                        <span className="bi bi-trash"></span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <span> Total Price</span>
                  </td>
                  <td>{this.state.price}$</td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </aside>
        </section>
      </div>
    );
  }
}
