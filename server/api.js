// var express = require("express");
// var cors = require("cors");
// var mongoClient = require("mongodb").MongoClient;

// var connectionString = "mongodb://127.0.0.1:27017";

// var app = express();
// app.use(cors());
// app.use(express.urlencoded({
//   extended:true
// }));
// app.use(express.json());

// app.get("/getusers", (req, res)=>{
//   mongoClient.connect(connectionString, (err, clientObj)=>{
//     if (!err) {
//       var database = clientObj.db("reactdb");
//       database.collection("tblusers").find({}).toArray((err, documents) => {
//           if (!err) {
//             res.send(documents);
//           }
//         })
//     }
//   })
// });

// app.post("/registeruser", (req, res)=>{
//   var userdetails = {
//     UserId: req.body.UserId,
//     UserName: req.body.UserName,
//     Password: req.body.Password,
//     Age: parseInt(req.body.Age),
//     Mobile: req.body.Mobile,
//     Subscribed: (req.body.Subscribed === "true")?true:false
//   };
//   mongoClient.connect(connectionString,(err, clientObj)=>{
//     if(!err){
//       var database = clientObj.db("reactdb");
//       database.collection("tblusers").insertOne(userdetails,(err, result)=>{
//         if(!err){
//           console.log("Record Inserted...");
//           res.redirect("/getusers");
//         }
//       })
//     }
//   })
// })

// app.listen(4000);
// console.log("Server Started : http://127.0.0.1:4000");

// const express = require("express");
// const cors = require("cors");
// const { MongoClient } = require("mongodb");

// const connectionString = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(connectionString, { useNewUrlParser: true });
// // console.log(client);

// const app = express();
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Establish the database connection
// client.connect((err) => {
//   if (err) {
//     console.error("Failed to connect to the database:", err);
//   } else {
//     console.log("Connected to the database");

//     // Request handlers
//     app.get("/getusers", (req, res) => {
//       const database = client.db("reactdb");
//       const collection = database.collection("tblusers");

//       collection.find({}).toArray((err, documents) => {
//         if (err) {
//           console.log("Error fetching documents:", err);
//           res.status(500).send("Internal Server Error");
//         } else {
//           res.json(documents);
//         }
//       });
//     });

//     app.post("/registeruser", (req, res) => {
//       const userdetails = {
//         UserId: req.body.UserId,
//         UserName: req.body.UserName,
//         Password: req.body.Password,
//         Age: parseInt(req.body.Age),
//         Mobile: req.body.Mobile,
//         Subscribed: req.body.Subscribed === "true",
//       };
//       const database = client.db("reactdb");
//       const collection = database.collection("tblusers");

//       collection.insertOne(userdetails, (err, result) => {
//         if (err) {
//           console.log("Error inserting record:", err);
//           res.status(500).send("Internal Server Error");
//         } else {
//           console.log("Record Inserted...");
//           res.redirect("/getusers");
//         }
//       });
//     });

//     // Start the server
//     app.listen(4000, () => {
//       console.log("Server Started : http://127.0.0.1:4000");
//     });
//   }
// }); 

const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const PORT = 5000;
// Database Name
const dbName = "reactdb";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

client
  .connect()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch(() => client.close());

app.get("/getusers", async (req, res) => {
  var database = client.db(dbName);
  let result = await database.collection("tblusers").find({}).toArray();
  return res.status(200).json({
    msg: "record fetched successfully",
    data: result,
  });
});

app.get("/getproducts", async (req, res) => {
  var database = client.db(dbName);
  let result = await database.collection("tblproducts").find({}).toArray();
  return res.status(200).json({
    msg: "record fetched successfully",
    data: result,
  });
});

app.get("/getcategories", async (req, res) => {
  var database = client.db(dbName);
  let result = await database.collection("tblcategories").find({}).toArray();
  return res.status(200).json({
    msg: "record fetched successfully",
    data: result,
  }); 
});

app.get("/getproduct/:id", async (req, res) => {
  let productId = parseInt(req.params.id);
  var database = client.db(dbName);
  let result = await database.collection("tblproducts").find({id:productId}).toArray();
  return res.status(200).json({
    msg: "record fetched successfully",
    data: result,
  }); 
});

app.post("/registeruser", async (req, res) => {
  let userdetails = {
    UserId: req.body.UserId,
    UserName: req.body.UserName,
    Password: req.body.Password,
    Age: parseInt(req.body.Age),
    Mobile: req.body.Mobile,
    Subscribed: req.body.Subscribed === "true" ? true : false,
  };

  var database = client.db(dbName);
  let result = await database.collection("tblusers").insertOne(userdetails);

  if (result.acknowledged) {
    return res.status(200).json({
      msg: "record inserted successfully",
    });
  }

  res.status(400).json({ msg: "internal server error" });
});

app.listen(PORT, () => {
  console.log("server listening on : " + PORT);
}); 