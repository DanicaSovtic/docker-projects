const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let userWishlist = "Set your wishes!";

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Wishlist Today!</h2>
          <h3>${userWishlist}</h3>
        </section>
        <form action="/store-wishlist" method="POST">
          <div class="form-control">
            <label>Wishlist Item</label>
            <input type="text" name="wishlistItem">
          </div>
          <button>Add to Wishlist</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/store-wishlist", (req, res) => {
  const enteredWishlistItem = req.body.wishlistItem;
  console.log(enteredWishlistItem);
  userWishlist = enteredWishlistItem;
  res.redirect("/");
});

app.listen(80);
