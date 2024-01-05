// export default function DataBindingComponent () {
//     var product = {
//         Name: 'Samsung TV',
//         Price: 45005.45,
//         Stock: true
//     }
//     return (
//         <div className="container">
//             <h2>Product Details</h2>
//             <dl>
//                 <dt>Name</dt>
//                 {/*<dd>{product.Name}</dd> literal Binding*/}
//                 {/*<dd innerHTML = {product.Name}></dd> This is property binding but can not be binded to javaScript properties. It must be HTML property*/}
//                 <dd>{product.Name}</dd>
//                 {/*<input type = "text" value = {product.Name}></input> This is called property binding because value is a HTML property.*/}
//                 <dt>Price</dt>
//                 <dd>{product.Price}</dd>
//                 <dt>Stock</dt>
//                 <dd>{(product.Stock === true)? "Available" : "Not Available"}</dd>
//             </dl>
//         </div>
//     )
// }

// export default function DataBindingComponent() {
//     var size = {
//         Width: 450,
//         Height: 100
//     }
//     return (
//         <div className="container">
//             <h2>Property Binding</h2>
//             <table border = "1" width={size.Width} height= {size.Height}>
//                 <tr>
//                     <td>Welcome to React</td>
//                 </tr>
//             </table>
//         </div>
//     )
// }

// export default function DataBindingComponent(){
//     var categories = ["All", "Electronics", "Footwear"];
//     return (
//         <div className="container">
//             <h2>Categories</h2>
//             <ol>
//                 {/* <li>{categories[0]}</li>
//                 <li>{categories[1]}</li>
//                 <li>{categories[2]}</li> */}
//                 {
//                     categories.map(function(category){
//                         return (
//                             <li key = {category}>{category}</li>
//                         )
//                     })
//                 }
//             </ol>
//         </div>
//     )
// }

// export default function DataBindingComponent(){
//     var products = [
//         {Name: 'Samsung TV', Price: 56000.44},
//         {Name: 'Nike Casuals', Price: 4200.44}
//     ];
//     return (
//         <div className = "container">
//             <h2>Products Table</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map(product =>
//                             <tr>
//                                 <td>{product.Name}</td>
//                                 <td>{product.Price}</td>
//                             </tr>
//                             )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default function DataBindingComponent() {
//   var menu = [
//     { Category: "Electronics", Products: ["Samsung Tv", "Mobile"] },
//     { Category: "Footwear", Products: ["Nike Casuals", "Lee Boot"] },
//   ];
//   return (
//     <div className="container">
//       <h2>Categories</h2>
//       <ol>
//         {menu.map((item) => (
//           <li key={item.Category}>
//             {item.Category}
//             <ol>
//               {item.Products.map((product) => (
//                 <li key={product}>{product}</li>
//               ))}
//             </ol>
//           </li>
//         ))}
//       </ol>
//       <h2>Select a Product</h2>
//       <select>
//         {menu.map((item) => (
//           <optgroup key={item.Category} label={item.Category}>
//             {item.Products.map((product) => (
//               <option key={product}>{product}</option>
//             ))}
//           </optgroup>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default function DataBindingComponent(){
//     var username = "John";
//     return (
//         <div className = "container">
//             <h2>User Details</h2>
//             User Name:
//             <input type = "text" value = {username} />
//             <br></br>
//             Hello ! {username}
//         </div>
//     )
// }



// export default function DataBindingComponent(){
//     const [products, setProduct] = useState(["TV", "Mobile", "Shoe"]);
//     return(
//         <div className = "container">
//             <ol>
//                 {
//                     products.map(product=>
//                         <li key = {product}>{product}</li>
//                         )
//                 }
//             </ol>
//         </div>
//     )
// }

// import { useState, useEffect } from "react";

// export default function DataBindingComponent() {
//   const [mars, setMars] = useState();

//   useEffect(() => {
//     fetch(
//       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMars(data);
//       })
//   }, [])
//   return (
//     <div className="container">
//       <h2>Mars Photos</h2>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Photo Id</th>
//             <th>Camera Name</th>
//             <th>Rover Name</th>
//             <th>Preview</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mars && mars.photos && mars.photos.map((photo) => (
//             <tr key = {photo.id}>
//               <td>{photo.id}</td>
//               <td>{photo.camera.full_name}</td>
//               <td>{photo.rover.name}</td>
//               <td>
//                 <img src={photo.img_src} width="100" height = "100" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function DataBindingComponent(){
//     const [mars, setMars] = useState();
//     useEffect(() =>
//         {
//             fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(response => response.json()).then(data => {
//                 setMars(data);
//             })
//         }, []
//     );

//     return (
//         <div className="container">
//             <h2>Mars Photos</h2>
//             <div className="d-flex flex-wrap">
//                 {
//                     mars && mars.photos && mars.photos.map(photo => 
//                         <div className="card p-2 m-2 w-25">
//                             <img src = {photo.img_src} className="card-top-img" height = "150"/>
//                             <div className="card-header">
//                                 <h2>{photo.camera.full_name}</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>{photo.rover.name}</p>
//                             </div>
//                         </div>
//                         )
//                 }
//             </div>
//         </div>
//     );
// }