import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function IShopProductDetails() {
  const [product, setProduct] = useState([]);
  let params = useParams();

  useEffect(() => {
    
      axios
      .get(`http://localhost:5000/getproduct/${params.id}`)
      .then((response) => {
        setProduct(response.data.data);
      }).catch((error) => {
        console.error("Error fetching product:", error);
      });
    
  });

  let category = product[0] && product[0].category;

  return (
    <div>
      <h2>Product Details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{product[0] && product[0].title}</dd>
        <dt>Price</dt>
        <dd>{product[0] && product[0].price}</dd>
        <dt>Preview</dt>
        <dd>
          <img src={product[0] && product[0].image} width={100} height={100} alt={product[0] && product[0].id} />
        </dd>
        <dt>Rating</dt>
        <dd>{product[0] && product[0].rating && product[0].rating.rate}</dd>
      </dl>
      <br />
      <Link to = {"/products/" + category} >Back to Products</Link>
    </div>
  );
}
