import { useState, useEffect } from "react";

export default function ShoppingComponent() {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [price, setPrice] = useState(0);

  function deleteClick() {
    cartItems.length = 0;
    setItemsCount(0);
    setPrice(0);
  }

  function updatePrice() {
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setPrice(totalPrice);
  }

  function GetCartItemsCount() {
    setItemsCount(cartItems.length);
  }

  function deleteProductClick(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    cartItems.splice(index, 1);
    updatePrice();
    GetCartItemsCount();
  }

  function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("All");
        setCategories(data);
      });
  }

  function handleAddToCart(e) {
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => {
        cartItems.push(data);
        updatePrice();
        GetCartItemsCount();
      });
  }

  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }

  function handleCategoryChange(e) {
    e.target.value === "ALL"
      ? LoadProducts("https://fakestoreapi.com/products")
      : LoadProducts(
          `https://fakestoreapi.com/products/category/${e.target.value.toLowerCase()}`
        );
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
  }, [cartItems.length]);

  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center p-2">
        <h1>
          <span className="bi bi-cart"></span>Shopping Home
        </h1>
      </header>
      <section className="row mt-3">
        <nav className="col-2" >
          <div>
            <label>Select a Category</label>
            <div>
              <select onChange={handleCategoryChange} className="form-select">
                {categories &&
                  categories.map((category) => (
                    <option key={category}>{category.toUpperCase()}</option>
                  ))}
              </select>
            </div>
          </div>
        </nav>
        <main
          className="col-6 d-flex flex-wrap justify-content-evenly overflow-auto"
          style={{ height: "650px"}}
        >
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="card m-2 p-2"
                style={{ width: "200px"}}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="card"
                  height="150"
                />
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
                  <button
                    id={product.id}
                    onClick={handleAddToCart}
                    className="btn btn-danger w-100"
                  >
                    <span className="bi bi-cart-4"></span> Add to cart
                  </button>
                </div>
              </div>
            ))}
        </main>
        <aside
          className="col-4"
        >
          <button className="btn btn-danger w-100">
            <span className="bi bi-cart3"></span> [{itemsCount}] Your Cart Items
          </button>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Preview</th>
                <th>
                  <button onClick={deleteClick} className="btn btn-danger">
                    <span className="bi bi-trash"></span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
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
                    <button
                      onClick={() => deleteProductClick(item.id)}
                      className="btn btn-danger"
                    >
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
                <td>{price}$</td>
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
