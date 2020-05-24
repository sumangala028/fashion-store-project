const express = require("express");
const router = express.Router();
const InfoModel = require("./productDataModel");

//create
router.post("/addProduct", async(req, res) => {
    
    var data = new InfoModel({
        Category: req.body.Category,
        Name : req.body.Name,
        Price : req.body.Price,
        Discount : req.body.Discount
    });

    await data.save();

    return res.json(data);
})

//getAll
router.get("/products", async(req,res) => {
    var findData = await InfoModel.find();
    res.json(findData);
})

//update
router.put("/updateProduct", async(req,res) => {
    InfoModel.findById(req.body._id, function(err, product) {
        if (err) throw err;
        product.Category = req.body.Category
        product.Name = req.body.Name
        product.Price = req.body.Price
        product.Discount = req.body.Discount
      
        // save the product
        product.save(function(err) {
          if (err) throw err;
          return res.json({ message: "Success" })
        });
      
      });
})

//delete
router.delete("/deleteProduct/:id", async(req,res) => {
    var delData = await InfoModel.findByIdAndRemove(req.params.id).then(e => {
        res.json({message:"Deleted successfully"});
    })
})

router.get("/", (req, res) => {
    res.json("Running...");
})

module.exports = router;